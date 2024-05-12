const express = require("express")
const apiRouter = express.Router()

const userRouter = require("./user")
apiRouter.use("/",userRouter)

const crudRouter = require("./crud")
apiRouter.use("api", crudRouter)

module.exports = apiRouter;