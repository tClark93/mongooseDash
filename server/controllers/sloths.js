const mongoose = require('mongoose');
const Sloth = mongoose.model('Sloth');


module.exports = {
    getAll: (req, res) => {
        Sloth.find({},function(err, slothsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing all items: controller getAll notification')
                res.send(err)
            } else {
                // console.log(cakesFromDB);
                console.log('successfully grabbed all items: controller getAll notification')
                res.json({message:'Success', data: slothsFromDB});
            }
        })
    },

    getOne: (req, res) => {
        Sloth.find({_id:req.params.id},function(err,slothsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing single item: controller getOne notification')
                res.send(err)
            } else {
                // console.log(cakesFromDB);
                console.log(`successfully retrieved item with id ${req.params.id}: controller getOne notification`)
                res.json({message:'Success', data: slothsFromDB});
            }
        }) 
    },

    create: (req, res) => {      
        sloth = new Sloth(req.body)
        sloth.save({},function(err,slothsFromDB){
            if(err) {
                // console.log(err);
                console.log('error creating item: controller create notification')
                res.send(err)
            } else {
                // console.log(cakesFromDB);
                console.log('successfully created item: controller getOne notification')
                res.json({message:'Success', data:slothsFromDB});
            }
        })
    },

    update: (req, res) => {    
        console.log("made it to update in controller")  
       Sloth.update({_id:req.params.id},{$set:req.body},function(err,slothsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error editing item with id ${req.params.id}: controller update notification`)
                res.send(err)
            } else {
                console.log(slothsFromDB);
                console.log(`successfully updated item with id ${req.params.id}: controller Update notification`)
                res.json({message:"Success", data:slothsFromDB});
            }
        })
      
    },

    delete: (req, res) => {
       Sloth.remove({_id:req.params.id},function(err,slothsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error deleting item with id ${req.params.id}: controller delete notification`)
                res.send(err)
            } else {
                console.log(`successfully deleted item with id ${req.params.id}: controller delete notification`)
                res.json({message:"Successfully removed", data:slothsFromDB});
            }
        })
    },

}













