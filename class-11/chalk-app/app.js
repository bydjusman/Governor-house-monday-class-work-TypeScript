"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// add color in text
console.log(chalk_1.default.green("Hello, World!", "How are you?"));
console.log(chalk_1.default.red("Hello, World!", "How are you?"));
console.log(chalk_1.default.blue("Hello, World!", "How are you?"));
console.log(chalk_1.default.yellow("Hello, World!", "How are you?"));
let log = console.log; // save log method to variable
// Combine styled and normal strings
log(chalk_1.default.blue('Hello') + ' World' + chalk_1.default.red('!'));
// Compose multiple styles using the chainable API
log(chalk_1.default.blue.bgRed.bold('Hello world!'));
log(chalk_1.default.green.bgMagenta.italic('Hello world!'));
// Pass in multiple arguments
log(chalk_1.default.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// Nest styles
log(chalk_1.default.red('Hello', chalk_1.default.underline.bgBlue('world') + '!'));
