import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'

const SignupPage = (props) => {
  return (
    <div>
      <h2>Sign up</h2>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Button component={Link} color="primary" size="large" variant="contained" to="/signup/volunteer">
            New volunteer
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button component={Link} color="primary" size="large" variant="contained" to="/signup/project">
            New project
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignupPage
