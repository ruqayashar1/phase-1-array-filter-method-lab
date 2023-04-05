// Code your solution here

// 1st function
function findMatching(driversName, string){
return driversName.filter(function (driversName){
return driversName.toLowerCase()=== string.toLowerCase()
})
    }
  

    // 2nd function
function fuzzyMatch(driversName, string){
    return driversName.filter(driversName=>driversName.toLowerCase().startsWith(string.toLowerCase()))
}
  
// 3rd function
function matchName(driversName, argument){
    return driversName.filter(function(driversName){
        return driversName.name === argument
    })
}
