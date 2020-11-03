import styled from 'styled-components';

const PostBox = styled.div`
  background: #cfd9df;
  font-family: sans-serif;
  border-radius: 3px;
  color: #103146;
  margin: 0.5em;
  padding: 0.5em;
  display: flex;

  &:hover {
    background: lightgray;
  }
`

const CloseButton = styled.button`
  background: #bfc9cf;
  font-family: sans-serif;
  border: none;
  border-radius: 3px;
  color: #103146;  

  &:hover {
    background: white;
  }
`

const PostTitle = styled.span`
  font-family: sans-serif;
  border: none;
  border-radius: 3px;
  color: #103146;
  margin-left: 2rem;  
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 22.5rem;
`


const PostTile = (props) => {
    return (
        <PostBox>
            <CloseButton><b>x</b></CloseButton>
            <PostTitle>{props.title}</PostTitle>
        </PostBox>
    );
}

export default PostTile;