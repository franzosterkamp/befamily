import styled from '@emotion/styled';

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.8rem;
  display: block;
  width: 220px;
  margin-top: 15px;
`;

export const FilterLabel = styled(Label)`
  text-align: center;
  height: 100px;
  width: 75%;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.rate};
  font-size: 1rem;
`;

export const AgeFilterLabel = styled(FilterLabel)`
  background-color: ${props => props.theme.colors.special};
`;

export const CategoryFilterLabel = styled(FilterLabel)`
  background-color: ${props => props.theme.colors.extra};
`;

export const QuarterFilterLabel = styled(FilterLabel)`
  background-color: ${props => props.theme.colors.rate};
`;
