var DayTripView = function(){
  this.daytrips = [];
}

DayTripView.prototype.addQuote = function(trip) {
  this.daytrip.push(trip);
  this.render(trip);
}

DayTripView.prototype.clear = function(trip) {
  this.daytrip = [];
  const ul = document.querySelector('#daytrips');
  ul.innerHTML = '';
}

DayTripView.prototype.render = function(trip){
    const ul = document.querySelector('#daytrips');
    const li = document.createElement('li');
    const text = document.createElement('p');
    text.innerText = `${daytrips.city} - "${daytrips.place}"`;
    li.appendChild(text);
    ul.appendChild(li);
}

 module.exports = DayTripView;
