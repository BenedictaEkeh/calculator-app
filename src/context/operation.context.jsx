// import { useReducer, createContext } from "react";

// import { createAction } from "../utils/reducer/reducer.utils";

// export const OperationContext = createContext({
//   currentOperation: null,
//   previousOperation: null,
//   operation: null,
//   numClickHandler: () => {},
//   operationClickHandler: () => {},
//   resetClickHandler: () => {},
//   deleteClickHandler: () => {},
//   evaluateClickHandler: () => {},
// });

// //create action type for operation
// export const OPERATION_ACTION_TYPES = {
//   NUM_INPUT: "NUM_INPUT",
//   CHOOSE_OPERATION: "CHOOSE_OPERATION",
//   RESET_INPUT: "RESET_INPUT",
//   DELETE_INPUT: "DELETE_INPUT",
//   EVALUATE_INPUT: "EVALUATE_INPUT",
// };

// //create reducer for operation
// const operationReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case OPERATION_ACTION_TYPES.NUM_INPUT:
//       if (state.overwrite) {
//         return {
//           ...state,
//           currentOperation: payload.input,
//           overwrite: false,
//         };
//       }

//       if (payload.input === "0" && state.currentOperation === "0") {
//         return state;
//       }
//       if (payload.input === "." && state.currentOperation.includes(".")) {
//         return state;
//       }
//       return {
//         ...state,
//         currentOperation: `${state.currentOperation || ""}${payload.input}`,
//       };

//     case OPERATION_ACTION_TYPES.CHOOSE_OPERATION:
//       if (state.currentOperation === null && state.previousOperation === null) {
//         return state;
//       }

//       if (state.currentOperation === null) {
//         return {
//           ...state,
//           operation: payload.operation,
//         };
//       }

//       if (state.previousOperation === null) {
//         return {
//           ...state,
//           previousOperation: state.currentOperation,
//           currentOperation: null,
//           operation: payload.operation,
//         };
//       }

//       return {
//         ...state,
//         previousOperation: evaluate(state),
//         currentOperation: null,
//         operation: payload.operation,
//       };

//     case OPERATION_ACTION_TYPES.RESET_INPUT:
//       return {
//         ...state,
//         currentOperation: null,
//       };

//     case OPERATION_ACTION_TYPES.DELETE_INPUT:
//       if (state.overwrite) {
//         return {
//           ...state,
//           overwrite: false,
//           currentOperation: null,
//         };
//       }

//       if (state.currentOperation === null) {
//         return state;
//       }

//       if (state.currentOperation.length === 1) {
//         return {
//           ...state,
//           currentOperation: null,
//         };
//       }

//       return {
//         ...state,
//         currentOperation: state.currentOperation.slice(0, -1),
//       };

//     case OPERATION_ACTION_TYPES.EVALUATE_INPUT:
//       if (
//         state.currentOperation === null ||
//         state.previousOperation === null ||
//         state.operation === null
//       ) {
//         return state;
//       }

//       return {
//         ...state,
//         overwrite: true,
//         currentOperation: evaluate(state),
//         previousOperation: null,
//         operation: null,
//       };
//   }
// };

// const evaluate = ({ previousOperation, currentOperation, operation }) => {
//   const current = parseFloat(currentOperation);
//   const previous = parseFloat(previousOperation);
//   if (isNaN(previous) || isNaN(current)) return "";
//   let computation = "";

//   switch (operation) {
//     case "+":
//       computation = previous + current;
//       break;
//     case "-":
//       computation = previous - current;
//       break;
//     case "*":
//       computation = previous * current;
//       break;
//     case "/":
//       computation = previous / current;
//       break;
//   }

//   return computation.toString();
// };

// //create initial state for operation
// const INITIAL_STATE = {
//   currentOperation: null,
//   previousOperation: null,
//   operation: null,
// };


// export const OperationProvider = ({ children }) => {
//   const [{ currentOperation, previousOperation, operation }, dispatch] =
//     useReducer(operationReducer, INITIAL_STATE);

//   const numClickHandler = () => {
//     dispatch(createAction(OPERATION_ACTION_TYPES.NUM_INPUT, { input }));
//   };

//   const operationClickHandler = () => {
//     dispatch(createAction(OPERATION_ACTION_TYPES.CHOOSE_OPERATION, { operation: input }));
//   }

//   const resetClickHandler = () => {
//     dispatch(createAction(OPERATION_ACTION_TYPES.RESET_INPUT));
//   }

//   const deleteClickHandler = () => {
//     dispatch(createAction(OPERATION_ACTION_TYPES.DELETE_INPUT));
//   }

//   const evaluateClickHandler = () => {
//     dispatch(createAction(OPERATION_ACTION_TYPES.EVALUATE_INPUT));
//   }

//   const value = {
//     currentOperation,
//     previousOperation,
//     operation,
//     numClickHandler,
//     operationClickHandler,
//     resetClickHandler,
//     deleteClickHandler,
//     evaluateClickHandler,
//   };

//   return (
//     <OperationContext.Provider value={value}>
//       {children}
//     </OperationContext.Provider>
//   );
// };
