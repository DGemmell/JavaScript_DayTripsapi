const DayTripView = require('./views/dayTripView');
const Request = require('./services/request.js');

const dayTripView = new dayTripView();
const request = new Request('http://localhost:3000/api/daytrips');

const appStart = function(){

}

document.addEventListener('DOMContentLoaded', appStart);
