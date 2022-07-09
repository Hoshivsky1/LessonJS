import * as data from './main.js';
import sayHi from './main.js';

const myModule = require('./lib');

const myModuleInstanc = new myModule();

myModuleInstanc.hello();
myModuleInstanc.goodbye(); 

console.log(`${data.one}`);
sayHi();