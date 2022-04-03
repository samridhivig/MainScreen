import React from "react";

class Data extends React.Component{
    static FullVennSets = [
        {
          size: 6,
          sets: ["Negative", "Pain", "Fatigue"],
          label: "6", 
          dates : [1,7,14,17,23,24],
          color: '#c73d2e'
        },
        {
          size: 0,
          sets: ["Positive", "Negative"]
        },
        {
          size: 7,
          sets: ["Negative", "Pain"],
          label: "7",
          dates : [1,7,14,16,17,23,24],
          color: '#c00040'
        },
        {
          size: 11,
          sets: ["Negative", "Fatigue"],
          label: "11",
          dates : [1,2,3,7,8,14,15,17,19,23,24],
          color: '#ea5b05'
        },
        {
          size: 1,
          sets: ["Positive", "Pain", "Fatigue"],
          label: "1",
          dates : [22],
          color: '#72672e'
        },
        {
          size: 3,
          sets: ["Positive", "Pain"],
          label: "3",
          dates : [4,12,22],
          color: '#404040'
        },
        {
          size: 4,
          sets: ["Positive", "Fatigue"],
          label: "4",
          dates : [5,11,20,22],
          color: '#6b9b05'
        },
        {
          size: 7,
          sets: ["Pain", "Fatigue"],
          label: "7",
          dates : [1, 7,14,17,22,23,24],
          color: '#ab5b45'
        },
        {
          size: 13,
          sets: ["Positive"],
          label: "13",
          dates : [4,5,6,10,11,12,13,20,21,22,25,26,27],
          color: 'green'
        },
        {
          size: 14,
          sets: ["Negative"],
          label: "14",
          dates : [1,2,3,7,8,9,14,15,16,17,18,19,23,24],
          color: 'red'
        },
        {
          size: 10,
          sets: ["Pain"],
          label: "10",
          dates : [1,4,7,12,14,16,17,22,23,24],
          color: '#800080'
        },
        {
          size: 15,
          sets: ["Fatigue"],
          label: "15",
          dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24],
          color: '#d5b60a'
        }
      ];

      static PosPainFatigueSets = [
        {
          size: 1,
          sets: ["Positive", "Pain", "Fatigue"],
          label: "1",
          dates : [22]
        },
        {
          size: 3,
          sets: ["Positive", "Pain"],
          label: "3",
          dates : [4,12,22]
        },
        {
          size: 4,
          sets: ["Positive", "Fatigue"],
          label: "4",
          dates : [5,11,20,22]
        },
        {
          size: 7,
          sets: ["Pain", "Fatigue"],
          label: "7",
          dates : [1, 7,14,17,22,23,24]
        },
        {
          size: 13,
          sets: ["Positive"],
          label: "11",
          dates : [4,5,6,10,11,12,13,20,21,22,25,26,27]
          //label: "Positive"
        },
        {
          size: 10,
          sets: ["Pain"],
          label: "10",
          dates : [1,4,7,12,14,16,17,22,23,24]
          //label: "Pain"
        },
        {
          size: 15,
          sets: ["Fatigue"],
          label: "15",
          dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
          //label: "Fatigue"
        }
      ];

      static NegPainFatigueSets = [
        {
          size: 6,
          sets: ["Negative", "Pain", "Fatigue"],
          label: "6", 
          dates : [1,7,14,17,23,24]
        },
        {
          size: 7,
          sets: ["Negative", "Pain"],
          label: "7",
          dates : [1,7,14,16,17,23,24]
        },
        {
          size: 11,
          sets: ["Negative", "Fatigue"],
          label: "11",
          dates : [1,2,3,7,8,14,15,17,19,23,24]
        },
        {
          size: 7,
          sets: ["Pain", "Fatigue"],
          label: "7",
          dates : [1, 7,14,17,22,23,24]
        },
        {
          size: 14,
          sets: ["Negative"],
          label: "14",
          dates : [1,2,3,7,8,9,14,15,16,17,18,19,23,24]
          //label: "Negative"
        },
        {
          size: 10,
          sets: ["Pain"],
          label: "10",
          dates : [1,4,7,12,14,16,17,22,23,24]
          //label: "Pain"
        },
        {
          size: 15,
          sets: ["Fatigue"],
          label: "15",
          dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
          //label: "Fatigue"
        }
      ];

      static PainFatigueSets = [
        {
          size: 7,
          sets: ["Pain", "Fatigue"],
          label: "7",
          dates : [1, 7,14,17,22,23,24]
        },
        {
          size: 10,
          sets: ["Pain"],
          label: "10",
          dates : [1,4,7,12,14,16,17,22,23,24]
          //label: "Pain"
        },
        {
          size: 15,
          sets: ["Fatigue"],
          label: "15",
          dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
          //label: "Fatigue"
        }
      ];

      static PosPainSets = [
        {
          size: 3,
          sets: ["Positive", "Pain"],
          label: "3",
          dates : [4,12,22]
        },
        {
          size: 11,
          sets: ["Positive"],
          label: "13",
          dates : [4,5,6,10,11,12,13,20,21,22,25,26,27]
          //label: "Positive"
        },
        {
          size: 10,
          sets: ["Pain"],
          label: "10",
          dates : [1,4,7,12,14,16,17,22,23,24]
          //label: "Pain"
        }
      ];

      static PosFatigueSets = [
        {
          size: 4,
          sets: ["Positive", "Fatigue"],
          label: "4",
          dates : [5,11,20,22]
        },
        {
          size: 11,
          sets: ["Positive"],
          label: "13",
          dates : [4,5,6,10,11,12,13,20,21,22,25,26,27]
          //label: "Positive"
        },
        {
            size: 15,
            sets: ["Fatigue"],
            label: "15",
            dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
            //label: "Fatigue"
        }
      ];

      static NegPainSets = [
        {
          size: 7,
          sets: ["Negative", "Pain"],
          label: "7",
          dates : [1,7,14,16,17,23,24]
        },
        {
          size: 14,
          sets: ["Negative"],
          label: "14",
          dates : [1,2,3,7,8,9,14,15,16,17,18,19,23,24]
          //label: "Negative"
        },
        {
          size: 10,
          sets: ["Pain"],
          label: "10",
          dates : [1,4,7,12,14,16,17,22,23,24]
          //label: "Pain"
        }
      ];

      static NegFatigueSets = [
        {
          size: 11,
          sets: ["Negative", "Fatigue"],
          label: "11",
          dates : [1,2,3,7,8,14,15,17,19,23,24]
        },
        {
          size: 14,
          sets: ["Negative"],
          label: "14",
          dates : [1,2,3,7,8,9,14,15,16,17,18,19,23,24]
          //label: "Negative"
        },
        {
          size: 15,
          sets: ["Fatigue"],
          label: "15",
          dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
          //label: "Fatigue"
        }
      ];

      static PosNegPainSets = [
        {
          size: 0,
          sets: ["Positive", "Negative"]
        },
        {
          size: 7,
          sets: ["Negative", "Pain"],
          label: "7",
          dates : [1,7,14,16,17,23,24]
        },
        {
          size: 3,
          sets: ["Positive", "Pain"],
          label: "3",
          dates : [4,12,22]
        },
        {
          size: 13,
          sets: ["Positive"],
          label: "11",
          dates : [4,5,6,10,11,12,13,20,21,22,25,26,27]
          //label: "Positive"
        },
        {
          size: 14,
          sets: ["Negative"],
          label: "14",
          dates : [1,2,3,7,8,9,14,15,16,17,18,19,23,24]
          //label: "Negative"
        },
        {
          size: 10,
          sets: ["Pain"],
          label: "10",
          dates : [1,4,7,12,14,16,17,22,23,24]
          //label: "Pain"
        },
      ];

      static PosNegFatigueSets = [
        {
          size: 0,
          sets: ["Positive", "Negative"]
        },
        {
          size: 11,
          sets: ["Negative", "Fatigue"],
          label: "11",
          dates : [1,2,3,7,8,14,15,17,19,23,24]
        },
        {
          size: 4,
          sets: ["Positive", "Fatigue"],
          label: "4",
          dates : [5,11,20,22]
        },
        {
          size: 13,
          sets: ["Positive"],
          label: "11",
          dates : [4,5,6,10,11,12,13,20,21,22,25,26,27]
          //label: "Positive"
        },
        {
          size: 14,
          sets: ["Negative"],
          label: "14",
          dates : [1,2,3,7,8,9,14,15,16,17,18,19,23,24]
          //label: "Negative"
        },
        {
          size: 15,
          sets: ["Fatigue"],
          label: "15",
          dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
          //label: "Fatigue"
        }
      ];

}

export default Data; 