import styled from "styled-components";

export const BigWrapper = styled.div`

`

export const Header = styled.h2`
  text-align: center;
  color: white;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Span = styled.span`
  color: white;
  padding: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const PointsParagraph = styled.p`
  color: white;
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

  &::after {
    content: "";
    position: absolute;
    height: 107%;
    width: 102%;
    border-radius: 1000px;
    background-image: linear-gradient(
      to bottom right,
      #00ffcc,
      #0033ff
    );
    z-index: -1;
  }

  &:hover {
    z-index: 0;
    box-shadow: 40px 0 100px #00ffccc2, -40px 0 100px #0033ffc4;
    cursor: pointer;
  }
`;

export const BigButton = styled(Button)`
  &::after {
    height: 110%;
    width: 101%;
  }
`;
