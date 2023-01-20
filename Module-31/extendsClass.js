class CommonInformation {
    name;
    address;
    age;
    salary;
    region;
    constructor(workerName, workerAddress, workerAge, workerSalary, workerRegion) {
        this.name = workerName;
        this.address = workerAddress;
        this.age = workerAge;
        this.salary = workerSalary;
        this.region = workerRegion;
    }
    feedBack() {
        console.log(`Thank you ${this.name} for your feedback. -_-`);
    }
}

class WorkAssistant extends CommonInformation {
    constructor(workerName, workerAddress, workerAge, workerSalary, workerRegion) {
        super(workerName, workerAddress, workerAge, workerSalary, workerRegion);
    }
    workType(designation) {
        console.log(`I am a ${designation}`)
    }

}
class Gateman {
    name;
    address;
    age;
    salary;
    region;
    workType(designation) {
        console.log(`I am a ${designation}`)
    }
}
class NightGuard {
    name;
    address;
    age;
    salary;
    region;
    workType(designation) {
        console.log(`I am a ${designation}`)
    }
}
class Peon {
    name;
    address;
    age;
    salary;
    region;
    workType(designation) {
        console.log(`I am a ${designation}`)
    }
}
class ManagingDirector {
    name;
    address;
    age;
    salary;
    region;
    workType(designation) {
        console.log(`I am a ${designation}`)
    }
}


const workAssistant = new WorkAssistant('Emon', 'Lalmonirhat', 23, 80000, 'Islam');
workAssistant.workType('Web Develper');
console.log(workAssistant);
workAssistant.feedBack();