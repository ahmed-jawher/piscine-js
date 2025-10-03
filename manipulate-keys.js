function filterValues(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        if (func(nutrients[key], key, nutrients)) {
            obj[key] = nutrients[key]
        }
    });
    return obj
}
function mapValues(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        obj[key] = func(nutrients[key], key, nutrients)
    });
    return obj
}
function reduceValues(nutrients,func,acc=0){
    Object.keys(nutrients).forEach(key => {
        acc= func(acc,nutrients[key])
    });
    return acc
}