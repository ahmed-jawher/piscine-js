function filterKeys(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        if (func(key)) {
            obj[key] = nutrients[key]
        }
    });
    return obj
}
function mapKeys(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        let k = key;
        obj[func(key)] = nutrients[key]
    });
    return obj
}
function reduceKeys(nutrients, func, acc) {
    const keys = Object.keys(nutrients);
    if (typeof acc ==="undefined") {
        acc=keys[0]
    }else{
        acc = func(acc, keys[0])
    }
    for (let i = 1; i < keys.length; i++) {
        acc = func(acc, keys[i])
    }
    return acc
}