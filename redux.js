// Redux // 

// 1. Good for managing large state ; allows react state to be scalable
// 2. Useful for sharing data between components 
// 3. Predictable state management using the three principles

/////////////////////////////////////////////////////////////

// Redux Three Principles 

// 1. Single source of truth 
// 2. Immutability (State is read-only) 
// 3. State only changes with Pure Function (or functions w/o side effects)

/////////////////////////////////////////////////////////////

// Redux Flow - Flux Pattern // 

// Action: Something a user does 
// Reducer: A pure function that receives an input and creates an output 
// Store: Reducer's output updates the store
// DOM: React sees state is different and updates DOM

// Flux Pattern ///

// One way data flow

// Action -> Dispatcher -> Store -> View
// Components dispatch Actions. These actions update "slices" of state called Reducers. 
// Those Reducers then update global state which in turn updates all components that need it. 

/////////////////////////////////////////////////////////////

// Reducers //

// Functions tha take state (previous or current state) and an action 

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }; // Will return a new object that's the new state. 
            // We want component to rerender and also stick to immutability.
        default:
            return currentState; 
    }
};

/////////////////////////////////////////////////////////////

// Middleware // 

// A piece of code that does something with an action before the action reaches a reducer

