const Aluno = require('../model/Aluno')

exports.delete = async (req, res) =>{
    if(!req.params.id){
        return res.status(404).redirect('/search')
    }

    let id = req.params.id

    try{
        let aluno = await Aluno.findByIdAndDelete(id)

        res.render('search', { e: false , aluno: '', del: true })
    }catch(e){
        res.status(404).render('search', { e: true, aluno: '', del: false})
    }
}