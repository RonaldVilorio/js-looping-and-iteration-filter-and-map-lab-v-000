// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
    // debugger
    return drivers.filter(function(driver){return driver["revenue"] > revenue})
}

function driverNamesWithRevenueOver(drivers,revenue){
  debugger
  return drivers.map(function(d){return driver["revenue"] > revenue   })
}
