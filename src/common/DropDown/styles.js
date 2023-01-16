import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const StyledDropDown = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    border: '1px solid #949494',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color']),
    '&:focus': {
      borderColor: '#949494',
    },
  },
}));
