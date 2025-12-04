module.exports = (text) => {
  const warnings = [];
  if (!text || text.trim().length < 5) warnings.push("TXT is too short or empty.");
  return warnings;
};
