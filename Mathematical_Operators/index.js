let price = 4000;
let discount = price * 0.10;
let min_purchase = 3999;
if(price >= min_purchase){
  price = price - discount;
  console.log("Discount : 10%\nPrice = :"+price);
}else{
  console.log("Discount : NA\nPrice = :"+price);
}