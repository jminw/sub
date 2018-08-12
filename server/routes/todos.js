const express = require('express');
const router = express.Router();



router.get('/td', (req, res) => {
  const todos = [
      { description: 'todo 1', isDone: false },
      { description: 'todo 2', isDone: true },
      { description: 'todo 3', isDone: true },
    ];
  res.json({todos});
});


// router.post('/td', (req,res,next) =>{
//   const todo=req.body.todo;
//   todos.push(todos);
//   console.log(todos);
//   res.json({todos:todos})
// })


module.exports = router;
