const Aluno = require('../model/Aluno')

exports.loadEdit = async (req, res) =>{

    if(!req.params.id){
        return res.status(404).redirect('/search')
    }
    
    let id = req.params.id
    
    try{
        const aluno = await Aluno.findOne({ _id: id })

        res.render('edit', { e: false, aluno })
    }catch(e){
        res.status(400).send('Não')
    }
}

exports.edit = async (req, res) =>{
    if(!req.params.id){
        return
    }

    let id = req.params.id

    let newAluno = {
        name: req.body.name,
        last_name: req.body.last_name, 
        age: req.body.age,
        class: req.body.class
    }

    if(!req.body.name || !req.body.last_name || !req.body.age || !req.body.class ){
        newAluno.id = req.params.id
        res.render('edit', {e: true, aluno: newAluno})
        return
    }


    try{
        const aluno = await Aluno.updateOne({_id: id}, newAluno)

        res.redirect('/search')
    }catch(e){
        res.status(400).send('Não')
    }
}