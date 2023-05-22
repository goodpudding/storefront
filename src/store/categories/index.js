const initialCategoryState = {
  activeCategory: '',
};

const categoryReducer = (state = initialCategoryState, action) => {
  switch (action?.type) {
    case 'SET_ACTIVE_CATEGORY':
      return { ...state, activeCategory: action.category };
    default:
      return state;
  }
};

export default categoryReducer;
