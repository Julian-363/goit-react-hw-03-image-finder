import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  flex: 1 0 400px;
  margin: 20px;
  list-style: none;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
