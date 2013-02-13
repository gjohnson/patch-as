
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
      if (Object.getOwnPropertyDescriptor(obj)) return;
      Object.defineProperty(obj, mapping[key], {
        get: function(){
          return obj[key];
        },
        set: function(value){
          obj[key] = value;
        }
      });
    });
  };
};