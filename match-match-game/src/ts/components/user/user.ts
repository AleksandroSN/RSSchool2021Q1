import { IUser } from "../../api/api";

export class User implements IUser {
  name: string;

  lastName: string;

  email: string;

  score: number;

  constructor(
    private readonly firstNameInput: string,
    private readonly lastNameInput: string,
    private readonly emailInput: string,
    private readonly scoreInput: number
  ) {
    this.name = this.firstNameInput;
    this.lastName = this.lastNameInput;
    this.email = this.emailInput;
    this.score = this.scoreInput;
  }

  getUser() {
    return {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      score: this.score,
    };
  }
}
