import categoryReducer from './index';

describe('categoryReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      activeCategory: '',
    };

    const action = {};

    const newState = categoryReducer(undefined, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle SET_ACTIVE_CATEGORY', () => {
    const initialState = {
      activeCategory: '',
    };

    const action = {
      type: 'SET_ACTIVE_CATEGORY',
      category: 'cat food',
    };

    const newState = categoryReducer(initialState, action);

    expect(newState.activeCategory).toBe('cat food');
  });

  it('should handle unknown action type', () => {
    const initialState = {
      activeCategory: '',
    };

    const action = {
      type: 'UNKNOWN_ACTION',
    };

    const newState = categoryReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
