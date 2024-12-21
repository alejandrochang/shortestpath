import React from "react";
import styled from "styled-components";

interface CardContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
  style?: React.CSSProperties;
}

const Container = styled.div<{
  backgroundColor: string;
  style?: React.CSSProperties;
}>`
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-height: 800px;
  padding-bottom: 50px;
  ${(props) => props.style && { ...props.style }};

  &:first-child {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 400px;
    padding: 20px;
  }
`;

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default CardContainer;
