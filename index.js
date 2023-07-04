// Question1
// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

class Story{
    constructor(agegroup,title,morallesson,length,language){
        this.agegroup = agegroup
        this.title = title
        this.morallesson = morallesson
        this.length = length
        this.language = language
    }
    typeOfStory(){
        console.log(`The story ${this.title}, written in ${this.language} has its moral lesson as, ${this.morallesson} as 'We should pray everyday'`);
    }
}

class Storyteller extends Story{
    constructor(agegroup,title,morallesson,length,language,storyteller){
        super(agegroup,title,morallesson,length,language);
        this.storyteller = storyteller
    }
    storytelling(){
        console.log(`${this.title} by ${this.storyteller} was narrated in ${this.language}`);
    }
}

class Translator extends Storyteller{
    constructor(agegroup,title,morallesson,length,language,storyteller,){
        super(agegroup,title,morallesson,length,language,storyteller);
    }
    transalate(newlanguage){
        this.newlanguage = newlanguage
        let orginallanguage = this.language
        if (orginallanguage !== this.newlanguage) {
            console.log(`${orginallanguage} has been translated to ${this.newlanguage}`);
        }
        else{
            console.log(`The story is in its original language; ${this.language}`);
        }
    }
}

let translator2 = new Translator("8 to 12 years", "The Ancient Tale", "Value your heritage", 5, "English", "Gisemba")
let translates = translator2.transalate('hispanic')
console.log(translates);

let story = new Story("Children","Tales of Elephants","Elephants are great animals","2 hours long","French")
story.typeOfStory()

let telling = new Storyteller("Middle-aged children","Life is Golden","Take life seriously","3 hours long to listen to","English","Masian")
telling.storytelling()

let translator = new Translator("Youths","Great Aspirations","Creativity is the greatest rebellion in existence","3 hours long to listen to it","French","The Great Mumbi","Spanish")
translator.transalate('Kimasai')


// Question2
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// Methods.

class Recipe{
    constructor( Preparationtime,ingredients,cookingmethod,nutritionalinfor,country){
  this.Preparationtime=Preparationtime;
  this.ingredients=ingredients;
  this.cookingmethod=cookingmethod;
  this.nutritionalinfor=nutritionalinfor;
  this.country=country;
    }
    recipes(){
      console.log(`${this.country}'s recipe which takes ${this.Preparationtime} to be
      prepared by the ${this.cookingmethod} method using ${this.ingredients} as the ingredients is very nutritive. `);
    }
  }
  let recipe = new Recipe("3 hours","Pepper","boiling","Provides vitamins","Kenya")
  recipe.recipes()


  class MoroccanRecipe extends Recipe{
    constructor(Preparationtime,ingredients,cookingmethod,nutritionalinfor,country,spices){
      super(Preparationtime,ingredients,cookingmethod,nutritionalinfor,country);
      this.spices = spices
    }
    spicedFood(){
      console.log(`Eating Moroccan food that is ${this.nutritionalinfor}, have ${this.spices} `);
    }
    
  }
  let moroccan = new MoroccanRecipe("2 hours","Beef","Deep frying","Rich in proteins","Morocco","Ginger")
  moroccan.spicedFood()

  class EthiopianRecipe extends Recipe{
    constructor(Preparationtime,ingredients,cookingmethod,nutritionalinfor,country,fatlevels){
        super(Preparationtime,ingredients,cookingmethod,nutritionalinfor,country);
        this.fatlevels = fatlevels
    }
    fatLevels(){
        console.log(`Anjera is a common meal prepared in ${this.country} which is renowned for its ${this.fatlevels}.`);
    }
  }
  let ethiopian = new EthiopianRecipe("2 days","vegetables","baking","rich in proteins","Ethiopia","spicey meat stews","low fat levels")
  ethiopian.fatLevels()
  
  class NigerianRecipe extends Recipe{
    constructor(Preparationtime,ingredients,cookingmethod,nutritionalinfor,country,flavor,name){
        super(Preparationtime,ingredients,cookingmethod,nutritionalinfor,country);
        this.flavor = flavor
        this.name = name
    }
    nigerianRecipe(){
        return(`${this.name} is the main dish in ${this.country} whose ${this.flavor} makes it unique.`);
    }
  }
  let nigerian = new NigerianRecipe('1 hour',"rice and onions","fried","rich in carbohydrates","Nigeria","tomato flavor","Jollof Rice")
  console.log(nigerian.nigerianRecipe());


// Q3
//   **Wildlife Preservation:** You're a wildlife conservationist working on a
//   program to track different species in a national park. Each species has its own
//   characteristics and behaviors, such as its diet, typical lifespan, migration
//   patterns, etc. Some species might be predators, others prey. You'll need to
//   create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//   these classes might relate to each other through inheritance.
  class Species {
    constructor(name, diet) {
      this.name = name;
      this.diet = diet;
    }
  
    eat(food) {
      console.log(`${this.name} is eating ${food}.`);
    }
  }
  
  
  class Predator extends Species {
    constructor(name, diet, huntingStyle) {
      super(name, diet);
      this.huntingStyle = huntingStyle;
    }
  
    hunt(prey) {
      console.log(`${this.name} is hunting ${prey.name}.`);
  
      if (this.diet === prey.diet) {
        console.log(`Oops! ${this.name} and ${prey.name} have the same diet. ${this.name} cannot hunt ${prey.name}.`);
      } else {
        prey.getHunted(this);
      }
    }
  }
  
  
  class Prey extends Species {
    constructor(name, diet, migrationPattern) {
      super(name, diet);
      this.migrationPattern = migrationPattern;
    }
  
    migrate() {
      console.log(`${this.name} is migrating.`);
    }
  
    getHunted(predator) {
      console.log(`${this.name} is being hunted by ${predator.name}.`);
  
      if (predator.huntingStyle === "Stalking") {
        console.log(`${this.name} is alert and trying to evade ${predator.name}.`);
      } else {
        console.log(`${this.name} is running away from ${predator.name} as fast as possible.`);
      }
    }
  }
  
  
  const lion = new Predator("Lion", "Carnivorous", "Stalking");
  const zebra = new Prey("Zebra", "Herbivorous", "Seasonal");
  const gazelle = new Prey("Gazelle", "Herbivorous", "Yearly");
  
  lion.eat("Gazelle");
  lion.hunt(zebra);
  lion.hunt(gazelle);
  zebra.migrate();



