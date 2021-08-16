import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Qualification} from "../../Dummydata"
import SchoolIcon from '@material-ui/icons/School'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontFamily:'roboto',
    fontWeight:"500",
    color:"#006C11",
    letterSpacing:"0.16rem",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {Qualification.map((f)=>(
      <Accordion key={f.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{borderBottom:"1px solid black"}}
        >
          <Typography className={classes.heading}><SchoolIcon style={{color:"black",marginRight:"10px"}}/>{f.education}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{wordWrap:"break-word",textAlign:"left"}}>
            <h6 style={{marginBottom:"0px"}}>Institute Name:</h6>
            <h8>{f.Institute_name}</h8>
            <h6 style={{marginBottom:"0px"}}>Stream:</h6>
            <h8>{f.Stream}</h8>
            <h6 style={{marginBottom:"0px"}}>Aggregated Score:</h6>
            <h8>{f.Agregatted_score}</h8>
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}