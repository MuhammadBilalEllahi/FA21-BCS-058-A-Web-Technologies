const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute")
const productRoute = require("./routes/productRoute")
const blogRoute = require("./routes/blogRoute")
const categoryRoute = require("./routes/categoryRoute")
const blogCatRoute = require("./routes/blogCatRoute")
const prodCatRoute = require("./routes/productCategoryRoute")
const brandRoute = require("./routes/brandRoute")
const couponRoute = require("./routes/couponRoute")
const colorRoute = require("./routes/colorRoute")
const enqRouter = require("./routes/enqRoute")
const redirectionRouter = require("./routes/communicate/redirection")

const flash = require('express-flash')
const config = require("config");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const session = require("express-session");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
dbConnect()
let ejs_layout = require("express-ejs-layouts")



app.use(ejs_layout)
app.set("view engine", "ejs");
// app.set("views","./template/pages")
app.use(express.json());
app.use(express.static("public"))
// app.use(morgan("combined")) //pass combined to for dev and production
app.use(morgan('dev'))
// app.use(bodyParser()) //deprecated
app.use(bodyParser.json())  //helps send data from postman or etc
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// console.log(config.get("sessionSecret"))
// file excluded with gitignore
app.use(
    session({
        secret: config.get("sessionSecret"),
        cookie: { maxAge: 60000 },
        resave: true,
        saveUninitialized: true,
    })
);
app.use(flash());






app.use("/api/user", authRouter)
app.use("/api/product", productRoute)
app.use("/api/blog", blogRoute)
app.use("/api/category", categoryRoute)
app.use("/api/blogCategory", blogCatRoute)
app.use("/api/productCategory", prodCatRoute)
app.use("/api/brand", brandRoute)
app.use("/api/coupon", couponRoute)
app.use("/api/color", colorRoute)
app.use("/api/enquiry", enqRouter)

app.use("/", redirectionRouter)




// middlewares after routes
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
