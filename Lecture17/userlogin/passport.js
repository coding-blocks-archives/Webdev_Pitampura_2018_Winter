const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const {
  Users
} = require('./models')


passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await Users.findOne({
        where: {
          username: username
        }
      })

      if (!user) {
        return done(null, false, {message: 'Username invalid'})
      }

      if (user.password !== password) {
        return done(null, false, {message: 'Password invalid'})
      }

      done(null, user)



    } catch (e) {
      done(e)
    }

  }
))

passport.serializeUser(
  (user, done) => {
    done(null, user.id)
  }
)

passport.deserializeUser(
  (userId, done) => {
    Users.findOne({
      where: {id: userId}
    })
    .then((user) => done(null, user))
    .catch(done)
  }
)

module.exports = passport
