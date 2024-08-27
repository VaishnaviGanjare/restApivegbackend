const vegModel = require('../models/vegModel');

const getVegData = (req, res) => {
  vegModel.getAllVegData((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

const createVegData = (req, res) => {
  vegModel.addVegData(req.body, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ id: results.insertId });
  });
};

const updateVegData = (req, res) => {
  const { id } = req.params;
  vegModel.updateVegData(id, req.body, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(results);
  });
};

const deleteVegData = (req, res) => {
  const { id } = req.params;
  vegModel.deleteVegData(id, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(204).send();
  });
};

module.exports = {
  getVegData,
  createVegData,
  updateVegData,
  deleteVegData,
};
