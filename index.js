const express= require('express');
const app = express();

const morgan= require('morgan');
app.set ('puerto',2024 );
app.use (morgan('dev'));


app.listen(app.get('puerto'), ()=>{
    console.log('El servidor esta corriendo', app.get('puerto'))
})


app.get('/hola', (req, res)=>{
    res.send('El servidor por Get funciona')
})

app.post('/saludo', (req, res)=>{
    res.send('<h1>El servidor por Post funciona</h1>')
})

