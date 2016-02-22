// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if(Array.isArray(obj)){
    var arrayOut = [];
    for(var i = 0; i < obj.length; i++){
      arrayOut.push(stringifyJSON(obj[i]));
    }
    return "[" + arrayOut.join(",") + "]";
  }

  if(typeof obj === 'object' && obj !== null){
    var objectOut = [];

    _.each(obj, function(value, key){
      objectOut.push(stringifyJSON(value, key));
    });
    return "{" + objectOut.join(",") + "}";
  }
  return "" + obj;

  // your code goes here
};
