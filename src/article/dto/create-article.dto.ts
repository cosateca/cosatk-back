/* eslint-disable prettier/prettier */
export class CreateArticleDto {
    idArticle:number;
    code:string
    name:string; 
    serial_number:string;
    condition:string;
    brand:string;   
    price_paid:number;
    value:number;    
    shown_on_website:number;
    loan_fee:Date; 
    loan_period:Date;
    short_description:string;
    long_description:string;
    components:string;
    care_information:string;
    owned_by:string; 
    donated_by:string;
    image:string;    
    Category_idCategory:number;  
}
