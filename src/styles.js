import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  margin-top: 0px;
  width: 80%;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: left;
  justify-content: space-evenly;
  width: 50%;
  height: 100%;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Chart = css`
  margin-top: 0px;
  margin-left: 20px;
  width: 20px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 5px;
    margin-left: 0px;
  }
`;

export const Number = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.color};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
