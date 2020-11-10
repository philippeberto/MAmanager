import auth0 from '../../lib/auth0'

const login = async (req, res) => {
  try { await auth0.handleLogin(req, res) }
  catch (err) { }
}

export default login