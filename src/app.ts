// class House {
//   //   private street: string;
//   private tenants: string[] = [];

//   constructor(private street: string) {
//     this.street = street;
//   }

//   public showAddress(this: House) {
//     console.log("Address: " + this.street);
//     return this.street;
//   }

//   public addTenants(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// const house = new House("Wall Street");
// console.log(house);
// house.addTenants("Max");
// house.addTenants("Denchik");

// console.log(house.showTenants());

// class House {
//   constructor(private type: string, private street: string) {}
// }

// const house = new House("stone", "Wall Street");
// console.log(house);

// class StoneHouse extends House {
//   constructor(street: string) {
//     super("stone", street);
//   }
// }

// const stoneHouse = new StoneHouse("Wall Street");
// console.log(stoneHouse);

/**
 * showAddress, showType, addTenant, showTenants
 */

// class House {
//   private tenants: string[] = [];

//   constructor(private readonly type: string, private street: string) {}

//   public showAddress(this: House) {
//     console.log(`Address ${this.street}`);
//     return this.street;
//   }

//   public showType() {
//     console.log(`Type ${this.type}`);
//     return this.type;
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//     return this.tenants;
//   }
// }

// class StoneHouse extends House {
//   private mainInStoneHouse: string;

//   constructor(street: string, generalTenant: string) {
//     super("stone", street);

//     this.mainInStoneHouse = generalTenant;
//     this.addTenant(generalTenant);
//   }

//   public showTenantStoneHouse() {
//     console.log(`GeneralTenant: ${this.mainInStoneHouse}`);

//     super.showTenants();
//   }
// }

// const house = new House("stone", "Wall Street");

// console.log(house);
// house.showType();
// house.addTenant("Max");
// house.addTenant("Den");
// house.showTenants();

// const stoneHouse = new StoneHouse("Kalinina", "Vasyl");
// stoneHouse.addTenant("Max");
// stoneHouse.addTenant("Den");
// stoneHouse.showType();
// stoneHouse.showAddress();

// console.log(stoneHouse.showTenantStoneHouse());
