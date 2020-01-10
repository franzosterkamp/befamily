import styled from '@emotion/styled';

export const Badge = styled.span`
  height: fit-content;
  width: fit-content;
  font-size: 0.62rem;
  font-style: bold;
  background-color: ${props => props.theme.colors.extra};
  padding: 5px;
  border-radius: 10px;
  margin-right: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const BadgeAge = styled(Badge)`
  background-color: ${props => props.theme.colors.special};
`;

export const BadgeQuarter = styled(Badge)`
  background-color: ${props => props.theme.colors.rate};
`;
