import * as d3 from "d3";
import * as venn from "venn.js";
import React from "react";
import "./FullVenn.css";

var sets = [
  {
    size: 6,
    sets: ["Negative", "Pain", "Fatigue"],
    label: "6", 
    dates : [1,7,14,17,23,24]
  },
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
    size: 11,
    sets: ["Negative", "Fatigue"],
    label: "11",
    dates : [1,2,3,7,8,14,15,17,19,23,24]
  },
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
    label: "13",
    dates : [4,5,6,10,11,12,13,20,21,22,25]
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
  {
    size: 15,
    sets: ["Fatigue"],
    label: "15",
    dates : [1,2,3,5,7,8,11,14,15,17,19,20,22,23,24]
    //label: "Fatigue"
  }
];

class FullVenn extends React.Component {
  constructor(props) {
    super(props);
    this.chartView = React.createRef();
  }

  chart = venn.VennDiagram().width(300).height(300).styled(false);

  getTooltipText (setSize, sets) {
    console.log('here', sets, setSize);
    const totalNumberOfDays = 27;
    const percentageOfDays = Math.round((setSize / totalNumberOfDays) * 100);
    if (sets.length === 1) {
      return `${setSize} (${percentageOfDays}%) days of ${sets[0]}`;
    } else if (sets.length > 1) {
      return `${setSize} (${percentageOfDays}%) days of ${sets.join(', ')}`;
    }

    return '';
  }  
  
  componentDidMount() {
    const that = this;
    var callbackFromParent = this.props.callbackFromParent;
    let div = d3.select(this.chartView);
    div.datum(this.props.Data).call(this.chart);
    //div.selectAll(".venn-circle path");
    div.selectAll("path")
    .style("fill-opacity", 0.3)
    .style("stroke-opacity", 0)
    .style("stroke", "rgba(22,22,22,1)")
    .style("stroke-width", 0)
    .style("transform-origin", "50% 50%");

    // transform to the entire venn diagram 
    //div.selectAll("text").attr("transform", `translate(120, -80) rotate(25)`);
    div.selectAll("text").style("fill","black");
    // div.selectAll("g").attr("transform", `translate(-70,20) rotate(-25)`);

    //tooltip
    var tooltip = d3
      //.select("body")
      .select(this.chartView)
      .append("div")
      .attr("class", "venntooltip")
      .style("display", "none");

    //mouse interactions
    div
      .selectAll("g")
      .on("mouseover", function (d, i) {
        //detect all the areas in the venn diagram
        venn.sortAreas(div, i);

        //passing dates to parent (callback getDates)
        callbackFromParent(i.dates);

        d3.select(this).attr("opacity", 1);
        tooltip
          .transition()
          .duration(400)
          .style("opacity", 1)
          .style("background-color", '#232F34') // tooltip background color
          .style("color", '#FFFFFF')  // tooltip text string color
          .style("display", "inline-block")
          .text(that.getTooltipText(i?.size, i.sets))
          // .text(`${i?.size} days of ${i.sets}`)
          .style("visibility", "visible")

        div.selectAll("text").style("fill", "black");
        
        // highlight the current path
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            .style("fill-opacity", 0.8)
            .style("stroke-opacity", 0.7)
            .style("transform", "scale(1.01,1.01)")
            .style("transform-origin", "50% 50%");
      })

      .on("mousemove", function(d) {
        // tooltip positioning
        tooltip.style("left", (d.pageX - 100) + "px")
               .style("top", (d.pageY - 140) + "px");
    }) 

      .on("mouseout", function (d, i) {
        d3.select(this).attr("opacity", 0.5);
        tooltip.style("visibility", "hidden");
        //tooltip.text(``);

        //making dates [ ] on mouse out 
        callbackFromParent([ ]);

        // unhighlight
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
                    .style("stroke-width", 3)
                    .style("fill-opacity", 0.3)
                    //.style("fill-opacity", i.sets.length == 1 ? .8 : 0)
                    .style("stroke-opacity", 0);
      });

  }


  render() {
    return (
      <div className="venn-div">
        <div className="venn" ref={(el) => (this.chartView = el)}></div>
      </div>
    );
  }
}

export default FullVenn;