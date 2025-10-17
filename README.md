# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/303d1968-0b04-434e-9796-9e52d82c97be

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/303d1968-0b04-434e-9796-9e52d82c97be) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy to Render.com (Recommended)

This project includes full Render.com deployment support:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

**Quick Start:**
1. See [RENDER_QUICKSTART.md](./RENDER_QUICKSTART.md) for 5-minute setup
2. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions

**Key Features:**
- One-click deployment with `render.yaml`
- Automatic SSL certificates
- Global CDN included
- Free tier available
- Secure environment variable management

### Option 2: Deploy via Lovable

Simply open [Lovable](https://lovable.dev/projects/303d1968-0b04-434e-9796-9e52d82c97be) and click on Share -> Publish.

## Authentication

This project now includes secure admin-only authentication:

- **Default Credentials** (development):
  - Email: `admin@guestjourney.com`
  - Password: `admin123`

**IMPORTANT**: Change these credentials before deploying to production!

See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for complete authentication setup instructions.

## Can I connect a custom domain to my project?

**For Render.com deployments:**
- Go to your static site settings
- Click "Custom Domains"
- Add your domain and configure DNS records
- Free SSL certificates provided automatically

**For Lovable deployments:**
- Navigate to Project > Settings > Domains
- Click Connect Domain
- Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run build:dev        # Build in development mode
npm run build:render     # Build using Render script
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run deploy:check     # Run lint + build (pre-deploy check)
```

## Project Structure

See [CLAUDE.md](./CLAUDE.md) for complete project architecture and development guidelines.

## Documentation

- [ADMIN_SETUP.md](./ADMIN_SETUP.md) - Admin authentication setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide for Render.com
- [RENDER_QUICKSTART.md](./RENDER_QUICKSTART.md) - Quick deployment checklist
- [CLAUDE.md](./CLAUDE.md) - Project architecture and development guide
