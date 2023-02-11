import { Typography } from '@mui/material';

const Heading = ({ children }: { children: string }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        margin: '10px 0',
        textAlign: 'center',
        background: 'linear-gradient(to right bottom, #2ebac1, #a4d96c)',
        color: 'transparent',
        backgroundClip: 'text',
        fontWeight: '600',
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
