function fibonacci() {
  let [vorher, aktuell] = [0,1];
  while(true) {
    [vorher, aktuell] = [aktuell, vorher + aktuell];
    yield aktuell;
  }
}

for(let n in fibonacci()) {
  if(n > 1000) {break;}
  console.log(n)
}