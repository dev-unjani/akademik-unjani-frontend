import { Map, fromJS } from 'immutable';
import { INIT, ON_LOGGED_IN } from '../../actions/actionConstants';

const initialState = {
  usersLogin: Map({
    email: '',
    password: '',
    remember: false
  }),
  isLoggedIn: false
};

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    case ON_LOGGED_IN:
      return state.withMutations((mutableState) => {
          localStorage.setItem('user', false)
          mutableState.set('isLoggedIn', true)
      });
    default:
      return state;
  }
}


// return state.withMutations((mutableState) => {
//   const login = state.get('isLoggedIn');
//   if(login == false){
//     mutableState.set('isLoggedIn', true)
//   }else{
//     mutableState.set('isLoggedIn', false)
//   }
// });