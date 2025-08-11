// Mini Project
// Creating a Private Bank Account

// Create a createAccount(initialBalance) function that returns deposit(amount), withdraw(amount), and getBalance() — all using closures for private state.

function createAccount(initialBalance) {
    function calculateBalance(amount) {
        initialBalance += amount;
    }
    return {
        deposit(amount) {
            calculateBalance(amount);
        },

        withdraw(amount) {
            calculateBalance(-amount);
        },

        getBalance() {
            return initialBalance;
        },
    };
}

const account = createAccount(1000); // First initialize an acoount

account.deposit(1500);
console.log(account.getBalance());
account.withdraw(1000);
console.log(account.getBalance());


// How does closure help here?
// Closure helps us to get the balalnce when there is either a deposit or a withdrawal, when the account is private and not accessible from the outside. The private variable `initialBalance` is maintained within the closure, allowing us to manipulate it through the public methods without exposing it directly. This encapsulation ensures that the balance can only be changed through the defined methods, maintaining integrity and security of the account state.
