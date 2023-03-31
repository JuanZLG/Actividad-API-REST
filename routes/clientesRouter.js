const express = require('express');
 const{MongoClient, ObjectId}= require('mongodb');
 const uri = 'mongodb+srv://seductorboy:Juan1212@cluster0.tbpxigm.mongodb.net/?retryWrites=true&w=majority';
 const router = express.Router()
 const response = require('../network/response')
 router.get('/', async(req, res)=>{
    const client = new MongoClient(uri);
    try{
        await client.connect()
       const result= await client.db("NewEra").collection("Clientes").find({}).limit(10).toArray()
        res.status(200).json(result)
    }finally{
        await client.close()
    }
    
});
router.get('/:id', async(req, res)=>{
    const id = req.params.id
    const client = new MongoClient(uri);
    try{
        await client.connect()
       const result= await client.db("NewEra").collection("Clientes").findOne({_id: new ObjectId(id)})
        res.status(200).json(result)
    }finally{
        await client.close()
    }
    
});
router.post('/', async(req, res)=>{
    const body = req.body
    const client = new MongoClient(uri);
    try{
        await client.connect()
       const result = await client.db("NewEra").collection("Clientes").insertMany(body)
       if(result){
        response.success(req,res,'se insertaron clientes', 200)
    }else{
        response.error(req,res,'no se insertaron clientes', 204)
    }
    }finally{
        await client.close()
    }
    
});
router.patch('/:id', async(req, res)=>{
    const id = req.params.id
    const body = req.body
    const client = new MongoClient(uri);
    try{
        await client.connect()
       const result = await client.db("NewEra").collection("Clientes").updateOne({_id : new ObjectId(id)}, {$set:{Nombre: body.Nombre, email: body.email}})
       
       if(result){
        response.success(req,res,'se actualizo clientes', 200)
    }else{
        response.error(req,res,'no se actualizo cliente', 204)
    }
    }finally{
        await client.close()
    }
    
});
router.patch('/', async(req, res)=>{
  const body = req.body;
  const client = new MongoClient(uri);
  try{
    await client.connect();
    const result = await client.db("NewEra").collection("Clientes").updateMany({Nombre: "alex", email: /gmail/}, {$set:{Nombre: body.Nombre, email: body.email}});
    
    if(result){
        response.success(req,res,'se actualizaron clientes', 200)
    }else{
        response.error(req,res,'no se actualizaron clientes', 204)
    }
  }finally{
    await client.close();
  }
});

router.delete('/:id', async(req, res)=>{
    const id = req.params.id
    const client = new MongoClient(uri);
    try{
        await client.connect()
       const result= await client.db("NewEra").collection("Clientes").deleteOne({_id: new ObjectId(id)})
       if(result){
        response.success(req,res,'se elimino cliente', 200)
    }else{
        response.error(req,res,'no se elimino cliente', 204)
    }
    }finally{
        await client.close()
    }
    
});
router.delete('/', async(req, res)=>{
  const filtro = req.body; 
  const client = new MongoClient(uri);
  try{
      await client.connect()
      const result= await client.db("NewEra").collection("Clientes").deleteMany(filtro);
      if(result){
        response.success(req,res,'se eliminaron clientes', 200)
    }else{
        response.error(req,res,'no se eliminaron clientes', 204)
    }
  }finally{
      await client.close()
  }
});
module.exports = router