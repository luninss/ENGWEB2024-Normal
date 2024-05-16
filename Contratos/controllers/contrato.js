const mongoose = require('mongoose')
const contrato = require('../models/contrato');

module.exports.list = async () => {
  return await contrato
    .find()
    .exec();
}

module.exports.findById = id => {
  return contrato
    .findOne({ idcontrato: String(id) })
    .exec();
}

module.exports.findByEntidade = entidade => {
    return contrato
        .find({ NIPC_entidade_comunicante: entidade})
        .exec();
}

module.exports.findByTipo = tipo => {
    return contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}

module.exports.listEntidades = async () => {
    return await contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

module.exports.listTipos = async () => {
    return await contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

module.exports.insert = contrato => {
        var newcontrato = new contrato(contrato);
        return newcontrato.save();
}

module.exports.removeById = id => {
  return contrato.deleteOne({ idcontrato: id });
}

module.exports.update = (id, contrato) => {
  return contrato.updateOne({ idcontrato: id }, contrato);
}