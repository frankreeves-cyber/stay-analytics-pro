# Deployment Guide - Render.com

This guide will walk you through deploying GuestJourney Analytics to Render.com.

## Prerequisites

1. A [Render.com](https://render.com) account (free tier available)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. Admin credentials ready for environment variables

## Quick Deployment Steps

### Method 1: Using render.yaml (Recommended)

This project includes a `render.yaml` configuration file for easy deployment.

1. **Connect Your Repository**
   - Log in to [Render.com](https://render.com)
   - Click "New +" → "Blueprint"
   - Connect your Git repository
   - Render will automatically detect the `render.yaml` file

2. **Configure Environment Variables**
   - During setup, you'll be prompted to set environment variables
   - Set the following required variables:
     ```
     VITE_ADMIN_EMAIL=your-admin@email.com
     VITE_ADMIN_PASSWORD=your-secure-password
     ```
   - **IMPORTANT**: Use strong, unique credentials for production

3. **Deploy**
   - Click "Apply" to start the deployment
   - Render will automatically build and deploy your app
   - Your app will be live at `https://your-app-name.onrender.com`

### Method 2: Manual Setup

1. **Create a New Static Site**
   - Log in to Render.com
   - Click "New +" → "Static Site"
   - Connect your Git repository
   - Select the branch to deploy (usually `main`)

2. **Configure Build Settings**
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
   - **Auto-Deploy**: Yes (recommended)

3. **Add Environment Variables**
   - Go to "Environment" tab
   - Add the following variables:
     ```
     VITE_ADMIN_EMAIL=your-admin@email.com
     VITE_ADMIN_PASSWORD=your-secure-password
     NODE_VERSION=18
     ```

4. **Configure Redirects**
   - Add a rewrite rule for SPA routing:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`

5. **Deploy**
   - Click "Create Static Site"
   - Wait for the build to complete
   - Your app will be live!

## Post-Deployment

### 1. Verify Deployment

Visit your Render URL and test:
- [ ] Site loads correctly
- [ ] Login page appears
- [ ] Admin credentials work
- [ ] All pages are accessible
- [ ] Navigation works properly

### 2. Test Authentication

1. Try logging in with incorrect credentials (should fail)
2. Log in with your admin credentials (should succeed)
3. Navigate through different pages
4. Test the logout functionality

### 3. Custom Domain (Optional)

To use a custom domain:

1. Go to your static site settings in Render
2. Click "Custom Domains"
3. Click "Add Custom Domain"
4. Follow the instructions to configure your DNS records
5. Render provides free SSL certificates automatically

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_ADMIN_EMAIL` | Yes | Admin user email | `admin@yourcompany.com` |
| `VITE_ADMIN_PASSWORD` | Yes | Admin user password | `SecurePass123!` |
| `NODE_VERSION` | No | Node.js version | `18` (default) |

## Automatic Deployments

With auto-deploy enabled:
- Every push to your main branch triggers a new deployment
- Pull request previews are automatically generated
- Rollback to previous deployments with one click

## Build Script

This project includes a `build.sh` script that:
- Verifies Node.js version
- Installs dependencies with `npm ci`
- Builds the production bundle
- Validates the build output

You can test the build locally:
```bash
./build.sh
```

## Troubleshooting

### Build Fails

1. Check that all dependencies are in `package.json`
2. Verify `NODE_VERSION` environment variable
3. Review build logs in Render dashboard
4. Test build locally with `npm run build`

### Environment Variables Not Working

1. Ensure variables start with `VITE_` prefix
2. Redeploy after changing environment variables
3. Clear cache and rebuild (in Render settings)

### Authentication Not Working

1. Verify environment variables are set correctly
2. Check browser console for errors
3. Ensure `.env` file is not committed to repository
4. Confirm credentials match those in Render settings

### 404 Errors on Page Refresh

1. Verify rewrite rule is configured: `/*` → `/index.html`
2. Check that `staticPublishPath` is set to `./dist`

## Performance Optimization

For better performance:

1. **Enable Compression** (automatic on Render)
2. **Use CDN** (Render includes global CDN)
3. **Optimize Images** (if added later)
4. **Monitor Performance** via Render dashboard

## Security Best Practices

1. Use strong, unique admin passwords
2. Rotate credentials periodically
3. Enable 2FA on your Render account
4. Monitor access logs
5. Keep dependencies updated
6. Use HTTPS only (enforced by Render)

## Monitoring & Logs

Access logs and metrics:
1. Go to your static site in Render dashboard
2. Click "Logs" to view build and deploy logs
3. Monitor traffic and performance metrics
4. Set up notifications for failed deployments

## Costs

- **Free Tier**:
  - 100 GB bandwidth/month
  - Automatic SSL
  - Global CDN
  - Custom domains
  - Perfect for this project!

- **Paid Tiers**: Available if you need more bandwidth

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community Forum](https://community.render.com)
- [Render Status](https://status.render.com)

## Quick Commands

```bash
# Test build locally
npm run build

# Test build script
./build.sh

# Preview production build locally
npm run preview
```

## Next Steps

After successful deployment:
1. Share the URL with your team
2. Set up custom domain (optional)
3. Configure monitoring and alerts
4. Plan for data integration
5. Consider adding backend services

---

**Need Help?** Check the troubleshooting section or refer to the Render.com documentation.
