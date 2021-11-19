import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    root: {
        backgroundImage: `url('https://sheltech-bd.com/admin/uploads/gallery/slider1/1614830349RywB8.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',

        width: '100%',
        minHeight: '600px',
        color: 'white',
    },
    bannerTitle: {
        paddingTop: '50px',
        "& h1": {
            fontSize: '300%',
        },
        "& h2": {
            fontSize: '20px',
            fontWeight: '500',
            letterSpacing: '2px'
        },
    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box sx={{ width: '90%', margin: '0 auto', textAlign: 'left' }}>
                <Box className={classes.bannerTitle}>
                    <h1 >
                        XYZ
                        <br />
                        Apartment 
                    </h1>
                    <h2 color="secondary">
                        BUY, <br />
                        YOUR DREAM <br />
                        APARTMENT 
                    </h2>
                </Box>
                <Button variant="outlined" color="secondary">LET`S DESCOVER MORE</Button>
            </Box>
        </div >
    );
};

export default Banner;