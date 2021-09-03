// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const div = document.getElementById("missionTarget");
    div.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

// function validateInput(testInput) {
//     testInput = document.getElementsByClassName("formField");
//     for (let element in testInput) {
//         if (!element.value) {
//             return "Empty";
//         } else if (isNan(element.value)) {
//             return "Not a Number";
//         } else {
//             return "Is a Number";
//         }
//     }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required.  Please fill in all boxes.");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter valid input.");
    }


    // function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
    //         validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    //         alert("All fields are required.  Please fill in all boxes.");
    //     } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    //         alert("Please enter valid input.");
    //     }
    // let pilotStatus = document.getElementById("pilotStatus");
    // let copilotStatus = document.getElementById("copilotStatus");


    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    pilot.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilot.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }
    if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        cargoStatus.innerHTML = "Cargo level too high for launch";
    }
    if (fuelLevel > 10000 && cargoLevel < 10000) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    planet = planets[Math.floor(Math.random() * planets.length)];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;