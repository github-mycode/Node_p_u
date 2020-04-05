const square = function(x){
    return x*x;
}
const squareA = (x)=> {
    return x*x;
}

const squareS = (x)=>  x*x;
console.log(square(3));
console.log(squareA(3));

console.log(squareS(3));

const event = {
    name: 'Birthday party',
    guestList:['priya', 'ishant', 'sukhi', 'namita'],
    printGuestList: function(){
        console.log('The list is: 1 2 3 5 for '+ this.name)
        this.guestList.forEach(
            function(guest){
                console.log(guest+' is attending party')
            }
        )
    }
}

event.printGuestList();