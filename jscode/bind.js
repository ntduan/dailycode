Function.prototype.bind = function(oThis, ...oArgs) {
  const self = oThis
  return function(...args) {
    return self.apply(oThis, oArgs.concat(args))
  }
};
