function firstPrintOneThenPrintTwo() {
  console.log(1);
  firstPrintOneThenPrintTwo = function() {
    console.log(2);
  };
}
const functionReference = firstPrintOneThenPrintTwo;
firstPrintOneThenPrintTwo(); // 1
firstPrintOneThenPrintTwo(); // 2
functionReference(); // 1
functionReference(); // 1
