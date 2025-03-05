let number = parseInt(prompt("Vui lòng nhập vào một số nguyên"));
if (isNaN(number)) {
  console.log("Nhập lại đi pro");
} else {
  console.log(`Các ước của số ${number} là:`);
  for (let i = 1; i <= number; i++) { 
    if (number % i === 0) { 
      console.log(i);
    }
  }
}
