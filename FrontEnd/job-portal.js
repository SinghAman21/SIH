// Initialize the map centered on India
var map = L.map('map').setView([20.5937, 78.9629], 5); // Coordinates for the center of India

// Load the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map (example location: New Delhi)
L.marker([28.6139, 77.2090]).addTo(map) // Coordinates for New Delhi
    .bindPopup('New Delhi, the capital of India.')
    .openPopup();

