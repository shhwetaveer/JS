async function sleep(millis) {
    return new Promise( resolve => setTimeout(resolve,millis))
}

//We don’t need an extra wrapper like () => resolve() because resolve itself is a function. Passing resolve directly is just a shortcut.