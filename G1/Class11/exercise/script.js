let json = {
    "name": "Metallica",
    "active": true,
    "tags": [
        "thrash metal",
        "metal",
        "heavy metal",
        "hard rock",
        "rock"
    ],
    "members": [
        {
            "name": "James Hetfield"
        },
        {
            "name": "Lars Ulrich"
        },
        {
            "name": "Kirk Hammett"
        },
        {
            "name": "Robert Trujillo",
            "former": false
        },
        {
            "name": "Dave Mustaine",
            "former": true
        },
        {
            "name": "Ron McGovney",
            "former": true
        },
        {
            "name": "Cliff Burton",
            "former": true
        },
        {
            "name": "Jason Newsted",
            "former": true
        }
    ],
    "albums": [
        {
            "name": "Kill 'Em All",
            "year": 1983,
            "type": "studio"
        },
        {
            "name": "Ride the Lightning",
            "year": 1984,
            "type": "studio"
        },
        {
            "name": "Master of Puppets",
            "year": 1986,
            "type": "studio"
        },
        {
            "name": "...And Justice for All",
            "year": 1988,
            "type": "studio"
        },
        {
            "name": "Metallica",
            "year": 1991,
            "type": "studio"
        },
        {
            "name": "Live Shit: Binge & Purge",
            "year": 1993,
            "type": "live"
        },
        {
            "name": "Load",
            "year": 1996,
            "type": "studio"
        },
        {
            "name": "Reload",
            "year": 1997,
            "type": "studio"
        },
        {
            "name": "Garage Inc.",
            "year": 1998,
            "type": "cover"
        },
        {
            "name": "S&M",
            "year": 1999,
            "type": "live"
        },
        {
            "name": "St. Anger",
            "year": 2003,
            "type": "studio"
        },
        {
            "name": "Death Magnetic",
            "year": 2008,
            "type": "studio"
        },
        {
            "name": "Hardwired... to Self-Destruct",
            "year": 2016,
            "type": "studio"
        }
    ]
}

// GLOBAL
let bandsUrl = 'https://raw.githubusercontent.com/trajanstevkovski/sedc6-frontend-exam/master/band-data.json';

function Band(name, active, tags, members, albums) {
    this.name = name;
    this.isActive = active;
    this.tags = tags;
    this.members = members;
    this.albums = albums;

    this.showActiveMembers = function() {
        let memebersString = '';
        for (let i = 0; i < this.members.length; i++) {
            let member = this.members[i];
            if (!member.former) {
                memebersString += member.name + ' , ';
            }
        }
        return memebersString;
    };

    this.showFormerMembers = function() {
        let formerMemersString = '';
        let index = 0;
        while (index < this.members.length) {
            let member = this.members[index];
            if (member['former']) {
                formerMemersString += `${member['name']} , `;
            }
            index += 1;
        }
        return formerMemersString;
    }
}

function mapBands(data) {
    let bands = [];
    for (let band of data) {
        let bandObj = new Band(band.name, band.active, band.tags, 
            band.members, band.albums);
        bands.push(bandObj);
    }
    return bands;
}


document.getElementById('btn')
    .addEventListener('click', function() {
        fetch(bandsUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result);
            let bands = mapBands(result);
            console.log(bands);
        })
        .catch(function(error) {
            console.log(error);
        })
    });