module.exports = (text) => {
  const warnings = [];
  try {
    JSON.parse(text);
  } catch (e) {
    warnings.push("Invalid JSON format.");
  }
  return warnings;
};
