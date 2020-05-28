import { OAuthFlows } from './OAuthFlows';

type Type = 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';

export interface CommonSecurityScheme {
  description?: string;
  type: Type;
}

export type SecurityScheme =
  ApiKeySecurityScheme |
  HttpSecurityScheme |
  OAuth2SecurityScheme |
  OpenIdConnectSecurityScheme;

export interface ApiKeySecurityScheme extends CommonSecurityScheme {
  in: string;
  name: string;
  type: 'apiKey';
}

export interface HttpSecurityScheme extends CommonSecurityScheme {
  bearerFormat?: string;
  scheme: string;
  type: 'http';
}

export interface OAuth2SecurityScheme extends CommonSecurityScheme {
  flows: OAuthFlows;
  type: 'oauth2';
}

export interface OpenIdConnectSecurityScheme extends CommonSecurityScheme {
  openIdConnectUrl: string;
  type: 'openIdConnect';
}
