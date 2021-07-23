// A piece of code that wraps around a 'stream' 
// of events. 

// It is composed of three different parts: 

 const onAuthStateChanged = { // For example, when firebase sees an auth state changed
    next: (nextValue) => {
        //Do something with value
    },
    error: (error) => {
        //Do something with error
    },
    complete: () => {
            //Do something with error
    }
}

// We can tie a subscription to a stream of data 
// and the above three functions react to what the user is doing 

// We need to unsubscribe from a subscription when a component doesn't need it anymore
// Usually happens with a componentDidUnmount lifecycle

