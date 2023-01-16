/* eslint-disable react/prop-types */
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { StyledDropDown } from './styles';

export const DropDown = ({
  labelText,
  name,
  value,
  id,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <FormControl style={{ width: '255px', marginRight: 16 }} variant='standard'>
      <InputLabel shrink style={{ color: '#1E1E1E' }} htmlFor={id}>
        {labelText}
      </InputLabel>
      <Select
        renderValue={selected => {
          if (selected === '') {
            return (
              <em style={{ color: '#676767', fontSize: 16 }}>{placeholder}</em>
            );
          }
          return selected;
        }}
        displayEmpty
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        input={<StyledDropDown />}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
