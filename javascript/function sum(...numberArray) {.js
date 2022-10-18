function sum(...numberArray) {
    const [,...r] = numberArray
     return r  
  }
  const result = sum(2, 3, 4, 5, 6 );
  console.log(result)