import { IUser } from "../../api/api";

export class User implements IUser {
  name: string;

  lastName: string;

  email: string;

  image: string | ArrayBuffer | null;

  score: number;

  constructor(
    private readonly firstNameInput: string,
    private readonly lastNameInput: string,
    private readonly emailInput: string,
    private readonly fileInput: string | ArrayBuffer | null,
    private readonly scoreInput: number
  ) {
    this.name = this.firstNameInput;
    this.lastName = this.lastNameInput;
    this.email = this.emailInput;
    this.image = this.fileInput;
    this.score = this.scoreInput;
  }

  getUser() {
    return {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      image: this.fileInput,
      score: this.score,
    };
  }
}
