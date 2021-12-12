
let f1 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{res("hi iam saync1")},5000)
       
    })
}

let f2 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{res("hi iam saync2")},1000)
       
    })
}
let f3 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{res("hi iam saync3")},10000)
       
    })
}




let fun = async()=>{
    let x 
    x = await f1()
    console.log(x)
    x= await f2()
    console.log(x)
   x= await f3()
    console.log(x)
}

fun()




