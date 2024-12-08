const protests = [
    {
        id: 1,
        location: "Newton Centre, MA, USA",
        date: "December 5",
        time: "15:45",
        coordinates: [42.330750, -71.194444],
        riskLevel: "Low",
        description: "Pro-Palestinian activists demanding cessation of military support for Israel",
        followers: 36602
    },
    {
        id: 2,
        location: "Utrecht Central Station, Netherlands",
        date: "December 5",
        time: "18:00",
        coordinates: [52.089778, 5.109556],
        riskLevel: "Low",
        description: "Sit-in to commemorate Palestinian children",
        followers: 41543
    },
    {
        id: 3,
        location: "Old Bailey Crown Court, London",
        date: "December 6",
        time: "10:00",
        coordinates: [51.515750, -0.101861],
        riskLevel: "Medium",
        description: "Protest against UK Terrorism Act application",
        followers: 525487,
        proximity: "6.18km from Israeli Embassy"
    },
    {
        id: 4,
        location: "French Consulate, NY",
        date: "December 6",
        time: "14:00",
        coordinates: [40.774222, -73.965528],
        riskLevel: "Low",
        description: "Protest for release of Georges Abdallah",
        followers: 5439
    },
    {
        id: 5,
        location: "UCL Main Quad, London",
        date: "December 6",
        time: "15:00",
        coordinates: [51.524556, -0.134417],
        riskLevel: "Medium",
        description: "Gathering to honor Refaat Alareer",
        followers: 1093220
    },
    {
        id: 6,
        location: "Gustav Adolfs torg, Malmö",
        date: "December 6",
        time: "17:00",
        coordinates: [55.602361, 13.000556],
        riskLevel: "Low",
        description: "Pro-Palestine protest replacing holiday celebrations",
        followers: 23146
    },
    {
        id: 7,
        location: "Prins Jørgens Gård, Copenhagen",
        date: "December 6",
        time: "18:00",
        coordinates: [55.676944, 12.579722],
        riskLevel: "Medium",
        description: "Protest against Egyptian President's visit",
        followers: 67334
    },
    {
        id: 8,
        location: "Kiezhaus Agnes Reinhold, Berlin",
        date: "December 6",
        time: "18:00",
        coordinates: [52.5364, 13.3482],
        riskLevel: "Low",
        description: "Event to introduce 3ezwa organization",
        followers: 6850
    },
    {
        id: 9,
        location: "Denton Downtown Square, TX",
        date: "December 7",
        time: "12:00",
        coordinates: [33.215083, -97.133083],
        riskLevel: "Low",
        description: "Solidarity rally for Palestinian rights",
        followers: 12826
    },
    {
        id: 10,
        location: "Greenwich Islamic Centre, London",
        date: "December 7",
        time: "12:30",
        coordinates: [51.490639, -0.082500],
        riskLevel: "Low",
        description: "March and rally in Woolwich town centre",
        followers: 1200
    },
    {
        id: 11,
        location: "BBC Yorkshire, Leeds",
        date: "December 7",
        time: "13:00",
        coordinates: [53.797500, -1.533417],
        riskLevel: "Low",
        description: "March in West Yorkshire for Palestine solidarity",
        followers: 82475
    },
    {
        id: 12,
        location: "Malieveld, The Hague",
        date: "December 7",
        time: "13:00",
        coordinates: [52.085639, 4.319667],
        riskLevel: "Medium",
        description: "National demonstration against Dutch government policy",
        followers: 62183,
        proximity: "2.48km from Israeli Embassy"
    },
    {
        id: 13,
        location: "Droogdokkenweg, Antwerp",
        date: "December 7",
        time: "13:00",
        coordinates: [51.237444, 4.403722],
        riskLevel: "Low",
        description: "Protest throughout Antwerp",
        followers: 8841
    },
    {
        id: 14,
        location: "Observatorielunden, Stockholm",
        date: "December 7",
        time: "14:00",
        coordinates: [59.342250, 18.054667],
        riskLevel: "Low",
        description: "Protest against Israel's military actions",
        followers: 19700,
        proximity: "3.2 km from Israeli Embassy"
    },
    {
        id: 15,
        location: "Place de la République, Paris",
        date: "December 7",
        time: "14:00",
        coordinates: [48.867556, 2.363861],
        riskLevel: "Medium",
        description: "Rally for Palestinian awareness",
        followers: 81000,
        proximity: "3.78km from Israeli Embassy"
    },
    {
        id: 16,
        location: "Blagardsgade, Copenhagen",
        date: "December 7",
        time: "14:00",
        coordinates: [55.685917, 12.557583],
        riskLevel: "Medium",
        description: "Demonstration for Palestinian rights",
        followers: 49578,
        proximity: "4.33km from Israeli Embassy"
    },
    {
        id: 17,
        location: "Porta Venezia, Milan",
        date: "December 7",
        time: "15:00",
        coordinates: [45.474408, 9.204447],
        riskLevel: "Low",
        description: "City March Against War and Bill 1660",
        followers: 4090
    },
    {
        id: 18,
        location: "Helix Hub Construction Site, New Brunswick",
        date: "December 7",
        time: "16:00",
        coordinates: [40.495444, -74.447917],
        riskLevel: "Medium",
        description: "Protest against Tel Aviv-related projects",
        followers: 770
    },
    {
        id: 19,
        location: "Notre Dame Basilica, Montreal",
        date: "December 8",
        time: "13:00",
        coordinates: [45.504639, -73.555611],
        riskLevel: "Medium",
        description: "Solidarity gathering for Palestine",
        followers: 44661
    },
    {
        id: 20,
        location: "Stortoeget, Gävle",
        date: "December 8",
        time: "13:30",
        coordinates: [60.674583, 17.141861],
        riskLevel: "Low",
        description: "March in solidarity with Palestinians",
        followers: 46442
    },
    {
        id: 21,
        location: "Sag Harbor, NY",
        date: "December 8",
        time: "15:00",
        coordinates: [40.9979, -72.2926],
        riskLevel: "Low",
        description: "Vigil and silent march",
        followers: 1730
    },
    {
        id: 22,
        location: "MetroTech Center, NYC",
        date: "December 9",
        time: "12:00",
        coordinates: [40.694444, -73.986583],
        riskLevel: "Low",
        description: "Student walkout and rally",
        followers: 29721,
        proximity: "6.34km from Israeli Consulate"
    },
    {
        id: 23,
        location: "University of Amsterdam",
        date: "December 9",
        time: "All Day",
        coordinates: [52.356278, 4.955528],
        riskLevel: "Medium",
        description: "Student strike against university policies",
        followers: 175120
    },
    {
        id: 24,
        location: "Israeli Consulate, Houston",
        date: "December 10",
        time: "9:30",
        coordinates: [29.730639, -95.440806],
        riskLevel: "Low",
        description: "Weekly protest at Israeli consulate",
        followers: 3909
    },
    {
        id: 25,
        location: "Denver Capitol Building",
        date: "December 10",
        time: "17:00",
        coordinates: [39.739528, -104.990167],
        riskLevel: "Low",
        description: "Protest demanding arms embargo",
        followers: 71316
    }
];