import * as actionTypes from "./actionTypes";
import axios from "../../axiosOrders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingName: name,
  };
};
export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingName: name,
  };
};

export const clearOrder = () => {
  return {
    type: actionTypes.CLEAR_ORDER,
  };
};

const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

// async action creator

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://burger-builder-v3.firebaseio.com/ingredients.json")
      .then(res => {
        dispatch(setIngredients(res.data));
      })
      .catch(err => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
