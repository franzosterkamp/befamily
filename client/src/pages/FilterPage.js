import React from 'react';
import styled from '@emotion/styled';
import { Label } from '../components/general/Label';
import { AddPlaceHeadline as Headline } from '../components/general/Headline';
import { Button } from '../components/general/Button';
import { ButtonWrapper } from '../components/general/Wrapper';

const FilterContainer = styled.div`
  width: 100%;
  height: 90%;
  margin: 20px 0 20px 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

const UnsetButton = styled(Button)`
  background: ${props => props.theme.colors.secondary};
  width: 30%;
`;

const Select = styled.select`
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
  font-size: 1rem;
`;

const Option = styled.option`
  font-size: 1rem;
  display: block;
  margin: 0 auto;
`;

const AgeLabelWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.special};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const CategoryLabelWrapper = styled(AgeLabelWrapper)`
  background-color: ${props => props.theme.colors.extra};
`;

const QuarterLabelWrapper = styled(AgeLabelWrapper)`
  background-color: ${props => props.theme.colors.rate};
`;

const FilterLabel = styled(Label)`
  text-align: center;
  font-size: 1rem;
  margin: 20px;
`;

export default function FilterPage({ filter, handleChange, unsetFilter }) {
  return (
    <FilterContainer>
      <Headline>Filter</Headline>
      <AgeLabelWrapper>
        <FilterLabel>
          Altersgruppe:
          <Select name="age" onChange={handleChange} value={filter.age}>
            <Option value="">-</Option>
            <Option value="0-2 Jahre">0-2 Jahre</Option>
            <Option value="3-6 Jahre">3-6 Jahre </Option>
            <Option value="7-10 Jahre">7-10 Jahre</Option>
            <Option value="ab 11 Jahre">ab 11 Jahre</Option>
          </Select>
        </FilterLabel>
      </AgeLabelWrapper>
      <CategoryLabelWrapper>
        <FilterLabel>
          Kategorie:
          <Select name="category" onChange={handleChange} value={filter.category}>
            <Option value="">-</Option>
            <Option value="Spielplatz">Spielplatz</Option>
            <Option value="Schwimmbad">Schwimmbad </Option>
            <Option value="Cafe">Cafe</Option>
          </Select>
        </FilterLabel>
      </CategoryLabelWrapper>
      <QuarterLabelWrapper>
        <FilterLabel>
          Stadtteil:
          <Select name="quarter" onChange={handleChange} value={filter.quarter}>
            <Option value="">-</Option>
            <Option value="Ehrenfeld">Ehrenfeld</Option>
            <Option value="Südstadt">Südstadt </Option>
            <Option value="Nippes">Nippes</Option>
            <Option value="Innendstadt">Innenstadt</Option>
          </Select>
        </FilterLabel>
      </QuarterLabelWrapper>
      <ButtonWrapper>
        <UnsetButton onClick={unsetFilter}>Aufheben</UnsetButton>
      </ButtonWrapper>
    </FilterContainer>
  );
}
