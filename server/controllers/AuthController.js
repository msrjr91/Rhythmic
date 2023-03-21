const { Users } = require('../models')
const middleware = require('../middleware')

// Register - Insomnia format
  // {
  //   "name": "",
  //   "email": "",
  //   "passwordInput": "",
  // 	"username": "",
  // 	"isArtist": "",
  // 	"avatar": ""
  // }
const Register = async (req, res) => {
  try {
    const { name, email, passwordInput, username, isArtist, avatar } = req.body
    let password = await middleware.hashPassword(passwordInput)
    const user = await Users.create({ name, email, password, username, isArtist, avatar })
    res.send(user)
  } catch (error) {
    throw error
  }
}

// Login - Insomnia format
  // {
  //   "name": "",
  //   "email": "",
  //   "passwordInput": ""
  // }
  // Remember to add bearer token
const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.passwordInput))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await Users.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
