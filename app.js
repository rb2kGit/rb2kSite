//Constant declarations.
const express = require("express")
const expressHB = require('express-handlebars')
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const randomstr = require("randomstring")
const session = require("client-sessions");

//App declarations.
app.engine("handlebars", expressHB({defaultLayout: 'default'}))
app.set("view engine", "handlebars")
app.use(express.static(path.join(__dirname, "/public")))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Session Middleware
let randomSecret = randomstr.generate()
app.use(session({
    cookieName: "Session",
    secret: randomSecret,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true
}))

//Routes
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/rb2ksite", (req, res) => {
    res.render("rb2ksite_page")
})
app.get("/pongsite", (req, res) => {
    res.render("pong_page")
})
app.get("/leaguesite", (req, res) => {
    res.render("league_page")
})
app.get("/javasite", (req, res) => {
    res.render("java_page")
})
app.get("/csite", (req, res) => {
    res.render("c_page")
})
app.get("/flappysite", (req, res) => {
    res.render("flappy_page")
})
app.get("/servicesite", (req, res) => {
    res.render("services_page")
})
app.get("*", (req, res) => {
    res.redirect("/")
})


//Ports
const HTTPort = process.env.PORT || 3000
app.listen(HTTPort, () => {
    console.log(`Listening on port ${HTTPort}`)
})


/*MongoClient.connect(mongoURL, (err, client) => {
    if (err){
        console.log("There was an error connecting to the database.")
        throw err
    }

    console.log("Database connection successful.")



})*/