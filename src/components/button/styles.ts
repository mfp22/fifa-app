import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  width: 100%;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem 0;
  height: 45px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
