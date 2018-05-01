type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
  money: 2000,

  deposit: function (value: number): void {
      this.money += value;
  }
};

type Me = { name: string, bankAccount: BankAccount, hobbies: string[] };

let myself: Me = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

