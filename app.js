//Constant declarations.
const express = require("express")
const expressHB = require('express-handlebars')
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const randomstr = require("randomstring")
const session = require("client-sessions");

//App declarations.
app.engine("handlebars", expressHB({defaultLayout: 'default', layoutsDir: __dirname + '/views/layouts',}))
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

let metaObj = {
    title: 'A.S. Portfolio',
    desc: 'A portfolio website for a programmer and entrepreneur based in Toronto.',
    keywords: 'Portfolio, Arby, Arber, Shpiragu'
}

//Routes
app.get("/", (req, res) => {
    res.render("index", {
        metaObj
    })
})
app.get("/contactPage", (req, res) => {
    res.render("contact")
})
app.get("/projectPage", (req, res) => {
    res.render('projects_page')
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