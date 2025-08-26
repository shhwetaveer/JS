var cancellable = function(fn, args, t) {
    fn(...args);

    let timer = setInterval(() => {
        fn(...args);
    }, t);

    return () => clearInterval(timer);
};