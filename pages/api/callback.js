import auth0 from '../../lib/auth0'

const callback = async (req, res) => {
  console.log(req)
  await auth0.handleCallback(req, res, { redirectTo: '/' })
}

export default callback