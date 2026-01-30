# How to Push to manmademetals1 Repository

## Current Issue
- Vercel is connected to: `manmademetals1/manmademetals`
- Your Git is configured to push to: `manmademetals1/manmademetals`
- But `sarath349` doesn't have push permission to that repo

## Solution 1: Get Added as Collaborator (Best)

1. **Contact the owner** of `manmademetals1/manmademetals` repository
2. Ask them to add `sarath349` as a collaborator:
   - Go to: `https://github.com/manmademetals1/manmademetals/settings/access`
   - Click "Add people"
   - Search for: `sarath349`
   - Give **Write** access
3. Once added, you can push normally:
   ```bash
   git push origin main
   ```

## Solution 2: Use Personal Access Token

If you have access to the `manmademetals1` GitHub account:

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name: "Vercel Deployment"
   - Select scopes: `repo` (full control)
   - Generate and **copy the token**

2. **Use token to push:**
   ```bash
   git push https://YOUR_TOKEN@github.com/manmademetals1/manmademetals.git main
   ```

   Or update remote URL:
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/manmademetals1/manmademetals.git
   git push origin main
   ```

## Solution 3: Switch to SSH (If you have SSH key access)

1. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:manmademetals1/manmademetals.git
   ```

2. **Push:**
   ```bash
   git push origin main
   ```

## Solution 4: Workflow Alternative

If you can't get direct access, you can:

1. **Push to your backup repo:**
   ```bash
   git push backup main
   ```

2. **Create a Pull Request** from `sarath349/manmademetals` to `manmademetals1/manmademetals`

3. **Owner merges the PR** → Vercel auto-deploys

---

## Quick Check Commands

```bash
# Check current remote
git remote -v

# Check if you have commits to push
git status

# Try pushing (will show error if no permission)
git push origin main
```

---

## After Getting Access

Once you have push access, your normal workflow will be:

```bash
# Make changes
git add .
git commit -m "Your message"
git push origin main

# Vercel will automatically deploy!
```

