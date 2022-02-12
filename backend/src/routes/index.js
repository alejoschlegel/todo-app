const { Router } = require('express');
const router = Router();


//get users
router.get("/users", function (req, res) {
    res.json(listUsers)
});

//post new user
router.post("/users", function (req, res) {
    //req.body
    res.json()
});

//get user
router.get("/users", function (req, res) {
    res.json()
});

//delete user
router.delete("users", function (req, res) {
    //req.params
    res.json()
});

let posts = {}

server.delete("/posts", (req, res) => {
    const { id } = req.body;
    let testValidityOfId = posts.find((p) => p.id === id);
  
    if (!testValidityOfId) {
      return res.status(STATUS_USER_ERROR).json({ error: "no hay id" });
    }
  
    if (testValidityOfId) {
      posts = posts.filter((p) => p.id !== id);
      return res.json({ success: true });
    }
  });

//get todos
router.get("/todos", function (req, res) {
    //devuelve un array con los usuarios
    res.json()
});

//get todo
router.get("/todos", function (req, res) {
    //devuelve el usuario
});
//post new todo
router.post("/todos", function (req, res) {
    res.json()
});
//put change status
router.post("/todos", function (req, res) {
    //put o patch??  reponder
    res.json()
});
//delete todo
router.delete("/todos", function (req, res) {
    //borrar el todo y devolverlo
    res.json()
});

//get todos user
router.get("/todos", function (req, res) {
    res.json()
});

let listUsers = function() {
    //findAll
}