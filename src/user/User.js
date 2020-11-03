import styled from 'styled-components';
import usersData from '../data/users.json';

const UserBox = styled.div`
  display: grid;
  background: lightblue;
  border-radius: 3px;
  border: 2px solid  #103146;
  color: #103146;
  margin: 1em;
  padding: 1em;
`

const UserName = styled.h1`
    grid-area: 1 / 1 / 1 / 3;
`

const UserParagraph = styled.p`
    margin: 0.5em 1em;
`

const UserEmail = styled(UserParagraph)`
    grid-area: 2 / 1 / 2 / 1;
`

const UserPhone = styled(UserParagraph)`
    grid-area: 3 / 1 / 3 / 1;
`

const UserWebsite = styled(UserParagraph)`
    grid-area: 2 / 2 / 2 / 2;
`

const UserCompany = styled(UserParagraph)`
    grid-area: 3 / 2 / 3 / 2;
`

function User (props) {
    let { name, email, phone, website, company } = props.data || usersData[0]

    return (
        <UserBox>
            <UserName>{name}</UserName>
            <UserEmail>E-mail: {email}</UserEmail>
            <UserPhone>Phone: {phone}</UserPhone>
            <UserWebsite>Website: {website}</UserWebsite>
            <UserCompany>Company: {company.name}</UserCompany>
        </UserBox>
    );
}


export default User;