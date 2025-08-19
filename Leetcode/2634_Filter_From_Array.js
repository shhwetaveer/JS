var filter = function(arr, fn) {
    let newA =[];
    for(let i = 0; i <arr.length; i++){
        if(fn(arr[i],i)){
            newA.push(arr[i]);
        }
    }
    return newA;
};