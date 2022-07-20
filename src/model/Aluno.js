const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    age: {type: Number, required: true},
    serie: {type: String, default: '3 ano'},
    class: {type: Number, required: true}
}) 

const Aluno = mongoose.model('Aluno', alunoSchema)

module.exports = Aluno