import React, { useState, useEffect } from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';
import "./Calendar.css";
import date from 'date-and-time';
import {
    MainContainer,
    Container,
    BarChartContainer,
    Number,
    BlackLine,
    MakeBar
  } from "./styles";

  // 1 , 20 , 40 
const data = [
    [{
        distance: 20,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 40,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 1,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 40,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#FF0000", "#FF0000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 40,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 1,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 20,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 0,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 0,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 40,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 0,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 0,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 0,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 0,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 0,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 0,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 0,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 0,
        colors: ["#800080", "#800080"]
      }],
      [{
        distance: 0,
        colors: ["#008000", "#008000"]
      },
      {
        distance: 0,
        colors: ["#d5b60a", "#d5b60a"]
      },
      {
        distance: 0,
        colors: ["#800080", "#800080"]
      }],    
]

// brushing implementation: Add dates in Full-venn sets. When an intersection is clicked, pass the dates as props 
// to the Calendar component. Now calendar component has to highlight these passed dates. 

function Calendar(props) {

    //const [dates, setDate] = useState([]);
    //useEffect(() => { setDate(props.Dates )}, [props.Dates]);
    //useEffect(() => { console.log("this dates in calendar", props.Dates)}, [props.Dates]);
    
    var arr = [];
    for(let day = 1; day <= 30; day ++){
        const date = new Date(Date.UTC(2021, 3, day));
        const options = { weekday: "short"};
        let dayName = new Intl.DateTimeFormat("en-US", options).format(date);
        if(day > 7){
            dayName = " ";
        }
        arr.push({"dayName" : dayName, "date" : day, "data": data[day-1]});
    }
    //console.log("dates in caleendar", dates);
    var renderedOutput = arr.map(item => props.Dates !== undefined && props.Dates.includes(item.date) ? 
        // highlight the cell if item.date == 12
        <div className="gridItems__highlighted"> 
          <div className="dayName"> {item.dayName} </div> 
          <div className="date"> {item.date} </div>
          <div className="barCharts"> 
            <Container>
              <MainContainer>
                {  item.data.map(({ distance, colors }, i) => {
                    return (
                      <BarChartContainer key={i}>
                        <MakeBar height={distance * 2} colors={colors} />
                      </BarChartContainer>
                    );
                  }) 
                }
              </MainContainer>
            </Container> 
          </div>
        </div>
        :
        // else don't highlight the cell 
        <div className="gridItems"> 
          <div className="dayName"> {item.dayName} </div> 
          <div className="date"> {item.date} </div>
          <div className="barCharts"> 
            <Container>
              <MainContainer>
                {  item.data.map(({ distance, colors }, i) => {
                    return (
                      <BarChartContainer key={i}>
                        <MakeBar height={distance * 2} colors={colors} />
                      </BarChartContainer>
                    );
                  }) 
                }
              </MainContainer>
            </Container> 
          </div>
        </div> 
    );



    return (
        <div className="Calendar">
          <p> January 2022 </p>
          <div className="app-calendar">
            {renderedOutput}
          </div>
        </div>
    )
}

export default Calendar
