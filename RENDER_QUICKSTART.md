# Render.com Quick Start

## One-Click Deployment

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## 5-Minute Deployment Checklist

### Step 1: Push to Git
```bash
git push origin main
```

### Step 2: Create on Render
1. Go to [render.com/dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Blueprint"**
3. Connect your repository
4. Render auto-detects `render.yaml` ✓

### Step 3: Set Environment Variables
```
VITE_ADMIN_EMAIL=your-email@domain.com
VITE_ADMIN_PASSWORD=your-secure-password
```

### Step 4: Deploy
Click **"Apply"** and wait 2-3 minutes.

Done! 🎉

---

## Your URLs

After deployment:
- **Live Site**: `https://guestjourney-analytics.onrender.com`
- **Dashboard**: [render.com/dashboard](https://dashboard.render.com)

---

## Test Before Deploy

```bash
# Run local build test
npm run deploy:check

# Or use the build script
./build.sh
```

---

## Need Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## Important Files

- `render.yaml` - Render configuration
- `build.sh` - Build script
- `.env.example` - Environment variable template
- `DEPLOYMENT.md` - Full deployment guide

---

## Post-Deployment

### Verify Your Deployment
1. Visit your Render URL
2. Test login with admin credentials
3. Navigate through all pages
4. Test logout

### Common Issues
- **Environment variables not working?** Make sure they start with `VITE_`
- **404 on page refresh?** Rewrite rule should be configured automatically
- **Build failed?** Check logs in Render dashboard

---

**Ready to deploy?** Follow the 5-minute checklist above! 🚀
