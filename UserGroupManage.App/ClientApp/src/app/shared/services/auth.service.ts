import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private manager: UserManager;
  private user: User | null = null;
  constructor() {
    this.manager = new UserManager(getClientSettings());
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }
  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }
  GetUserRole(): string {
    return this.user?.profile["role"];
  }
  getAuthorizationHeaderValue(): string {
    return `${this.user?.token_type} ${this.user?.access_token}`;
  }
  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }
  getAccessToken(): string | null {
    let token = this.user?.access_token;
    if (token) {
      return token;
    } else {
      return null;
    }
  }

  getScopes(): string[] {
    return this.user.scopes;
  }

  get AdminUser(): boolean {
    return this.GetUserRole() === "Admin";
  }
  get HelpdeskUser(): boolean {
    return this.GetUserRole() === "Helpdesk";
  }

}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: `${environment.authUrl}`,
    client_id: 'usermgmt-client',
    redirect_uri: `${environment.baseUrl}/auth-callback`,
    post_logout_redirect_uri: `${environment.authUrl}`,
    response_type: "id_token token",
    scope: "openid profile usergroupmanageapi roles",
    filterProtocolClaims: true,
    loadUserInfo: true
  };
}
