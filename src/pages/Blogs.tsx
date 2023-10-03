import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";

const Blogs = () => {
    return <Box
        sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            
        }}
    >
        <Typography textAlign="center" color="black">Blogs Article</Typography>
    </Box>;
}


export default Blogs;
