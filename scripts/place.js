document.addEventListener('DOMContentLoaded', () => {
    // Display current year and last modified date
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    // Wind Chill Calculation
    const temp = 10; // Static value for temperature in °C
    const windSpeed = 5; // Static value for wind speed in km/h

    function calculateWindChill(temp, windSpeed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }

    const windChillElement = document.getElementById('windChill');

    if (temp <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temp, windSpeed) + '°C';
    } else {
        windChillElement.textContent = 'N/A';
    }
});
