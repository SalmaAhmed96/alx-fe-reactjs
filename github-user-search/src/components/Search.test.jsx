import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Search from './Search';

// Mock axios
const mock = new MockAdapter(axios);

// Import Jest functions
import { describe, beforeEach, test, expect } from '@jest/globals';

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
    const userData = [
      {
        id: 1,
        login: 'octocat',
        avatar_url: 'https://github.com/images/error/octocat_happy.gif',
        location: 'San Francisco',
        public_repos: 2,
        html_url: 'https://github.com/octocat',
      },
    ];
    mock.onGet('https://api.github.com/search/users?q=octocat').reply(200, { items: userData });

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Search GitHub user'), { target: { value: 'octocat' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(screen.getByText('octocat')).toBeInTheDocument();
      expect(screen.getByText('San Francisco')).toBeInTheDocument();
      expect(screen.getByText('Repositories: 2')).toBeInTheDocument();
    });
  });
});
