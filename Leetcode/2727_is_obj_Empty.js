var isEmpty = function(obj) {
    for (const key in obj) return false;
    return true;
};

// multiple approches (can use object.keys(obj_name).length )
