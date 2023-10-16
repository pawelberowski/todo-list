import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const GoBackButton = () => {
  let navigate = useNavigate();

  return (
    <Button variant="contained" onClick={() => navigate(-1)}>
      Go Back
    </Button>
  );
};
