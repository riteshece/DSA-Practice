//NaN function
function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }
  
  console.log(sanitise("121"));