// Initialize contact map
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('contact-map');
    
    if (!mapElement) return;

    // Istanbul coordinates (approximate center)
    const latitude = 41.0082;
    const longitude = 28.9784;
    
    // Initialize map
    const map = L.map('contact-map').setView([latitude, longitude], 13);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
    }).addTo(map);
    
    // Add marker with custom popup
    const marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(`
        <div class="map-popup">
            <h4 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Bri.com.tr</h4>
            <p style="margin: 0 0 5px 0; font-size: 14px;">📍 İstanbul, Türkiye</p>
            <p style="margin: 0; font-size: 14px;">📞 +90 (XXX) XXX XXXX</p>
        </div>
    `).openPopup();
    
    // Customize marker icon
    const customIcon = L.icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAzMiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPFBBYXZLID0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGR4PSItMDAwMDAwMDAwMDAwMDAxOSIgZHk9IjAiIHZpZXdCb3g9IjAgMCAzMiA0OCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjQ4Ij4KPHBhdGggZD0iTTE2IDAgQzEyLjI2OCAwIDkgMy4yNjggOSA3QzkgOS44NDEgOS44MTUgMTIuNTAgMTIuMzEyIDE0LjM0NEMxMy4zNTUgMTUuMzggMTQgMTYuNzk0IDE0IDE4LjM1MlYyNkMxNCAyNi41NTIgMTQuNDQ4IDI3IDE1IDI3SDE3QzE3LjU1MiAyNyAxOCAyNi41NTIgMTggMjZWMTguMzUyQzE4IDE2Ljc5NCAxOC42NDUgMTUuMzggMTkuNjg4IDE0LjM0NEMyMi4xODUgMTIuNSAyMyA5Ljg0MSAyMyA3QzIzIDMuMjY4IDE5LjczMiAwIDE2IDB6TTQgMzBDMi44OTUgMzAgMiAzMC44OTUgMiAzMlY0NkMyIDQ3LjEwNSAyLjg5NSA0OCA0IDQ4SDI4QzI5LjEwNSA0OCAzMCA0Ny4xMDUgMzAgNDZWMzJDMzAgMzAuODk1IDI5LjEwNSAzMCAyOCAzMEg0eiIgZmlsbD0iIzEzNThDMCIvPgo8L3N2Zz4=',
        iconSize: [32, 48],
        iconAnchor: [16, 48],
        popupAnchor: [0, -48]
    });
    
    marker.setIcon(customIcon);
    
    // Make map responsive
    window.addEventListener('resize', function() {
        setTimeout(function() {
            map.invalidateSize();
        }, 100);
    });
});
