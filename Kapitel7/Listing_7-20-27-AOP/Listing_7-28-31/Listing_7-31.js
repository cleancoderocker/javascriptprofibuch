import { beforeMethod, Wove, Metadata } from '../aop.js/lib/aspect';
class LoggerAspect {
  @beforeMethod({
    classNamePattern: /^Calculator/,
    methodNamePattern: /^sum/
  })
  invokeBeforeMethod(meta: Metadata) {
    console.log(
      `Aufruf von ${meta.className}.${meta.method.name}() mit Argumenten:
${meta.method.args.join(', ')}`
    );
  }
}
@Wove()
class Calculator {
  sum(x: number, y: number) {
    console.log(`Berechne ${x} + ${y}`);
    return x + y;
  }
}
const calculator = new Calculator();
console.log(calculator.sum(5, 6));
// Aufruf von Calculator.sum() mit Argumenten: 5, 6
// Berechne 5 + 6
// 11
