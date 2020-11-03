import styled from 'styled-components';
import usersData from '../data/users.json';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

const UserBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: lightblue;
  font-family: sans-serif;
  border-radius: 3px;
  color: #103146;
  margin: 1em;
  padding: 1em;

  &:hover {
    background: lightskyblue;
  }
`

const UserAvatar = styled.img`
    justify-self: center;
    width: 5em;
    margin-bottom: 1em;
`

const UserParagraph = styled.p`
    margin: 0.5em 1em;
`

const Catchphrase = styled.p`
    margin: 0.5em 1em;
    grid-column: 1 / -1;
`

function User (props) {
    let { name, username, email, phone, website, company } = props.data || usersData[0];

    return (
        <UserBox>
            <UserAvatar src={generator.generateRandomAvatar()} alt="generated avatar"></UserAvatar>
            <h1>{name}</h1>
            <UserParagraph><b>Username:</b> {username}</UserParagraph>
            <UserParagraph><b>E-mail:</b> {email}</UserParagraph>
            <UserParagraph><b>Phone:</b> {phone}</UserParagraph>
            <UserParagraph><b>Website:</b> {website}</UserParagraph>
            <UserParagraph><b>Company:</b> {company.name}</UserParagraph>
            <Catchphrase><i>{company.catchPhrase}</i></Catchphrase>
        </UserBox>
    );
}


export default User;