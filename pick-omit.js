function pick(obj, arr) {
    if (typeof arr === 'string') {
        arr = [arr]; 
    }

    let { appear } = getKey(obj, arr);
    let o = {};
    for (let i = 0; i < appear.length; i++) {
        o[appear[i]] = obj[appear[i]];
    }
    return o;
}

function omit(obj, arr) {
    if (typeof arr === 'string') {
        arr = [arr]; 
    }
    let { notappear } = getKey(obj, arr);
    let o = {};
    for (let i = 0; i < notappear.length; i++) {
        o[notappear[i]] = obj[notappear[i]];
    }
    return o;
}

function getKey(obj, arr) {
    if (typeof arr === 'string') {
        arr = [arr]; 
    }
    let appear = [];
    let notappear = [];
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        if (arr.includes(keys[i])) {
            appear.push(keys[i]);
        } else {
            notappear.push(keys[i]);
        }
    }
    return { appear, notappear };
}