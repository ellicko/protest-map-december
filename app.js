// Initialize map
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Initialize variables
const protestList = document.getElementById('protest-list');
const markers = {};
let visibleMarkers = new Set();

function updateProtestCount() {
    const count = visibleMarkers.size;
    document.getElementById('protestCount').textContent = 
        `Showing ${count} protest${count !== 1 ? 's' : ''}`;
}

function createMarkers() {
    protests.forEach(protest => {
        const marker = L.marker(protest.coordinates)
            .bindPopup(`
                <div class="popup-content">
                    <h3>${protest.location}</h3>
                    <p>${protest.date} at ${protest.time}</p>
                    <p>${protest.description}</p>
                    <p>Risk Level: ${protest.riskLevel}</p>
                    <p>Social Media Followers: ${protest.followers.toLocaleString()}</p>
                    ${protest.proximity ? `<p>Proximity: ${protest.proximity}</p>` : ''}
                </div>
            `);
        markers[protest.id] = marker;
        visibleMarkers.add(protest.id);
    });
    updateProtestCount();
}

function updateSidebar(filteredProtests = protests) {
    protestList.innerHTML = '';
    filteredProtests.forEach(protest => {
        const protestItem = document.createElement('div');
        protestItem.className = 'protest-item';
        protestItem.innerHTML = `
            <h3>${protest.location}</h3>
            <p>${protest.date} at ${protest.time}</p>
            <p>
                <span class="risk-badge risk-${protest.riskLevel}">${protest.riskLevel}</span>
                ${protest.followers.toLocaleString()} followers
            </p>
        `;
        protestItem.onclick = () => {
            map.setView(protest.coordinates, 13);
            markers[protest.id].openPopup();
        };
        protestList.appendChild(protestItem);
    });
}

function filterProtests(date) {
    // Clear all markers from map
    visibleMarkers.forEach(id => {
        markers[id].remove();
    });
    visibleMarkers.clear();

    // Filter protests and update markers
    const filteredProtests = date 
        ? protests.filter(p => p.date === date)
        : protests;

    filteredProtests.forEach(protest => {
        markers[protest.id].addTo(map);
        visibleMarkers.add(protest.id);
    });

    updateSidebar(filteredProtests);
    updateProtestCount();
}

// Initialize date picker
const picker = new Pikaday({
    field: document.getElementById('datePicker'),
    format: 'MMMM D',
    minDate: new Date('2024-12-05'),
    maxDate: new Date('2024-12-12'),
    onSelect: function(date) {
        const formattedDate = moment(date).format('MMMM D');
        filterProtests(formattedDate);
    }
});

// Reset filter button
document.getElementById('resetFilter').addEventListener('click', () => {
    picker.setDate(null);
    document.getElementById('datePicker').value = '';
    filterProtests();
});

// Initialize the map
createMarkers();
protests.forEach(protest => markers[protest.id].addTo(map));
updateSidebar();