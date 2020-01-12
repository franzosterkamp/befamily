import React from 'react';
import { FilterLabel } from '../components/general/Label';
import { AddPlaceHeadline as Headline } from '../components/general/Headline';
import { UnsetButton } from '../components/general/Button';
import {
  ButtonWrapper,
  AgeLabelWrapper,
  CategoryLabelWrapper,
  QuarterLabelWrapper
} from '../components/general/Wrapper';
import { quarterList, ageList, categoryList } from '../components/data/array';
import { FilterSelect as Select, FilterOption as Option } from '../components/general/SelectBox';
import { FilterContainer } from '../components/general/Container';

export default function FilterPage({ filters, handleChange, unsetFilters }) {
  return (
    <FilterContainer>
      <Headline>Filter</Headline>
      <AgeLabelWrapper>
        <FilterLabel>
          Altersgruppe:
          <Select name="age" onChange={handleChange} value={filters.age}>
            {ageList.map(value => (
              <Option value={value}>{value}</Option>
            ))}
          </Select>
        </FilterLabel>
      </AgeLabelWrapper>
      <CategoryLabelWrapper>
        <FilterLabel>
          Kategorie:
          <Select name="category" onChange={handleChange} value={filters.category}>
            {categoryList.map(value => (
              <Option value={value}>{value}</Option>
            ))}
          </Select>
        </FilterLabel>
      </CategoryLabelWrapper>
      <QuarterLabelWrapper>
        <FilterLabel>
          Stadtteil:
          <Select name="quarter" onChange={handleChange} value={filters.quarter}>
            {quarterList.map(value => (
              <Option value={value}>{value}</Option>
            ))}
          </Select>
        </FilterLabel>
      </QuarterLabelWrapper>
      <ButtonWrapper>
        <UnsetButton onClick={unsetFilters}>Aufheben</UnsetButton>
      </ButtonWrapper>
    </FilterContainer>
  );
}
