// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_user = "abc@gmail.com";
let database_pass = "pass@123";

let user = "abc@gmail.com";
let pass = "pass@123";

if(database_user == user){
  if(database_pass == pass){
    console.log("Login Successfull..!")
  }else{
    console.log("Wrong Password..!");
  }
}else{
  console.log("Incorrect Credentials..!");
}