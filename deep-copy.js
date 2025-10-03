function deepCopy(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }
    if (value instanceof RegExp) {
        return new RegExp(value);
    }
    if (Array.isArray(value)) {
        return value.map(x => deepCopy(x));
    }
    const copy = {};
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copy[key] = deepCopy(value[key]);
        }
    }
    return copy;
}