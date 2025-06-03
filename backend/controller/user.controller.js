getUser = (req,res)=>{
    res.send('List of User');
}

createUser = (req,res)=>{
    const userData = req.body;
    res.send("New user created !!!!")

    res.status(201).send(`User Created: ${JSON.stringify(userData)}`)
}

UpdateUser = (req,res)=>{
    const userId = req.params.id;
    const updateData = req.body;
    res.send(`User id updated : ${userId}`)
}

getUserByid = (req,res) =>{
    const userId = req.params.id;
    res.send(`User ID requested: ${userId}`);
}

deleteUser = (req,res)=>{
    const userId = req.params.id;
    res.send(`User ${userId} deleted`);
}

module.exports = { getUser , createUser , deleteUser , getUserByid ,UpdateUser};