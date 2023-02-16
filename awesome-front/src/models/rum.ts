import type {Types} from "./types";

export interface Rum {
    id: number;
    name: string;
    alcoholLevel: number;
    bottleSize: number;
    description: string;
    distillery: string;
    origin: string;
    price: number;
    stock: number;
    type: Types;
}
