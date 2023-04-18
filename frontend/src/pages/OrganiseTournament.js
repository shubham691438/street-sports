import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import {useRegisterTournament} from '../hooks/useRegisterTournament'
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function OrganiseTournament() {

  const {registerTournament,error,isLoading,success}=useRegisterTournament()
  const navigate=useNavigate();

  if(success)
  {
    // alert("Congratulations : tournament deatils added successfully");
    setTimeout(()=>{
      navigate('/shubh/tournaments')
    },2000)
    
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await registerTournament(data)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{backgroundColor:'white'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1adaa7' }}>
            <DynamicFormIcon/>
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight='bold'>
            Organise Tournament
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name of Tournament"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sport"
                  label="Sport"
                  name="sport"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Descrition of Tournament"
                  name="description"
                />
              </Grid>
              
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="eligibility_criteria"
                  label="Eligibility Criteria"
                  name="eligibility_criteria"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  
                  id="participation_fee"
                  label="Participation Fee"
                  name="participation_fee"
                />
                </Grid>
              <Grid item xs={12}><Typography color='#1adaa7' fontWeight='bold'>Location:</Typography></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="district"
                  required
                  fullWidth
                  id="district"
                  label="District"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                />
              </Grid>
              <Grid item xs={12}><Typography color='#1adaa7' fontWeight='bold'>Schedule:</Typography></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="start_date"
                  type='date'
                  required
                  fullWidth
                  id="start_date"
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='date'
                  id="end_date"
                  label="End Date"
                  name="end_date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Duration"
                  name="duration"
                />
              </Grid>
            
              <Grid item xs={12}><Typography color='#1adaa7' fontWeight='bold'>Rules (one rule in a line):</Typography></Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="rules"
                    id="rules"
                    label="Rules"
                    multiline
                    rows={6}
                    defaultValue="rule 1 "
                    />
                </Grid>
            <Grid item xs={12}><Typography color='#1adaa7' fontWeight='bold'>Prize Pool:</Typography></Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="number"
                  name="first_place"
                  fullWidth
                  id="first_place"
                  label="First Place"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                required
                   type="number"
                   name="second_place"
                   fullWidth
                   id="second_place"
                   label="Second Place"
                   autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                   required
                   type="number"
                   name="third_place"
                   fullWidth
                   id="third_place"
                   label="Third Place"
                   autoFocus
                />
              </Grid>
              <Grid item xs={12}><Typography color='#1adaa7' fontWeight='bold'>Organiser Details:</Typography></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="organiser_name"
                  required
                  fullWidth
                  id="Organiser_name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email"
                  name="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                type='tel'
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone No"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="contact_person"
                  label="Contact Person"
                  name="contact_person"
                />
              </Grid>
              <Grid item xs={12}><Typography color='#1adaa7' fontWeight='bold'>Social Media Links (if any):</Typography></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="facebook"
                  fullWidth
                  id="facebook"
                  label="Facebook"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="twitter"
                  label="Twitter"
                  name="twitter"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="instagram"
                  label="Instagram"
                  name="instagram"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive Updates via email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Register Tournament
            </Button>
            {error && <Alert severity="error" >{error}</Alert>}
            {success&& <Alert severity="success">{success}</Alert>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}