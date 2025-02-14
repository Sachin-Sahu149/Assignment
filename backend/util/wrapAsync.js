

export const wrapAsync = function(fn){
    return function(req,res,next){
        fn(req,res).catch(function(error){
            next(error);
        });
    }
}