const mongoose=require("mongoose")
  const {Schema}=mongoose

  const orderschema=new Schema({
    email:{
      type:String,
      required:true,
      unique:true
    },
    Orderdata:{
      type:Array,
      required:true,
    }
  })