//fetch data from db to nodejs
const {Client} =require('pg')

const client=new Client(
    {
        host:"localhost",
        user:"postgres",
        port:5432,
        database:"customerinfo",
        password:"root"
    }
)

client.connect();

client.query(`Select * from records`, (err,res)=>{
    if(!err){
        console.log(res);
    }
    else{
        console.log(err.message);
    }
    client.end;
    
})