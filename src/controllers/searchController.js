const Aluno = require('../model/Aluno')

exports.searchPag = async (req, res) =>{
    res.render('search', { e: false, aluno: '', del: false })
}

exports.search = async (req, res) =>{
    try{
        const aluno = await Aluno.findOne({ name: req.query.name, last_name: req.query.last_name })

        if(!aluno){
            return res.render('search', {e: true, aluno: '', del: false})
        }

        res.render('search', { e: false, aluno, del: false})
    }catch(e){
        res.status(404).render('search')
    }
}

