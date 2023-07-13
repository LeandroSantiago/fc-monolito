import AggregateRoote from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity";
import id from "../../@shared/domain/value-object/id.value-object";

type productProps = {
    id?: id;
    name: string;
    description: string;
    purchasePrice: number;
    stock: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default class product extends BaseEntity implements AggregateRoote {

    private _name: string;
    private _description: string;
    private _purchasePrice: number;
    private _stock: number;
    

    constructor(props: productProps){
        super(props.id);
        this._name = props.name;
        this._description = props.description;
        this._purchasePrice = props.purchasePrice;
        this._stock = props.stock;
    }
    
    get name(): string{
        return this._name = this._name;
    }
    
    get description(){
        return this._description = this._description;
    }
    
    get purchasePrice(){
        return this._purchasePrice;
    }
    
    get stock(){
        return this._stock;
    }
    
    set name(name: string){
        this._name = name;
    }
    
    set description(description: string){
        this._description = description;
    }
    
    set purchasePrice(value: number){
        this._purchasePrice = value;
    }
    
    set stock(value: number){
        this._stock = value;
    }
}