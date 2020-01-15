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

export const ButtonLabel = styled(Label)`
  text-align: center;
  margin-top: 5px;
  height: 50px;
  width: 100%;
`;

export const SubmitButtonLabel = styled(ButtonLabel)`
  margin-bottom: 50px;
`;

export const CameraLabel = styled(Label)`
  display: inline-block;
  margin-top: 0px;
  background-color: ${props => props.theme.colors.secondary};
  width: 60px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  border-radius: 8px;
  cursor: pointer;
`;
