// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
    // debugger
    return drivers.filter(function(driver){return driver["revenue"] > revenue})
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(driver){return driver["name"]})

}
function exactMatch(drivers,nameattribute){
  debugger
  return drivers.filter(function(driver){return driver["name"] === nameattribute["name"]})

}
