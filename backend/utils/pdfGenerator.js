const PDFDocument = require('pdfkit');
const fs = require('fs');

function generateExpenseReport(expenses, userName) {
  const doc = new PDFDocument();

  const fileName = `Expense_Report_${userName}_${Date.now()}.pdf`;
  const filePath = `./reports/${fileName}`;

  // Ensure directory exists
  if (!fs.existsSync('./reports')) {
    fs.mkdirSync('./reports');
  }

  doc.pipe(fs.createWriteStream(filePath));

  // Title
  doc.fontSize(20).text('Expense Tracker Report', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Generated for: ${userName}`, { align: 'left' });
  doc.moveDown();

  // Table headers
  doc.fontSize(12).text('Date', 50);
  doc.text('Category', 150);
  doc.text('Amount', 300);
  doc.text('Description', 400);
  doc.moveDown();

  // Expenses
  expenses.forEach((exp) => {
    doc.text(exp.date, 50);
    doc.text(exp.category, 150);
    doc.text(`$${exp.amount}`, 300);
    doc.text(exp.description || '-', 400);
    doc.moveDown();
  });

  doc.moveDown(2);
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  doc.fontSize(14).text(`Total: $${total}`, { align: 'right' });

  doc.end();

  console.log(`report generated at path: ${filePath}`);
  

  return filePath;
}

module.exports = { generateExpenseReport };
