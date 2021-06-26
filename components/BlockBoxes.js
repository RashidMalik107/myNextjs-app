import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import { blocksData } from "./static";


const BlockBoxes = () => {
    return (
        <div className="gridHolder">
            <Grid container justify="center" alignItems="center" spacing={4}>
                {blocksData.map((data) => {
                    return (
                        <Grid item xs={3} >
                            <Paper className="paper">
                                <img src={data.url} />
                                <h4 className="title">{data.name}</h4>
                                <span className="desingation">{data.designation}</span>
                                <span className="role">{data.role}</span>
                                <div className="actions">
                                    <div className="icon"><EmailIcon /> Email</div>
                                    <div className="icon"><PhoneIcon /> Call</div>
                                </div>
                            </Paper>
                        </Grid>
                    );
                })}

            </Grid>

        </div>
    );
};

export default BlockBoxes;
