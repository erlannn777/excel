import { defaultStyles } from "../constants";
import { storage } from "../utils/storage";

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: "",
  currentStyles: defaultStyles,
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: "",
});

export const initialState = normalize(storage("excel-state")) ?? defaultState;
