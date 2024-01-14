// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//asnwer: 
function negativeOrNot(a){
    if(a>0){
        return "POSITIVE"
    }else if(a==0){
        return "Neither positive or negative"
    }else{
        return "NEGATIVE"
    }
}
let number = prompt("შეიყვანეთ რიცხვი")
console.log("Number is " + negativeOrNot(number))

//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

//asnwer: 

let operator = prompt('შეიყვანეთ მოქმედება')
let num1 =parseFloat(prompt("შეიყვანეთ რიცხვი")) 
let num2 =parseFloat(prompt("შეიყვანეთ რიცხვი"))
switch (operator) {
    case '/':
        console.log(num1 / num2)
        break;
    case '-':
        console.log(num1 - num2)
        break;
    case '+':
        console.log(num1 + num2)
        break;
    case '*':
        console.log(num1 * num2)
        break;

    default:
        console.log("Error")
        break;
}
//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer: 
let operator = prompt('შეიყვანეთ მოქმედება')
let num1 =parseFloat(prompt("შეიყვანეთ რიცხვი")) 
let num2 =parseFloat(prompt("შეიყვანეთ რიცხვი"))

if(operator == "-"){
    console.log(num1 - num2)
}else if(operator == "+"){
    console.log(num1 + num2)
}else if(operator == "*"){
    console.log(num1 * num2)
}else if(operator == "/"){
    console.log(num1 / num2)
}else{console.log("ERROR")}

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer: 

function Registration(a,b,c,d,e,){
    if(a==='' || b==='' || c==="" || d==="" || e==""){
        return "input is required"
    }else{
        return "შენ წარმატებით დარეგისტრირდი"
    }
}
let firstName = prompt("სახელი")
let lastName = prompt('გვარი')
let email = prompt("იმეილი")
let passsword = prompt("პაროლი")
let phoneNumber = prompt("ნომერი")

console.log(Registration(firstName,lastName,email,passsword,phoneNumber))