import { OAuthFlows } from './OAuthFlows';

type Type = 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';

export interface SecurityScheme {
  description?: string;
  type: Type;
}

export interface ApiKeySecurityScheme extends SecurityScheme {
  in: string;
  name: string;
  type: 'apiKey';
}

export interface HttpSecurityScheme extends SecurityScheme {
  bearerFormat?: string;
  scheme: string;
  type: 'http';
}

export interface OAuth2SecurityScheme extends SecurityScheme {
  flows: OAuthFlows;
  type: 'oauth2';
}

export interface OpenIdConnectSecurityScheme extends SecurityScheme {
  openIdConnectUrl: string;
  type: 'openIdConnect';
}
