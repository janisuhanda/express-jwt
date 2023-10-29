const express = require("express");
const app = express();

// parse raw json
app.use(express.json());
//parse x-www-form
app.use(express.urlencoded({extended:true}));


// inisialilsai db
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force:true}).then(()=>{
    console.log(`sync DB`);
    initial();
});
function initial(){
    Role.create({
        id : 1,
        name : "user"
    });
    Role.create({
        id : 2,
        name : "moderator"
    });
    Role.create({
        id : 3,
        name : "admin"
    });
}

app.get("/",(req,res)=>{
    res.json({
        status : 200,
        message : "Rest Api JWT",
        data : null
    });
});

// add routes auth dan authorization user
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = 9000;
app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`);
})