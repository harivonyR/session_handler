const { resolve } = require("path")

let SESSION = {user:[]}

let saveUser = async function(user){
    try{
       SESSION.user.push(user)
       return new Promise(resolve=>{resolve()})
    }
    catch(e){
        console.log(e)
        return new Promise((resolve,reject)=>{reject('error')})
    }
}

let isLoged = async function(user){
    let {email} = user
    try{
        if(SESSION.user.some((el=>{el.email==email})))
            return new Promise(resolve=>resolve())
    }
    catch(e){
        throw new Error(e)
    }
}

let passCheck = function passCheck(user){
    const defaultPass = "kaka"
    const deaultEmail = "kaka@gmail.com"
    let {email,password} = user
    if(email==deaultEmail&&password==defaultPass)
        return true
    else return false
}

module.exports={saveUser,isLoged,passCheck}