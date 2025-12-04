module.exports = (text) => {
  const warnings = [];
  if (!/<html/i.test(text)) warnings.push("Missing <html> tag.");
  if (!/<head/i.test(text)) warnings.push("Missing <head> tag.");
  if (!/<title/i.test(text)) warnings.push("Missing <title> tag.");
  if (!/<body/i.test(text)) warnings.push("Missing <body> tag.");
  if (/<img[^>]*>/i.test(text) && !/alt=/.test(text)) warnings.push("<img> tag missing alt attribute.");
  return warnings;
};
