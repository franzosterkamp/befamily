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

const SetButton = styled(Button)`
  background: ${props => props.theme.colors.extra};
  width: 30%;
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

const LabelWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
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
      <LabelWrapper>
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
      </LabelWrapper>
      <LabelWrapper>
        <FilterLabel>
          Kategorie:
          <Select name="category" onChange={handleChange} value={filter.category}>
            <Option value="">-</Option>
            <Option value="Spielplatz">Spielplatz</Option>
            <Option value="Schwimmbad">Schwimmbad </Option>
            <Option value="Cafe">Cafe</Option>
          </Select>
        </FilterLabel>
      </LabelWrapper>
      <LabelWrapper>
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
      </LabelWrapper>
      <ButtonWrapper>
        <UnsetButton onClick={unsetFilter}>Aufheben</UnsetButton>
      </ButtonWrapper>
    </FilterContainer>
  );
}
