/* Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // "Double Cheese Burger"
console.log(secondBurger.name); // "Double Cheese Burger"

// Viene salvato un solo oggetto in memoria perchè è una reference e andando a modificare il nome in secondBurger, andiamo a modificare anche il nome in hamburger


/* P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

const hamburgers = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurgers = { ...hamburgers };
secondBurgers.ingredients[0] = "Salad";

console.log(hamburgers.ingredients[0]); // Salad
console.log(secondBurgers.ingredients[0]); // Salad

// In questo caso sono stati creati due oggetti

/* Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

const hamburgerr = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurgerr = structuredClone(hamburgerr);
const thirdBurger = structuredClone(hamburgerr);

// In questo caso sono stati creati 3 oggetti

/* Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?*/

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// Per clonare l'oggetto chef userei lo spread operator perchè esso ci permette, insieme alla reference, di clonare anche le funzioni presenti nell'oggetto

// Per clonare l'oggetto restaurant userei invece la modalità con structuredClone  perchè non solo abbiamo degli oggetti annidati ma abbiamo anche il metodo Date, in questo modo la data verrà clonata nel formato corretto


/* Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

const hamburgerrr = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburgerrr.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurgerrr = { ...hamburgerrr };
secondBurgerrr.maker.restaurant = newRestaurant;
secondBurgerrr.maker.name = "Chef Hyur";

console.log(hamburgerrr.maker.name); // "Chef Hyur"
console.log(secondBurgerrr.maker.name); // "Chef Hyur"
console.log(hamburgerrr.maker.restaurant.name); // "Hyur's II"
console.log(secondBurgerrr.maker.restaurant.name); // "Hyur's II"

/* Qual è il metodo migliore per clonare l’oggetto chef, e perché?*/

const cheff = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

// Userei lo spread operator perchè mi permette di clonare anche le funzioni