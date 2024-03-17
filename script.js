
document.addEventListener('DOMContentLoaded', () => {
    const quoteButton = document.getElementById('get-quote-btn');
    
    quoteButton.addEventListener('click', () => {
        const formHtml = `
            <div id="quote-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="age">Age:</label>
                <input type="number" id="age" name="age"><br><br>
                <label for="home-age">Home Age:</label>
                <input type="number" id="home-age" name="home_age"><br><br>
                <label for="car-value">Car Value:</label>
                <input type="number" id="car-value" name="car_value"><br><br>
                <button id="calculate-quote-btn">Generate Quote</button>
            </div>
        `;

        document.querySelector('main').innerHTML = formHtml;

        document.getElementById('calculate-quote-btn').addEventListener('click', calculateQuote);
    });
});

function calculateQuote() {
    // Retrieve user input
    const age = parseInt(document.getElementById('age').value);
    const homeAge = parseInt(document.getElementById('home-age').value);
    const carValue = parseInt(document.getElementById('car-value').value);

    // Define the base premiums and factors (these would typically come from your database or a backend service)
    const homeBasePremium = 500;
    const autoBasePremium = 750;
    const homeAgeFactor = 1.5;
    const driverAgeFactor = age >= 25 ? 1 : 2; // Simplified age factor: 1 if 25 or older, 2 otherwise
    const carValueFactor = carValue / 1000; // Simplified factor: higher car value increases the premium

    // Calculate premiums
    const homePremium = homeBasePremium * homeAgeFactor * (homeAge / 10); // Example calculation
    const autoPremium = (autoBasePremium + carValueFactor) * driverAgeFactor; // Example calculation

    // Display the results
    const resultHtml = `
        <p>Your Home Insurance Quote: $${homePremium.toFixed(2)}</p>
        <p>Your Auto Insurance Quote: $${autoPremium.toFixed(2)}</p>
    `;

    document.getElementById('quote-form').innerHTML += resultHtml;
}

