abstract class House {
  protected door: boolean = false;
  private tenants: string[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person.getName());
      console.log(this.tenants);
      console.log(`${person.getName()} inside`);
    } else {
      throw new Error("no access");
    }
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  constructor(protected key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      console.log("The door are closed");
    }
    return (this.door = true);
  }
}

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, protected name: string) {}

  getKey() {
    return this.key;
  }

  getName() {
    return this.name;
  }
}

const key = new Key();
const person = new Person(key, "Stepan");
const house = new MyHouse(key);
// console.log(key);
// console.log(key.getSignature());
// console.log(person.getName());
console.log("house ", house);
house.openDoor(person.getKey());
house.comeIn(person);