// Question4
// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.
class Artist {
  constructor(country, name, instruments) {
    this.country = country;
    this.name = name;
    this.instruments = instruments;
  }
}
class Performance extends Artist {
  constructor(festival_lineup, schedule, band) {
    super(festival_lineup.country, festival_lineup.name, festival_lineup.instruments);
    this.festival_lineup = festival_lineup;
    this.schedule = schedule;
    this.band = band;
  }
}
class Stage {
  constructor(stage_arrangements, place, audience) {
    this.stage_arrangements = stage_arrangements;
    this.place = place;
    this.audience = audience;
  }
}
const artist1 = new Artist("Nigeria", "Fela Kuti", ["guitar", "drums"]);
const artist2 = new Artist("Ghana", "Kofi Annan", ["piano", "violin"]);
const artist3 = new Artist("Kenya", "Wangari Maathai", ["flute", "harp"]);
const performance1 = new Performance(artist1, "Friday, 10am", "The Fela Kuti Band");
const performance2 = new Performance(artist2, "Saturday, 2pm", "The Kofi Annan Quartet");
const performance3 = new Performance(artist3, "Sunday, 4pm", "The Wangari Maathai Trio");
const stage1 = new Stage("Open-air stage", "The Great Lawn", 10000);
const stage2 = new Stage("Indoor stage", "The Concert Hall", 5000);
// Print the festival lineup
console.log("The festival lineup is:");
for (const performance of [performance1, performance2, performance3]) {
  console.log(performance.festival_lineup);
}
// Print the schedule
console.log("\nThe schedule is:");
for (const performance of [performance1, performance2, performance3]) {
  console.log(performance.schedule);
}
// Print the stages
console.log("The stages are:");
for (const stage of [stage1, stage2]) {
  console.log(stage.stage_arrangements);
}



//question5

class Product {
constructor(name, price, quantity) {
this.name = name;
this.price = price;
this.quantity = quantity;
}
calculateTotalValue() {
const totalValue = this.price * this.quantity;
console.log(`Total value of ${this.name}: ${totalValue}`);
return totalValue;
}
increaseQuantity(amount) {
if (amount > 0) {
let newQuantity = this.quantity + amount
console.log(`Increased quantity of ${this.name} by ${amount} that makes its total quantity to be ${newQuantity}`);
} else {
console.log("Invalid quantity increase amount.");
}
}
decreaseQuantity(amount) {
if (amount > 0 && amount <= this.quantity) {
let newQuantity = this.quantity - amount
console.log(`Decreased quantity of ${this.name} by ${amount} that makes it's new total quantity to be ${newQuantity} `);
} else {
console.log("Invalid quantity decrease amount.");
}
}
updatePrice(newPrice) {
if (newPrice >= 0) {
this.price = newPrice;
let latestPrice = this.price + newPrice
console.log(`Updated price of ${this.name} to ${newPrice}`);
} else {
console.log("Invalid price value.");
}
}
}
const mango = new Product("mango", 30, 6);
mango.calculateTotalValue();
mango.increaseQuantity(3);
mango.decreaseQuantity(4)
mango.updatePrice(10);

// question6
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateAverageGrade() {
    const totalGrades = this.grades.reduce((a, b) => a + b, 0);
    return totalGrades / this.grades.length;
  }

  displayStudentInformation() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grades: ${this.grades}`);
  }

  hasPassed() {
    return this.calculateAverageGrade() >= 60;
  }
}

const student1 = new Student("Joyce Gisemba", 18, [90, 80, 70]);
const student2 = new Student("Mercy Nyambura", 19, [80, 70, 60]);

console.log("Student 1 information:");
student1.displayStudentInformation();
console.log("Student 1 has passed:", student1.hasPassed());

console.log("Student 2 information:");
student2.displayStudentInformation();
console.log("Student 2 has passed:", student2.hasPassed());
console.log({avg:student1.calculateAverageGrade()});



// question7
class FlightBooking {
  constructor() {
  this.flights = [];
  this.passengers = [];
  }
  
  searchFlights(destination, date) {
  return this.flights.filter(flight => flight.destination === destination && flight.date === date);
  }
  
  reserveSeat(flightId, passenger) {
  const flight = this.flights.find(flight => flight.id === flightId);
  if (flight && flight.availableSeats > 0) {
  flight.availableSeats--;
  this.passengers.push(passenger);
  return true;
  }
  return false;
  }
  
  getPassengerInfo(passengerId) {
  return this.passengers.find(passenger => passenger.id === passengerId);
  }
  
  generateBookingConfirmation(passengerId) {
  const passenger = this.passengers.find(passenger => passenger.id === passengerId);
  if (passenger) {
  const flight = this.flights.find(flight => flight.id === passenger.flightId);
  if (flight) {
  return `Booking Confirmation:
  Passenger Name: ${passenger.name}
  Flight Details: ${flight.destination} - ${flight.date}
  Seat Number: ${passenger.seatNumber}`;
  }
  return "Flight not found.";
  }
  return "Passenger not found.";
  }
  }