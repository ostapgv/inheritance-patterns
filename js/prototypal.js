(function (h) {
  'use strict';
  /***************************************************************
   * Helper functions for older browsers
   ***************************************************************/
  if (!Object.hasOwnProperty('create')) {
      Object.create = function (parentObj) {
          function tmpObj() {}
          tmpObj.prototype = parentObj;
          return new tmpObj();
      };
  }
  if (!Object.hasOwnProperty('defineProperties')) {
      Object.defineProperties = function (obj, props) {
          for (var prop in props) {
              Object.defineProperty(obj, prop, props[prop]);
          }
      };
  }
  /*************************************************************/

  var alcohol = {
    name: "alcohol",
    type: "unknown",
    degrees: 0,
    produced: "Earth",
    drink: function() {
      h.log("drinking the "+this.name+" ("+this.type+") with "+this.degrees+"% degrees from "+this.produced, "prototypal");
    }
  };

  var wine = Object.create(alcohol, {
    name: {value: "merlot", writable: true},
    type: {value: "wine"},
    degrees: {value: 13, writable: true},
    produced: {value: "China", writable: true}
  }, {});

  var beer = Object.create(alcohol, {
    name: {value: "lech", writable: true},
    type: {value: "beer"},
    degrees: {value: 4.5, writable: true},
    produced: {value: "Poland", writable: true}
  });

  wine.drink();
  beer.drink();

  beer.degrees = 5;
  h.log("beer's degrees changed to 5%", "prototypal");

  wine.drink();
  beer.drink();

})(helper);