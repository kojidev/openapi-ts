export interface OAuthFlow {
  refreshUrl?: string;
  scopes: { [scopeName: string]: string };
}

export interface AuthorizationCodeOAuthFlow extends OAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
}

export interface ClientCredentialsOAuthFlow extends OAuthFlow {
  tokenUrl: string;
}

export interface ImplicitOAuthFlow extends OAuthFlow {
  authorizationUrl: string;
}

export interface ResourceOwnerPasswordOAuthFlow extends OAuthFlow {
  tokenUrl: string;
}
