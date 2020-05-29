export interface Discriminator {
  mapping?: { [key: string]: string; },
  propertyName: string;
}

// TODO: Try make it so you can't use it on 'object' schema unless you have property specified as propertyName
// TODO: Enum checking
