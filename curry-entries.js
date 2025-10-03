function defaultCurry(obj) {
    return function (a) {
        return Object.assign({}, obj, a)
    }
}
function mapCurry(func) {
    return function (obj) {
        let arr=Object.entries(obj).map(([key, value]) => func([key, value]))
        let newobj={}
        for (let i=0;i<arr.length;i++){
            newobj[arr[i][0]]=arr[i][1]
        }
        return newobj
    }
}

function reduceCurry(func) {
    return function (obj, acc) {
        if (acc == 'undefined') {
            acc = ""
        }  
        return Object.entries(obj).reduce((a, [key, v]) => func(a, [key, v]), acc)
    }
}
function filterCurry(func) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).filter(([k, v]) => func([k, v])))
    }
}
function reduceScore(obj,total=0) {
    const newobj = filterCurry(([_, v]) => (Object.entries(filterCurry(([_, w]) => w === true)(v))).length != 0)(obj)
    Object.entries(newobj).forEach(([_, v]) => {total+=reduceCurry((a, [n, w]) => {
        if (n === 'shootingScore' || n === 'pilotingScore') {
           a+=w
        }
        return a
    })(v, 0)})
    return total
}
function filterForce(obj) {
   return filterCurry(([k, v]) => (Object.entries(filterCurry(([n, w]) => w === true && obj[k].shootingScore >=80)(v))).length != 0)(obj)
}
function mapAverage(obj) {
    return mapCurry(([k,v])=>{
        let total = 0
        total =reduceCurry((a, [n, w]) => {
            if (n === 'shootingScore' || n === 'pilotingScore') {
               a+=w
            }
            return a
        })(v, 0)
        const averageScore = "averageScore"
        v[averageScore]= total/2
        return [k,v]
    })(obj)
}