const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({respnse: "resposta do /login"})
})
router.post("/",(req,res)=>{
    const userName = "root"
    const password = "1234"

    const userNameValidator = req.body.userName == userName
    const passwordValidator = req.body.password == password

    if(userNameValidator && passwordValidator){
        res.json({
            status: 200,
            message: "Login efetuado com sucesso!",
            res: { 
                token: "000000000"
            }
        })
    }else{
        res.json({
            status: 201,
            message: "Usuário ou senha inválidos!",
        })
    }

    
})


module.exports = router