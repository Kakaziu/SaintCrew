const express = require('express')
const router = express.Router()
const indexController = require('./src/controllers/indexController')
const searchController = require('./src/controllers/searchController')
const editController = require('./src/controllers/editController')
const deleteController = require('./src/controllers/deleteController')
const classController = require('./src/controllers/classController')

router.get('/', indexController.index)
router.post('/register', indexController.register)

router.get('/search', searchController.searchPag)
router.get('/search/find', searchController.search)

router.get('/edit/:id', editController.loadEdit) 
router.post('/edit/:id', editController.edit)

router.get('/delete/:id', deleteController.delete)

router.get('/class', classController.index)


module.exports = router