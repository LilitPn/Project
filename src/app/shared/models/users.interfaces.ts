export class User {
    id: number = 0;
    name: string = "";
    username: string = "";
    email: string = "";
    address: Address = new Address();
    phone: string = "";
    website: string = "";
    company: Company = new Company();
    posts?: Array<Post>;
}

class Company {
    name: string = "";
    catchPhrase: string = "";
    bs: string = "";
}

class Geo {
    lat: number = 0;
    lng: number = 0;
}

class Address {
    street: string = "";
    suite: string = "";
    city: string = "";
    zipcode: string = "";
    geo: Geo = new Geo();
}

export class Post {
    userId: number = 0;
    id: number = 0;
    title: string = "";
    body: string = "";
}