import { User } from "./user";

export class Group {
  id?: number;
  name: string;
  description: string;
  createdById?: number;
  updatedById?: number;
  users: User[];

  constructor() {
    this.description = ``;
    this.name = ``;
    this.users = [];
  }
}
