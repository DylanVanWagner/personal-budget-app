export class Users {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
  }

  getLogin(): string {
      return this.email;
  }

  getPassword(): string {
      return this.password;
  }
}
