import { fn1, fn2 } from './util2.js'

import util1 from './util.js'

// console.log(util1)
// fn1()
// fn2()



class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        alert(this.name + ' eat')
    }
}

class model {
    constructor() {
        this.state = {
            table: {},
            form: {},
        }
    }
    //为数据模型添加一个自定义的 key
    addState(data) {
        this.state.table = Object.assign(this.state, data)
    }
    // 为 table key 进行自定义 
    setTable(data) {
        this.state.table = data
    }
    // 为 指定的 key 进行 赋值
    setValueByKey(key, value) {
        // obj.hasOwnProperty("key")
        if (this.state.hasOwnProperty("key")) {
            this.state[key] = value
        }else{
            this.state[key] = value
        }
    }
}
var demo = new model();
demo.addState({ key1: 1, key2: 2 })
demo.setTable({ key1: 1, key2: 2 })
console.log(demo.state)







