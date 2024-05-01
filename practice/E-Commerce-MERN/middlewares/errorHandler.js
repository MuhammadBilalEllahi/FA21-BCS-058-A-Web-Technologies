// not Found

const notFound = (req,res,next)=>{
    const error = new Error(`Not Found ${req.orignalUrl}`)
    res.staus(404)
    next(error);
}
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.statusCode(statusCode)
    res.json({
        message: err?.message,
        stack: err?.stack
    })

}

module.exports = {notFound, errorHandler}