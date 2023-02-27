const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Requerimentos = require('./database/Requerimento');
var selectFilter;
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })
// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/home/date', (req, res) => {
    selectFilter = req.body.selectMaquina
    res.render('home',{
        selecionado:selectFilter
    })
})
app.post('/home/requerimentos/filter', (req, res) => {
    res.redirect('/home/requerimentos/filter')
})
app.post('/home/requerimentos', (req, res) => {
    let machine= req.body.selectMaquina;
    let PP= req.body.selecNamePos;
    let automation= req.body.selectAutomacao;
    let os= req.body.ordemServico;
    let describle= req.body.text_area_select;
    let tipo = selectFilter
    Requerimentos.create({
        machine:machine,
        pos:PP,
        automation:automation,
        Os:os,
        descricao:describle,
        tipo:tipo
    })
        .then(()=>{
            res.redirect('/home/requerimentos')
        })
        .catch((err)=>console.log(`ERROR \n ${err}`))
})
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/home/requerimentos', (req, res) => {
    Requerimentos.findAll({raw:true}).then(item=>{
        res.render('requerimentos',{
            rows:item
        })
    })
})
app.get('/home/requerimentos/filter', (req, res) => {

    let filter = req.body.selectFilterOne

    Requerimentos.findAll({raw:true}).then(item=>{

        res.render('filter',
        {
            resposta:item,
            filter:filter
        })
    })
})

app.listen(3000, (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log('Deu tudo certo');
    }
})
