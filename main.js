function clearDisplay() {
  document.querySelector("#display").innerText = "0";
}
function clearEntry() {
  document.querySelector("#display").innerText = "0";
}
function backspace() {
  let display = document.querySelector("#display");
  if (display.innerText.length > 0 && display.innerText !== "0") {
    display.innerText = display.innerText.slice(0, -1);
  }
  if (display.innerText.length === 0) {
    display.innerText = "0";
  } else {
    return;
  }
}

function appendNumber(number) {
  let display = document.querySelector("#display");
  if (display.innerText === "0") {
    display.innerText = "";
    document.querySelector("#display").innerText += number;
  } else {
    document.querySelector("#display").innerText += number;
  }
}
function containsOperator(str){
  for (let i = 0; i < str.innerText.length; i++) {
    if(str.innerText[0] !== "-" && 
      ( str.innerText[i] === "-" &&
        str.innerText[i-1] !== "+" && str.innerText[i-1] !== "/" && str.innerText[i-1] !== "*"
        
    )){
      return true;
    }
    if (
      str.innerText[i] === "+" ||
      str.innerText[i] === "/" ||
      str.innerText[i] === "*"
    ) {
      return true;
    }
  }

}
function appendOperator(operator) {
  let display = document.querySelector("#display");
  let lastChar = display.innerText.slice(-1);
  let result;
  let canAddOperator = !containsOperator(display);
  let canAddMinus = (operator === "-" && (lastChar === "+" || lastChar === "*" || lastChar === "/" ));
  if (
    (lastChar != "+" &&
    lastChar != "-" &&
    lastChar != "*" &&
    lastChar != "/" &&
    lastChar != "." &&
    lastChar != " " )||
    (operator === "-" )
  ) {
if (!canAddOperator && !canAddMinus) {
      let n1 = "",
        op = "",
        n2 = "";
      let flag = false;
      for (let i = 0; i < display.innerText.length; i++) {
        if (!flag) {
          while (
            i < display.innerText.length &&
            display.innerText[i] !== " " &&
            display.innerText[i] !== "+" &&
            (
              display.innerText[0] === "-" || display.innerText[i] !== "-" 
            )&&
            display.innerText[i] !== "*" &&
            display.innerText[i] !== "/"
          ) {
            n1 += display.innerText[i];
            i++;
          } 
          op = display.innerText[i];
          console.log("op:",op);
          flag = true;
        } else {
          n2 += display.innerText[i];        
        }
      }
      console.log( `n1: ${n1}, n2: ${n2}, op: ${op}`);
      result = calculate(parseFloat(n1), op, parseFloat(n2));
      console.log(result);
      document.querySelector("#display").innerText = result + operator;
    } else {

        if (display.innerText === "0") {
              display.innerText = "";
        document.querySelector("#display").innerText += operator;
      } else {
              document.querySelector("#display").innerText += operator;
      }
      
    }
  }
}

function calculate(n1, op, n2) {
  if (op == "+") {
    return n1 + n2;
  } else if (op == "-") {
    return n1 - n2;
  } else if (op == "*") {
    return n1 * n2;
  } else if (op == "/") {
    return n1 / n2;
  }
}
function calculateEqual() {
  let n1 = "",
    op = "",
    n2 = "";
  let display = document.querySelector("#display");
  let result;
  let flag = false;
  for (let i = 0; i < display.innerText.length; i++) {
    if (!flag) {
      while (
        i < display.innerText.length &&
        display.innerText[i] !== " " &&
        display.innerText[i] !== "+" &&
        (
          display.innerText[0] === "-" || display.innerText[i] !== "-" 
            ) &&
        display.innerText[i] !== "*" &&
        display.innerText[i] !== "/" 
      ) {
        n1 += display.innerText[i];
        i++;
      }
      op = display.innerText[i];
      flag = true;
    } else {
      n2 += display.innerText[i];
    }
  }
  console.log( `n1: ${n1}, n2: ${n2}, op: ${op} `);
  result = calculate(parseFloat(n1), op, parseFloat(n2));
  console.log(result);
  document.querySelector("#display").innerText = result;
}

