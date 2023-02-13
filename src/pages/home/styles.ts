import styled from 'styled-components';

export const Home = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 1.5rem;
  display: grid;
  grid-template-rows: 60px minmax(220px, 1fr) 60px minmax(220px, 1fr) 80px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;
  padding: 1rem 0;
`;
