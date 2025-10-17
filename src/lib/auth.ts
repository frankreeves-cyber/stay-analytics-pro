// Admin authentication service
// For production, these should be stored securely in a backend database
// with proper hashing (e.g., bcrypt)

interface AdminCredentials {
  email: string;
  password: string;
}

// Default admin credentials
// IMPORTANT: Change these credentials before deploying to production
const ADMIN_CREDENTIALS: AdminCredentials = {
  email: import.meta.env.VITE_ADMIN_EMAIL || "admin@guestjourney.com",
  password: import.meta.env.VITE_ADMIN_PASSWORD || "admin123",
};

/**
 * Validates admin credentials
 * @param email - User email
 * @param password - User password
 * @returns true if credentials match admin account
 */
export const validateAdminCredentials = (
  email: string,
  password: string
): boolean => {
  return (
    email === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  );
};

/**
 * Checks if user is currently authenticated
 * @returns true if valid auth token exists
 */
export const isAuthenticated = (): boolean => {
  return localStorage.getItem("guestjourney_auth") === "true";
};

/**
 * Logs in the user by setting auth token
 */
export const login = (): void => {
  localStorage.setItem("guestjourney_auth", "true");
};

/**
 * Logs out the user by removing auth token
 */
export const logout = (): void => {
  localStorage.removeItem("guestjourney_auth");
};

/**
 * Gets the admin email (for display purposes)
 */
export const getAdminEmail = (): string => {
  return ADMIN_CREDENTIALS.email;
};
