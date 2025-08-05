const Expense = require('../models/expense');

// ✅ GET: Get all expenses for logged-in user
exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id }).sort({ date: -1 });
  res.json(expenses);
};

// ✅ POST: Add new expense for logged-in user
exports.addExpense = async (req, res) => {
  const { description, amount, category } = req.body;

  const newExpense = new Expense({
    description,
    amount,
    category,
    user: req.user._id, // 👈 associate with logged-in user
  });

  const saved = await newExpense.save();
  res.status(201).json(saved);
};

// ✅ DELETE: Ensure users can only delete their own expense
exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findOne({ _id: req.params.id, user: req.user._id });
  if (!expense) return res.status(404).json({ message: 'Expense not found' });

  await expense.remove();
  res.status(204).send();
};
