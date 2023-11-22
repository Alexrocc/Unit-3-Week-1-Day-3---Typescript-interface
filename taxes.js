var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Taxes = /** @class */ (function () {
    function Taxes(_grossSalary, _irpefTax, _inpsTax) {
        this.grossSalary = _grossSalary;
        this.irpefTax = _irpefTax;
        this.inpsTax = _inpsTax;
    }
    return Taxes;
}());
var PayingWorker = /** @class */ (function (_super) {
    __extends(PayingWorker, _super);
    function PayingWorker(_grossSalary, _irpefTax, _inpsTax) {
        return _super.call(this, _grossSalary, _irpefTax, _inpsTax) || this;
    }
    PayingWorker.prototype.getUtileTasse = function () {
        return this.grossSalary - ((this.grossSalary * 22) / 100);
    };
    PayingWorker.prototype.getInpsTax = function () {
        return (this.getUtileTasse() * this.irpefTax) / 100;
    };
    PayingWorker.prototype.getIrpefTax = function () {
        return (this.getUtileTasse() * this.inpsTax) / 100;
    };
    PayingWorker.prototype.getNetIncome = function () {
        return this.getUtileTasse() - this.getIrpefTax() - this.getInpsTax();
    };
    return PayingWorker;
}(Taxes));
var newPayingWorker = new PayingWorker(2000, 5, 25);
console.log(newPayingWorker.getNetIncome());
// class Professional extends PayingWorker {
//     constructor (_grossSalary:number) {
//         super(_grossSalary)
//     }
//     getIrpefTax(): number {   
//         return (this.getUtileTasse() * 5) / 100
//     }
//     getInpsTax(): number {
//         return((this.getUtileTasse() * 25) / 100)
//     }
// }
// let newProfessional = new Professional(2000)
// console.log(newProfessional.getNetIncome());
// class Artisan extends PayingWorker {
//     constructor (_grossSalary:number) {
//         super(_grossSalary)
//     }
//     getIrpefTax(): number {   
//         return (this.getUtileTasse() * 15) / 100
//     }
//     getInpsTax(): number {
//         return((this.getUtileTasse() * 15) / 100)
//     }
// }
// let newArtisan = new Artisan(2000)
// console.log(newArtisan.getNetIncome());
// class Salesman extends PayingWorker {
//     constructor (_grossSalary:number) {
//         super(_grossSalary)
//     }
//     getIrpefTax(): number {   
//         return (this.getUtileTasse() * 15) / 100
//     }
//     getInpsTax(): number {
//         return((this.getUtileTasse() * 35) / 100)
//     }
// }
// let newSalesman = new Salesman(2000)
// console.log(newSalesman.getNetIncome());
