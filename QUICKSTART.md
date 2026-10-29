# Quick Start Guide - Website Backup

## Running the Backup Script in Git Bash

### Step 1: Open Git Bash
- Press `Windows Key` and search for **Git Bash**
- Open it

### Step 2: Navigate to Your Directory
```bash
cd /c/Users/geneb/lasvegasmultigenhomes
```

### Step 3: Make the Script Executable
```bash
chmod +x backup-website.sh
```

### Step 4: Run the Script
```bash
./backup-website.sh
```

## What Will Happen

1. ⬇️ The script will download the entire website (may take several minutes)
2. 🔧 Initialize a Git repository
3. 💾 Commit all files
4. ⬆️ Push to GitHub

## Important Notes

⚠️ **GitHub Authentication Required**
- You'll be prompted to authenticate with GitHub
- Use a [Personal Access Token](https://github.com/settings/tokens) as your password
- Select these scopes when creating the token:
  - `repo` (Full control of private repositories)

⚠️ **Repository Must Exist**
- Make sure https://github.com/DrJanDuffy/lasvegasmultigenhomes exists
- Create it on GitHub first if it doesn't exist

## Troubleshooting

### "Permission denied"
```bash
chmod +x backup-website.sh
```

### "remote origin already exists"
```bash
cd lasvegasmultigenhomes-backup
git remote remove origin
git remote add origin https://github.com/DrJanDuffy/lasvegasmultigenhomes.git
```

### Authentication Failed
- Use a Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens

## Future Updates

To update the backup later:
```bash
cd lasvegasmultigenhomes-backup
git add .
git commit -m "Update backup - $(date +%Y-%m-%d)"
git push
```

