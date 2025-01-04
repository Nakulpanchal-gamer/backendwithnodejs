class ApiError extends Error{
    constructor(
        statuscode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statuscode
        this.data = null
        this.mesage = message
        this.success = false;
        this.errors = errors   
        
        if(statck){
            this.stack=statck
        }
        else{
            Error.ccaptureStackTreace(this, this.constructor)
        }
    }
}

export {ApiError}