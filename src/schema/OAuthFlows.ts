import {
  AuthorizationCodeOAuthFlow,
  ClientCredentialsOAuthFlow,
  ImplicitOAuthFlow,
  ResourceOwnerPasswordOAuthFlow
} from './OAuthFlow';

export interface OAuthFlows {
  authorizationCode?: AuthorizationCodeOAuthFlow;
  clientCredentials?: ClientCredentialsOAuthFlow;
  implicit?: ImplicitOAuthFlow;
  password?: ResourceOwnerPasswordOAuthFlow;
}
