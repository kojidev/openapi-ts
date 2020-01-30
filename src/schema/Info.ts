import {Contact} from "./Contact";
import {License} from "./License";

export type Info = {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: Contact;
    license?: License;
    version: string;
}