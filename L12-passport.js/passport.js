const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "236545675483-42mt2srqs03e3729bne7fh75ma99km5n.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));
