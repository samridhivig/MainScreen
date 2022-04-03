function repeat(item, times) {
  let rslt = [];
  for (let i = 0; i < times; i++) {
    rslt.push(item);
  }
  return rslt;
}

var sets = [
  {
    size: 6,
    sets: ["Negative", "Pain", "Fatigue"], 
    color: '#66c2a5', 
    dates : [1,7,14,17,23,24]
  },
  {
    size: 1,
    sets: ["Negative", "Pain"],
    color: '#66c2a5', 
    dates : [1,7,14,16,17,23,24]
  },
  {
    size: 11,
    sets: ["Negative", "Fatigue"],
    color: '#66c2a5', 
    dates : [1,2,3,7,8,14,15,17,19,23,24]
  },
  {
    size: 1,
    sets: ["Positive", "Pain", "Fatigue"],
    color: '#66c2a5', 
    dates : [22]
  },
  {
    size: 2,
    sets: ["Positive", "Pain"],
    color: '#66c2a5', 
    dates : [4,12,22]
  },
  {
    size: 3,
    sets: ["Positive", "Fatigue"],
    color: '#66c2a5', 
    dates : [5,11,20,22]
  },
  {
    size: 7,
    sets: ["Pain", "Fatigue"],
    color: '#66c2a5', 
    dates : [1, 7,14,17,22,23,24]
  },
  {
    size: 11,
    sets: ["Positive"],
    color: '#66c2a5', 
    dates : [4,5,6,10,11,12,13,20,21,22,25,26,27]
  },
  {
    size: 14,
    sets: ["Negative"],
    color: '#66c2a5', 
    dates : [1,2,3,7,8,9,14,15,16,17,18,19,23,24]
  },
  {
    size: 10,
    sets: ["Pain"],
    color: '#66c2a5', 
    dates : [1,4,7,12,14,16,17,22,23,24]
  },
  {
    size: 15,
    sets: ["Fatigue"],
    color: '#66c2a5', 
    dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
  }
];

var elems = [];

function createElems(sets) {
  for (var i = 0; i < sets.length; i++) {
    var temp = repeat({ sets: sets[i].sets, dates: sets[i].dates, color: sets[i].color }, sets[i].size);
    elems = elems.concat(temp);
  }
}

createElems(sets);

export default elems;
