import React from 'react';
import styled from '@emotion/styled';

const CommentsContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 90%;
  border-top: black solid 1px;
`;

const CommentHeadline = styled.div`
  justify-self: center;
  text-align: start;
  width: 90%;
  padding: 10px;
  border-radius: 7px;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
`;

const CommentCreator = styled.div`
  font-size: 0.8rem;
  font-style: italic;
  text-align: start;
  margin: 10px;
  margin-bottom: 3px;
`;

const CommentText = styled.article`
  width: 80%;
  height: fit-content;
  max-height: 200px;
  overflow: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
`;

export default function Comments() {
  return (
    <CommentsContainer>
      <CommentHeadline>Kommentare</CommentHeadline>
      <CommentCreator>Peter:</CommentCreator>
      <CommentText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur inventore ex illo sint
        illum, incidunt unde delectus neque sit nihil dicta molestias deleniti odio assumenda magni.
        Minima quo asperiores illo?
      </CommentText>
    </CommentsContainer>
  );
}
