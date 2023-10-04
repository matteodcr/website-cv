import React, {FC, ReactElement} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export const Footer: FC = (): ReactElement => {
    const theme = useTheme();
    const {version} = require('../../package.json');
    console.log(version);


    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: theme.palette.divider,
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color={theme.palette.text.secondary} variant="subtitle1">
                            {`${new Date().getFullYear()} | Version ${version}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;