import { User } from "./user";

export class Group {
  id?: number;
  name: string;
  description: string;
  users: User[];

  constructor() {
    this.description = ``;
    this.name = ``;
    this.users = [];
  }
}
