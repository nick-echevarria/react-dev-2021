// setState() is an asynchronous call, meaning react batches updates and it happens sometime 
// in the future

// If you need to immediately use state after setState, use a function as the second parameter 
// (as seen below on line 16)

// When using this.state directly in a setState() call, we have to use a best practice 
// as outlined below:

//For example, a handleClick function:

handleClick = () => {
  this.setState((prevState, prevProps) => {
    return (
      { exampleState: prevState.exampleState + prevProps.exampleProp },
      () => console.log(this.state.example.state)
    );
  });
};

// This ensures that what's being referred to in this.state is the actual 
// prevState and not just some other random state as updated by another part of the app
