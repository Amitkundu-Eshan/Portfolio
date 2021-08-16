import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Skillset} from "../../Dummydata";
import ProgressBar from 'react-bootstrap/ProgressBar'
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontFamily:'roboto',
    fontWeight:"500",
    color:"#006C11",
    letterSpacing:"0.10rem"
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {Skillset.map((f)=>(
      <Accordion key={f.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{borderBottom:"1px solid black"}}
        >
          <Typography className={classes.heading}><CodeIcon style={{color:"black",marginRight:"10px"}}/>{f.skill}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          {
            f.list.map(s=>
            <>
            <h6 style={{marginBottom:"5px"}}>{s.name}</h6>
            {s.known? <ProgressBar now={s.known} style={{marginBottom:"10px"}}/>: <h8 style={{marginBottom:"10px"}}>{s.level}</h8>}
            </>
            )
          }
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}