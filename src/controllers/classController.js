const Aluno = require('../model/Aluno')

exports.index = async (req, res) =>{

    try{
        const alunos = await Aluno.find({})

        res.render('class', {alunos})
    }catch(e){
        res.status(404).send('erro')
    } 
} 

