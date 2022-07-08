var place = [{key: 'Company',company: [{'isActive': false,'balance': 1343.69,"name": "Hobbs Macdonald","registered": "2015-02-08T02:36:36 +05:00","latitude": -80.356177,"longitude": -125.276756}],[{"isActive": false,"balance": 2426.98,"name": "Nelda Sykes","registered": "2015-02-01T10:16:00 +05:00","latitude": 72.078718,"longitude": -159.71397}],[{"isActive": true,"balance": 1257.12,"name": "Shaw Walls","registered": "2018-08-26T02:26:15 +04:00","latitude": -76.647851,"longitude": 173.881151}], [{"isActive": true,"balance": 1431.44,"name": "Boyer Riley","registered": "2018-09-24T10:12:16 +04:00","latitude": -60.360275,"longitude": 19.826812}],[{"isActive": true,"balance": 1431.44,"name": "Boyer Riley","registered": "2018-09-24T10:12:16 +04:00","latitude": -60.360275,"longitude": 19.826812}]}];


var company = place.find(item => item.key === 'Company').company
    .filter(company => company.subs.every(isActive => isActive == true));
        
console.log(company);