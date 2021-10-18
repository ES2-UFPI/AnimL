const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://anime:anime@cluster0.fxnst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try{
        await client.connect();

        await listDatabases(client);

    } catch(e){
        console.error(e);
    } finally{
        await client.close();
    }   
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db =>{
        console.log(`- ${db.name}`);
    })
}




/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://anime:<password>@cluster0.fxnst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object 
  client.close();
});*/
