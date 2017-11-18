const initialState = {
  count: 42
};

export default function reducer(state = initialState, action){
  //console.log(state);
  switch(action.type){
    case "INCREMENT":
      state.count++;
      return state;
    case "DECREMENT":
      state.count--;
      return state;
    default:
      return state;
  }
}
