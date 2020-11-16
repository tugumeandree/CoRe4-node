const router = require('express').Router();
const User = require('../Models/User.model');
const { registerValidation } = require('../validation');


router.post('/register', async (req, res) => {
    //Let's validate the data before we add the user
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.detail[0].message);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }) 
    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch(err) {
        res.status(400).send(err);
    };
});

module.exports = router;