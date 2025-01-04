const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))

    }
}



export {asyncHandler}

// const asyncHandler = (fn) => async (requestAnimationFrame, response, next) => {
//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         response.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }