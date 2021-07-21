//Year checker

var yearChecker = () => {
    var year = prompt("Please enter the year you wish to be checked here:")
    if (isNaN(year)) {
        alert("Please enter a valid year value!")
    } else if (parseInt(year) % 4 === 0) {
        alert("The year is a leap year!")
    } else if (parseInt(year) % 4 !== 0) {
        alert("This is not a leap year!")
    }
}