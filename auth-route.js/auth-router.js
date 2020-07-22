const bcrypts = require('bcryptjs')

const router = require('express').Router()

const Users = require ('../user/userModel')

router.post('/register', (req,res)=>{

    const { username, password } = req.body



    const rounds = process.env.HASH_ROUNDS || 8
    const hash = bcrypts.hashSync(password, rounds)

    Users.add ({username, password: hash})
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(err => res.send(err))
})

router.post ('/login', (req, res)=>{

    const {username, password} = req.body

    Users.findBy({ username })

    .then(([user]) =>{
        if (user && bcrypts.compareSync(password, user.password)){
            req.session.user = {id: user.id, username: user.username}

            res.status(200).json({welcome: 'the database', session: req.session})
        } else{
            res.status(401).json({message: 'access denied'})
        }
    })
    .catch(err => {
        console.log("error on login", err);
        res.status(500).send(err);
      })
})

router.post('')


module.exports = router