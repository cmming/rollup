(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

// console.log(util1)
// fn1()
// fn2()


var Animal = function () {
    function Animal(name) {
        classCallCheck(this, Animal);

        this.name = name;
    }

    createClass(Animal, [{
        key: 'eat',
        value: function eat() {
            alert(this.name + ' eat');
        }
    }]);
    return Animal;
}();

var model = function () {
    function model() {
        classCallCheck(this, model);

        this.state = {
            table: {},
            form: {}
        };
    }
    //为数据模型添加一个自定义的 key


    createClass(model, [{
        key: 'addState',
        value: function addState(data) {
            this.state.table = Object.assign(this.state, data);
        }
        // 为 table key 进行自定义 

    }, {
        key: 'setTable',
        value: function setTable(data) {
            this.state.table = data;
        }
    }]);
    return model;
}();

var demo = new model();
demo.addState({ key1: 1, key2: 2 });
demo.setTable({ key1: 1, key2: 2 });
console.log(demo.state);

})));
