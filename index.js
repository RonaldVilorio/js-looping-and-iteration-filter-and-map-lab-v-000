// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
    // debugger
    return drivers.filter(function(driver){return driver["revenue"] > revenue})
}

function driverNamesWithRevenueOver(drivers,revenue){
  debugger
  driversWithRevenueOver = driversWithRevenueOver(drivers,revenue)
  driversWithRevenueOver[0].map{function(driver){return driver["name"]}}
}
