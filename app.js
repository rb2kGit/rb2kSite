//Constant declarations.
const express = require("express")
const expressHB = require('express-handlebars')
const path = require("path")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const app = express()
const randomstr = require("randomstring")
const session = require("client-sessions");
//const database = client.db("rb2kSite")

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
    res.render("landing")
})

app.get("/rb2ksite", (req, res) => {
    res.render("rb2ksite_page")
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