import styled from 'styled-components';

interface SwitchLabelProps {
  checked: boolean;
}

export const Switch = styled.div`
  position: relative;
`;

export const SwitchLabel = styled.label<SwitchLabelProps>`
  position: absolute;
  top: -2px;
  left: -30px;
  width: 50px;
  height: 25px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.cardInner};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    margin-left: ${({ checked }) => (checked ? '28px' : '4px')};
    background: ${({ checked, theme }) =>
      checked ? theme.colors.success : theme.colors.switchColor};
    transition: 0.2s;
  }
`;

export const SwitchCheckBox = styled.input`
  opacity: 0;
`;
