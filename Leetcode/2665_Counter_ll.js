var createCounter = function(init) {
    let c = init;
    function increment(){
        c++;
        return c;
    }
    function decrement(){
        c--;
        return c;
    }
    function reset(){
        c= init;
        return c;
    }

    return {
        increment,
        decrement,
        reset
    }
};