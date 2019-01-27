function AddNumber(a,b)
{
    return new Promise(function(resolve,reject){
        if(typeof a==='number'&& typeof b==='number')
        resolve(a+b);
        else
        reject('Please Enter The Valid Number!');
    })
}

AddNumber(2,4).then(function(c){
    console.log(c);
},function(err){
    console.log(err);
});