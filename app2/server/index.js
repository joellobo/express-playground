var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

app.get('/',function(req,res){
    const body = req.body;
    //res.send("Body:" + body);
    res.json({ body: body })
});

app.listen(8080,function(){
    console.log("Servidor ativo no porto 8080");
});
