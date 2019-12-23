import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/general/Input';
import TextArea from '../components/general/TextInput';
import Button from '../components/general/Button';

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 0.9rem;
  display: block;
  float: left;
  width: 150px;
  margin-bottom: 10px;
`;

export default function AddPlace() {
  return (
    <Form>
      <Label>
        Name des Ortes
        <Input type="text" required="true" />
      </Label>
      <Label>
        Kategorie
        <select>
          <option value="Spielplatz">Spielplatz</option>
          <option value="Schwimmbad">Schwimmbad</option>
          <option value="Cafe">Cafe</option>
        </select>
      </Label>
      <Label>
        Beschreibung
        <TextArea rows="15" />
      </Label>
      <Label>
        Altersgruppe
        <select>
          <option value="1">0-2 Jahre</option>
          <option value="2">3-6 Jahre</option>
          <option value="3">7-10 Jahre</option>
          <option value="4">ab 11 Jahre</option>
        </select>
      </Label>
      <h4>Adresse</h4>
      <Label>
        Straße
        <Input type="text" required="true" />
      </Label>
      <Label>
        Hausnummer
        <Input type="text" required="true" />
      </Label>
      <Label>
        Ort
        <Input type="text" required="true" />
      </Label>
      <Label>
        Postleitzahl
        <Input type="text" required="true" />
      </Label>
      <Label>
        Webseite
        <Input type="text" required="true" />
      </Label>
      <Button>bestätigen</Button>
      <Button>abbrechen</Button>
    </Form>
  );
}
