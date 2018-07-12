// 获取优先级
const comparePriority = sign => {
  return ['+-', '/*'].findIndex(str => str.includes(sign));
};

const isNumber = n => !isNaN(n);

const getBolan = str => {
  const stack = [];
  let bolan = [];
  str = str.split(' ');
  // 获取栈顶元素
  const peek = () => stack[stack.length - 1];

  for (let i = 0; i < str.length; i++) {
    const sign = str[i];
    if (isNumber(sign)) {
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
        const signPriority = comparePriority(sign);
        if (signPriority > -1 && signPriority < comparePriority(peek())) {
          while (peek() && signPriority < comparePriority(peek())) {
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

const calc = str => {
  const bolan = getBolan(str);
  const stack = [];
  while (bolan.length) {
    const str = bolan.shift();
    if (isNumber(str)) {
      stack.push(str);
    } else {
      const num2 = +stack.pop();
      const num1 = +stack.pop();
      if (str === '+') stack.push(num1 + num2);
      if (str === '-') stack.push(num1 - num2);
      if (str === '*') stack.push(num1 * num2);
      if (str === '/') stack.push(num1 / num2);
    }
  }
  return stack[0];
};

calc('9 + ( 3 - 1 ) * 3 + 10 / 2');
