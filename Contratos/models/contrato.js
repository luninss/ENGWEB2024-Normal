const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idcontrato: String,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: String,
    prazoExecucao: String,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
}, { versionKey: false });

module.exports = mongoose.model('contrato', contratoSchema);

