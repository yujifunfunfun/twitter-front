import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';


interface ErrorMessageProps {
  errorMessage: string;
}

const StyledDiv = styled.div`
  color: red;
  font-weight: bold;
`;

export const ErrorMessage: React.FC<ErrorMessageProps> = memo(({errorMessage}) => {

  return (
    <StyledDiv>{errorMessage}</StyledDiv>
  );
});


