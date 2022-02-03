function doSomething() {
  var name = 'Lee';

  setTimeout(function () {
    console.log('My name is ' + name);
  }, 100);
}
setTimeout(function () {
  console.log('My name is asd');
}, 1000);
doSomething();
