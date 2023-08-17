"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc = /** @class */ (function () {
    function calc() {
    }
    calc.factorial = function (n) {
        if (n === 0 || n === 1)
            return 1;
        return n * this.factorial(n - 1);
    };
    calc.fibonacci = function (n) {
        if (n === 0 || n === 1)
            return 1;
        return this.fibonacci(n - 2) + this.fibonacci(n - 1);
    };
    return calc;
}());
exports.default = calc;
//# sourceMappingURL=calc.js.map