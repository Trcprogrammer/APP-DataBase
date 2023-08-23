export class empleados {
  name: string;
  lastName: string;
  number: number;
  address: string;

  constructor(name: string, lastName: string, number: number, address: string) {
    this.name = name;
    this.number = number;
    this.lastName = lastName;
    this.address = address;
  }
}
