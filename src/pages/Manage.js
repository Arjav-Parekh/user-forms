import React from "react";
import '../stylings/manage.css';
import TableData from "../components/TableData";

import {
  makeStyles,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField
} from "@material-ui/core";

import Button from '../components/Button'

import DashBoardTable from "../components/Table";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily:'Poppins',
    margin: "auto",
    marginBottom:"70px",
    width: "80%",
    marginTop: "50px",
    borderRadius: "20px",
    boxShadow:'5px 5px 18px rgb(197, 197, 197)',
    backgroundColor: "#fff",
    padding: "3% 5% 5% 5%",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "90%",
  },
  line: {
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "#e0e3e9",
    padding: "20px  10px 10px",
  },
  padding: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "5px",
    },
  },
  option: {
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  input:{
      width:'90%',
      margin:theme.spacing(1),
      border:'none',
      borderBottom:'1px solid black',
      paddingLeft:'10px'
  }
}));
function Manage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            Manage User
          </div>
        </div>
        <hr className={classes.line} />
        <Grid container>
          <Grid item xs={12} md={6} style={{paddingTop:"20px"}}>
             <input className={classes.input} type="text" placeholder="&#xf007;  Full Name" style={{fontFamily:"'Poppins','FontAwesome'", fontWeight:'500'}}/>     
          </Grid>
          <Grid item xs={12} md={6} style={{paddingTop:"20px"}}>
          <input className={classes.input} type="text" placeholder="&#xf007;  Username" style={{fontFamily:"'Poppins','FontAwesome'", fontWeight:'500'}}/>     

          </Grid>
   
          <Grid item xs={12} md={6} style={{paddingTop:"20px"}}>
          <input className={classes.input} type="password" placeholder="&#xf084; Password" style={{fontFamily:"'Poppins','FontAwesome'", fontWeight:'500'}}/>     
        
          </Grid>
          <Grid item xs={12} md={6} style={{paddingTop:"20px"}}>
          <input className={classes.input} type="password" placeholder="&#xf084; Confirm Password" style={{fontFamily:"'Poppins','FontAwesome'", fontWeight:'500'}}/>          
          </Grid>
          <Grid item xs={12} md={6} style={{paddingTop:"20px"}}>
          <input className={classes.input} type="email" placeholder="&#xf0e0;  Email Id" style={{fontFamily:"'Poppins','FontAwesome'", fontWeight:'500'}}/> 
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                    <div className={classes.option}><i class="fas fa-user" style={{marginRight:"5px",marginLeft:"10px"}}></i> Role</div>
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select> 
                </FormControl> 
          </Grid>
          <Grid item xs={12} md={6} style={{paddingTop:"20px"}}>
          <input className={classes.input} type="text" placeholder="&#xf2b9;  Contact No." style={{fontFamily:"'Poppins','FontAwesome'", fontWeight:'500'}}/> 
          </Grid>
          <Grid item xs={12} md={6} style={{paddingTop:"20px"}}>
          <input className={classes.input} type="text" placeholder="&#xf2b9;  Alternate Contact No." style={{fontFamily:"'Poppins','FontAwesome'", fontWeight:'500'}}/> 
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                <div className={classes.option}><i class="fas fa-location-arrow" style={{marginRight:"5px",marginLeft:"5px"}}></i> Location</div>
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
         
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} className={classes.padding}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                <div className={classes.option}><i class="fas fa-user" style={{marginRight:"5px",marginLeft:"5px"}}></i> Is Active</div>
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> 
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                <div className={classes.option}><i class="fas fa-user" style={{marginRight:"5px",marginLeft:"5px"}}></i> Expert</div>
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} className={classes.padding}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                <div className={classes.option}><i class="fas fa-user" style={{marginRight:"5px",marginLeft:"5px"}}></i> Orientation</div>
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              
            </FormControl>
          </Grid>
        </Grid>
        <br/><br/>
        <center>
        <button className="btn btn-primary" style={{width:'130px',padding:'10px'}}><i class="far fa-save" style={{marginRight:'7px',color:'white'}}></i> Save</button>
        <button className="btn btn-dark" style={{width:'130px',marginLeft:"15px",padding:'10px'}}><i class="fas fa-trash-alt" style={{marginRight:'7px',color:'white'}}></i> Discard</button>
        </center>

        <br/><br/>
        <DashBoardTable />
      </div>
    
  
    </div>
  );
}

export default Manage;