import styled from "styled-components";

export const Header = styled.h2`
  text-align: center;
  color: white;
  font-size: 35px;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px auto;
  font-size: 25px;
  color: white;
  align-items: center;
  width: 300px;
  padding-right: 20px;
`;

export const Span = styled.span`
  color: white;
  padding: 10px;
`;

export const SpanScore = styled(Span)`
  font-weight: bold;
  color: #00ccff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Points = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 200px;
  height: 200px;
  border: none;
  background-color: #0b1b2f;
  border-radius: 50%;
  margin: 20px;
  color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 105%;
    width: 105%;
    border-radius: 1000px;
    background-image: linear-gradient(to bottom right, #00ccff, #0099ff);
    z-index: -1;
  }
`;

export const PointsParagraph = styled.p`
  color: white;
  text-align: center;
`;

export const TieParagraph = styled.p`
  text-align: center;
  color: white;
  min-height: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Button = styled.button`
  padding: 20px;
  margin: 0 10px;
  width: 100%;
  background-color: #0b1b2f;
  border: none;
  border-radius: 1000px;
  color: #f0f0f0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &::after {
    content: "";
    position: absolute;
    height: 107%;
    width: 102%;
    border-radius: 1000px;
    background-image: linear-gradient(to bottom right, #00ffcc, #0033ff);
    z-index: -1;
  }

  &:hover {
    z-index: 0;
    box-shadow: 40px 0 100px #00ffccc2, -40px 0 100px #0033ffc4;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const BigButton = styled(Button)`
  &::after {
    height: 110%;
    width: 101%;
  }
`;
