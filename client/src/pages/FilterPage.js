import React from 'react';
import {
  AgeFilterLabel,
  QuarterFilterLabel,
  CategoryFilterLabel
} from '../components/General/Label';
import { AddPlaceHeadline as Headline } from '../components/General/Headline';
import { UnsetButton } from '../components/General/Button';
import { ButtonWrapper } from '../components/General/Wrapper';
import { quarterList, ageList, categoryList } from '../components/data/array';
import { FilterSelect as Select, FilterOption as Option } from '../components/General/SelectBox';
import { FilterContainer } from '../components/General/Container';
import PropTypes from 'prop-types';

export default function FilterPage({ filters, handleChange, unsetFilters }) {
  return (
    <FilterContainer>
      <Headline>Filter</Headline>
      <AgeFilterLabel>
        Altersgruppe:
        <Select name="age" onChange={handleChange} value={filters.age}>
          {ageList.map(value => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </AgeFilterLabel>
      <CategoryFilterLabel>
        Kategorie:
        <Select name="category" onChange={handleChange} value={filters.category}>
          {categoryList.map(value => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </CategoryFilterLabel>
      <QuarterFilterLabel>
        Stadtteil:
        <Select name="quarter" onChange={handleChange} value={filters.quarter}>
          {quarterList.map(value => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </QuarterFilterLabel>
      <ButtonWrapper>
        <UnsetButton onClick={unsetFilters}>Aufheben</UnsetButton>
      </ButtonWrapper>
    </FilterContainer>
  );
}

FilterPage.propTypes = {
  filters: PropTypes.object,
  unsetFilters: PropTypes.func,
  handleChange: PropTypes.func
};
