module.exports = app => {
    const roles = require("../controllers/rolesControllers");  
    var router = require("express").Router();  
    // Create a new admin
    router.post("/", roles.create);  
    // Retrieve all admin
    router.get("/", roles.findAll);      
    // Retrieve a single admin with id
    router.get("/:id", roles.findOne);
  //Update admin with id
  router.put("/:id", roles.update);
  //delete admin with id
  router.delete("/:id",roles.delete);
  //delete all admins
  router.delete("/",roles.deleteAll)
    app.use('/api/roles', router);
  };
  