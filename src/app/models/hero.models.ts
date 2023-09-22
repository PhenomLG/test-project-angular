export class Hero {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  toString(): string {
    return this.name;
  }
}
