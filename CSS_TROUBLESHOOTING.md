# CSS Not Loading - Troubleshooting Guide

## Quick Diagnosis Steps

### Step 1: Check Vercel Deployment Logs
1. Go to **Vercel Dashboard** → Your Project → **Deployments**
2. Click on the latest deployment
3. Check the **Build Logs** tab
4. Look for any errors related to:
   - CSS processing
   - PostCSS
   - Tailwind
   - Build failures

**Common Build Errors:**
- `Module not found: Can't resolve './globals.css'`
- `PostCSS plugin error`
- `Tailwind CSS not found`

---

### Step 2: Verify Build is Successful
1. In Vercel Dashboard → **Deployments**
2. Check if the latest deployment shows **"Ready"** (green checkmark)
3. If it shows **"Error"** or **"Building"**, wait for it to complete or check logs

---

### Step 3: Clear Cache and Redeploy

**Option A: Via Vercel Dashboard**
1. Go to **Deployments**
2. Click the **"..."** menu on the latest deployment
3. Select **"Redeploy"**
4. Check **"Use existing Build Cache"** → **UNCHECK IT**
5. Click **"Redeploy"**

**Option B: Force New Deployment**
1. Make a small change to any file (add a space)
2. Commit and push to your Git repository
3. Vercel will automatically trigger a new build

---

### Step 4: Check Browser Console
1. Visit `https://www.manmademetals.in`
2. Open **Developer Tools** (F12 or Right-click → Inspect)
3. Go to **Console** tab
4. Look for errors like:
   - `Failed to load resource: the server responded with a status of 404`
   - CSS file not found errors
   - Network errors

4. Go to **Network** tab
5. Refresh the page
6. Look for `globals.css` or CSS files
7. Check if they load successfully (Status 200) or fail (Status 404/500)

---

### Step 5: Verify CSS File is Being Imported
Your `layout.tsx` should have:
```tsx
import "./globals.css";
```

✅ This is correct in your code.

---

### Step 6: Check Tailwind CSS v4 Configuration

Your setup uses Tailwind CSS v4. Verify:

1. **postcss.config.mjs** exists and has:
```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```
✅ This is correct.

2. **globals.css** should have:
```css
@import "tailwindcss";
```
✅ This is correct.

---

### Step 7: Test Build Locally

Run these commands to test if build works:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Check for errors
```

If build fails locally, fix those errors first before deploying.

---

## Common Fixes

### Fix 1: Reinstall Dependencies
Sometimes dependencies get corrupted. In Vercel:
1. Go to **Settings** → **General**
2. Scroll to **"Build & Development Settings"**
3. Under **"Install Command"**, ensure it's: `npm install` or `yarn install`
4. Redeploy

### Fix 2: Add Missing Environment Variables
If your build requires environment variables:
1. Go to **Settings** → **Environment Variables**
2. Add required variables:
   - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=qa6dsc-wf.myshopify.com`
   - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token`
3. Redeploy

### Fix 3: Check Node.js Version
1. Go to **Settings** → **General**
2. Check **"Node.js Version"**
3. Should be **18.x** or **20.x** (recommended for Next.js 16)
4. If different, change it and redeploy

### Fix 4: Verify File Structure
Ensure your file structure matches:
```
src/
  app/
    layout.tsx  ← Should import globals.css
    globals.css ← Should exist here
    page.tsx
```

---

## Still Not Working?

### Debug Checklist:
- [ ] Build logs show no errors
- [ ] Deployment status is "Ready"
- [ ] Browser console shows no CSS loading errors
- [ ] Network tab shows CSS files loading (200 status)
- [ ] Cleared browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Tried incognito/private browsing mode
- [ ] Environment variables are set
- [ ] Node.js version is correct
- [ ] Local build works without errors

### Next Steps:
1. **Check Vercel Support**: If build logs show errors, share them
2. **Verify Git Integration**: Ensure Vercel is connected to your Git repo
3. **Check Deployment Branch**: Ensure correct branch is deployed (usually `main` or `master`)

---

## Quick Test Commands

Run these to verify locally:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Build
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` and check if design loads.

---

## Contact Points

If issues persist:
1. Share Vercel build logs
2. Share browser console errors
3. Share network tab screenshots
4. Verify the deployment URL is correct

