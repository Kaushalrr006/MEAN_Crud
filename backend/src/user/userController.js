// var userService = require('./userService');

// var getDataConntrollerfn = async (req, res) =>
// {
//     var empolyee = await userService.getDataFromDBService();
//     res.send({ "status": true, "data": empolyee });
// }
 
// var createUserControllerFn = async (req, res) => 
// {
//     var status = await userService.createUserDBService(req.body);
//     if (status) {
//         res.send({ "status": true, "message": "User created successfully" });
//     } else {
//         res.send({ "status": false, "message": "Error creating user" });
//     }
// }

// var updateUserController = async (req, res) => 
// {
//     console.log(req.params.id);
//     console.log(req.body);
     
//     var result = await userService.updateUserDBService(req.params.id,req.body);

//      if (result) {
//         res.send({ "status": true, "message": "User Updateeeedddddd"} );
//      } else {
//          res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
//      }
// }

// var deleteUserController = async (req, res) => 
// {
//      console.log(req.params.id);
//      var result = await userService.removeUserDBService(req.params.id);
//      if (result) {
//         res.send({ "status": true, "message": "User Deleteddd"} );
//      } else {
//          res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
//      }
// }
// module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController };

// userService.js
var userService = require('./userService');
var userModel = require('./userModel');

var getDataConntrollerfn = async (req, res) => {
  try {
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
  } catch (error) {
    res.status(500).send({ "status": false, "message": "Error fetching data" });
  }
}

var createUserControllerFn = async (req, res) => {
  try {
    // var doc = new MyModel(req.body);
    const doc = new userModel({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
    });
    
    // console.log('john',req.body.name);
    await doc.save();
    res.send({ "status": true, "message": "User created successfully" });
  } catch (error) {
    res.status(500).send({ "status": false, "message": "Error creating user" ,error});
  }
}

var updateUserController = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    var result = await userService.updateUserDBService(req.params.id, req.body);
    if (result) {
      res.send({ "status": true, "message": "User updated successfully" });
    } else {
      res.send({ "status": false, "message": "Error updating user" });
    }
  } catch (error) {
    res.status(500).send({ "status": false, "message": "Error updating user" });
  }
}

var deleteUserController = async (req, res) => {
  try {
    console.log(req.params.id);
    var result = await userService.removeUserDBService(req.params.id);
    if (result) {
      res.send({ "status": true, "message": "User deleted successfully" });
    } else {
      res.send({ "status": false, "message": "Error deleting user" });
    }
  } catch (error) {
    res.status(500).send({ "status": false, "message": "Error deleting user" });
  }
}

module.exports = {
  getDataConntrollerfn,
  createUserControllerFn,
  updateUserController,
  deleteUserController
};
