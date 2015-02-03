(function() {
  let name = 'olivier';
  if(name === 'olivier') {
    let name = 'amy';
    console.log(name);
  }
  console.log(name);
})();


(function() {
  for(let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
})();


(function() {
  const hello = 'world';
  hello = 'hello';
  console.log(hello);
})();