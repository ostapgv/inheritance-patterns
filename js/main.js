var helper = (function(){
  return {
    log: function(arg, divId) {
      var storage = document.getElementById(divId);
      var elem = document.createElement("p");
      elem.appendChild(document.createTextNode(arg))
      storage.appendChild(elem);
    }
  };
})();
