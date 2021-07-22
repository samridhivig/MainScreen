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
    color: '#66c2a5'
  },
  {
    size: 1,
    sets: ["Negative", "Pain"]
  },
  {
    size: 11,
    sets: ["Negative", "Fatigue"]
  },
  {
    size: 1,
    sets: ["Positive", "Pain", "Fatigue"]
  },
  {
    size: 2,
    sets: ["Positive", "Pain"]
  },
  {
    size: 3,
    sets: ["Positive", "Fatigue"]
  },
  {
    size: 7,
    sets: ["Pain", "Fatigue"]
  },
  {
    size: 11,
    sets: ["Positive"]
  },
  {
    size: 14,
    sets: ["Negative"]
  },
  {
    size: 10,
    sets: ["Pain"]
  },
  {
    size: 15,
    sets: ["Fatigue"]
  }
];

var sets2 = [
  {
    sets: ["Negative", "Pain", "Fatigue"]
  },
  {
    sets: ["Negative", "Pain"]
  },
  {
    sets: ["Negative", "Fatigue"]
  },
  {
    sets: ["Positive", "Pain", "Fatigue"]
  },
  {
    sets: ["Positive", "Pain"]
  },
  {
    sets: ["Positive", "Fatigue"]
  },
  {
    sets: ["Pain", "Fatigue"]
  },
  {
    sets: ["Positive"]
  },
  {
    sets: ["Negative"]
  },
  {
    sets: ["Pain"]
  },
  {
    sets: ["Fatigue"]
  }
];

var elems = [];

function createElems(sets) {
  for (var i = 0; i < sets.length; i++) {
    var temp = repeat({ sets: sets[i].sets }, sets[i].size);
    elems = elems.concat(temp);
  }
}

createElems(sets);

export default elems;
