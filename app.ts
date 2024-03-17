//if & if & else statement ... conditional statement

/*let iscoldweather : boolean = false;  //if condition k liye yhan pr true likha tha

if(iscoldweather) {
console.log("wear jackit and socks");


}else{console.log("wear only clothes");


}*/

//marksheet
let englishMarks : number = 90;
let computerstudiesMarks : number = 80;
let staticsMarks : number = 65;

let totalMarks : number = 300;
let obtainedMarks : number = englishMarks+computerstudiesMarks+staticsMarks;
let percentage : number = (obtainedMarks/totalMarks)*100;

console.log("marksheet");
console.log("englishMarks:", englishMarks);
console.log("computerstudiesMarks:", computerstudiesMarks);
console.log("staticsMarks:", staticsMarks);
console.log("totalMarks:",totalMarks );
console.log("obtainedMarks:",obtainedMarks);
console.log("percentage:", percentage.toFixed(2), "%");

if (percentage >= 70){
    console.log("GRADE A")}
    
else if (percentage >= 60){
    console.log("GRADE B");}

else if (percentage >= 50){
    console.log("GRADE C")}

    else if (percentage >= 50){
        console.log("GRADE D")}

        else if (percentage >= 40){
            console.log("FAILED")}
    



