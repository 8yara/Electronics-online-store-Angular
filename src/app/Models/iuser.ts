export interface IUser {
    id:number
    fullName: string;
    email: string;
    mobileNumber:string;
    password: string;
    address:{
        city: string;
        zipCode: number;
        street:string;
    }
}
