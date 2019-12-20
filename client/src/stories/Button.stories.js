import React from 'react';
import Button from '../components/General/Button';

export default {
  title: 'Buttons'
};

export function CommentButton() {
  return <Button>Kommentar</Button>;
}

export function BackButton() {
  return <Button>zurück</Button>;
}

export function RateButton() {
  return <Button>Bewerten</Button>;
}
