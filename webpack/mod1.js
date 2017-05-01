var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Ashby",
  "last_name": "Zuanelli",
  "email": "azuanelli0@cbslocal.com",
  "gender": "Male",
  "ip_address": "112.30.217.50"
}, {
  "id": 2,
  "first_name": "Ted",
  "last_name": "Dumingo",
  "email": "tdumingo1@virginia.edu",
  "gender": "Male",
  "ip_address": "150.44.211.214"
}, {
  "id": 3,
  "first_name": "Allsun",
  "last_name": "Sorrie",
  "email": "asorrie2@blogs.com",
  "gender": "Female",
  "ip_address": "35.139.241.237"
}, {
  "id": 4,
  "first_name": "Ogden",
  "last_name": "Durham",
  "email": "odurham3@smh.com.au",
  "gender": "Male",
  "ip_address": "93.168.167.43"
}, {
  "id": 5,
  "first_name": "Rex",
  "last_name": "Bourtoumieux",
  "email": "rbourtoumieux4@google.ru",
  "gender": "Male",
  "ip_address": "221.190.76.182"
}, {
  "id": 6,
  "first_name": "Bell",
  "last_name": "Cristofol",
  "email": "bcristofol5@netscape.com",
  "gender": "Female",
  "ip_address": "52.143.44.118"
}, {
  "id": 7,
  "first_name": "Chev",
  "last_name": "Caughey",
  "email": "ccaughey6@time.com",
  "gender": "Male",
  "ip_address": "169.116.63.98"
}, {
  "id": 8,
  "first_name": "Wyn",
  "last_name": "Dominec",
  "email": "wdominec7@hp.com",
  "gender": "Male",
  "ip_address": "253.82.167.209"
}, {
  "id": 9,
  "first_name": "Annmaria",
  "last_name": "Vanderplas",
  "email": "avanderplas8@symantec.com",
  "gender": "Female",
  "ip_address": "122.192.204.17"
}, {
  "id": 10,
  "first_name": "Gisela",
  "last_name": "Ledgeway",
  "email": "gledgeway9@accuweather.com",
  "gender": "Female",
  "ip_address": "206.118.100.106"
}]

var peopleCount = _.filter(people, {gender: "Female"}).length;

alert(peopleCount);
