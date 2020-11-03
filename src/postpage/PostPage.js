import styled from 'styled-components';
import React from 'react';
import { Route } from 'react-router-dom';
import PostTile from '../posttile/PostTile';

const UserBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-gap: 2rem;
  background: lightblue;
  border-radius: 3px;
  font-family: sans-serif;
  color: #103146;
  margin: 1em;
  padding: 1em;
  width: 70em;
  height: 30em;
`

const GoBackButton = styled.div`
  grid-area: 2 / 1 / 2 / 1;
  width: 0;
  height: 0;
  margin: 3rem;
  border-top: 2em solid transparent;
  border-right: 3.5em solid dodgerblue;
  border-bottom: 2em solid transparent;

  &:hover {
    border-right: 3.5em solid deepskyblue;
  }
  `

const UserName = styled.h1`
  grid-area: 1 / 2 / 1 / 2;
  font-size: 3vw;
  margin-top: 2rem;
`

const ShowCommentsButton = styled.button`
  grid-area: 3 / 2 / 3 / 3;
  font-size: 2vw;
  background: dodgerblue;
  font-family: sans-serif;
  border: none;
  border-radius: 3px;
  margin: 3rem;
  width: 10em;
  height: 2em;
  color: white;
  justify-self: center;

  &:hover {
    background: deepskyblue;
  }
`

const PostContent = styled.div`
  grid-area: 2 / 2 / 2 / 3;
`

const PostBody = styled.div`
  margin-top: 2rem;
  background: #efe9df;
  padding: 2rem;
`

class PostPage extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      post: {}
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(json => this.setState({ user: json }));

    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(res => res.json())
      .then(json => this.setState({ post: json }));
  }

  render() {
    const { name } = this.state.user;
    const { title, body } = this.state.post;

    return (
      <Route render={({ history }) => (
        <UserBox>
        <GoBackButton onClick={() => history.goBack()}></GoBackButton>
        <UserName>{name}</UserName>
        <ShowCommentsButton><b>Show comments</b></ShowCommentsButton>
        <PostContent>
            <div><b>{title}</b></div>
            <PostBody>{body}</PostBody>
        </PostContent>
      </UserBox>
      )} />
    );
  }
}

export default PostPage;