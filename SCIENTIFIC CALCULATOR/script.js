function fact(){
    const num=Number(document.getElementById('res').value);
    let val=1;
    for(let i=1;i<=num;i++){
        val=val*i;
    }
    let result=document.getElementById('res');
    result.value=val;
}
function calc(){
    if(res.value.indexOf('^')!=-1){
        let s=res.value.split('^');
        res.value=Math.pow(s[0],s[1]);
    }
    else{
    res.value=eval(res.value);
    }
}

