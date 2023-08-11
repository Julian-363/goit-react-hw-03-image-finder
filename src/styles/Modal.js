import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
