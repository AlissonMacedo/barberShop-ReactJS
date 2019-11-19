import producer from "immer";

const INITIAL_STATE = {
  profile: null,
  dashboard: ""
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return producer(state, draft => {
        draft.profile = action.payload.user;
      });
    case "@user/MOSTRA_HOME":
      return producer(state, draft => {
        draft.dashboard = action.payload.value;
      });
    default:
      return state;
  }
}
