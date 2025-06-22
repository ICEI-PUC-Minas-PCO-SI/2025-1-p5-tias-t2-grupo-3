/**
 * Authentication utility functions
 */

/**
 * Logout function that clears user data
 * Note: Redirect should be handled by the component using useNavigate
 */
export const logout = (): void => {
  // Clear user data from localStorage
  localStorage.removeItem('user');
};

/**
 * Simple logout with redirect (fallback method)
 */
export const logoutWithRedirect = (): void => {
  // Clear user data from localStorage
  localStorage.removeItem('user');
  
  // Redirect to sign-in page
  window.location.href = '/sign-in';
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const user = localStorage.getItem('user');
  return user !== null;
};

/**
 * Get current user data
 */
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
