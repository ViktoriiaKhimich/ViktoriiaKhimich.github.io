import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonWithIcon } from '../../common/ButtonWithIcon';
import { AssetsTable } from '../../components/AssetsTable';
import { AddAssetForm } from '../../components/AddAssetForm';
import { Input } from '../../common/Input';
import { ArrowDown } from '../../assets/icons/ArrowDown';
import { ArrowUp } from '../../assets/icons/ArrowUp';
import { setFilter } from '../../store/assets/assetsSlice';

export const AssetsPage = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [searchedAsset, setSearchedAsset] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    setSearchedAsset(value);
    dispatch(setFilter(value));
  };

  return (
    <>
      <ButtonWithIcon
        buttonText='Add asset'
        icon={isFormShown ? <ArrowUp /> : <ArrowDown />}
        onClick={() => setIsFormShown(!isFormShown)}
      />
      {isFormShown && <AddAssetForm />}
      <Input
        type='text'
        placeholder='Search Asset'
        name='searchedAsset'
        value={searchedAsset}
        id='searchedAsset'
        onChange={handleChange}
      />
      <AssetsTable />
    </>
  );
};
