# Download All Missing Images from CDN
# This script extracts all external image URLs and downloads them

Write-Host "🖼️  Downloading all missing images from CDN..." -ForegroundColor Cyan

$backupDir = "lasvegasmultigenhomes-backup\www.lasvegasmultigenhomes.com"

if (!(Test-Path $backupDir)) {
    Write-Host "❌ Backup directory not found!" -ForegroundColor Red
    exit 1
}

# Read the HTML file
$htmlFile = "$backupDir\index.html"
$htmlContent = Get-Content $htmlFile -Raw

Write-Host "📄 Parsing HTML for image URLs..." -ForegroundColor Yellow

# Extract all URLs from these CDN domains
$cdnDomains = @(
    "photos.cribflyer-proxy.com",
    "assets.cribflyer-proxy.com",
    "cribflyer-publicsite.s3.amazonaws.com",
    "publicsite.cribflyer-proxy.com"
)

$imageUrls = @()

# Find all image URLs
$patterns = @(
    'https://photos\.cribflyer-proxy\.com/[^"''>\s]+',
    'https://assets\.cribflyer-proxy\.com/[^"''>\s]+',
    'https://cribflyer-publicsite\.s3\.amazonaws\.com/[^"''>\s]+',
    'https://publicsite\.cribflyer-proxy\.com/[^"''>\s]+'
)

foreach ($pattern in $patterns) {
    $matches = [regex]::Matches($htmlContent, $pattern)
    foreach ($match in $matches) {
        $url = $match.Value
        if ($imageUrls -notcontains $url) {
            $imageUrls += $url
        }
    }
}

Write-Host "✅ Found $($imageUrls.Count) unique CDN URLs" -ForegroundColor Green

# Download each image
$downloaded = 0
$failed = 0

foreach ($url in $imageUrls) {
    try {
        # Parse the URL to create local path
        $uri = [System.Uri]$url
        $domain = $uri.Host
        $path = $uri.PathAndQuery
        
        # Clean up the path for Windows
        $localPath = "$backupDir\$domain$path" -replace '\?','@' -replace '\|','_' -replace '<','_' -replace '>','_' -replace ':','_' -replace '"','_' -replace '/','\'
        
        # Create directory if needed
        $dir = Split-Path $localPath -Parent
        if (!(Test-Path $dir)) {
            New-Item -ItemType Directory -Force -Path $dir | Out-Null
        }
        
        # Skip if already exists
        if (Test-Path $localPath) {
            Write-Host "  ⏭️  Skipping (exists): $($uri.Segments[-1])" -ForegroundColor DarkGray
            continue
        }
        
        # Download the file
        Write-Host "  ⬇️  Downloading: $($uri.Segments[-1])" -ForegroundColor Yellow
        Invoke-WebRequest -Uri $url -OutFile $localPath -TimeoutSec 30
        $downloaded++
        
    } catch {
        Write-Host "  ❌ Failed: $url" -ForegroundColor Red
        Write-Host "     Error: $($_.Exception.Message)" -ForegroundColor DarkRed
        $failed++
    }
}

Write-Host ""
Write-Host "📊 Download Summary:" -ForegroundColor Cyan
Write-Host "  ✅ Downloaded: $downloaded files" -ForegroundColor Green
Write-Host "  ❌ Failed: $failed files" -ForegroundColor Red
Write-Host "  📁 Total URLs found: $($imageUrls.Count)" -ForegroundColor White

# Count total images now
$totalImages = (Get-ChildItem -Path $backupDir -Recurse -Include *.jpg,*.jpeg,*.png,*.gif,*.webp | Measure-Object).Count
Write-Host ""
Write-Host "🎉 Total images in backup: $totalImages" -ForegroundColor Green

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. cd lasvegasmultigenhomes-backup" -ForegroundColor White
Write-Host "  2. git add ." -ForegroundColor White
Write-Host "  3. git commit -m 'Add all CDN images'" -ForegroundColor White
Write-Host "  4. git push" -ForegroundColor White

