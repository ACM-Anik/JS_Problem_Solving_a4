// To get a math result we have to do a all the basic maths (given) in a function:-
function mindGame(number){
    if( typeof number !== "number" || number < 0 ){
        return "Please enter a positive number";
    }
    let multiplication = number * 3;
    let sum = multiplication + 10;
    let division = sum / 2;
    let subtraction = division - 5;
    return subtraction;
}




// To find the number, is it really even or odd:-
function evenOdd(string){
    if( typeof string !== "string"){
        return "Please enter a string";
    }
    let stringLength = string.length;
    if(stringLength % 2 === 0){
        return "even";
    }
    else if(stringLength % 2 !== 0){
        return "odd";
    }
}




// To find the difference between two numbers. If difference is lower than 7, then have to show input number but if difference is bigger than 7 , then return will be double :-
function isLGSeven(number){
    if( typeof number !== "number"){
        return "Please enter a number";
    }
    const difference = number - 7;
    if(difference < 7){
        return difference;
    }
    else if(difference > 7){
        let double =Math.pow(difference);
        return double;
    }
}




// To find the negative numbers' length of an array:-
function findingBadData(number){
    if( number.length === 0 || !Array.isArray(number)){
        return "Please provide an valid Array";
    }
    let negative = [];
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if(element < 0){
            negative.push(element);
        }
    }
    const negativeLength = negative.length;
    return negativeLength;
}




// To convert the gems to diamond and do the sum of them and return the sum by subtracting 2000 if the sum is bigger than 1000's double  :-
function gemsToDiamond(firstFriend, secondFriend, thirdFriend){
    if( typeof firstFriend !== "number" || typeof secondFriend !== "number" || typeof thirdFriend !== "number" || firstFriend < 0 || secondFriend < 0 || thirdFriend < 0 ){
        return "Please enter the numbers with positive value";
    }
    let firstGemsPower = 21;
    let secondGemsPower = 32;
    let thirdGemsPower = 43;
    const firstConvertedDiamond = firstFriend * firstGemsPower;
    const secondConvertedDiamond = secondFriend * secondGemsPower;
    const thirdConvertedDiamond = thirdFriend * thirdGemsPower;
    const totalDiamond = firstConvertedDiamond + secondConvertedDiamond + thirdConvertedDiamond;
    if(totalDiamond > (1000 * 2)){
        existedDiamond = totalDiamond - 2000;
        return existedDiamond;
    }
    else if(totalDiamond < (1000 * 2)){
        return totalDiamond;
    }
}
