import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import { Typography ,Divider} from "@material-ui/core";

import { useMediaQuery,useTheme } from '@material-ui/core';




function History() {
  
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const [tra, setTransfers] = useState([]);
   
    const sortedUsers= tra.sort((a,b)=>b.time - a.time);
    return (
        <div style={{marginBottom:'14em',marginTop:'2em'}}>
            <Typography style={{textAlign:'center'}} variant='h3'>
            Transaction History
            </Typography>
            <Divider/>
            <div>
            <table style={{width:matchesXS ? '25em' : matchesSM ? '30em' : matchesMD ? '60em' : '70em'}}>
          <thead>
            <tr>
                <th>TIME</th>
                <th>FROM USER</th>
                <th>TO USER</th>
                <th>AMOUNT(₹)</th>
                <th>STATUS</th>
            </tr>
          </thead>
          
        </table>
        </div>
      </div>

   
    )
       
}
export default History;





