// Birth of React //
    // jQuery allowed modifiable DOMs across browsers back in the day 
    // SPAs became popular + Google-developed AngularJS was intro’d in 2010, heralding advent of MVC model
    // Things with AngularJS got too complicated, leading Facebook to develop React. Google took notice and developed Angular (w/o JS ending) that aped its concepts

// React - About + Main Concepts //
    // Imperative programming directly changes DOM but makes it difficult to see relationships and edge cases 
    // React intro’d declarative approach where it uses a ‘blueprint’ (eg state) that determines what it should look like and handles DOM manipulation itself 
    // React intro’d component architecture. Components are JS functions that take props and returns JSX
    // Unidirectional data flow means that anytime we want something on our page to change, we need to change state in order to affect the VirtualDOM and therefore change the actual DOM. This restriction allows for easier debugging.
    // Frameworks are like entire kitchens with everything you need to cook (build). React only cares about the user interface (it’s a UI library) so there’s room to customize what tech stack you’d like to use.
    // Electron w/ React allows for desktop apps 
    // Angular and Vue use similar principles

// The Job of a React Dev
// Decide on component architecture 
// Decide on state and where it livers
// Decide what changes when state changes

// Babel and Webpack translate JS into a form browsers understand 
    // Babel allows us to take our src folder and make sure our JS files work in any browser that runs it. It’s like jQuery back in the day. 
    // Webpack is a module bundler that takes all our JS, our imports, etc. and bundles it together for production

// npm run build/yarn build create optimized, lightweight, minified versions of your code so that a browser can understand

// react-dom allows us to manipulate the DOM

// class components allows access to this.state and setState

// JSX brackets always contain JS expressions (eg. variables, functions, etc.)

// Lifecycle methods are called at specific points during the rendering of a React component 
    // render
    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount
    // Promises were introduced to avoid callback hell 
