export function containsNumbers(str) {
    return /\d/.test(str);
}

export function isValidEmail(email) {
   const pattern = /^[^@]+@[^@]+\.[^@]{2,}$/;
   return pattern.test(email);
}