let s = Symbol("foo");

console.log(s);
let firstName = Symbol("first name");
let lastName = Symbol("last name");

console.log(firstName.toString());
console.log(typeof lastName);

let citizenID = Symbol.for("citizen id");

console.log(citizenID.toString() === "Symbol(citizen id)");
console.log(Symbol.keyFor(citizenID));

let statuses = {
  OPEN: Symbol("Open"),
  IN_PROGRESS: Symbol("In progress"),
  COMPLETED: Symbol("Completed"),
  HOLD: Symbol("On hold"),
  CANCELED: Symbol("Canceled"),
};
// complete a task
console.log("statuses", statuses);

let status = Symbol("status");
let task = {
  [status]: statuses.OPEN,
  description: "Learn ES6 Symbol",
};
console.log(task[status]);

console.log(Object.keys(task)); // ["description"]
console.log(Object.getOwnPropertyNames(task)); // ["description"]
console.log(Object.getOwnPropertySymbols(task)); //[Symbol(status)]

const games = new Set([
  "Super Mario Bros.",
  "Banjo-Kazooie",
  "Mario Kart",
  "Super Mario Bros.",
]);

games.add("Banjo-Tooie");
games.delete("Super Mario Bros");
games.clear();
console.log(games);

