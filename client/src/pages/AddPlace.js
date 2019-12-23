import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/general/Input';
import TextArea from '../components/general/TextInput';
import Button from '../components/general/Button';

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 700px;
`;

const CameraInput = styled(Input)`
  width: 300px;
  font-size: 0.8rem;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 0.9rem;
  display: block;
  width: 150px;
  margin-bottom: 15px;
`;

const Headline = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  font-size: 1rem;
  border-bottom: solid 2px black;
`;

const Rate = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

const RateInput = styled.input`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  border: none;
  border-radius: 8px;
  color: black;
  outline: none;
  background: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.special)};
`;

export default function AddPlace() {
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [detail, setDetail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [web, setWeb] = React.useState('');
  const [rate, setRate] = React.useState(null);
  const [img, setImg] = React.useState(null);

  return (
    <Form>
      <Headline>Neuen Ort eintragen</Headline>

      <Label>
        Name des Ortes
        <Input
          type="text"
          required="true"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </Label>
      <Label>
        Kategorie
        <select onChange={event => setCategory(event.target.value)} value={category}>
          <option value="Spielplatz">Spielplatz</option>
          <option value="Schwimmbad">Schwimmbad</option>
          <option value="Cafe">Cafe</option>
        </select>
      </Label>
      <Label>
        Beschreibung
        <TextArea onChange={event => setDetail(event.target.value)} value={detail} rows="15" />
      </Label>
      <Label>
        Altersgruppe
        <select onChange={event => setAge(event.target.value)} value={age}>
          <option value="0-2 Jahre">0-2 Jahre</option>
          <option value="3-6 Jahre">3-6 Jahre</option>
          <option value="7-10 Jahre">7-10 Jahre</option>
          <option value="ab 11 Jahre">ab 11 Jahre</option>
        </select>
      </Label>
      <Headline>Adresse</Headline>
      <Label>
        Straße/Hausnummer
        <Input
          onChange={event => setStreet(event.target.value)}
          value={street}
          type="text"
          required="true"
        />
      </Label>
      <Label>
        Ort
        <Input
          onChange={event => setCity(event.target.value)}
          value={city}
          type="text"
          required="true"
        />
      </Label>
      <Label>
        Postleitzahl
        <Input
          onChange={event => setZip(event.target.value)}
          value={zip}
          type="text"
          required="true"
        />
      </Label>
      <Label>
        Webseite
        <Input
          onChange={event => setWeb(event.target.value)}
          value={web}
          type="text"
          required="true"
        />
      </Label>
      <Headline>Bewertung</Headline>
      <Rate>
        {[1, 2, 3, 4, 5].map(value => (
          <RateInput
            key={value}
            type="button"
            value={value}
            active={value === rate}
            onClick={() => setRate(value)}
          />
        ))}
      </Rate>
      <Headline>Foto</Headline>

      <Label>
        <CameraInput
          type="file"
          accept="image/*"
          value={img}
          capture="camera"
          onChange={event => setImg(event.target.value)}
        />
      </Label>
      <Button>bestätigen</Button>
    </Form>
  );
}
