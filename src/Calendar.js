import React, { useState, useEffect } from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';
import "./Calendar.scss";
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

function getDaysInMonth(month, year) {
  let monthIndex = month - 1;
  var date = new Date(year, monthIndex, 1);
  var days = [];
  while (date.getMonth() === monthIndex) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function getFirstDayOfMonth(month, year) {
  let monthIndex = month - 1;
  var date = new Date(year, monthIndex, 1);
  
}

// brushing implementation: Add dates in Full-venn sets. When an intersection is clicked, pass the dates as props 
// to the Calendar component. Now calendar component has to highlight these passed dates. 

function Calendar(props) {

    //const [dates, setDate] = useState([]);
    //useEffect(() => { setDate(props.Dates )}, [props.Dates]);
    //useEffect(() => { console.log("this dates in calendar", props.Dates)}, [props.Dates]);

    // Month + Year
    const daysInMonth = getDaysInMonth(8, 2022);
    
    // get starting spot for the first day of month
    const firstDayOfMonth = daysInMonth[0].getDay();
    const lastDayOfMonth = daysInMonth[daysInMonth.length - 1].getDate();
    var dayGridValuesArray = [];
    let cellNumber = 1;
    for(let day = 1; day <= 35; day++) {
      if (day < firstDayOfMonth || cellNumber > lastDayOfMonth) {
        dayGridValuesArray.push({"date" : '', "data": []});
      } else {
        dayGridValuesArray.push({"date" : cellNumber, "data": data[day-1]});
        cellNumber ++;
      }
    }
    
    var renderedOutput = dayGridValuesArray.map((_, index) => 
      <div className={`day ${props.Dates?.includes(dayGridValuesArray[index].date) ? "day--highlighted" : ''}`}>
        <span className='dayNumber'>{dayGridValuesArray[index]?.date}</span>
        <div className="barCharts"> 
          <Container>
            <MainContainer>
              {  dayGridValuesArray[index].data ? dayGridValuesArray[index].data.map(({ distance, colors }, i) => {
                  return (
                    <BarChartContainer key={i}>
                      <MakeBar height={distance * 2} colors={colors} />
                    </BarChartContainer>
                  );
                }) : null
              }
            </MainContainer>
          </Container> 
        </div>
      </div>
    );

    return (
      <div className='calendar'>
        <div className="month-indicator">
          <span> August 2020 </span>
        </div>
        <div className="day-of-week">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div className="date-grid">
          {renderedOutput}
        </div>
      </div>      
    )
}

export default Calendar
