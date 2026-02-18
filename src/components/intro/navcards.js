import * as React from 'react';
import {Link} from '@docusaurus/router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function NavCard({title, description, href, icon}) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background:
          'linear-gradient(160deg, rgba(20, 28, 39, 0.95) 0%, rgba(17, 20, 31, 0.92) 100%)',
        color: '#f8fafc',
        border: '1px solid rgba(84, 196, 246, 0.3)',
        borderRadius: '18px',
        boxShadow: '0 18px 40px -30px rgba(84, 196, 246, 0.8)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(84, 196, 246, 0.8)',
          boxShadow: '0 24px 48px -24px rgba(84, 196, 246, 0.8)',
        },
      }}>
      <CardContent sx={{flexGrow: 1}}>
        <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem'}}>
          <span aria-hidden="true">{icon}</span>
          {title}
        </h3>
        <p style={{margin: 0, opacity: 0.9, lineHeight: 1.6}}>{description}</p>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={Link}
          to={href}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            color: '#0f172a',
            backgroundColor: '#7dd3fc',
            borderRadius: '10px',
            px: 1.5,
            '&:hover': {
              backgroundColor: '#38bdf8',
            },
          }}>
          Explore section
        </Button>
      </CardActions>
    </Card>
  );
}

const navItems = [
  {
    title: 'About',
    description: 'A short overview of my background, interests, and journey in AI.',
    href: '/about',
    icon: '👤',
  },
  {
    title: 'Resume / CV',
    description: 'Detailed education and professional timeline with key achievements.',
    href: '/resume',
    icon: '📄',
  },
  {
    title: 'Projects',
    description: 'Highlighted projects, demos, and open-source contributions.',
    href: '/projects',
    icon: '🚀',
  },
  {
    title: 'Skills',
    description: 'Tools, frameworks, and technologies I use to build production systems.',
    href: '/skills',
    icon: '🧠',
  },
  {
    title: 'Contact',
    description: 'Ways to reach me for collaborations, opportunities, or networking.',
    href: '/contact',
    icon: '📬',
  },
  {
    title: 'Git Contributions',
    description: 'A view into my open-source activity and contribution streaks.',
    href: '/git',
    icon: '💻',
  },
];

export default function CardGrid() {
  return (
    <Grid container spacing={2.5}>
      {navItems.map((item) => (
        <Grid key={item.href} item xs={12} sm={6}>
          <NavCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
