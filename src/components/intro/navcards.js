import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function OutlinedCard({ title, content, link }) {
  return (
    <Card variant="outlined" sx={{ 
        backgroundColor: '#242526', 
        color: '#fff',
        outline: '1px solid #f60002', 
    
    }}>
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
      </CardContent>
        <CardActions>
            <Button size="small" component={Link} to={`/${link}`}>Learn More</Button>
        </CardActions>
    </Card>
  );
}

export default function CardGrid() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"About"} content={"abc"} link={"portfolio/about"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Resume/CV"} content={"abc"} link={"portfolio/resume"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Projects"} content={"abc"} link={"portfolio/about"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Skills"} content={"abc"} link={"portfolio/resume"}/>
        </Grid>
      </Grid>
    );
  }