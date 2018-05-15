// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
    return drivers.filter(function(driver){return driver["revenue"] > revenue})
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(driver){return driver["name"]})
}
function exactMatch(drivers,attribute){
  if (attribute["name"]){
    return drivers.filter(function(driver){return driver["name"] === attribute["name"]})
  }
  else if (attribute["revenue"]) {
    return drivers.filter(function(driver){return driver["revenue"] === attribute["revenue"]})
  }
}

function exactMatch(){
  
}
