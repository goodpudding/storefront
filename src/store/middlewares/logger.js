const logger = (store) => (next) => (action) => {
  console.log('HERE IS OUR ACTION', action);
  let state = store.getState();

  console.log('HERE IS OUR STATE BEFORE NEW STATE IS MADE', state);
  next(action);
}

export default logger;
