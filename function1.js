// // regular expression

// // let p=79
// // let c=59
// // let m=88
// // let total =0
// // let percentage=0.0

// // total=p+c+m;

// // percentage=total/300*100;
// // console.log(total)
// // console.log(percentage)


// var p=79
// var c=59
// var m=88
// var total =0
// var percentage=0.0

// total=p+c+m;

// percentage=total/300*100;
// console.log(`mayank total=${total}`)
// console.log(`mayank percentage=${percentage}`)

// var p=75
// var c=95
// var m=85
// var total=0
// var percentage=0

// total=p+c+m
// percentage=total/300*100
// console.log(`ravi total=${total}`)
// console.log (`ravi percentage= ${percentage}`)


// function total(p,c,m){
//     let sum=p+c+m;
//     console.log(sum);
//     percentage(sum);
// }

// function percentage(sum){
//    let per=sum/300*100;
//     console.log(per);
// }
// total(55,66,77);
// total(75,98,88)

function total(n,p,c,m){
    let sum=p+c+m;
    console.log(`${n} sum=${sum}`);
    percentage(n,sum);
}
function percentage(n,sum){
    let per=sum/300*100;    
    console.log(`${n} percentage=${per}`)    
}
total("mayank", 55,66,77);
total("ravi", 75,98,88)




