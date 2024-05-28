export const SET_USER = "SET_USER";

export interface SetUserAction {
  type: typeof SET_USER;
  payload: {
    usn: string;
  };
}

export const setUser = (user: { usn: string }): SetUserAction => ({
  type: SET_USER,
  payload: user,
});
