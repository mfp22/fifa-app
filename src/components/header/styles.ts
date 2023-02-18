import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 90px;
`;

export const Settings = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
`;
