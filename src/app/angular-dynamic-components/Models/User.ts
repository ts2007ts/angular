export class User {
  name: string;
  gender: string;
  membership: string;
  price: number;
  status: boolean;

  constructor(name: string, gender: string, membership: string, price: number, status: boolean) {

    this.name = name;
    this.gender = gender;
    this.membership = membership;
    this.price = price;
    this.status = status;
  }


}
