function* udacity() {
  yield "Richard";
  yield "James";
}


const course = udacity();
console.log(course.next());
console.log(course.next());
console.log(course.next());

function* createSundae() {
    const toppings = [];
    
    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);
    
    return toppings;
}

var it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();