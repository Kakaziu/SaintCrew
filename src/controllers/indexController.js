const Aluno = require('../model/Aluno')

exports.index = (req, res) =>{
    res.render('index', { err: false, aluno: '', saved: false, err_message: ''})
}

exports.register = async (req, res) =>{

    if(!req.body.name || !req.body.last_name || !req.body.age || !req.body.class ){
        return res.status(400).render('index', {err: true, aluno: req.body, saved: false, err_message: 'Não foi possível cadastrar o aluno.'})
    }

    const aluno = new Aluno({
        name: req.body.name,
        last_name: req.body.last_name, 
        age: req.body.age,
        class: req.body.class
    })

    const foundAluno = await Aluno.findOne({ name: req.body.name, last_name:req.body.last_name })

    if(foundAluno){
        return res.status(400).render('index', {err: true, aluno: req.body, saved: false, err_message: 'Este aluno já existe.'})
    }

    try{
        const savedAluno = await aluno.save()

        res.render('index', {err: false, aluno: savedAluno, saved: true, err_message: ''})
    }catch(err){
        res.status(400).render('index', {err: true, aluno: '', saved: false})
    }
}