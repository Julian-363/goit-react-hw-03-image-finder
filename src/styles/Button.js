import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  color: black;
  background-color: lightskyblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

  &:hover {
    background-color: #424242;
  }

  &:active {
    background-color: #1b1b1b;
  }
`;
