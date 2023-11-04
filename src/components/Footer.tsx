import { FC, ReactElement } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { version } from '../../package.json';
export const Footer: FC = (): ReactElement => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: theme.palette.divider,
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              color={theme.palette.text.secondary}
              variant="subtitle1"
            >
              {`${new Date().getFullYear()} | Version ${version}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
