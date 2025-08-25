var cancellable = function(fn, args, t) {
    const id = setTimeout (() => {
        fn(...args)},t )
        const cancelfn = function(){
            clearTimeout(id)
        }
        return cancelfn
};

// re do it with other logic
// not understood the question well