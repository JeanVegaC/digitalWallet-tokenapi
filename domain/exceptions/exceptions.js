export class BadRequestException extends Error {
    constructor(parameter){
        super();
        this.message = `${parameter} is required`;
        this.status = 400;
    }
}

export class PasswordIncorrectException extends Error {
    constructor(){
        super();
        this.message = "Password incorrect";
        this.status = 400;
    }
}