// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =
    `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${imageUrl}">
    `
 }
 
    function validateInput(testInput) {
    // if(testInput == ""){
    //     return "Empty"
    // } else if (isNaN(testInput) == false){
    //     return "Is a Number"
    // } else if (isNaN(testInput) == true) {
    //     return "Not a Number"
    // }
    return testInput === "" ? "Empty" : isNaN(testInput) ? "Not a Number" : "Is a Number";
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty" ){
        alert("All Fields Must Be Filled Out!");
    }
    let status = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    
    
    list.style.visibility = "visible";
    status.style.color = fuelLevel < 10000 || cargoLevel >= 10000 ? "red" : "green";
    status.innerHTML = fuelLevel < 10000 || cargoLevel >= 10000 ? "Shuttle Not Ready for Launch" : "Shuttle is Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = fuelLevel < 10000 ? "Fuel level too low for launch" :  "Fuel level high enough for launch";
    cargoStatus.innerHTML = cargoLevel >= 10000 ? "Cargo mass too heavy for launch" : "Cargo mass low enough for launch";
    

    //     if (fuelLevel < 10000 & cargoLevel >= 10000) {
    //         list.style.visibility = "visible";
    //         status.style.color = "red";
    //         status.innerHTML = "Shuttle Not Ready for Launch";
    //         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    //         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //         fuelStatus.innerHTML = "Fuel level too low for launch";
    //         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    //     } else if (cargoLevel >= 10000) {
    //         list.style.visibility = "visible";
    //         status.style.color = "red";
    //         status.innerHTML = "Shuttle Not Ready for Launch";
    //         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    //         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //         fuelStatus.innerHTML = "Fuel level high enough for launch";
    //         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    //     } else if (fuelLevel < 10000) {
    //         list.style.visibility = "visible";
    //         status.style.color = "red";
    //         status.innerHTML = "Shuttle Not Ready for Launch";
    //         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    //         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //         fuelStatus.innerHTML = "Fuel level too low for launch";
    //         cargoStatus.innerHTML = "Cargo mass low enough for launch";
    //     } else {
    //         list.style.visibility = "visible";
    //         status.style.color = "green";
    //         status.innerHTML = "Shuttle is Ready for Launch";
    //         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    //         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //         fuelStatus.innerHTML = "Fuel level high enough for launch";
    //         cargoStatus.innerHTML = "Cargo mass low enough for launch";
    //     }
    }  
    
 
    async function myFetch() {
        let planetsReturned;
    
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
           return response.json();
            });
    
        return planetsReturned;
    }
    
    function pickPlanet(planets) {
       let index = Math.floor(Math.random() * planets.length);
       return planets[index];
    }
    
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;