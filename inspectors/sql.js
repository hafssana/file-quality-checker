module.exports = (text) => {
  const warnings = [];
  if (!/SELECT|INSERT|UPDATE|DELETE/i.test(text)) warnings.push("SQL missing basic DML/DDL keywords.");
  if (!text.trim().endsWith(";")) warnings.push("SQL statement should end with a semicolon (;).");
  if (/select\s+\*\s+from/i.test(text)) warnings.push("Avoid SELECT *; prefer explicit columns.");
  return warnings;
};
