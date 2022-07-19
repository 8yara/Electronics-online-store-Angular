export class Store {
    constructor(public Name:string
                ,public LogoUrl:string
                ,public  Branches: string[]
                )
    {}
}
export interface IProduct{
    ID:number,
    Name:string,
    Quantity:number,
    Price:number,
    img:string,
    CateogryID:number
};
export interface IProductNew{
    id:number,
    Name:string,
    Quantity:number,
    Price:number,
    img:string,
    count:number;
    CateogryID:any
};


export interface ICategory {
    id:number,
    Name:string
}

export enum DiscountOffers {
    "No Discount"="No Discount",
    "10%"="10%",
    "15%"="15%"
}
