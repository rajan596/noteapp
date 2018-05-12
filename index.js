const express=require('express');
const http=require('http');

const app=express();

const port=process.env.PORT || 3000; 

// MIDDLE_WARES
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.send("Hello express !!");
});

app.listen(port, ()=>{
    console.log('server started successfully on '+ port);
});