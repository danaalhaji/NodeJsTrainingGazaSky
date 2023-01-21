import express from 'express';
import {body , validationResult} from 'express-validator'; // import validation
// create express 
const app = express();
// extract json data
app.use(express.json());
let tasks=[]
app.post("/task",[
    body("title").exists().withMessage("the task must have a name"),
    body('id').exists().withMessage("the task must have an id").isInt().withMessage("the task must have an integer id"),
    body('description').exists().withMessage("the task must have a description"),
    body('isCompleted').exists().withMessage("the task must have a condition true or false as comleted or not")
    .isBoolean().withMessage("the condition is true or false")
], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    }
    const{title,id,description, isCompleted } = req.body;
    let task={
        title :title,
        id:id,
        description:description,
        isCompleted:isCompleted
    }
    tasks.push(task)
    res.send({ task })
}) 
// retrive all tasks
app.get("/task",(req, res) =>{
    res.send({tasks})
})

// get one task by id
app.get("/task/:id",(req, res) =>{
    let task = tasks.find(task => task.id=req.params.id)
    res.send({task})
})

// update on task by id 
app.put("/task/:id",[
    body("title").exists().withMessage("the task must have a name"),
    body('id').exists().withMessage("the task must have an id").isInt().withMessage("the task must have an integer id"),
    body('description').exists().withMessage("the task must have a description"),
    body('isCompleted').exists().withMessage("the task must have a condition true or false as comleted or not")
    .isBoolean().withMessage("the condition is true or false")
],(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    }
    const{title,id,description, isCompleted } = req.body;
    let utask={
        title :title,
        id:id,
        description:description,
        isCompleted:isCompleted
    }
    let newTask;
    let updatetask = tasks.find(task => {
        if(task.id == req.params.id){
            task.title = utask.title;
            task.id = utask.id;
            task.description = utask.description;
            task.isCompleted = utask.isCompleted;
            newTask = task;
        }
    })
    // console.log(tasks[updatetask])
    // let newTasks = [...tasks.splice(0,updatetask), utask , tasks.splice(updatetask)]
    // tasks = newTasks;
    res.send({ newTask })
})

app.patch("/task/:id", (req,res)=>{
    let task;
    let updatetask = tasks.find(task => {
        if(task.id == req.params.id){
            task.isCompleted = !task.isCompleted
            task=task;
        }
    })
    res.send({ task })
    })


app.listen(3000, () =>
    console.log(`🚀 Server ready at: http://localhost:3000`)
);

