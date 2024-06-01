module.exports = app => {
    const cours = require("../controllers/coursControllers");  
    var router = require("express").Router();  
    // Create a new admin
    router.post("/", cours.create);  
    // Retrieve all admin
    router.get("/", cours.findAll);      
    // Retrieve a single admin with id
    router.get("/:id", cours.findOne);
  //Update admin with id
  router.put("/:id", cours.update);
  //delete admin with id
  router.delete("/:id",cours.delete);
  //delete all admins
  router.delete("/",cours.deleteAll)
    app.use('/api/cours', router);
  };
  