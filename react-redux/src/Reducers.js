let initialState={count:0}

function Reducers(state=initialState,action) {

    if(action.type === 'Increment'){
        return{
            count:state.count+1
        };
    }
    if(action.type === 'Decrement'){
        return{
            count:state.count - 1
        };
    }



  return state
   
  
}

export default Reducers
