const router = require('express').Router();
const bcrypt = require("bcryptjs")
const db = require("./auth-model")
const jwt = require("jsonwebtoken")
const auth = require("../auth/authenticate-middleware")

router.post('/register', async (req, res, next) => {
  // implement registration
  try {
    const {username, password } = req.body
    const user = await db.findBy({username}).first()

    if (user) {
        return res.status(409).json({
            message: "Username is already taken"
        })
    }

    const regUser = await db.add({
        username,
        password:await bcrypt.hash(password, 13),
    })

    res.status(201).json(regUser)

    } catch(err) {
        next(err)
    }
});

router.post('/login', async (req, res, next) => {
  // implement login
  try {
		const { username, password } = req.body
		const user = await db.findBy({username}).first()
		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}
		
		const passwordVld = await bcrypt.compare(password, user.password)
		if(!passwordVld) {
			return res.status(401).json({
				message: "Invalid Credentials"
			})
		}

		req.session.user = user

		res.json({
			message: `${user.username} successfully logged in.`,
		})
	} catch(err) {
		next(err)
	}
});

router.get("/logout", async (req, res, next) => {
	try {
		req.session.destroy((err) => {
			if (err){
				next(err)
			} else {
				res.status(204).end()
			}
		})
	} catch (err){
		next(err)
	}
})

module.exports = router;
