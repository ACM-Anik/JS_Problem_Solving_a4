// #module_release #basic_javascript_milestone #module_24


// Problem 1: Let’s play a mind game

// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

// Sample Input & Output

// Input: 5
// Output: 7.5

// Input: 50
// Output: 75

// Input: 33
// Output: 49.5

// Answer:-
// To get a math result we have to do a all the basic math in a function:-
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
const subtraction = mindGame(5);
console.log(subtraction);



// Problem 2: Finding even or odd

// তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

// Input: ‘Phero’
// Output: odd

// Input: ‘Batch7’
// Output: even

// Input: ‘chatgpt’
// Output: odd

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
const odd = evenOdd("Phero");
console.log(odd);





// Problem 3: Is Less or Greater than seven

// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

// Input : 6
// Output: -1

// Input: -15
// Output: -22

// Input: 15
// Output: 30

// Answer:-
// To find the difference between two numbers:-
function isLGSeven(number){
    if( typeof number !== "number"){
        return "Please enter a number";
    }
    const difference = number - 7;
    if(difference < 7){
        return difference;
    }
    else if(difference > 7){
        let double = number * 2;
        return double;
    }
}
const result = isLGSeven(6);
console.log(result);



// Problem 4: Finding Bad data

// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

// Sample Input & Output:-

// Input: [ 1,2,5 ]
// Output: 0

// Input: [ 2, -5, -7, -13 ]
// Output: 3

// Input: [ -4, -9, -5, -33, -55 ]
// Output: 5

// Answer:- 
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
const negative = findingBadData([-4, -9, -5, -33, -55]);
console.log(negative);




// Problem 5: Convert your gems into diamond

// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-

// Input: 1, 1, 1
// Output: 96

// Input: 20, 200, 50
// Output: 6970

// Input: 100, 5, 1
// Output: 303

// Answer:-

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
const diamond = gemsToDiamond(20, 200, 50);
console.log(diamond);








// কিছু কমন প্রশ্ন: 

// প্রশ্ন-১: ফ্যাংশন এর ভিতরে কি console.log লিখবো নাকি রিটার্ন করবো?

// উত্তর: তুমি চাইলে তোমার নিজের জন্য বা বুঝার জন্য console.log লিখতে পারো। সেটা অপশনাল। তবে ফাংশনের রেজাল্ট অবশ্যই রিটার্ন করতে হবে। সেটা console.log করলে কাজ হবে না। 


// প্রশ্ন-২: সবসময় কি সংখ্যা বা স্ট্রিং রিটার্ন করবো।


// উত্তর: সব প্যারামিটার ঠিক থাকলে সঠিক সংখ্যা বা সঠিক ভ্যালু রিটার্ন করবে। যদি এক বা একাধিক ইনপুট খারাপ থাকে তাহলে কোন error স্ট্রিং হিসেবে রিটার্ন করে দিবে। 


// যদি সংখ্যা রিটার্ন করার কথা সেখানে সংখ্যা রিটার্ন করবে। যদি বুলিয়ান ভ রিটার্ন করার কথা সেখানে true/false রিটার্ন করবে।


// অর্থাৎ টোটাল খরচ কত হবে সেখানে জাস্ট সংখ্যা রিটার্ন করবে। সেখানে জোর করে সংখ্যাকে স্ট্রিং এ কনভার্ট করে। বা your total cost is 200 taka এমন করা যাবে না। জাস্ট 200 রিটার্ন করে দিবে। 


// প্রশ্ন-৩: ফাংশনের বাইরে কি console.log করতে হবে?

// উত্তর: ফাংশনের বাইরে console.log লেখা বা না লেখা অপশনাল। তুমি চাইলে তোমার কোড চেক করার জন্য। বা যে রেজাল্ট দেয়ার কথা সেটা ঠিক মতো দিচ্ছে কিনা সেটা ভেরিফাই করার জন্য ওই ফাংশনকে কল করে তার রিটার্ন যে ভ্যালু আছে সেটা console.log করে চেক করতে পারো। তবে আমাদের এসাইনমেন্ট এর জন্য এইটা করা জরুরি না। আমরা শুধু মেইন ফাংশনটা নিয়ে সেটাকে চালিয়ে দেখবো ঠিকমতো কাজ করছে কিনা। 


// প্রশ্ন-৪: var ব্যবহার করা যাবে?

// উত্তর: না। let/const ব্যবহার কর। 


// প্রশ্ন-৫: ইউজারের কাছ থেকে কোন ইনপুট নিতে হবে? [ IMPORTANT ]

// উত্তর: এসাইনমেন্ট এর জন্য ইউজারের কাছ থেকে কোন ইনপুট নেয়া লাগবে না। জাস্ট ফাংশন লিখলেই হবে। আমরা তোমার কোড নিয়ে সেটার ফাংশনকে কল করবো। 

// তুমি চেক করার সময় ইনপুট প্যারামিটার দিয়ে চেক করতে পারো। তারপর চেক করা শেষ হলে সেই কোড অবশ্যই কমেন্ট করে ফেলতে হবে অথবা মুছেই ফেলতে পার।আমরা শুধু ফাংশনের ভিতরে ঠিক আছে কিনা দেখব । তাই সাবমিট কড়ার সময় তোমাদের console.log গুলো অবশ্যই মুছে ফেলবা।

//  ফাংশনকে আমরা বিভিন্ন সংখ্যা -- ভালো এবং খারাপ সংখ্যায় দিয়ে কল করবো। তখন যদি ঠিক রেজাল্ট দেয় তাহলেই হবে। তোমাদের সুবিধার্থে নিচে একটি ডেমো দেWRONG FORMAT

// -problem 1



// function makeDouble(number){

//  // do not write anything like this, just return the result

//  return "Problem one result: " + number* 2;

// }

// const result = makeDouble(5);

// // remove any console.log() or function call like this form here👆



// CORRECT FORMAT



// function makeDouble(number) {

//  return number * 2;

// }



// হা হা কি মজা !!!



// এসাইনমেন্ট ডেডলাইন + মার্কস:
// ৭ ফেব্রুয়ারি , রাত ১১.৫৯ (বাংলাদেশ সময়) এর মধ্যে তোমার এসাইনমেন্ট জমা দিলে তোমার সর্বোচ্চ মার্কস ৬০ মার্কস (৫০ এসাইনমেন্ট এর মার্কস + ১০ মার্কস বোনাস) । এরপরের দিন অর্থাৎ ৮ ফেব্রুয়ায়রি, রাত ১১.৫৯ (বাংলাদেশ সময়) এর মধ্যে তোমার এসাইনমেন্ট জমা দিলে তোমার সর্বোচ্চ মার্কস ৫০ মার্কস (৪০ এসাইনমেন্ট এর মার্কস + ১০ মার্কস বোনাস)। তুমি যদি এর চাইতেও দেরি করো অর্থাৎ ৮ ফেব্রুয়ারি, রাত ১১.৫৯ এর পরে সাবমিট করো, তাহলে তোমার সর্বোচ্চ মার্কস ৩০ মার্কস।



// হা হা কি মজা !!!



// যেমন তেমন আসুক না এসাইনমেন্ট 

// মডিউল ঠিকমতো প্রাকটিস করলে-- 

// এসাইনমেন্ট, হয়ে যাবে তোমার এসিস্ট্যান্ট

