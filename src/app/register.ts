export class RegisterModel {
    id: number;
    api: string;
    status: string;
    invocationDateTime: string;

    constructor(id: number, api: string, status: string, invocationDateTime: string) {
        this.id = id;
        this.api = api;
        this.status = status;
        this.invocationDateTime = invocationDateTime;
    }
}
