
/**
 * patch-as.
 *
 * @public
 * @param {Object} mapping
 * @return {Function}
 */

module.exports = function(mapping){
  return function(obj){
    Object
    .keys(mapping)
    .forEach(function(key){
      var as = mapping[key];
      if (!Object.getOwnPropertyDescriptor(obj, as)) {
        Object.defineProperty(obj, as, {
          get: function(){
            return obj[key];
          },
          set: function(value){
            obj[key] = value;
          }
        });
      }
    });
  };
};