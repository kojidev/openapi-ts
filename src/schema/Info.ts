import {Contact} from "./Contact";
import {License} from "./License";

export interface Info {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: Contact;
    license?: License;
    version: string;
}
