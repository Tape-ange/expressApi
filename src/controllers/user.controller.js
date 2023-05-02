const userModel = require("../models/user.model");

module.exports = function(app){

    app.post('/user', async function(req, res){
        console.log("req ",req.body);
        const newReq = new userModel(req.body);
        console.log("newReq ",newReq);
        const saveUserModel = await newReq.save();
        console.log(saveUserModel)
       return res.status(200).json(saveUserModel);
    });
    
    app.get('/user', async function(req, res){

      const data = await userModel.find();
      console.log("user get", data);
        return res.status(200).json(data);
    });

    app.get('/user/:id', function(req, res, next) {
      console.log(`la tete de mari est big ${req.params.id}`);
      if (req.params.id.length < 24 || req.params.id.length > 24) {
        return res.status(404).json({ msg: 'TAPE tu as faussé' })
      } else {
        next()
      }
    },async function(req, res){
      console.log('no middleware')
      try {
        const id = req.params.id ;
        console.log("id", id);
        const data = await userModel.findById(id);
        console.log("user get id ", data);
          return res.status(200).json(data);
      } catch (e) {
        console.log(e.message);
        return res.status(404).json({ msg: e.message})
      }
    });

    app.delete('/user', function(req, res){

    });

};