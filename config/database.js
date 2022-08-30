const mongoose = require('mongoose')

const user = 'user3tri'
const pw = 'user123tri'
const cluster = 'cluster1.uman3.mongodb.net'
const db = 'projeto3tri'

const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://'+user+':'+pw+'@'+cluster+'/'+db)
}
//mongodb+srv://user3tri:user123tri@cluster1.uman3.mongodb.net/projeto3tri

const modelo = mongoose.Schema({
    estilos:String,
    imagem:String,
    titulo:String,
    texto:String,
    cadastradoem:{type:Date,default:Date.now}
})

const conteudo = mongoose.model('conteudo',modelo)

module.exports = {conteudo,conexao}