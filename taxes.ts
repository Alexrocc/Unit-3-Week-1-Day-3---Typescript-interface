abstract class Taxes {
    grossSalary:number;
    irpefTax:number;
    inpsTax:number
    constructor(_grossSalary:number,_irpefTax:number,_inpsTax:number) {
        this.grossSalary = _grossSalary
        this.irpefTax = _irpefTax
        this.inpsTax = _inpsTax
    }
    abstract getUtileTasse():number
    abstract getIrpefTax():number
    abstract getInpsTax():number
}

class PayingWorker extends Taxes {
    constructor(_grossSalary:number,_irpefTax:number,_inpsTax:number){
        super(_grossSalary,_irpefTax,_inpsTax)
    }
     getUtileTasse(): number {
        return this.grossSalary - ((this.grossSalary * 22) / 100)  
    }
    getInpsTax(): number {
        return (this.getUtileTasse() * this.irpefTax) / 100
    }
    getIrpefTax(): number {
        return (this.getUtileTasse() * this.inpsTax) / 100
    }
    getNetIncome():number {
        return this.getUtileTasse() - this.getIrpefTax() - this.getInpsTax()
    }
}
let newPayingWorker = new PayingWorker(2000,5,25)
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