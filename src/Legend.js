import React, { useState, useEffect } from 'react';
import {
    MainContainer,
    Container,
    BarChartContainer,
    MakeBar
  } from "./styles";

const data = [
    { name: 'Positive', value: 13, color: '#FF0000'},
    { name: 'Negative', value: 14, color: '#FF0000'}, 
    { name: 'Fatigue', value: 15, color: '#FF0000'},
    { name: 'Pain', value: 10, color: '#FF0000'}
];

export default function Legend() {
    var renderedOutput = <div className="barCharts"> 
        <Container>
            <MainContainer>
                {  data.map(({ value, color }, index) => {
                    return (
                    <BarChartContainer key={index}>
                        <MakeBar height={value} colors={color} />
                    </BarChartContainer>
                    );
                }) 
                }
            </MainContainer>
        </Container> 
    </div>
    return (
        <div> 
            {renderedOutput}
        </div>
    )
}