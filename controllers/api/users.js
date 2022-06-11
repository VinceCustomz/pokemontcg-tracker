const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

SALT_ROUNDS = 6;

module.exports = {
    signup,
    login
}

async function signup (req, res) {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, SALT_ROUNDS)
        console.log(hashedPass)
        const user = await User.create({
            name: req.body.name, 
            email: req.body.email, 
            password: hashedPass,
        });
    
        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });

        res.status(200).json(token);
      } catch (err) {
        res.status(400).json(err);
      }
}

async function login (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (!(await bcrypt.compare(user.password, req.body.password))) throw new Error();

        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
        res.status(200).json(token)
        } catch {
        res.status(400).json('Bad Credentials');
        }
}