const Crud = require('./crudModel');

exports.getCruds = async (req, res) => {
  const cruds = await Crud.find();
  res.json({ cruds });
};

exports.createCrud = async (req, res) => {
  await Crud.create(req.body);
  res.sendStatus(201);
};

exports.editCrud = async (req, res) => {
  await Crud.findOneAndUpdate({ _id: req.params.id }, req.body);
  res.sendStatus(200);
};

exports.deleteCrud = async (req, res) => {
  await Crud.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
