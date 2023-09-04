// var userModel = require('./userModel');

// module.exports.getDataFromDBService = () => {

//     return new Promise(function checkURL(resolve, reject) {
 
//         userModel.find({}, function returnData(error, result) {
 
//             if (error) {
//                 reject(false);
//             } else {
         
//                 resolve(result);
//             }
//         });
 
//     });
 
//  }

//  module.exports.createUserDBService = (userDetails) => {


//     return new Promise(function myFn(resolve, reject) {
 
//         var userModelData = new userModel();
 
//         userModelData.name = userDetails.name;
//         userModelData.address = userDetails.address;
//         userModelData.phone = userDetails.phone;

//         userModelData.save(function resultHandle(error, result) {
 
//             if (error) {
//                 reject(false);
//             } else {
//                 resolve(true);
//             }
//         });
 
//     });
 
//  }


//  module.exports.updateUserDBService = (id,userDetails) => {     
//     console.log(userDetails);
//     return new Promise(function myFn(resolve, reject) {
//         userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
//           if(error)
//           {
//                 reject(false);
//           }
//           else
//           {
//              resolve(result);
//           }
//         });
 
//     });
//  }

//  module.exports.removeUserDBService = (id) => { 
//     return new Promise(function myFn(resolve, reject) {
//         userModel.findByIdAndDelete(id, function returnData(error, result) {
 
//           if(error)
//           {
//                 reject(false);
//           }
//           else
//           {
//              resolve(result);
//           }          
//         });
//     });
 
//  }

var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
     return new Promise(function checkURL(resolve, reject) {
    //     console.log('in promise fun');
    //     userModel.find({}, function returnData(error, result) {
    //         console.log('in found');
    //         if (error) {
    //             reject(false);
    //             console.log('error saving data');
    //         } else {
    //             console.log(result)
    //             console.log('saved data');
    //             resolve(result);
    //         }
    //     });
        
    userModel.find().then(result => {
        resolve(result);
    })
    .catch(error => {
        reject(error);
    })
     });

 }

 module.exports.createUserDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

        userModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = async (id,userDetails) => {     
    console.log(userDetails);
    return await userModel.findByIdAndUpdate(id,userDetails);

 }
 


 module.exports.removeUserDBService = async (id) => { 
    return await userModel.findByIdAndDelete(id);
 }