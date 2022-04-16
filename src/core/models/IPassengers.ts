import {IAirline} from "./IAirline";
export interface IPassengers{
    _id: string,
    name: string,
    trips: number,
    airline:Array<IAirline>
    __v:number
}
