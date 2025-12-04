module.exports = (text) => {
  const warnings = [];
  if (!text || !text.trim()) return ["JS file empty"];
  if (!text.includes(";")) warnings.push("No semicolons detected — consider adding semicolons.");
  if (/\bvar\b/.test(text)) warnings.push("Avoid using 'var'. Use let/const instead.");
  if (/==[^=]/.test(text)) warnings.push("Use === instead of == for strict equality.");
  if (/console\.log/.test(text)) warnings.push("Remove console.log debug statements in production.");
  return warnings;
};
