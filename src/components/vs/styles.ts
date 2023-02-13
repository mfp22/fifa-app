import styled from 'styled-components';

export const VS = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.textPrimary};
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0.5;
  }
  &:before {
    content: '';
    position: absolute;
    top: 30%;
    z-index: 5;
    background-color: ${({ theme }) => theme.colors.background};
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 30px;
  }
`;

export const VSLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 10;
`;
