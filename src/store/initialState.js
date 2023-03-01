import { defaultStyles, defaultTitle } from "../constants";
import { clone } from "../utils/clone";

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: "",
  title: defaultTitle,
  currentStyles: defaultStyles,
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: "",
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
