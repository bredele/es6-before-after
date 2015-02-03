
function login(name, password) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(name === 'admin' && password === 'admin') resolve();
        else reject();
    }, 2000);
  });
}


login('admin', 'admin')
  .then(function() {
    console.log('success')
  }, function() {
      console.log('error');
  });