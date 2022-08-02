let app = require('express')()
let {saveUser,isLoged, passCheck} = require('./session/session')



app.post('/login',async(req,res)=>{
    let {email,password} = req.query
    console.dir(req)
    let user = {email:email,password}
    if(passCheck(user))
    await saveUser(user)
})

app.get('/user',async (req,res)=>{
    let users = [{email:"test@gmail.com"},{email:"test2@gmail.com"}]
    let user = {email:"test@gmail.com"}
    await saveUser(user)
        .then(()=>{
            console.log('user saved')
            res.send(user)
        })
        .catch((e)=>console.log(e))
    await isLoged(user)
        .then(()=>console.log('User is logged in'))

    
})

app.listen(1234,()=>{
    console.log('server started on port 1234')
})