Reducer - a function that receives the current state and action object. The action decides how to update the state if necessary and returns a new state. You can think of a reducer as an event listener which handles events based on the received action (event) type.
Action - plain javaScript object that has a type field. You can think of an action as an event that describes something that happened in the application. 
An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

Rules followed by reducers:
- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

Selectors are functions that know how to extract specific pieces of information from a store state value.

Types - 
Redux-Thunk - redux middleware