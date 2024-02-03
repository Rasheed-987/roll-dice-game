let count1 =0;
function rollDice(){
    let theNum= Math.trunc(Math.random()*6+1);
    console.log(theNum);
       var theImg=document.querySelector('.img img');
        theImg.src=`dice-${theNum}.png`;
        counter(theNum);
        
        document.querySelectorAll('.score').forEach(function (element) {
             element.textContent = 'Current Score: ' + theNum;
         });
         }
    
function counter(theNum){
   count1+=theNum; 
   document.querySelectorAll('.count').forEach(function (element) {
        element.textContent = 'Count: ' + count1;
    });

}        

function reset(){
count1 = 0;
theNum=0;
document.querySelectorAll('.count').forEach(function (element) {
element.textContent = 'Count: ' + count1;
});
document.querySelectorAll('.score').forEach(function (element){
element.textContent=theNum;
});
}          
   
