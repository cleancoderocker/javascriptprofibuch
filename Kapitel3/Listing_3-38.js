const createClass = () =>
  class {
    print() {
      console.log('Hello World');
    }
  };
class SomeSubClass extends createClass() {
  printMore() {
    console.log('More');
  }
}
const instance = new SomeSubClass();
instance.print(); // Hello World
instance.printMore(); // More
