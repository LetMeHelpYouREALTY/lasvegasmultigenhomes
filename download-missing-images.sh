#!/bin/bash
echo "🖼️  Downloading missing images and assets..."

# Navigate to existing backup
cd lasvegasmultigenhomes-backup

# Download ONLY from the image CDN domains
echo "⬇️  Downloading property photos from photos.cribflyer-proxy.com..."
wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains photos.cribflyer-proxy.com,assets.cribflyer-proxy.com,cribflyer-publicsite.s3.amazonaws.com,publicsite.cribflyer-proxy.com --no-parent https://www.lasvegasmultigenhomes.com/

echo "✅ Image download complete!"
echo "📊 Checking what was downloaded..."

# Count images
PHOTO_COUNT=$(find . -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" | wc -l)
echo "✅ Found $PHOTO_COUNT image files"

echo ""
echo "Now committing to Git..."
git add .
git commit -m "Add missing images and assets - $(date +%Y-%m-%d)"
git push

echo "🎉 COMPLETE! All images now backed up to GitHub."

