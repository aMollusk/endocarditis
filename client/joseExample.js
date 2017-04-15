
function add(a, b, modifier){
    if(modifier) {
        newA = modifier(a)
        newB = modifier(b)
    } else {
        newA = a
        newB = b
    }

    console.log(newA + newB)
}

add(1, 1, function(arg){
    return arg + 1
})