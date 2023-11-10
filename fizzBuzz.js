const FizzBuzz =(n)=>{
    if(n<1 || !!!Number.isInteger(n) ){
        return console.log('saisir un nombre sup ou egale a 1')
    }
    for(let i=1 ; i <= n; i++) {
        console.log(messageFizzBuzz(i)) ;
    }
};

const messageFizzBuzz=(i)=>{
    let msgFizBuzz='';

    if(i % 3 === 0){
        msgFizBuzz+='Fizz';
    }
    if(i % 5 ===0){
        msgFizBuzz +='Buzz';
    }

    return msgFizBuzz || i
}
FizzBuzz(2000);
