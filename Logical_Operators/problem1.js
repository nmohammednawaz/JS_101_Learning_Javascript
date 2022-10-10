// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
let year_of_birth = 2023;
if(year_of_birth > 2022){
  console.log("Please enter year of birth less than 2023")
}
let age = 2022 - year_of_birth;
if(age >= 20 && age <= 29){
  console.log("Twenties");
}else if(age >= 13 && age <= 19){
  console.log("Teenage");
}
