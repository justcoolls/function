function deepClone(obj) {
    const deepObj = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] && typeof obj[key] === "object") {
                deepObj[key] = deepClone(obj[key])
            } else {
                deepObj[key] = obj[key];
            }
        }
    }
    return deepObj;
}

const q = deepClone([3, 4, 5])
const w = deepClone({q: 1, w: {e: [6, 7, 8]}})
console.log(q,w)