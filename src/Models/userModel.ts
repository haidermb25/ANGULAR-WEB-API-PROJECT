import { dimension } from './dimensionModel';
import { metaModel } from './metaModel';
import { reviewModel } from './reviewModel';
export class user{
    id:number|undefined;
    title:string|undefined;
    description:string|undefined;
    category:string|undefined;
    price:number|undefined;
    discountPercentage:number|undefined;
    rating:number|undefined;
    stock:number|undefined;
    tags: string[]|undefined;
    brand:string|undefined;
    sku:string|undefined;
    weight:number|undefined;
    dimensions:dimension=new dimension();
    warrantyInformation:string|undefined;
    shippingInformation:string|undefined;
    availabilityStatus:string|undefined;
    reviews:reviewModel[]=[];
    returnPolicy:string|undefined;
    minimumOrderQuantity:number|undefined;
    meta:metaModel=new metaModel();
    images:string[]|undefined;
    thumbnail:string|undefined;
}
