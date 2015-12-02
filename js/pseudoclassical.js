(function(h) {
  'use strict';
  var extend = function(child, parent) {
    var tmpObj = function() {};
    tmpObj.prototype = parent.prototype;
    child.prototype = new tmpObj();
    child.prototype.constructor = child;
  };

  var Alcohol = function(name) {};
  Alcohol.prototype = {
    name: name || "alcohol",
    type: "unknown",
    degrees: 0,
    produced: "Earth",
    drink: function() {
      h.log("drinking the "+this.name+" ("+this.type+") with "+this.degrees+"% degrees", "pseudoclassical");
    },
    setDetails: function(details) {
      if(details instanceof Object) {
        for(var i in details){
          if(i in this) {
            this[i] = details[i];
          }
        }
      }
    }
  };

  var Wine = function(details) {
    this.type = "wine";
    this.setDetails(details);
  };
  extend(Wine, Alcohol);

  var Beer = function(details) {
    this.type = "beer";
    this.setDetails(details);
  };
  extend(Beer, Alcohol);

  var wine = new Wine({
    name: "sauvignon",
    degrees: 12,
    produced: "France"
  });
  var beer = new Beer({
    name: "Efes",
    degrees: 5,
    produced: "Polska"
  });

  wine.drink();
  beer.drink();

  delete wine.degrees;
  Wine.prototype.degrees = 10;
  h.log("wine degrees changed to 10%", "pseudoclassical");

  wine.drink();
  beer.drink();

})(helper);
