# Admin Account Setup

## Overview

GuestJourney now includes secure admin-only authentication. Only users with valid admin credentials can access the dashboard.

## Default Admin Credentials

**Email**: `admin@guestjourney.com`
**Password**: `admin123`

**IMPORTANT**: These are default credentials for development. You MUST change them before deploying to production.

## Changing Admin Credentials

### Method 1: Environment Variables (Recommended for Production)

1. Edit the `.env` file in the project root
2. Update the following variables:

```env
VITE_ADMIN_EMAIL=your-admin-email@domain.com
VITE_ADMIN_PASSWORD=your-secure-password
```

3. Restart the development server:

```bash
npm run dev
```

### Method 2: Direct Code Edit (Not Recommended)

Edit `src/lib/auth.ts` and modify the default values in the `ADMIN_CREDENTIALS` object.

## Security Notes

- The `.env` file is excluded from git to protect your credentials
- Never commit your actual admin credentials to the repository
- For production deployments, set environment variables in your hosting platform
- Consider implementing proper password hashing (e.g., bcrypt) for production use
- The current implementation is suitable for single-admin scenarios

## Testing Authentication

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:8080`
3. You'll be redirected to the login page
4. Enter the admin credentials
5. On successful login, you'll be redirected to the dashboard

### Testing Invalid Credentials

Try logging in with incorrect credentials - you should see an "Invalid credentials. Access denied." error message.

## Logout

Click the "Logout" button in the left sidebar to sign out. You'll be redirected to the login page.

## Production Deployment

When deploying to production:

1. Set `VITE_ADMIN_EMAIL` and `VITE_ADMIN_PASSWORD` as environment variables in your hosting platform
2. Use strong, unique passwords
3. Consider implementing additional security measures:
   - Rate limiting on login attempts
   - Two-factor authentication
   - Password hashing with bcrypt or similar
   - Backend authentication service
   - Session management with expiry

## File Structure

- `src/lib/auth.ts` - Authentication service with credential validation
- `src/pages/Auth.tsx` - Login page component
- `.env` - Environment variables (not committed to git)
- `.env.example` - Template for environment variables
