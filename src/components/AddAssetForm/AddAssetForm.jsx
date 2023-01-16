import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { Input } from '../../common/Input';
import { DropDown } from '../../common/DropDown';
import { Button } from '../../common/Button';
import { addAsset } from '../../store/assets/assetsSlice';

import { StyledForm } from './styles';

export const AddAssetForm = () => {
  const dispatch = useDispatch();

  const onSubmit = formData => {
    dispatch(addAsset(formData));
  };

  const { formData, handleChange, handleSubmit } = useForm(
    { name: '', description: '', quantity: '', status: '' },
    onSubmit
  );

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type='text'
        labelText='Name'
        name='name'
        value={formData.name}
        id='name'
        onChange={handleChange}
      />
      <Input
        type='text'
        labelText='Description'
        name='description'
        value={formData.description}
        id='description'
        onChange={handleChange}
      />
      <Input
        type='number'
        labelText='Quantity'
        name='quantity'
        value={formData.quantity}
        id='quantity'
        onChange={handleChange}
      />
      <DropDown
        options={['Online', 'Pending', 'Offline']}
        labelText='Status'
        name='status'
        value={formData.status}
        id='status'
        onChange={handleChange}
        placeholder='Select status'
      />
      <Button type='submit' buttonText='ADD' />
    </StyledForm>
  );
};
