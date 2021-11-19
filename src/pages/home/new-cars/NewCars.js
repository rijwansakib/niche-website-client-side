import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
    container: {
        marginTop: '50px',
        width: '80%',
        margin: '0 auto',
        "& img": {
            width: '100%',
        }
    },
    title: {
        margin: '20px 0',
        fontSize: '200%'
    }
})

const NewCars = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>NEW COLLECTIONS</h1>
            <Grid container>
                <Grid item md={4}>
                    <img src="https://sheltech-bd.com/admin/uploads/product/sheltech-rebecca/405x645/1618480623kogs5_l.png" alt="" />
                </Grid>
                <Grid item md={4}>
                    <img src="https://sheltech-bd.com/admin/uploads/product/sheltech-northern-star/405x645/1633414300sGnZA_l.png" alt="" />
                </Grid>
                <Grid item md={4}>
                    <img src="https://sheltech-bd.com/admin/uploads/product/sheltech-nurjahan/405x645/1618480696DNamw_l.png" alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default NewCars;