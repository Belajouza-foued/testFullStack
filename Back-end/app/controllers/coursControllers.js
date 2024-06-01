const db = require("../models");
const Cour = db.cours;
//add formation
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Tutorial
    const cour = new Cour({  
      name:req.body.name,        
        place:req.body.place,
           

    });
  
    // Save Tutorial in the database
    cour
      .save(cour)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating th."
        });
      });
  };

//afficher liste de formations
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {name: {$regex : new RegExp(name), $options: "i"}} :{};
    Cour.find(condition).then(data => {res.send(data);
    }).catch(err =>{
        res.status(500).send({message:err.message || "data not founded."});
        
    }); 
}
    //find only formation
    exports.findOne = (req, res) => {
        const id = req.params.id;
        Cour.findById(id).then(data =>{
            if(!data) 
              res.status(400).send({message:"cour trouvé"});
         res.send(data);
        })
        .catch(err =>{
            res.status(500).send({message:"cour non trouveé avec id="+ id});
        });        
    }
//delete admine by id
exports.delete = (req, res) => {
const id = req.params.id;
Cour.findByIdAndDelete(id)
.then(data =>{
  if(!data) {
    res.status(404).send ({
      message:`can not delete with id=${id}`
    });  }
  else res.send ({
    message:"cour id deleted"
  })
})
.catch(err => {
  res.status(500).send({
    message:"error deleting cour with id=" + id
  });
});
}
// delete all admin
exports.deleteAll = (req,res) => {
Cour.deleteMany ({})
.then(data =>{
res.send({
  message:`${data.deleteCount} all cours is deleted`
});
})
.catch(err =>{
  res.status(500).send({
    message:err.message || "error deleting all cours"
  })
} )
}
//update admin by id
exports.update = (req,res) => {
 if(!req.body) {
  return res.status(400).send({
    message:"data can not be empty"
  });
 }  
const id = req.params.id;
Cour.findByIdAndUpdate(id, req.body, {courFindAndUpdate:false})

.then(data =>{
  if(!data) {
    res.status(400).send ({
      message:`can not update with id=${id}`
    });
  }
  else res.send ({
    message:"cour id updated"
  })
})
.catch(err => {
  res.status(500).send({
    message:"error updating cour with id=" + id
  });
});

}