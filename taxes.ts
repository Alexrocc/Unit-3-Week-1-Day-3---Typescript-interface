abstract class Taxes {
    grossSalary:number;
    constructor(_grossSalary:number) {
        this.grossSalary = _grossSalary
    }
    abstract getUtileTasse():number
    abstract getIrpefTax():number
    abstract getInpsTax():number
}

class PayingWorker extends Taxes {
   

    constructor(_grossSalary:number){
        super(_grossSalary)
    }
     getUtileTasse(): number {
        return this.grossSalary - ((this.grossSalary * 22) / 100)  
    }
    getInpsTax(): any {
        return;
    }
    getIrpefTax(): any {
        return
    }
    getNetIncome() {
        return this.getUtileTasse() - this.getIrpefTax() - this.getInpsTax()
    }
}

class Professional extends PayingWorker {
    constructor (_grossSalary:number) {
        super(_grossSalary)
    }

    getIrpefTax(): number {   
        return (this.getUtileTasse() * 5) / 100
    }

    getInpsTax(): number {
        return((this.getUtileTasse() * 25) / 100)
    }
}

let newProfessional = new Professional(2000)
console.log(newProfessional.getNetIncome());

class Artisan extends PayingWorker {
    constructor (_grossSalary:number) {
        super(_grossSalary)
    }

    getIrpefTax(): number {   
        return (this.getUtileTasse() * 15) / 100
    }

    getInpsTax(): number {
        return((this.getUtileTasse() * 15) / 100)
    }
}

let newArtisan = new Artisan(2000)
console.log(newArtisan.getNetIncome());

class Salesman extends PayingWorker {
    constructor (_grossSalary:number) {
        super(_grossSalary)
    }

    getIrpefTax(): number {   
        return (this.getUtileTasse() * 15) / 100
    }

    getInpsTax(): number {
        return((this.getUtileTasse() * 35) / 100)
    }
}

let newSalesman = new Salesman(2000)
console.log(newSalesman.getNetIncome());