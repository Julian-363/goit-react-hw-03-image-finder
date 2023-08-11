import styled, { keyframes } from 'styled-components';

export const SpinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${SpinnerAnimation} 0.9s linear infinite;
  margin: 20px auto;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
