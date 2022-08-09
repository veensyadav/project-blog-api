const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', 'views');

require('./config/db')();

require('./routes')(app);

// app.get('/',(req,res)=>{
//     res.redirect('/index');
// })
app.listen(3000, () => {
    console.log("listening port number 3000");
});