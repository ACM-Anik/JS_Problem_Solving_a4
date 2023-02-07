function add(num2){
    if( typeof num2 !== "number"){
        return "Please enter a number";
    }
    else{
        return 10 + num2;
    }
    
}
const result = add(18);
console.log(result);

// typeof num1 !== 'number'||