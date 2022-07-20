require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const router = require('./router')

mongoose.connect(process.env.MONGO_URL)
  .then(res =>{
    console.log('Banco carregado') 
  })
  .catch(e =>{
    console.log(e)
  })


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', express.urlencoded({extended: true}) ,router)

app.listen(process.env.PORT, () =>{
    console.log('Server rodando em: http://localhost:3000')
})