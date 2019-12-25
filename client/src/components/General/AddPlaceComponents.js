import styled from '@emotion/styled';
import Input from '../general/Input';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  margin-bottom: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const CameraInput = styled(Input)`
  width: 300px;
  font-size: 0.8rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.9rem;
  display: block;
  width: 150px;
  margin-bottom: 15px;
`;

export const Headline = styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
  background-color: ${props => props.theme.colors.text};
  text-align: center;
  font-size: 1rem;
  border-bottom: solid 2px black;
`;

export const Rate = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

export const RateInput = styled.input`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  border: none;
  border-radius: 8px;
  color: black;
  outline: none;
  background: ${props => (props.active ? props.theme.colors.rate : props.theme.colors.special)};
`;

export const HeadlineWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  text-align: center;
  line-height: 30px;
  justify-content: space-around;
  margin-bottom: 10px;
`;
