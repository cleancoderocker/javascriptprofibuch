const createClass = () =>
  class {
    print() {
      console.log('Hello World');
    }
  };
const Class1 = createClass();
const instance1 = new Class1();
instance1.print(); // Hello World
const Class2 = createClass();
const instance2 = new Class2();
instance2.print(); // Hello World
