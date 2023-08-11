import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  width: 90px;
  height: 40px;
  background-color: lightskyblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #424242;
    color: #fff;
  }

  &:active {
    background-color: #1b1b1b;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 40px;
  font-size: 18px;
  padding: 0 10px;
  border: 1px solid #3f5e59a1;
  border-radius: 4px;
`;

export const Loader = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 3s linear infinite;
  margin-right: 10px;
  display: inline-block;
`;
