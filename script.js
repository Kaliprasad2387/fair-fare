 const lucknowData = {
            landmarks: [
                { 
                    name: "Bara Imambara", 
                    type: "Historical Monument", 
                    distance: "0.5 km from route", 
                    rating: 4.7, 
                    icon: "🏛️",
                    description: "Famous historical monument with unique architecture and Bhool Bhulaiya labyrinth",
                    timing: "6:00 AM - 5:30 PM",
                    entryFee: "₹50",
                    lat: 26.8687,
                    lng: 80.9121
                },
                { 
                    name: "Hazratganj Market", 
                    type: "Shopping District", 
                    distance: "1.2 km from route", 
                    rating: 4.4, 
                    icon: "🛍️",
                    description: "Lucknow's premier shopping destination with brands and local stores",
                    timing: "10:00 AM - 9:00 PM",
                    entryFee: "Free",
                    lat: 26.8500,
                    lng: 80.9500
                },
                { 
                    name: "Rumi Darwaza", 
                    type: "Historical Gateway", 
                    distance: "0.8 km from route", 
                    rating: 4.5, 
                    icon: "🚪",
                    description: "60-feet tall gateway inspired by Constantinople architecture",
                    timing: "24/7",
                    entryFee: "Free",
                    lat: 26.8610,
                    lng: 80.9158
                },
                { 
                    name: "Charbagh Railway Station", 
                    type: "Transport Hub", 
                    distance: "2.1 km from route", 
                    rating: 4.3, 
                    icon: "🚉",
                    description: "Historic railway station built in the Mughal style",
                    timing: "24/7",
                    entryFee: "Free",
                    lat: 26.8467,
                    lng: 80.9462
                },
                { 
                    name: "Ambedkar Park", 
                    type: "Public Park", 
                    distance: "3.5 km from route", 
                    rating: 4.2, 
                    icon: "🌳",
                    description: "Beautiful park with stunning architecture and monuments",
                    timing: "5:00 AM - 9:00 PM",
                    entryFee: "₹15",
                    lat: 26.8555,
                    lng: 80.9853
                },
                { 
                    name: "Janeshwar Mishra Park", 
                    type: "Public Park", 
                    distance: "4.2 km from route", 
                    rating: 4.6, 
                    icon: "🏞️",
                    description: "One of Asia's largest parks with cycling tracks and boating",
                    timing: "5:00 AM - 9:00 PM",
                    entryFee: "Free",
                    lat: 26.8548,
                    lng: 80.9453
                },
                { 
                    name: "Bakshi Ka Talab", 
                    type: "Town Area", 
                    distance: "0 km from route", 
                    rating: 4.1, 
                    icon: "🏘️",
                    description: "Town area in Lucknow district",
                    timing: "24/7",
                    entryFee: "Free",
                    lat: 26.9500,
                    lng: 80.8000
                },
                { 
                    name: "Kaisarbagh", 
                    type: "Historical Complex", 
                    distance: "1.5 km from route", 
                    rating: 4.3, 
                    icon: "🏰",
                    description: "Historical palace complex in Lucknow",
                    timing: "9:00 AM - 5:00 PM",
                    entryFee: "₹30",
                    lat: 26.8600,
                    lng: 80.9200
                },
                { 
                    name: "Daliganj", 
                    type: "Residential Area", 
                    distance: "3.2 km from route", 
                    rating: 4.0, 
                    icon: "🏠",
                    description: "Residential and commercial area",
                    timing: "24/7",
                    entryFee: "Free",
                    lat: 26.8700,
                    lng: 80.9300
                },
                { 
                    name: "Chhatamil", 
                    type: "Residential Area", 
                    distance: "5.1 km from route", 
                    rating: 4.0, 
                    icon: "🏡",
                    description: "Residential locality in Lucknow",
                    timing: "24/7",
                    entryFee: "Free",
                    lat: 26.8900,
                    lng: 80.9500
                }
            ],
            locations: [
                { name: "Bara Imambara", lat: 26.8687, lng: 80.9121, type: "Historical Monument", icon: "🏛️", color: "#f59e0b" },
                { name: "Hazratganj Market", lat: 26.8500, lng: 80.9500, type: "Shopping District", icon: "🛍️", color: "#10b981" },
                { name: "Charbagh Railway Station", lat: 26.8467, lng: 80.9462, type: "Transport Hub", icon: "🚉", color: "#6366f1" },
                { name: "Ambedkar Park", lat: 26.8555, lng: 80.9853, type: "Public Park", icon: "🌳", color: "#22c55e" },
                { name: "Janeshwar Mishra Park", lat: 26.8548, lng: 80.9453, type: "Public Park", icon: "🏞️", color: "#22c55e" },
                { name: "Rumi Darwaza", lat: 26.8610, lng: 80.9158, type: "Historical Gateway", icon: "🚪", color: "#f59e0b" },
                { name: "British Residency", lat: 26.8572, lng: 80.9468, type: "Historical Site", icon: "🏛️", color: "#f59e0b" },
                { name: "Lucknow Zoo", lat: 26.8525, lng: 80.9462, type: "Zoo", icon: "🐅", color: "#ef4444" },
                { name: "Indira Gandhi Planetarium", lat: 26.8469, lng: 80.9462, type: "Science Center", icon: "🔭", color: "#8b5cf6" },
                { name: "Gomti Riverfront", lat: 26.8600, lng: 80.9400, type: "Riverfront", icon: "🌊", color: "#06b6d4" },
                { name: "Lucknow University", lat: 26.8467, lng: 80.9462, type: "Educational Institution", icon: "🎓", color: "#3b82f6" },
                { name: "Sahara Ganj Mall", lat: 26.8500, lng: 80.9500, type: "Shopping Mall", icon: "🏬", color: "#10b981" },
                { name: "Phoenix United Mall", lat: 26.8500, lng: 80.9500, type: "Shopping Mall", icon: "🏬", color: "#10b981" },
                { name: "Inox Cinema", lat: 26.8500, lng: 80.9500, type: "Entertainment", icon: "🎬", color: "#ec4899" },
                { name: "Fun Republic Mall", lat: 26.8500, lng: 80.9500, type: "Shopping Mall", icon: "🏬", color: "#10b981" },
                { name: "Kukrail Forest Reserve", lat: 26.9000, lng: 80.9500, type: "Nature Reserve", icon: "🌲", color: "#22c55e" },
                { name: "Lucknow Golf Club", lat: 26.8500, lng: 80.9500, type: "Sports Facility", icon: "⛳", color: "#84cc16" },
                { name: "Amausi Airport", lat: 26.7600, lng: 80.8800, type: "Airport", icon: "✈️", color: "#6366f1" },
                { name: "KD Singh Babu Stadium", lat: 26.8500, lng: 80.9500, type: "Sports Stadium", icon: "⚽", color: "#84cc16" },
                { name: "Ram Manohar Lohia Park", lat: 26.8500, lng: 80.9500, type: "Public Park", icon: "🌳", color: "#22c55e" },
                { name: "Bakshi Ka Talab", lat: 26.9500, lng: 80.8000, type: "Town Area", icon: "🏘️", color: "#8b5cf6" },
                { name: "Kaisarbagh", lat: 26.8600, lng: 80.9200, type: "Historical Complex", icon: "🏰", color: "#f59e0b" },
                { name: "Daliganj", lat: 26.8700, lng: 80.9300, type: "Residential Area", icon: "🏠", color: "#10b981" },
                { name: "Chhatamil", lat: 26.8900, lng: 80.9500, type: "Residential Area", icon: "🏡", color: "#3b82f6" },
                { name: "Sewa Hospital", lat: 26.8800, lng: 80.9400, type: "Hospital", icon: "🏥", color: "#ef4444" },
                { name: "Badshah Nagar", lat: 26.9100, lng: 80.9700, type: "Residential Area", icon: "🏘️", color: "#3b82f6" },
                { name: "Madiyanva", lat: 26.8850, lng: 80.9450, type: "Residential Area", icon: "🏠", color: "#10b981" },
                { name: "Dali Ganj", lat: 26.8900, lng: 80.9500, type: "Market Area", icon: "🛒", color: "#f59e0b" },
                { name: "Nishad Ganj", lat: 26.9000, lng: 80.9600, type: "Residential Area", icon: "🏠", color: "#8b5cf6" }
            ],
            transport: [
                { 
                    type: "auto", 
                    name: "Auto Rickshaw", 
                    fare: "₹15 + ₹3/km", 
                    time: "18 min", 
                    icon: "🚙",
                    features: ["Metered Fare", "Easy Availability", "Direct Route"]
                },
                { 
                    type: "bus", 
                    name: "City Bus", 
                    fare: "₹20", 
                    time: "25 min", 
                    icon: "🚌",
                    features: ["Most Economical", "Fixed Route", "Frequent Service"]
                },
                { 
                    type: "metro", 
                    name: "Lucknow Metro", 
                    fare: "₹30 - ₹60", 
                    time: "15 min", 
                    icon: "🚇",
                    features: ["Fastest Option", "Air Conditioned", "No Traffic"]
                },
                { 
                    type: "taxi", 
                    name: "Cab Service", 
                    fare: "₹150 - ₹200", 
                    time: "18 min", 
                    icon: "🚕",
                    features: ["Comfortable", "Door-to-Door", "App Booking"]
                }
            ]
        };

        let map;
        let userLocation = null;
        let userMarker = null;
        let destinationMarker = null;
        let routeControl = null;
        let locationMarkers = [];
        let recentSearches = JSON.parse(localStorage.getItem('fairfare_recent_searches')) || [];

        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            initializeMap();
            
            document.getElementById('calculate-route-btn').addEventListener('click', calculateRoute);
            document.getElementById('detect-location-btn').addEventListener('click', detectUserLocation);
            
            document.querySelectorAll('.transport-mode').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.transport-mode').forEach(b => {
                        b.classList.remove('bg-blue-600', 'text-white');
                        b.classList.add('bg-gray-200', 'text-gray-700');
                    });
                    
                    this.classList.remove('bg-gray-200', 'text-gray-700');
                    this.classList.add('bg-blue-600', 'text-white');
                    
                    if (userLocation) {
                        updateFareForTransportMode(this.dataset.mode);
                    }
                });
            });
            
            document.querySelectorAll('.popular-dest').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.getElementById('destination-input').value = this.dataset.dest;
                    calculateRoute();
                });
            });
            
            document.querySelectorAll('.popular-tag').forEach(tag => {
                if (tag.dataset.dest) {
                    tag.addEventListener('click', function() {
                        document.getElementById('destination-input').value = this.dataset.dest;
                        showSuggestions(this.dataset.dest);
                    });
                }
                if (tag.dataset.loc) {
                    tag.addEventListener('click', function() {
                        document.getElementById('current-location-input').value = this.dataset.loc;
                        const location = lucknowData.locations.find(loc => loc.name === this.dataset.loc);
                        if (location) {
                            setUserLocation(location.lat, location.lng, location.name);
                        }
                    });
                }
            });
            
            setupLocationSearch();
            setupCurrentLocationSearch();
            updateRecentSearches();
            detectUserLocation();
        }

        function initializeMap() {
            map = L.map('map').setView([26.8467, 80.9462], 12);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            map.on('click', function(e) {
                setUserLocation(e.latlng.lat, e.latlng.lng);
            });
            
            addLocationMarkers();
        }

        function setupLocationSearch() {
            const destinationInput = document.getElementById('destination-input');
            const destinationSuggestions = document.getElementById('destination-suggestions');
            
            destinationInput.addEventListener('focus', function() {
                if (this.value === '') {
                    showDefaultSuggestions();
                } else {
                    showSuggestions(this.value);
                }
            });
            
            destinationInput.addEventListener('input', function() {
                showSuggestions(this.value);
            });
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.location-search-container')) {
                    destinationSuggestions.style.display = 'none';
                }
            });
            
            destinationInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const firstSuggestion = document.querySelector('.location-suggestion');
                    if (firstSuggestion) {
                        firstSuggestion.click();
                    }
                }
            });
        }

        function setupCurrentLocationSearch() {
            const currentLocationInput = document.getElementById('current-location-input');
            const currentLocationSuggestions = document.getElementById('current-location-suggestions');
            
            currentLocationInput.addEventListener('focus', function() {
                showCurrentLocationSuggestions();
            });
            
            currentLocationInput.addEventListener('input', function() {
                showCurrentLocationSuggestions(this.value);
            });
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.location-search-container')) {
                    currentLocationSuggestions.style.display = 'none';
                }
            });
        }

        function showDefaultSuggestions() {
            const destinationSuggestions = document.getElementById('destination-suggestions');
            const suggestionsList = destinationSuggestions;
            
            const existingSuggestions = suggestionsList.querySelectorAll('.location-suggestion');
            existingSuggestions.forEach(suggestion => {
                if (!suggestion.closest('.popular-tags') && !suggestion.closest('.recent-searches')) {
                    suggestion.remove();
                }
            });
            
            const popularLocations = lucknowData.locations.slice(0, 5);
            
            popularLocations.forEach(location => {
                const suggestion = createSuggestionElement(location, '');
                const recentSearchesContainer = document.getElementById('recent-searches-container');
                suggestionsList.insertBefore(suggestion, recentSearchesContainer);
            });
            
            destinationSuggestions.style.display = 'block';
        }

        function showSuggestions(query) {
            const destinationSuggestions = document.getElementById('destination-suggestions');
            const suggestionsList = destinationSuggestions;
            
            const existingSuggestions = suggestionsList.querySelectorAll('.location-suggestion');
            existingSuggestions.forEach(suggestion => {
                if (!suggestion.closest('.popular-tags') && !suggestion.closest('.recent-searches')) {
                    suggestion.remove();
                }
            });
            
            if (query === '') {
                showDefaultSuggestions();
                return;
            }
            
            const filteredLocations = lucknowData.locations.filter(location => 
                location.name.toLowerCase().includes(query.toLowerCase()) || 
                location.type.toLowerCase().includes(query.toLowerCase())
            );
            
            if (filteredLocations.length > 0) {
                filteredLocations.forEach(location => {
                    const suggestion = createSuggestionElement(location, query);
                    const recentSearchesContainer = document.getElementById('recent-searches-container');
                    suggestionsList.insertBefore(suggestion, recentSearchesContainer);
                });
                destinationSuggestions.style.display = 'block';
            } else {
                const noResults = document.createElement('div');
                noResults.className = 'location-suggestion';
                noResults.innerHTML = `
                    <div class="suggestion-icon" style="background: #f3f4f6;">🔍</div>
                    <div class="suggestion-content">
                        <div class="suggestion-name">No results found</div>
                        <div class="suggestion-type">Try a different search term</div>
                    </div>
                `;
                const recentSearchesContainer = document.getElementById('recent-searches-container');
                suggestionsList.insertBefore(noResults, recentSearchesContainer);
                destinationSuggestions.style.display = 'block';
            }
        }

        function showCurrentLocationSuggestions(query = '') {
            const currentLocationSuggestions = document.getElementById('current-location-suggestions');
            const suggestionsList = currentLocationSuggestions;
            
            const existingSuggestions = suggestionsList.querySelectorAll('.location-suggestion');
            existingSuggestions.forEach(suggestion => {
                if (!suggestion.closest('.popular-tags')) {
                    suggestion.remove();
                }
            });
            
            if (query === '') {
                const popularLocations = lucknowData.locations.filter(loc => 
                    ['Charbagh Railway Station', 'Hazratganj Market', 'Lucknow University', 'Amausi Airport', 'Sewa Hospital'].includes(loc.name)
                );
                
                popularLocations.forEach(location => {
                    const suggestion = createCurrentLocationSuggestion(location, '');
                    suggestionsList.appendChild(suggestion);
                });
            } else {
                const filteredLocations = lucknowData.locations.filter(location => 
                    location.name.toLowerCase().includes(query.toLowerCase())
                );
                
                if (filteredLocations.length > 0) {
                    filteredLocations.forEach(location => {
                        const suggestion = createCurrentLocationSuggestion(location, query);
                        suggestionsList.appendChild(suggestion);
                    });
                } else {
                    const noResults = document.createElement('div');
                    noResults.className = 'location-suggestion';
                    noResults.innerHTML = `
                        <div class="suggestion-icon" style="background: #f3f4f6;">🔍</div>
                        <div class="suggestion-content">
                            <div class="suggestion-name">No results found</div>
                            <div class="suggestion-type">Try a different search term</div>
                        </div>
                    `;
                    suggestionsList.appendChild(noResults);
                }
            }
            
            currentLocationSuggestions.style.display = 'block';
        }

        function createSuggestionElement(location, query) {
            const suggestion = document.createElement('div');
            suggestion.className = 'location-suggestion';
            
            const highlightedName = highlightText(location.name, query);
            const highlightedType = highlightText(location.type, query);
            
            let distanceText = '';
            if (userLocation) {
                const distance = calculateDistance(
                    userLocation[0], userLocation[1],
                    location.lat, location.lng
                );
                distanceText = `${distance.toFixed(1)} km away`;
            }
            
            suggestion.innerHTML = `
                <div class="suggestion-icon" style="background: ${location.color}20; color: ${location.color}">
                    ${location.icon}
                </div>
                <div class="suggestion-content">
                    <div class="suggestion-name">${highlightedName}</div>
                    <div class="suggestion-type">${highlightedType}</div>
                </div>
                ${distanceText ? `<div class="suggestion-distance">${distanceText}</div>` : ''}
            `;
            
            suggestion.addEventListener('click', function() {
                document.getElementById('destination-input').value = location.name;
                document.getElementById('destination-suggestions').style.display = 'none';
                
                addToRecentSearches(location.name);
                
                setDestinationLocation(location.lat, location.lng, location.name);
            });
            
            return suggestion;
        }

        function createCurrentLocationSuggestion(location, query) {
            const suggestion = document.createElement('div');
            suggestion.className = 'location-suggestion';
            
            const highlightedName = highlightText(location.name, query);
            
            suggestion.innerHTML = `
                <div class="suggestion-icon" style="background: ${location.color}20; color: ${location.color}">
                    ${location.icon}
                </div>
                <div class="suggestion-content">
                    <div class="suggestion-name">${highlightedName}</div>
                    <div class="suggestion-type">${location.type}</div>
                </div>
            `;
            
            suggestion.addEventListener('click', function() {
                document.getElementById('current-location-input').value = location.name;
                setUserLocation(location.lat, location.lng, location.name);
                document.getElementById('current-location-suggestions').style.display = 'none';
            });
            
            return suggestion;
        }

        function highlightText(text, query) {
            if (!query) return text;
            
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<span class="search-highlight">$1</span>');
        }

        function addToRecentSearches(destination) {
            recentSearches = recentSearches.filter(item => item !== destination);
            recentSearches.unshift(destination);
            recentSearches = recentSearches.slice(0, 5);
            localStorage.setItem('fairfare_recent_searches', JSON.stringify(recentSearches));
            updateRecentSearches();
        }

        function updateRecentSearches() {
            const recentSearchesList = document.getElementById('recent-searches-list');
            recentSearchesList.innerHTML = '';
            
            if (recentSearches.length === 0) {
                recentSearchesList.innerHTML = '<div class="text-xs text-gray-500">No recent searches</div>';
                return;
            }
            
            recentSearches.forEach(search => {
                const recentItem = document.createElement('div');
                recentItem.className = 'recent-item';
                recentItem.innerHTML = `
                    <i class="fas fa-history text-gray-400"></i>
                    <span>${search}</span>
                `;
                recentItem.addEventListener('click', function() {
                    document.getElementById('destination-input').value = search;
                    const location = lucknowData.locations.find(loc => loc.name === search);
                    if (location) {
                        setDestinationLocation(location.lat, location.lng, location.name);
                    }
                });
                recentSearchesList.appendChild(recentItem);
            });
        }

        function addLocationMarkers() {
            locationMarkers.forEach(marker => map.removeLayer(marker));
            locationMarkers = [];
            
            lucknowData.locations.forEach(location => {
                const marker = L.marker([location.lat, location.lng])
                    .addTo(map)
                    .bindPopup(`
                        <div class="font-semibold">${location.name}</div>
                        <div class="text-sm text-gray-600">${location.type}</div>
                        <button class="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs set-destination-btn" data-lat="${location.lat}" data-lng="${location.lng}" data-name="${location.name}">
                            Set as Destination
                        </button>
                        <button class="mt-1 bg-green-600 text-white px-3 py-1 rounded text-xs set-current-location-btn" data-lat="${location.lat}" data-lng="${location.lng}" data-name="${location.name}">
                            Set as Current Location
                        </button>
                    `);
                
                locationMarkers.push(marker);
                
                marker.on('popupopen', function() {
                    const setDestinationBtn = document.querySelector('.set-destination-btn');
                    const setCurrentLocationBtn = document.querySelector('.set-current-location-btn');
                    
                    if (setDestinationBtn) {
                        setDestinationBtn.addEventListener('click', function() {
                            const lat = parseFloat(this.getAttribute('data-lat'));
                            const lng = parseFloat(this.getAttribute('data-lng'));
                            const name = this.getAttribute('data-name');
                            
                            document.getElementById('destination-input').value = name;
                            setDestinationLocation(lat, lng, name);
                            map.closePopup();
                        });
                    }
                    
                    if (setCurrentLocationBtn) {
                        setCurrentLocationBtn.addEventListener('click', function() {
                            const lat = parseFloat(this.getAttribute('data-lat'));
                            const lng = parseFloat(this.getAttribute('data-lng'));
                            const name = this.getAttribute('data-name');
                            
                            document.getElementById('current-location-input').value = name;
                            setUserLocation(lat, lng, name);
                            map.closePopup();
                        });
                    }
                });
            });
        }

        function setDestinationLocation(lat, lng, name) {
            if (destinationMarker) {
                map.removeLayer(destinationMarker);
            }
            
            destinationMarker = L.marker([lat, lng], {
                icon: L.divIcon({
                    className: 'custom-div-icon',
                    html: '<div class="destination-marker"></div>',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                })
            })
            .addTo(map)
            .bindPopup(`Destination: ${name}`)
            .openPopup();
            
            map.setView([lat, lng], 14);
        }

        function detectUserLocation() {
            document.getElementById('current-location-input').value = "Detecting location...";
            
            if (navigator.geolocation) {
                const locationOptions = {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 60000
                };
                
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        setUserLocation(lat, lng);
                        document.getElementById('current-location-input').value = "Current Location Detected";
                        
                        getLocationName(lat, lng);
                    },
                    function(error) {
                        console.error("Error getting location:", error);
                        let errorMessage = "Location not available";
                        
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMessage = "Location access denied. Please allow location access or click on the map to set your location.";
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMessage = "Location information unavailable. Please check your connection or click on the map to set your location.";
                                break;
                            case error.TIMEOUT:
                                errorMessage = "Location request timed out. Please try again or click on the map to set your location.";
                                break;
                            default:
                                errorMessage = "An unknown error occurred. Please click on the map to set your location.";
                                break;
                        }
                        
                        document.getElementById('current-location-input').value = errorMessage;
                        
                        setUserLocation(26.8467, 80.9462);
                    },
                    locationOptions
                );
            } else {
                console.error("Geolocation not supported");
                document.getElementById('current-location-input').value = "Location not supported by this browser. Please click on the map to set your location.";
                
                setUserLocation(26.8467, 80.9462);
            }
        }

        function getLocationName(lat, lng) {
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.display_name) {
                        const address = data.display_name.split(',');
                        const locationName = address.slice(0, 3).join(', ');
                        document.getElementById('current-location-input').value = locationName;
                    }
                })
                .catch(error => {
                    console.error("Error getting location name:", error);
                    document.getElementById('current-location-input').value = 
                        `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
                });
        }

        function setUserLocation(lat, lng, name = "Selected Location") {
            userLocation = [lat, lng];
            
            if (userMarker) {
                map.removeLayer(userMarker);
            }
            
            userMarker = L.marker([lat, lng], {
                icon: L.divIcon({
                    className: 'custom-div-icon',
                    html: '<div class="location-marker"></div>',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                })
            })
            .addTo(map)
            .bindPopup(`Current Location: ${name}`)
            .openPopup();
            
            map.setView([lat, lng], 14);
            
            document.getElementById('current-location-input').value = name;
        }

        function calculateRoute() {
            const currentLocationName = document.getElementById('current-location-input').value;
            const destination = document.getElementById('destination-input').value;
            
            if (!userLocation) {
                alert("Please set your current location first");
                return;
            }
            
            if (!destination) {
                alert("Please enter a destination");
                return;
            }
            
            const destinationLocation = lucknowData.locations.find(loc => 
                loc.name.toLowerCase() === destination.toLowerCase()
            );
            
            if (!destinationLocation) {
                alert("Destination not found. Please select a location from the suggestions.");
                return;
            }
            
            addToRecentSearches(destination);
            
            document.getElementById('loading-section').classList.remove('hidden');
            document.getElementById('results-section').classList.add('hidden');
            
            if (routeControl) {
                map.removeControl(routeControl);
            }
            
            routeControl = L.Routing.control({
                waypoints: [
                    L.latLng(userLocation[0], userLocation[1]),
                    L.latLng(destinationLocation.lat, destinationLocation.lng)
                ],
                routeWhileDragging: false,
                showAlternatives: false,
                lineOptions: {
                    styles: [
                        {
                            color: '#3b82f6',
                            weight: 6,
                            opacity: 0.8
                        }
                    ]
                },
                createMarker: function(i, waypoint, n) {
                    if (i === 0) {
                        return L.marker(waypoint.latLng, {
                            icon: L.divIcon({
                                className: 'custom-div-icon',
                                html: '<div class="location-marker"></div>',
                                iconSize: [20, 20],
                                iconAnchor: [10, 10]
                            })
                        }).bindPopup("Your Location");
                    } else {
                        return L.marker(waypoint.latLng, {
                            icon: L.divIcon({
                                className: 'custom-div-icon',
                                html: '<div class="destination-marker"></div>',
                                iconSize: [20, 20],
                                iconAnchor: [10, 10]
                            })
                        }).bindPopup(`Destination: ${destination}`);
                    }
                },
                router: L.Routing.osrmv1({
                    serviceUrl: 'https://router.project-osrm.org/route/v1'
                })
            }).addTo(map);
            
            routeControl.on('routesfound', function(e) {
                const routes = e.routes;
                const route = routes[0];
                
                const distance = (route.summary.totalDistance / 1000).toFixed(1);
                const time = Math.round(route.summary.totalTime / 60);
                
                document.getElementById('loading-section').classList.add('hidden');
                document.getElementById('results-section').classList.remove('hidden');
                
                document.getElementById('route-distance').textContent = distance + ' km';
                document.getElementById('route-time').textContent = time + ' min';
                
                // Update summary section
                document.getElementById('summary-distance').textContent = distance + ' km';
                document.getElementById('summary-time').textContent = time + ' min';
                
                calculateFare(distance, time);
                
                if (currentLocationName.toLowerCase().includes('sewa hospital') && destination.toLowerCase().includes('badshah nagar')) {
                    showSewaToBadshahRouteOverview(currentLocationName, destination);
                    showSewaToBadshahDirections();
                } else if (currentLocationName.toLowerCase().includes('charbagh') && destination.toLowerCase().includes('bakshi')) {
                    showSpecificRouteOverview(currentLocationName, destination);
                } else {
                    showPlacesAlongActualRoute(userLocation, [destinationLocation.lat, destinationLocation.lng], route.coordinates);
                }
                
                showTransportOptions();
            });
            
            routeControl.on('routingerror', function(e) {
                console.error('Routing error:', e.error);
                alert('Could not calculate route. Please try again.');
                document.getElementById('loading-section').classList.add('hidden');
            });
        }

        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = deg2rad(lat2 - lat1);
            const dLon = deg2rad(lon2 - lon1);
            const a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            const distance = R * c;
            return distance;
        }

        function deg2rad(deg) {
            return deg * (Math.PI/180);
        }

        function showSewaToBadshahDirections() {
            const directionsContainer = document.getElementById('directions-container');
            directionsContainer.innerHTML = '';
            
            const directions = [
                {
                    step: 1,
                    instruction: "Start from Sewa Hospital and head northeast toward the main road",
                    distance: "0.2 km",
                    icon: "🚶"
                },
                {
                    step: 2,
                    instruction: "Turn right onto the main road and continue straight",
                    distance: "0.8 km",
                    icon: "➡️"
                },
                {
                    step: 3,
                    instruction: "Pass through Madiyanva residential area on your left",
                    distance: "0.5 km",
                    icon: "🏠"
                },
                {
                    step: 4,
                    instruction: "Continue straight and you'll see Dali Ganj market on your right",
                    distance: "0.7 km",
                    icon: "🛒"
                },
                {
                    step: 5,
                    instruction: "Turn left at the intersection after Dali Ganj",
                    distance: "0.3 km",
                    icon: "⬅️"
                },
                {
                    step: 6,
                    instruction: "Pass through Nishad Ganj residential area",
                    distance: "0.9 km",
                    icon: "🏠"
                },
                {
                    step: 7,
                    instruction: "Turn right at the T-junction and continue for 0.4 km",
                    distance: "0.4 km",
                    icon: "➡️"
                },
                {
                    step: 8,
                    instruction: "You have arrived at Badshah Nagar - your destination is on the left",
                    distance: "0 km",
                    icon: "🏁"
                }
            ];
            
            directions.forEach(direction => {
                const directionStep = document.createElement('div');
                directionStep.className = 'direction-step';
                directionStep.innerHTML = `
                    <div class="flex items-start">
                        <div class="direction-icon">${direction.step}</div>
                        <div class="flex-1">
                            <div class="flex justify-between items-start">
                                <div class="font-medium text-gray-800">${direction.instruction}</div>
                                <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">${direction.distance}</span>
                            </div>
                            <div class="flex items-center mt-1 text-sm text-gray-600">
                                <span class="mr-2">${direction.icon}</span>
                                <span>Step ${direction.step}</span>
                            </div>
                        </div>
                    </div>
                `;
                directionsContainer.appendChild(directionStep);
            });
        }

        function showSewaToBadshahRouteOverview(currentLocationName, destination) {
            const timelineContainer = document.getElementById('route-timeline');
            timelineContainer.innerHTML = '';
            
            const specificRoute = [
                {
                    name: currentLocationName,
                    type: "Starting Point",
                    icon: "📍",
                    description: "Your current location at Sewa Hospital",
                    timing: "",
                    entryFee: "",
                    isCurrentLocation: true
                },
                {
                    name: "Madiyanva",
                    type: "Residential Area",
                    icon: "🏠",
                    description: "Local residential area with shops and amenities",
                    timing: "24/7",
                    entryFee: "Free",
                    distance: "0.8 km from route",
                    rating: 4.2
                },
                {
                    name: "Dali Ganj",
                    type: "Market Area",
                    icon: "🛒",
                    description: "Local market area with shops and vendors",
                    timing: "8:00 AM - 9:00 PM",
                    entryFee: "Free",
                    distance: "1.5 km from route",
                    rating: 4.0
                },
                {
                    name: "Nishad Ganj",
                    type: "Residential Area",
                    icon: "🏠",
                    description: "Residential locality with local amenities",
                    timing: "24/7",
                    entryFee: "Free",
                    distance: "2.5 km from route",
                    rating: 4.1
                },
                {
                    name: destination,
                    type: "Destination",
                    icon: "🏁",
                    description: "Your final destination at Badshah Nagar",
                    timing: "",
                    entryFee: "",
                    isDestination: true
                }
            ];
            
            // Update summary stops count
            document.getElementById('summary-stops').textContent = (specificRoute.length - 2) + ' stops';
            
            createRouteTimeline(specificRoute);
        }

        function showSpecificRouteOverview(currentLocationName, destination) {
            const timelineContainer = document.getElementById('route-timeline');
            timelineContainer.innerHTML = '';
            
            const specificRoute = [
                {
                    name: currentLocationName,
                    type: "Starting Point",
                    icon: "📍",
                    description: "Your current location at Charbagh",
                    timing: "",
                    entryFee: "",
                    isCurrentLocation: true
                },
                {
                    name: "Kaisarbagh",
                    type: "Historical Complex",
                    icon: "🏰",
                    description: "Historical palace complex in Lucknow",
                    timing: "9:00 AM - 5:00 PM",
                    entryFee: "₹30",
                    distance: "1.5 km from route",
                    rating: 4.3
                },
                {
                    name: "Daliganj",
                    type: "Residential Area",
                    icon: "🏠",
                    description: "Residential and commercial area",
                    timing: "24/7",
                    entryFee: "Free",
                    distance: "3.2 km from route",
                    rating: 4.0
                },
                {
                    name: "Chhatamil",
                    type: "Residential Area",
                    icon: "🏡",
                    description: "Residential locality in Lucknow",
                    timing: "24/7",
                    entryFee: "Free",
                    distance: "5.1 km from route",
                    rating: 4.0
                },
                {
                    name: destination,
                    type: "Destination",
                    icon: "🏁",
                    description: "Your final destination at Bakshi Ka Talab",
                    timing: "",
                    entryFee: "",
                    isDestination: true
                }
            ];
            
            // Update summary stops count
            document.getElementById('summary-stops').textContent = (specificRoute.length - 2) + ' stops';
            
            createRouteTimeline(specificRoute);
        }

        function showPlacesAlongActualRoute(startCoords, endCoords, routeCoordinates) {
            const timelineContainer = document.getElementById('route-timeline');
            timelineContainer.innerHTML = '';
            
            const placesAlongRoute = findPlacesNearRoute(routeCoordinates, lucknowData.locations, 3);
            
            const routeOverview = [
                {
                    name: document.getElementById('current-location-input').value,
                    type: "Starting Point",
                    icon: "📍",
                    description: "Your current location",
                    timing: "",
                    entryFee: "",
                    isCurrentLocation: true
                },
                ...placesAlongRoute,
                {
                    name: document.getElementById('destination-input').value,
                    type: "Destination",
                    icon: "🏁",
                    description: "Your final destination",
                    timing: "",
                    entryFee: "",
                    isDestination: true
                }
            ];
            
            // Update summary stops count
            document.getElementById('summary-stops').textContent = placesAlongRoute.length + ' stops';
            
            createRouteTimeline(routeOverview);
        }

        // NEW FUNCTION TO CREATE ROUTE TIMELINE WITH ARROWS
        function createRouteTimeline(routeOverview) {
            const timelineContainer = document.getElementById('route-timeline');
            timelineContainer.innerHTML = '';
            
            routeOverview.forEach((place, index) => {
                const timelineStep = document.createElement('div');
                
                // Determine step type for styling
                let stepType = 'waypoint';
                if (place.isCurrentLocation) stepType = 'start';
                if (place.isDestination) stepType = 'end';
                
                timelineStep.className = `timeline-step ${stepType}`;
                
                // Create step content
                let detailsHTML = '';
                if (!place.isCurrentLocation && !place.isDestination) {
                    const landmarkInfo = lucknowData.landmarks.find(lm => lm.name === place.name);
                    if (landmarkInfo) {
                        detailsHTML = `
                            <div class="place-details">
                                <div class="place-icon" style="background: ${landmarkInfo.color || '#3b82f6'}20; color: ${landmarkInfo.color || '#3b82f6'}">
                                    ${landmarkInfo.icon || place.icon}
                                </div>
                                <div class="place-info">
                                    <div class="place-name">${place.name}</div>
                                    <div class="place-type">${place.type}</div>
                                    <div class="place-description">${landmarkInfo.description || place.description}</div>
                                    <div class="place-meta">
                                        <div class="place-distance">
                                            <i class="fas fa-road"></i>
                                            <span>${place.distance || 'Along your route'}</span>
                                        </div>
                                        <div class="place-rating">
                                            <i class="fas fa-star text-yellow-500"></i>
                                            <span>${landmarkInfo.rating || place.rating || 'N/A'}/5</span>
                                        </div>
                                    </div>
                                    <div class="place-meta mt-2">
                                        <span><i class="fas fa-clock mr-1"></i>${landmarkInfo.timing || place.timing || 'Varies'}</span>
                                        <span><i class="fas fa-ticket mr-1"></i>${landmarkInfo.entryFee || place.entryFee || 'Free'}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    } else {
                        detailsHTML = `
                            <div class="place-details">
                                <div class="place-icon" style="background: #3b82f620; color: #3b82f6">
                                    ${place.icon}
                                </div>
                                <div class="place-info">
                                    <div class="place-name">${place.name}</div>
                                    <div class="place-type">${place.type}</div>
                                    <div class="place-description">${place.description}</div>
                                    <div class="place-meta">
                                        <div class="place-distance">
                                            <i class="fas fa-road"></i>
                                            <span>${place.distance || 'Along your route'}</span>
                                        </div>
                                        <div class="place-rating">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>Point of interest</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                } else {
                    let stepIcon = place.icon;
                    let stepColor = '#3b82f6';
                    let stepDescription = place.description;
                    
                    if (place.isCurrentLocation) {
                        stepIcon = '📍';
                        stepColor = '#10b981';
                        stepDescription = 'Starting point of your journey';
                    } else if (place.isDestination) {
                        stepIcon = '🏁';
                        stepColor = '#ef4444';
                        stepDescription = 'Final destination of your journey';
                    }
                    
                    detailsHTML = `
                        <div class="place-details">
                            <div class="place-icon" style="background: ${stepColor}20; color: ${stepColor}">
                                ${stepIcon}
                            </div>
                            <div class="place-info">
                                <div class="place-name">${place.name}</div>
                                <div class="place-type">${place.type}</div>
                                <div class="place-description">${stepDescription}</div>
                                <div class="place-meta">
                                    <div class="place-distance">
                                        <i class="fas ${place.isCurrentLocation ? 'fa-location-arrow' : 'fa-flag'}"></i>
                                        <span>${place.isCurrentLocation ? 'Starting point' : 'Final destination'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
                
                timelineStep.innerHTML = `
                    <div class="timeline-content">
                        ${detailsHTML}
                    </div>
                    <div class="timeline-arrow">
                        <i class="fas fa-arrow-down"></i>
                    </div>
                `;
                
                timelineContainer.appendChild(timelineStep);
            });
        }

        function findPlacesNearRoute(routeCoordinates, allLocations, maxPlaces = 3) {
            const placesNearRoute = [];
            
            allLocations.forEach(location => {
                const startDistance = calculateDistance(
                    routeCoordinates[0].lat, routeCoordinates[0].lng,
                    location.lat, location.lng
                );
                
                const endDistance = calculateDistance(
                    routeCoordinates[routeCoordinates.length - 1].lat, 
                    routeCoordinates[routeCoordinates.length - 1].lng,
                    location.lat, location.lng
                );
                
                if (startDistance < 1 || endDistance < 1) {
                    return;
                }
                
                let minDistance = Infinity;
                for (let i = 0; i < routeCoordinates.length - 1; i++) {
                    const distance = pointToLineDistance(
                        location.lat, location.lng,
                        routeCoordinates[i].lat, routeCoordinates[i].lng,
                        routeCoordinates[i + 1].lat, routeCoordinates[i + 1].lng
                    );
                    minDistance = Math.min(minDistance, distance);
                }
                
                if (minDistance < 2) {
                    placesNearRoute.push({
                        ...location,
                        distanceFromRoute: minDistance
                    });
                }
            });
            
            return placesNearRoute
                .sort((a, b) => a.distanceFromRoute - b.distanceFromRoute)
                .slice(0, maxPlaces)
                .map(place => {
                    const landmarkInfo = lucknowData.landmarks.find(lm => lm.name === place.name);
                    return {
                        name: place.name,
                        type: place.type,
                        icon: place.icon,
                        description: landmarkInfo ? landmarkInfo.description : `Located ${place.distanceFromRoute.toFixed(1)} km from your route`,
                        distance: `${place.distanceFromRoute.toFixed(1)} km from route`,
                        timing: landmarkInfo ? landmarkInfo.timing : 'Varies',
                        entryFee: landmarkInfo ? landmarkInfo.entryFee : 'Free',
                        rating: landmarkInfo ? landmarkInfo.rating : 'N/A',
                        color: place.color
                    };
                });
        }

        function pointToLineDistance(px, py, x1, y1, x2, y2) {
            const A = px - x1;
            const B = py - y1;
            const C = x2 - x1;
            const D = y2 - y1;

            const dot = A * C + B * D;
            const lenSq = C * C + D * D;
            let param = -1;
            
            if (lenSq !== 0) {
                param = dot / lenSq;
            }

            let xx, yy;

            if (param < 0) {
                xx = x1;
                yy = y1;
            } else if (param > 1) {
                xx = x2;
                yy = y2;
            } else {
                xx = x1 + param * C;
                yy = y1 + param * D;
            }

            const dx = px - xx;
            const dy = py - yy;
            
            return Math.sqrt(dx * dx + dy * dy) * 111;
        }

        function calculateFare(distance, time) {
            const baseFare = 15;
            const perKmRate = 3;
            
            const distanceFare = distance * perKmRate;
            const totalFare = baseFare + distanceFare;
            
            document.getElementById('fare-amount').textContent = `₹${Math.round(totalFare)}`;
            
            const fareBreakdownHTML = `
                <div class="fare-item">
                    <span class="fare-label">Base Fare:</span>
                    <span class="fare-value">₹${baseFare}</span>
                </div>
                <div class="fare-item">
                    <span class="fare-label">Distance Fare (${distance} km × ₹3/km):</span>
                    <span class="fare-value">₹${Math.round(distanceFare)}</span>
                </div>
                <div class="fare-item border-t border-green-300 pt-2 mt-2">
                    <span class="fare-label font-semibold">Total Fare:</span>
                    <span class="fare-value font-bold">₹${Math.round(totalFare)}</span>
                </div>
            `;
            
            document.querySelector('.fare-breakdown').innerHTML = fareBreakdownHTML;
        }

        function updateFareForTransportMode(mode) {
            const distanceText = document.getElementById('route-distance').textContent;
            const distance = parseFloat(distanceText);
            const timeText = document.getElementById('route-time').textContent;
            const time = parseInt(timeText);
            
            let fareRange;
            
            switch(mode) {
                case 'auto':
                    const autoFare = 15 + (distance * 3);
                    fareRange = `₹${Math.round(autoFare)}`;
                    document.getElementById('fare-mode').textContent = 'Auto Rickshaw • ' + time + ' min';
                    break;
                case 'bus':
                    fareRange = '₹20';
                    document.getElementById('fare-mode').textContent = 'City Bus • ' + (time + 7) + ' min';
                    break;
                case 'metro':
                    fareRange = '₹30 - ₹60';
                    document.getElementById('fare-mode').textContent = 'Lucknow Metro • ' + (time - 3) + ' min';
                    break;
                case 'taxi':
                    fareRange = '₹150 - ₹200';
                    document.getElementById('fare-mode').textContent = 'Cab Service • ' + time + ' min';
                    break;
            }
            
            document.getElementById('fare-amount').textContent = fareRange;
        }

        function showTransportOptions() {
            const transportContainer = document.getElementById('transport-options');
            transportContainer.innerHTML = '';
            
            lucknowData.transport.forEach(option => {
                const optionCard = document.createElement('div');
                optionCard.className = 'flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-blue-50 transition duration-200';
                
                optionCard.innerHTML = `
                    <div class="flex items-center">
                        <div class="text-2xl mr-4">${option.icon}</div>
                        <div>
                            <h4 class="font-semibold text-gray-800">${option.name}</h4>
                            <div class="flex items-center text-sm text-gray-600">
                                ${option.features.map(feature => `<span class="mr-3">${feature}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="font-bold text-lg text-gray-800">${option.fare}</div>
                        <div class="text-sm text-gray-600">${option.time}</div>
                    </div>
                `;
                
                transportContainer.appendChild(optionCard);
            });
        }