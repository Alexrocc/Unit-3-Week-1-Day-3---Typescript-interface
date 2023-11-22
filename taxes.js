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
    function Taxes(_grossSalary) {
        this.grossSalary = _grossSalary;
    }
    return Taxes;
}());
var PayingWorker = /** @class */ (function (_super) {
    __extends(PayingWorker, _super);
    function PayingWorker(_grossSalary) {
        return _super.call(this, _grossSalary) || this;
    }
    PayingWorker.prototype.getUtileTasse = function () {
        return this.grossSalary - ((this.grossSalary * 22) / 100);
    };
    PayingWorker.prototype.getInpsTax = function () {
        return;
    };
    PayingWorker.prototype.getIrpefTax = function () {
        return;
    };
    PayingWorker.prototype.getNetIncome = function () {
        return this.getUtileTasse() - this.getIrpefTax() - this.getInpsTax();
    };
    return PayingWorker;
}(Taxes));
var Professional = /** @class */ (function (_super) {
    __extends(Professional, _super);
    function Professional(_grossSalary) {
        return _super.call(this, _grossSalary) || this;
    }
    Professional.prototype.getIrpefTax = function () {
        return (this.getUtileTasse() * 5) / 100;
    };
    Professional.prototype.getInpsTax = function () {
        return ((this.getUtileTasse() * 25) / 100);
    };
    return Professional;
}(PayingWorker));
var newProfessional = new Professional(2000);
console.log(newProfessional.getNetIncome());
var Artisan = /** @class */ (function (_super) {
    __extends(Artisan, _super);
    function Artisan(_grossSalary) {
        return _super.call(this, _grossSalary) || this;
    }
    Artisan.prototype.getIrpefTax = function () {
        return (this.getUtileTasse() * 15) / 100;
    };
    Artisan.prototype.getInpsTax = function () {
        return ((this.getUtileTasse() * 15) / 100);
    };
    return Artisan;
}(PayingWorker));
var newArtisan = new Artisan(2000);
console.log(newArtisan.getNetIncome());
var Salesman = /** @class */ (function (_super) {
    __extends(Salesman, _super);
    function Salesman(_grossSalary) {
        return _super.call(this, _grossSalary) || this;
    }
    Salesman.prototype.getIrpefTax = function () {
        return (this.getUtileTasse() * 15) / 100;
    };
    Salesman.prototype.getInpsTax = function () {
        return ((this.getUtileTasse() * 35) / 100);
    };
    return Salesman;
}(PayingWorker));
var newSalesman = new Salesman(2000);
console.log(newSalesman.getNetIncome());
