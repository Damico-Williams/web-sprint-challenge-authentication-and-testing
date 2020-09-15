/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/


function authenticate() {
  const authError = {
    message: "Invalid credentials",
}

  return async (req, res, next) => {
    try{
      if(!req.session || !req.session.user) {
        return res.status(401).json(authError);
      }
      next()
    } catch (err) {
      next(err)
    }
  } 
}

module.exports = {
  authenticate
}
