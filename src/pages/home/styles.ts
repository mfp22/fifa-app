import styled from 'styled-components';

export const Home = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 1rem;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 1rem 0;
`;

export const Logo = styled.img`
  width: 90px;
  padding: 1rem 0;
`;
