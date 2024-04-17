let initialState = {
  loginStatus: false,
  loginInfo: {
    existence: false,
    id: '',
    password: '',
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case '로그인 상태':
      return { ...state, loginStatus: action.payload };
    case '로그인 정보':
      return { ...state, loginInfo: action.payload };
    default:
      return { ...state };
  }
}

export default reducer;
