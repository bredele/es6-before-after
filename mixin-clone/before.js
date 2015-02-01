// mixin
function mixin(to, from) {
  for (var key in from) {
    if (from.hasOwnProperty(key)) {
      // copy properties
      to[key] = from[key];
    }
  }
  return to;
}


// clone
function clone(obj){
  return mixin({}, obj);
};