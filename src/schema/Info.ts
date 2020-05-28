import { Contact } from './Contact';
import { License } from './License';

export interface Info {
  contact?: Contact;
  description?: string;
  license?: License;
  termsOfService?: string;
  title: string;
  version: string;
}
