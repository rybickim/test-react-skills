import styled from 'styled-components';
import React from 'react';
import { Route } from 'react-router-dom';

const UserBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: 1fr 3fr 1fr;
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

const AddNewPostButton = styled.button`
  grid-area: 2 / 3 / 2 / 3;
  font-size: 2vw;
  background: dodgerblue;
  font-family: sans-serif;
  border: none;
  border-radius: 3px;
  margin: 3rem;
  width: 8.5em;
  height: 2em;
  color: white;
  justify-self: center;

  &:hover {
    background: deepskyblue;
  }
`

const PostsList = styled.ul`
  grid-area: 2 / 2 / 2 / 3;
  border: none;
  border-radius: 3px;
  background: #efe9df;
  margin-top: 1em;
`

class UserPage extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(json => this.setState({ user: json }));
  }

  render() {
    const { name } = this.state.user;


    return (
      <Route render={({ history }) => (
        <UserBox>
        <GoBackButton onClick={() => history.goBack()}></GoBackButton>
        <UserName>{name}</UserName>
        <AddNewPostButton><b>Add new post</b></AddNewPostButton>
        <PostsList></PostsList>
      </UserBox>
      )} />
    );
  }
}

export default UserPage;