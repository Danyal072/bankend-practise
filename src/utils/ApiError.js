class ApiError extends Error {
    constructor(
        StatusCode,
        message = "Something went wrong.",
        errors = [],
        statck = ""
    ){
        super(message)
        this.StatusCode = StatusCode
        this.data = null
        this.message = message
        this.sucess = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}