class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        error = [],
        stack = ""
    ){
      super()  
    }

    

}

/*
Here, ApiError class is extending Error class and we know we've constructors of Error class available here, but will create our own constructor, and we will override this constructor too in super().
In message, if something is not passed form user, then we've set a default message for safety.
For giving multiple errors, we've taken an empty array of errors by default.
For giving error stack, we've taken error stack, keep it empty by default.

Now, as we know for overriding we always call super() in constructor.
In super, put message (mtlb message to override krna hi krna h)

override statuscode -> 
this.statusCode = statusCode (by our statuscode)

override data ->
this.data = null (by our data)

override message ->
this.message = message (by our message)

override success ->
this.success = false  (by our success flag)

override errors ->
this.errors = errors  (by our errors array)


*/