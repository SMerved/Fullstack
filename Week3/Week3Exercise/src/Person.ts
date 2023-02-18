class Person{
    private name: string;
    private age: number;
    private occupation: string;
    private private_salary: number;
    constructor(name:string, age: number, occupation:string){
        this.name = name;
        this.age = age
        this.occupation = occupation;
        this.private_salary = 0;
    }
    public introdude():string{
        return `Hello, my name is ${this.name} and I am a ${this.occupation}. I earn ${this.private_salary}$`
    }
}
export {}