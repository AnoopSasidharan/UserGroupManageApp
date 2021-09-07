export class User {
  id: number;
  name: string;
  userTypeId?: number;
  createdById?: number;
  updatedById: number;

  constructor() {
    this.id = 0;
    this.name = ``;
    this.updatedById = 0;
  }
}
