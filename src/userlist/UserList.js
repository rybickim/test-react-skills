import User from '../user/User';
import styled from 'styled-components';

const UserListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

function UserList (props) {
    const items = []

    for (let user of props.users) {
        items.push(<User key={user.id} data={user}></User>);
    }

    return (<UserListGrid>{items}</UserListGrid>);
}



export default UserList;