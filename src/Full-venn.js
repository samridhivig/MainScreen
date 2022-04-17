import * as d3 from "d3";
import * as venn from "venn.js";
import React from "react";
import "./FullVenn.css";

class FullVenn extends React.Component {
  constructor(props) {
    super(props);
    this.chartView = React.createRef();
  }

  chart = venn.VennDiagram().width(300).height(300).styled(false);

  getTooltipText (setSize, sets) {
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

    div.selectAll("path")
    .style("fill-opacity", 0.3)
    .style("stroke-opacity", 0)
    .style("stroke", "rgba(22,22,22,1)")
    .style("stroke-width", 3)
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

        div.selectAll("text").style("fill", "#3A3B3C"); // color of the labels

        // highlight the current path
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            // .style("fill", '#ffa500') // have seperate color for highlight
            .style("fill-opacity", 1)
            .style("stroke-opacity", 0.7)
            .style("transform", "scale(1.01,1.01)")
            .style("transform-origin", "50% 50%");
        
        // style the text label of selected area 
        selection.select("text")
          .style("fill", 'black')
          .attr("font-weight", 1000);
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
          .style("fill", function(d) {
            return d.color;
          })
          .style("stroke-width", 3)
          .style("fill-opacity", 0.3)
          //.style("fill-opacity", i.sets.length == 1 ? .8 : 0)
          .style("stroke-opacity", 0);
        
        selection.select("text")
          .style("fill", '#3A3B3C')
          .attr("font-weight", 100);
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