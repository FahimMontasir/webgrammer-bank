document.getElementById('loginBtn').addEventListener('click', function(){
    document.getElementById('loginPage').style.display= 'none';
    document.getElementById('transactionArea').style.display= 'block';
})

document.getElementById('depositBtn').addEventListener('click',function(){
    const depositNumber =getInputNumber ('depositValue');
    getSpanResult('currentDeposit',depositNumber)
    getSpanResult('currentBalance',depositNumber)

   
    
})
document.getElementById('withdrawBtn').addEventListener('click',function () {
    const withdrawNumber = getInputNumber ('withdrawValue');
    
    if( withdrawNumber < 0){
       document.getElementById('withdrawValue').value = "invalid";
      
    }
    else {
        getSpanResult('currentBalance',-1*withdrawNumber);
        getSpanResult('currentWithdraw',withdrawNumber);
    }

})



function getInputNumber (id){
    const stringValue = document.getElementById(id).value;
    const convertedNumber = parseFloat(stringValue); 
    return convertedNumber;
}
function getSpanResult(id,convertedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = convertedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}