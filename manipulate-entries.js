function filterEntries(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        if (func([key,nutrients[key]])) {
            obj[key]=nutrients[key] 
        }
    });
    return obj
}

function mapEntries(entries, mapper) {
    let temp = {};
    for (let key in entries) {
        temp[key] = mapper([key, entries[key]]);
    }
    let res = {};
    for (let key in temp) {
        res[temp[key][0]] = temp[key][1];
    }
    return res;
}



// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }
function totalCalories(obj){
    const keys = Object.keys(obj);
    let t=0
    for (let i=0;i<keys.length;i++){
        t=t+((obj[keys[i]]/100)*nutritionDB[keys[i]].calories)
    }
    return Number(t.toFixed(1))
}

function cartTotal(obj){
    let carts={}
    const keys = Object.keys(obj);
    for (let i=0;i<keys.length;i++){
        let c=nutritionDB[keys[i]]
        const k = Object.keys(c);
        for (let j=0;j<k.length;j++){
            c[k[j]]=Number(((obj[keys[i]]/100)*c[k[j]]).toFixed(3));
        }        
        carts[keys[i]]=c
    }  
    return carts
}

function lowCarbs(obj){
    const keys = Object.keys(obj);
    let res={}
    for (let i=0;i<keys.length;i++){
        let t=(obj[keys[i]]/100)*nutritionDB[keys[i]].carbs
        if (t<=50){
            res[keys[i]]=obj[keys[i]]
        }
    }
    return res
}


function reduceEntries(nutrients, func, acc) {
    const keys = Object.keys(nutrients);
    if (typeof acc ==="undefined") {
        acc=keys[0]
    }else{
        acc = func(acc, [keys[0],nutrients[keys[0]]])
    }
    for (let i = 1; i < keys.length; i++) {
        acc = func(acc, [keys[i],nutrients[keys[i]]])
    }
    return acc
}