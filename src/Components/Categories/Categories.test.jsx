import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Categories from './index';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Categories', () => {
  const initialState = {
    categories: {
      activeCategory: '',
    },
  };

  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders category links correctly', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    const catFoodLink = screen.getByText('Cat Food');
    const litterLink = screen.getByText('Litter');
    const accessoriesLink = screen.getByText('Accessories');

    expect(catFoodLink).toBeInTheDocument();
    expect(litterLink).toBeInTheDocument();
    expect(accessoriesLink).toBeInTheDocument();
  });

  it('dispatches action when category link is clicked', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    const catFoodLink = screen.getByText('Cat Food');

    fireEvent.click(catFoodLink);

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'SET_ACTIVE_CATEGORY', category: 'cat food' });
  });

  it('dispatches action when "All" link is clicked', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    const allLink = screen.getByText('All');

    fireEvent.click(allLink);

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'SET_ACTIVE_CATEGORY', category: '' });
  });
});
