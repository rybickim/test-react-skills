import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import usersData from '../data/users.json';

describe('UserList', () => {
    test('renders Users', () => {
        render(<UserList />);
        const userElement = screen.getByText('');
        expect(userElement).toBeInTheDocument();
    });
})
