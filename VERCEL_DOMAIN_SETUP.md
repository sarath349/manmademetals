# Step-by-Step Guide: Connect GoDaddy Domain to Vercel

## Prerequisites
- Domain: www.manmademetals.in (purchased from GoDaddy)
- Vercel account with project deployed
- Access to GoDaddy DNS management

---

## Step 1: Add Domain in Vercel

1. **Go to your Vercel Dashboard**
   - Navigate to your project: `manmademetals`
   - Click on **"Domains"** in the left sidebar (or go to Project Settings → Domains)

2. **Add the Domain**
   - Click **"Add Existing"** button
   - Enter: `www.manmademetals.in`
   - Click **"Add"**

3. **Vercel will show you DNS configuration**
   - After adding, Vercel will display DNS records you need to configure
   - You'll see something like:
     - **A Record**: `76.76.21.21` (or similar IP)
     - **CNAME Record**: `cname.vercel-dns.com` (for www subdomain)
   - **IMPORTANT**: Copy these values - you'll need them in GoDaddy

---

## Step 2: Configure DNS in GoDaddy

### Option A: Using CNAME (Recommended for www subdomain)

1. **Log into GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in to your account
   - Go to **"My Products"** → Click on **"DNS"** next to your domain

2. **Add/Update DNS Records**

   **For www.manmademetals.in:**
   - Find or add a **CNAME** record:
     - **Type**: CNAME
     - **Name**: `www`
     - **Value**: `cname.vercel-dns.com` (or the value Vercel provided)
     - **TTL**: 600 (or 1 hour)
     - Click **"Save"**

   **For root domain (manmademetals.in):**
   - Find or add an **A Record**:
     - **Type**: A
     - **Name**: `@` (or leave blank for root domain)
     - **Value**: `76.76.21.21` (use the IP address Vercel provided)
     - **TTL**: 600
     - Click **"Save"**

   **OR use CNAME for root (if GoDaddy supports it):**
   - Some registrars allow CNAME for root domain
   - **Type**: CNAME
   - **Name**: `@`
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: 600

3. **Remove Conflicting Records**
   - Delete any existing A or CNAME records that conflict
   - Remove any records pointing to other IPs or domains

---

## Step 3: Verify Configuration in Vercel

1. **Go back to Vercel**
   - In the Domains section, you should see your domain
   - Status might show "Validating" or "Invalid Configuration"

2. **Check DNS Propagation**
   - DNS changes can take 24-48 hours, but usually work within 1-2 hours
   - Vercel will automatically detect when DNS is configured correctly

3. **Wait for Validation**
   - Vercel continuously checks DNS configuration
   - Once DNS propagates, status will change to "Valid"

---

## Step 4: Troubleshooting "Invalid Configuration"

If you still see "Invalid Configuration" after 2-3 hours:

### Check 1: Verify DNS Records
- Use a DNS checker tool: https://dnschecker.org
- Search for: `www.manmademetals.in`
- Verify it points to Vercel's servers

### Check 2: Common Issues

**Issue**: Wrong CNAME value
- **Solution**: Make sure CNAME points to `cname.vercel-dns.com` (exact value from Vercel)

**Issue**: Multiple conflicting records
- **Solution**: Remove all A/CNAME records except the ones for Vercel

**Issue**: Root domain not configured
- **Solution**: Add A record for `@` pointing to Vercel's IP

**Issue**: DNS not propagated
- **Solution**: Wait longer (up to 48 hours), or try using different DNS servers

### Check 3: Manual DNS Verification
Run these commands in terminal:
```bash
# Check www subdomain
dig www.manmademetals.in

# Check root domain
dig manmademetals.in
```

---

## Step 5: Alternative Method (Using Vercel Nameservers)

If CNAME method doesn't work, you can use Vercel's nameservers:

1. **In Vercel**: Get the nameservers (usually shown in domain settings)
2. **In GoDaddy**:
   - Go to DNS settings
   - Change nameservers to Vercel's nameservers
   - This gives Vercel full control over DNS

**Note**: This method is more advanced and you'll manage DNS through Vercel instead of GoDaddy.

---

## Step 6: Final Verification

Once configured correctly:

1. **Vercel Dashboard**:
   - Domain status should show "Valid" (green checkmark)
   - No more "Invalid Configuration" error

2. **Test the Domain**:
   - Visit: `https://www.manmademetals.in`
   - Should load your Vercel deployment
   - SSL certificate will be automatically provisioned by Vercel

3. **Check SSL**:
   - Vercel automatically provides SSL certificates
   - Should work with `https://` within a few minutes after DNS validation

---

## Quick Reference: DNS Records Needed

```
Type    Name    Value                    TTL
----    ----    -----                    ---
CNAME   www     cname.vercel-dns.com     600
A       @       76.76.21.21              600
```

**Note**: The actual IP address and CNAME value will be shown in your Vercel dashboard. Use those exact values.

---

## Need Help?

If issues persist:
1. Check Vercel's domain documentation: https://vercel.com/docs/concepts/projects/domains
2. Verify DNS propagation: https://dnschecker.org
3. Contact Vercel support with your domain and project details

