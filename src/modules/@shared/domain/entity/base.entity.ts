import Id from "../value-object/id.value-object";

export default class BaseEntity {
    private _id?: Id;
    private _createdAt: Date;
    private _updatedAt: Date;
    
    constructor(id?: Id){
        this._id = id;
        this._createdAt = new Date();
        this._updatedAt = new Date();
    }
    
    get id(): Id | undefined{
        return this._id;
    }
    
    get createdAt(){
        return this._createdAt;
    }
    
    get updatedAt(){
        return this._updatedAt;
    }
    
    set updated(value: Date){
        this._updatedAt = value;
    }
}