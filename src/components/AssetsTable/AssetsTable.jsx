import * as React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { v4 } from 'uuid';

import { columnTitles } from './columnTitles';
import { filteredAssets } from '../../store/assets/selectors';

import { StyledTableCell, StyledTableRow } from './styles';

export const AssetsTable = () => {
  const assets = useSelector(state => filteredAssets(state));

  const createData = (name, description, quantity, status) => {
    return { name, description, quantity, status };
  };

  const rows = assets.map(asset => {
    const { name, description, quantity, status } = asset;
    return createData(name, description, quantity, status);
  });

  return (
    <TableContainer style={{ marginTop: 32 }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {columnTitles.map(title => (
              <StyledTableCell key={v4()}>{title}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                <a style={{ color: '#385F99' }} href='#'>
                  {row.name}
                </a>
              </StyledTableCell>
              <StyledTableCell>{row.description}</StyledTableCell>
              <StyledTableCell>{row.quantity}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
