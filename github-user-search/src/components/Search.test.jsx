import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Search from './Search';

// Mock axios
const mock = new MockAdapter(axios);

describe('Search Component', () => {
  beforeEach(() => {
    mock.reset();
  });

  test('displays "Looks like we can\'t find the user" when no users are found', async () => {
    mock.onGet('https://api.github.com/search/users?q=nonexistent').reply(200, { items: [] });

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Search GitHub user'), { target: { value: 'nonexistent' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(screen.getByText("Looks like we can't find the user")).toBeInTheDocument();
    });
  });

  test('displays user information when users are found', async () => {
    const userData = {
      login: 'octocat',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      html_url: 'https://github.com/octocat',
    };
    mock.onGet('https://api.github.com/users/octocat').reply(200, userData);

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Search GitHub user'), { target: { value: 'octocat' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(screen.getByText('octocat')).toBeInTheDocument();
      expect(screen.getByText('View Profile')).toBeInTheDocument();
    });
  });
});
