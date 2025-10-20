const { generateExpenseReport } = require('../utils/pdfGenerator');
const Expense = require('../models/expense');
const fs = require('fs');

const generatePdfReport = async (req, res) => {
  try {
    const userId = req.user.id; // assuming auth middleware is in use
    const userName = req.user.name || 'User';
    console.log(req.user);
    

    const expenses = await Expense.find({ user: userId });

    if (!expenses.length) {
      return res.status(404).json({ message: 'No expenses found.' });
    }

    const filePath = generateExpenseReport(expenses, userName);
    console.log("generating report");
    
    res.download(filePath, (err) => {
      if (err) console.error('Download error:', err);
      fs.unlinkSync(filePath); // delete after sending
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { generatePdfReport };
