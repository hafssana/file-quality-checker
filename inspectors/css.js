module.exports = (text) => {
  const warnings = [];
  if (!/\{/.test(text) || !/\}/.test(text)) warnings.push("CSS seems to miss { } blocks.");
  if (/!important/.test(text)) warnings.push("Avoid using !important.");
  return warnings;
};
