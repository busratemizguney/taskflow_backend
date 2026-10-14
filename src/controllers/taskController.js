let tasks = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  res.status(200).json({ success: true, data: tasks });
};

exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ success: false, message: "Görev bulunamadı" });
  res.status(200).json({ success: true, data: task });
};

exports.createTask = (req, res) => {
  const { title, description, priority, assignee } = req.body;
  const newTask = {
    id: Date.now().toString(),
    title,
    description,
    status: "pending",
    priority: priority || "medium",
    assignee
  };
  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
};

exports.updateTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ success: false, message: "Görev bulunamadı" });
  
  tasks[index] = { ...tasks[index], ...req.body };
  res.status(200).json({ success: true, data: tasks[index] });
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ success: false, message: "Görev bulunamadı" });

  tasks.splice(index, 1);
  res.status(200).json({ success: true, message: "Görev silindi" });
};