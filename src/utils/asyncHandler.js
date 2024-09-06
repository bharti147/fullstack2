/* TRY-CATCH METHOD

const asyncHandler = (fn) => async (req, res, next) => {

    try{
        await fn(req, res, next)
    }
    catch(error){
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}

----------------------------------------------->
This function is just a wrapper function, which we can use in future in need.

Jo hmne function pass kia h parameter m , hm usem se req, res extract kr lenge, and ek next bhi pass krenge for middleware

In catch, we can respond to error in many ways like usually we send a status and in this status we send a code,
if user has provided the error code, then we directly send -> err.code
                 &
if user hasn't passed any error code, then we'll take on our own like -> 500,etc.

Further, we also send a json response too after status code, so that frontend team can get a message either success:true or false, like ->
.json({
  success: false,
  message: err.message
})


In try part, execute the function that we've got in parameter and pass req, res, next in it

await fn(req, res, next)
----------------------------------------------->


export { asyncHandler }

*/

//PROMISES METHOD

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

/*
Here, we are naming the function that we are passing in parameter - requestHandler instead of fn

Here, we are using catch in place of reject.




*/
