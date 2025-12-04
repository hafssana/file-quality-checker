module.exports = (text) => {
  const warnings = [];
  if (!text || !text.trim()) return ["CSV is empty"];
  const lines = text.trim().split("\n");
  const headerCols = lines[0].split(",");
  lines.forEach((line, i) => {
    if (line.split(",").length !== headerCols.length)
      warnings.push(`Row ${i + 1} has inconsistent column count.`);
  });
  return warnings;
};
