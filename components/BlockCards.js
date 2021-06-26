import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import { blocksCardData } from "./static";


const BlockCards = () => {
    return (
        <div className="gridHolder cardGrid">
            <Grid container justify="center" alignItems="center" spacing={4}>
                {blocksCardData.map((data) => {
                    return (
                        <Grid item xs={4} >
                            <Paper className="paper">
                                <div className="upperpart">
                                    <div className="leftsec">
                                        <span className="title">{data.name}</span>
                                        <span className="role">{data.role}</span>
                                        <span className="desingation">{data.designation}</span>
                                    </div>

                                    <div className="rightSec">
                                        <img src={data.url} />
                                    </div>
                                </div>
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

export default BlockCards;
