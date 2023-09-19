document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", calculatePowerLevel);
});

function calculatePowerLevel() {
    const drawScore = parseInt(document.getElementById("draw").value) || 0;
    const tutorsScore = parseInt(document.getElementById("tutors").value) || 0;
    const rampScore = parseInt(document.getElementById("ramp").value) || 0;
    const interactionScore = parseInt(document.getElementById("interaction").value) || 0;
    const commandersScore = parseInt(document.getElementById("commanders").value) || 0;
    const graveyardScore = parseInt(document.getElementById("graveyard").value) || 0;

    // Custom weights for each component
    const weights = {
        draw: 1,
        tutors: 1,
        ramp: 1,
        interaction: 1,
        commanders: 2,
        graveyard: 1,
    };

    // Calculate the total power level score
    const powerLevel = (drawScore * weights.draw) +
        (tutorsScore * weights.tutors) +
        (rampScore * weights.ramp) +
        (interactionScore * weights.interaction) +
        (commandersScore * weights.commanders) +
        (graveyardScore * weights.graveyard);

    // Display the result
    const powerLevelDisplay = document.getElementById("power-level");
    powerLevelDisplay.textContent = powerLevel.toFixed(2);
}
