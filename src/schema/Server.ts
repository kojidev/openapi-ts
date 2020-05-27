import {ServerVariable} from "./ServerVariable";

export interface Server {
    url: string;
    description?: string;
    variables?: { [key: string]: ServerVariable }
}
