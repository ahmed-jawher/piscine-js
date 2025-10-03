function pronoun(s){
    let str=maniplst(s)
    let w=str.split(' ')
    w=w.filter((x)=> x!='')
    let obj={}
    let pronoun=""
    for (let i=0;i<w.length;i++){

        if (check(w[i])){
            if (obj.hasOwnProperty(w[i].toLowerCase())){
                obj[w[i].toLowerCase()].count++
            }else{
                obj[w[i].toLowerCase()]={word:[],count:1}
            }
            pronoun=w[i].toLowerCase()
        }
        if (pronoun!="" && !check(w[i])){
            obj[pronoun].word.push(w[i])
            pronoun=""
        }
    }
    return obj
}
function check(word){
    word=word.toLowerCase()
    let Pronouns=["i","you","he","she","it","they","we"]
    for (let i=0;i<Pronouns.length;i++){
        if (word==Pronouns[i]){
            return true
        }
    }
    return false
}

function maniplst(st){
    let str = ""
    const stand = /[ a-zA-Z0-9]/
    for (let i = 0 ; i< st.length; i++){
        if (!stand.test(st[i])){
            if (i!=0)
            str += " "
            continue
        }
        str+=String(st[i])
    }
    let a=str.split(' ')
    str=""
    for (let i = 0 ; i< a.length; i++){
        if (a!=""){
            str+=a[i]
            if (i!=a.length-1){
                str+=' '
            }
        }
    }

    return str
}