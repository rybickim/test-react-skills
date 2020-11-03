import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('fetches data from API', () => {
    render(<App />);
    // how to test component's state
    expect(this.state.users.length).toEqual(8);
  });
});
