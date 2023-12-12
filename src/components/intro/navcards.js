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
        backgroundColor: '#161b22', 
        color: '#fff',
        outline: '0.5px dashed #5C8374', 
        '&:hover': {
            backgroundColor: '#30363d',
            color: '#fff',
        },
        borderRadius: '15px',
    }}>
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
      </CardContent>
        <CardActions>
            <Button size="small" component={Link} to={`/${link}`} sx={{
                color: '#fff',
                outline: '0.5px solid #5C8374',
                '&:hover': {
                    backgroundColor: '#6c6f72',
                    color: '#fff',
                },
                borderRadius: '10px',
            }}>Click here to go there</Button>
        </CardActions>
    </Card>
  );
}

export default function CardGrid() {
    const contentProject = "Explore the projects I have done until now and discover the range of my skills."
    const contentResume = "Dive into the details of my professional experience and education."
    const contentAbout = "A brief introduction about me and my interests and hobbies."
    const contentSkills = "A list of my skills and the technologies I have worked with."
    const contentContact = "Get in touch with me. I am always open to new opportunities."
    const contentGitContributions = "Check out my open source contributions on GitHub. and my activity on GitHub."
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"About"} content={contentAbout} link={"portfolio/about"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Resume/CV"} content={contentResume} link={"portfolio/category/resume--cv"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Projects"} content={contentProject} link={"portfolio/category/projects"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Skills"} content={contentSkills} link={"portfolio/skills"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Contact"} content={contentContact} link={"portfolio/contact"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedCard title={"Git Contributions"} content={contentGitContributions} link={"portfolio/git"}/>
        </Grid>
      </Grid>
    );
  }