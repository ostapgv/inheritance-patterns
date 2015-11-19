(function(h) {
  'use strict';
  var Alcohol = function(name, type) {
    var _type = type || "unknown";

    var that = {};
    that.name = "alcohol";
    that.degrees = 0;
    that.produced = "Earth";
    that.drink = function() {
      h.log("drinking the "+that.name+" ("+that.getType()+") with "+that.degrees+"% degrees", "functional");
    }
    that.getType = function() {
      return _type;
    }
    return that;
  };

  var Wine = function(name) {
    return new Alcohol(name, "wine");
  }

  var Beer = function(name, type) {
    return new Alcohol(name, "bear");
  }

  var wine = Wine("sauvignon");
  wine.degrees = 12;
  wine.produced = "Germany";

  var beer = Beer("efes");
  beer.degrees = 5;
  beer.produced = "Saint Petersburg";

  wine.drink();
  beer.drink();

  beer._type = "vodka";
  h.log("tried to change beer's private variable '_type' to 'vodka'", "functional");
  beer.name = "Kozel";
  h.log("beer's name changed to 'Kozel'", "functional");

  wine.drink();
  beer.drink();

})(helper);