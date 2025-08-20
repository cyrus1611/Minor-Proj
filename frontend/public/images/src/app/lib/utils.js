// frontend/src/lib/utils.js

/**
 * Formats a given number as a currency string.
 * @param {number} amount - The amount to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Converts a date string into a user-friendly format.
 * @param {string} dateString - The date string to convert.
 * @returns {string} The formatted date.
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};