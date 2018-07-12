// 获取优先级
let getPriority = sign => {
  return ['+-', '/*'].findIndex(str => str.includes(sign));
};

let getBolan = str => {
  const stack = [];
  let bolan = [];
  str = str.split(' ');
  // 获取栈顶元素
  const peek = () => stack[stack.length - 1];

  for (let i = 0; i < str.length; i++) {
    const sign = str[i];
    if (!isNaN(sign)) {
      bolan.push(sign);
    } else {
      if (sign === ')') {
        let popStr;
        while (popStr !== '(') {
          popStr = stack.pop();
          if (popStr !== '(' && popStr !== ')') {
            bolan.push(popStr);
          }
        }
      } else {
        // 栈顶优先级高就出栈
        const signPriority = getPriority(sign);
        if (signPriority > -1 && signPriority < getPriority(peek())) {
          while (peek() && signPriority < getPriority(peek())) {
            const popStr = stack.pop();
            bolan.push(popStr);
          }
          bolan.push(sign);
        } else {
          stack.push(sign);
        }
      }
    }
  }
  return bolan.concat(stack.reverse());
};

let calcBolan = str => {
  const bolan = getBolan(str);
  const result = [];
  while (bolan.length) {
    const str = bolan.shift();
    if (!isNaN(str)) {
      result.push(str);
    } else {
      const num2 = +result.pop();
      const num1 = +result.pop();
      if (str === '+') {
        result.push(num1 + num2);
      }
      if (str === '-') {
        result.push(num1 - num2);
      }
      if (str === '*') {
        result.push(num1 * num2);
      }
      if (str === '/') {
        result.push(num1 / num2);
      }
    }
  }
  return result[0];
};

calcBolan('9 + ( 3 - 1 ) * 3 + 10 / 2');
