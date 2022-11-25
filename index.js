// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


function returnFirstTwoDrivers(drivers) {
    const firstTwoDrivers = [...drivers.slice(0,2)]
    return firstTwoDrivers
}
function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = [...drivers.slice(2)]
    return lastTwoDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function () {
        return fare * fare
    }
}

function fareDoubler(fare) {
    const fare1 = createFareMultiplier(fare)
    return fare1()/fare * 2
}

function fareTripler(fare) {
    const fare2 =createFareMultiplier(fare)
    return fare2()/fare * 3
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {

    return returnFirstTwoDrivers(drivers)
  
}