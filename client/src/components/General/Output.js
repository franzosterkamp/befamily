import styled from './node_modules/@emotion/styled';

export const Img = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`;

export const Description = styled.article`
  height: 200px;
  width: 90%;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px;
  overflow: auto;
`;

export const Parameter = styled.div`
  margin: 5px;
  width: 150px;
`;

export const Data = styled.div`
  margin: 5px;
`;

export const Adress = styled.span`
  width: 150px;
  margin: 5px;
  font-size: 1rem;
`;

export const Street = styled.span`
  margin: 5px;
`;

export const Zip = styled.span`
  margin: 5px;
`;

export const City = styled.span`
  margin: 5px;
`;
