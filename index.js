const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json')
PORT = 3000;

const app = express();


//middleware
// app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.get('/users',(req,res)=>{
   
    return res.json(users)
    
})
app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(users=>users.id === id)
    res.json(user)
})
.patch((req,res)=>{
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.json({ error: "User not found" });
    }

    users[userIndex] = { ...users[userIndex], ...req.body };

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2),(err,data)=>{
        res.json({ status: "User updated"});
    });

    res.json({ status: "User updated successfully", user: users[userIndex] });
})

.delete((req,res)=>{
    const id = Number(req.params.id);
    const iuser = users.findIndex(users=>users.id === id)
    if(iuser === -1){
        return res.json({status:"User not found"})
    }
    users.splice(iuser,1)
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),(err,data)=>{
        res.json({status:"Delete request is successful",id})
    })
})


app.post('/api/users',(req,res)=>{
    const body = req.body;
    users.push({...body,id:users.length + 1})
    fs.writeFileSync('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        res.json({status:"Post request is Pending",id:users.length + 1})
    })
  
})



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})