# Website Backup to GitHub Script (PowerShell with curl)
# For: lasvegasmultigenhomes.com

Write-Host "🚀 Starting website backup process..." -ForegroundColor Cyan
Write-Host "⚠️  Note: This uses curl instead of wget. For full site mirroring, consider using Git Bash with wget." -ForegroundColor Yellow
Write-Host ""

# Step 1: Create a directory for the backup
$BACKUP_DIR = "lasvegasmultigenhomes-backup"
New-Item -ItemType Directory -Force -Path $BACKUP_DIR | Out-Null
Set-Location $BACKUP_DIR

Write-Host "📁 Created backup directory: $BACKUP_DIR" -ForegroundColor Green

# Step 2: Download website homepage
Write-Host "⬇️  Downloading website homepage..." -ForegroundColor Yellow
Write-Host "   (For full site mirror, please use Git Bash with wget)" -ForegroundColor DarkGray

New-Item -ItemType Directory -Force -Path "www.lasvegasmultigenhomes.com" | Out-Null
curl -o "www.lasvegasmultigenhomes.com/index.html" https://www.lasvegasmultigenhomes.com/

Write-Host "✅ Download complete!" -ForegroundColor Green
Write-Host "⚠️  Only homepage downloaded. For full recursive download, use wget in Git Bash." -ForegroundColor Yellow

# Step 3: Initialize Git repository
Write-Host "🔧 Setting up Git..." -ForegroundColor Yellow
git init

# Step 4: Create .gitignore
$gitignoreContent = @"
# OS files
.DS_Store
Thumbs.db

# Log files
*.log
"@

Set-Content -Path ".gitignore" -Value $gitignoreContent

Write-Host "📝 Created .gitignore" -ForegroundColor Green

# Step 5: Add all files
git add .

# Step 6: Create initial commit
$date = Get-Date -Format "yyyy-MM-dd"
git commit -m "Initial backup of lasvegasmultigenhomes.com - $date"

Write-Host "💾 Created initial commit" -ForegroundColor Green

# Step 7: Add remote repository
git remote add origin https://github.com/DrJanDuffy/lasvegasmultigenhomes.git

Write-Host "🔗 Connected to GitHub repository" -ForegroundColor Green

# Step 8: Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "🎉 BACKUP COMPLETE!" -ForegroundColor Green
Write-Host ""
Write-Host "Your website is now backed up at:" -ForegroundColor Cyan
Write-Host "https://github.com/DrJanDuffy/lasvegasmultigenhomes" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  IMPORTANT: This script only downloaded the homepage." -ForegroundColor Yellow
Write-Host "For a complete website backup with all pages and assets:" -ForegroundColor Yellow
Write-Host "1. Open Git Bash" -ForegroundColor White
Write-Host "2. Run: ./backup-website.sh" -ForegroundColor White

