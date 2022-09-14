import { ActionTypes } from "../actions/types";

const initialState = {
  meta_mask_loading: false,
  wallet: null,
  success: false,
  error: null,
  playerInfo: null,
  deployer_loading: false,
  deployContract: false,
  accepted: false,
  accept_loading: false,
  acceptValue: null,
};

export default function metaMask(state = initialState, action) {
  switch (action.type) {
    //get meta mask account
    case ActionTypes.GET_META_MASK_ACCOUNT_LOADING:
      return {
        ...state,
        meta_mask_loading: true,
      };
    case ActionTypes.GET_META_MASK_ACCOUNT_SUCCESS:
      return {
        ...state,
        wallet: action.payload,
        success: true,
        meta_mask_loading: false,
      };

    case ActionTypes.GET_META_MASK_ACCOUNT_FAIL:
      return {
        ...state,
        meta_mask_loading: false,
        success: false,
        error: action.payload,
      };
    //set contract info
    case ActionTypes.SET_CONTRACT_INFO_LOADING:
      return {
        ...state,
        deployer_loading: true,
      };
    case ActionTypes.SET_CONTRACT_INFO_SUCCESS:
      localStorage.setItem("playerInfo", action.payload);
      return {
        ...state,
        playerInfo: action.payload,
        deployContract: true,
        deployer_loading: false,
      };

    case ActionTypes.SET_CONTRACT_INFO_FAIL:
      return {
        ...state,
        deployer_loading: false,
        deployContract: false,
        error: action.payload,
      };
    //accept wager
    case ActionTypes.ACCEPT_WAGER_LOADING:
      return {
        ...state,
        accept_loading: true,
      };
    case ActionTypes.ACCEPT_WAGER_SUCCESS:
      return {
        ...state,
        acceptValue: action.payload,
        accepted: true,
        accept_loading: false,
      };

    case ActionTypes.ACCEPT_WAGER_FAIL:
      return {
        ...state,
        accept_loading: false,
        accepted: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
