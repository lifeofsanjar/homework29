function arguments(arg1, arg2, arg3, arg4, arg5) {
    console.log("Argument 1:", arg1);
    console.log("Argument 2:", arg2);
    console.log("Argument 3:", arg3);
    console.log("Argument 4:", arg4);
    console.log("Argument 5:", arg5);
  }
  
// arguments("Salom", 42, true, [1, 2, 3], { ism: "John" });

const calculate = (a, b, c, d, e) => {
    const sum = a + b + c + d + e;
    const product = a * b * c * d * e;
    const difference = a - b - c - d - e;
    const quotient = a / b / c / d / e;
    const result = `Jami summa: ${sum} , Soni: ${product} , Farqi: ${difference} , Koeffitsiyenti: ${quotient}`;
    return result;
  };
  
  // Example usage of the function expression:
  const result = calculate(10, 2, 3, 5, 2);
  console.log(result);
  
  