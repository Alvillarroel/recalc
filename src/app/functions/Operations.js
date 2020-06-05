export const calculate = (state, btnName) => {
  /**
   * This clear the state of calculator
   */
  if (btnName === 'AC'){
    return {
      total:null,
      next:null,
      operation:null
    };
  }

  /**
   * Validate is btnName is a number
   */
  if (!isNaN(btnName)){
    if (btnName === "0" && state.next === "0") {
      return {};
    }
    // If there is an operation, update next
    if (state.operation) {
      if (state.next) {
        return {total: state.total, next: state.next + btnName, operation: state.operation };
      }
      return {total: state.total, next: btnName, operation: state.operation };
    }
    // If there is no operation, update next and clear the value
    if (state.next) {
      const next = state.next === "0" ? btnName : state.next + btnName;
      return {total: state.total,next, operation: state.operation};
    }
    return {total: state.total,next: btnName, operation: state.operation};
  }

  /**
   * btnName is Not a number
   */
  //  Add dot to number
  if (btnName === ".") {
    if (state.next) {
      // ignore a . if the next number already has one
      if (state.next.includes(".")) {
        return {total:state.total, next: state.next, operation:state.operation};
      }
      return {total:state.total, next: state.next + ".", operation:state.operation };
    }
    return {total:state.total, next: "0.", operation:state.operation };
  }

  if (btnName === "=") {
    if (state.next && state.operation) {
      return {
        total: operate(state.total, state.next, state.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  // User pressed an operation button and there is an existing operation
  if (state.operation) {
    return {
      total: operate(state.total, state.next, state.operation),
      next: null,
      operation: btnName,
    };
  }
  // The user hasn't typed a number yet, just save the operation
  if (!state.next) {
    return { total:state.total, next:state.next, operation: btnName };
  }
  // save the operation and shift 'next' into 'total'
  return {
    total: state.next,
    next: null,
    operation: btnName
  };
  
}

/**
 * Function operate, handle mathematics operations according 
 * to operation type
 * @param {string} nOne 
 * @param {string} nTwo 
 * @param {string} type 
 * 
 */
const operate = (nOne, nTwo, type) => {
  switch (type) {
    case '+':
      return (Number(nOne)+Number(nTwo)).toString();
    case '-':
      return (Number(nOne)-Number(nTwo)).toString();
    case 'x':
      return (Number(nOne)*Number(nTwo)).toString();
    case '÷':
      return (nTwo !== "0") ? (Number(nOne)/Number(nTwo)).toString() :"Divide by 0 error";
    default:
      console.error(`Unknown operation '${type}'`);
  }
}

 