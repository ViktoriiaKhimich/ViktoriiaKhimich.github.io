import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.assets.filter;

export const getAssets = state => state.assets.assets;

export const filteredAssets = createSelector(
  [getFilter, getAssets],
  (filter, assets) => {
    const normalizedFilter = filter.toLowerCase();
    return assets.filter(asset =>
      asset.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
