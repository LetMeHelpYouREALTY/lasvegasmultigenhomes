#!/bin/bash
echo "🚀 Starting website backup..."

# Create backup directory
mkdir -p lasvegasmultigenhomes-backup
cd lasvegasmultigenhomes-backup

# Download website INCLUDING all image CDN domains
echo "⬇️  Downloading website with all images (this will take several minutes)..."
wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains lasvegasmultigenhomes.com,photos.cribflyer-proxy.com,assets.cribflyer-proxy.com,cribflyer-publicsite.s3.amazonaws.com,publicsite.cribflyer-proxy.com --no-parent https://www.lasvegasmultigenhomes.com/

# Initialize Git
echo "🔧 Setting up Git..."
git init
git add .
git commit -m "Initial backup - $(date +%Y-%m-%d)"

# Connect to GitHub
git remote add origin https://github.com/DrJanDuffy/lasvegasmultigenhomes.git
git branch -M main

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo "✅ BACKUP COMPLETE!"

