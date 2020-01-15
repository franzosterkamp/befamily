import React from 'react';
import {
  AgeFilterLabel,
  QuarterFilterLabel,
  CategoryFilterLabel
} from '../components/general/Label';
import { AddPlaceHeadline as Headline } from '../components/general/Headline';
import { UnsetButton, AcceptButton } from '../components/general/Button';
import { FilterButtonWrapper } from '../components/general/Wrapper';
import { quarterList, ageList, categoryList } from '../components/data/array';
import { FilterSelect as Select, FilterOption as Option } from '../components/general/SelectBox';
import { FilterContainer } from '../components/general/Container';
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
      <FilterButtonWrapper>
        <UnsetButton onClick={unsetFilters}>Aufheben</UnsetButton>
        <AcceptButton to={`/card`}>Setzen</AcceptButton>
      </FilterButtonWrapper>
    </FilterContainer>
  );
}

FilterPage.propTypes = {
  filters: PropTypes.object,
  unsetFilters: PropTypes.func,
  handleChange: PropTypes.func
};
