
function login(name, password) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(name === 'admin' && passord === 'adming') resolve();
        else reject();
    }, 2000);
  });
}


login('admin', 'adming')
  .then(function() {
    console.log('success')
  })
  .catch(function(e) {
    console.log('error');
  });