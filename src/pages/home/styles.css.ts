import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif',
  color: 'white',
});

export const greeting = style({
  fontSize: '2em',
});

export const snowflake = style({
  fontSize: '2em',
  opacity: 0.5,
  animation: `${greeting} 5s linear infinite`,
});
