class BankAccount {
    constructor(accountNumber,ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName=ownerName;
      this.balance = balance;
      console.log(`Account Number.: ${accountNumber}`);
      console.log(`Owner Name.: ${ownerName}`);
      console.log(`Balance: $${balance}`);    
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited into ${this.accountNumber} : $${amount}`);
    }
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn from ${this.accountNumber}: $${amount}`);
      } 
      else 
      {
        console.log(`Want to withdrawn from ${this.accountNumber}: $${amount}`);
        console.log('Insufficient funds');
      }
    }
    getBalance() {
      console.log(`Account Balance ${this.accountNumber}: $${this.balance}`);
    }
    displayAccountInfo(){
        console.log(`Account Number.: ${this.accountNumber}`);
      console.log(`Owner Name.: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);  
    }
  }
  // Create an instance of the BankAccount class
  const account = new BankAccount('Acc-101','Sakib', 1500);
  const account1 = new BankAccount('Acc-102','Rakib', 3000);
  // Deposit money into the account
  account.deposit(500);
  // Withdraw money from the account
  account.withdraw(400);
  // Display the account balance
  account.getBalance();
  account.withdraw(1800);
  // Display the account balance
  account.getBalance();
  account.displayAccountInfo();
  // Deposit money into the account
  account1.deposit(500);
  // Withdraw money from the account
  account1.withdraw(400);
  // Display the account balance
  account1.getBalance();
  account1.withdraw(1800);
  // Display the account balance
  account1.getBalance();
  account1.displayAccountInfo();