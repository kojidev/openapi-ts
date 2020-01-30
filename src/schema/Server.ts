import {ServerVariable} from "./ServerVariable";

export type Server = {
    url: string;
    description?: string;
    variables?: { [key: string]: ServerVariable }
}