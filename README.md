# Notes

## Countdown App

- Never mutate state directly, instead use setState() function and have new instances of data

eg.
```js
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 20, 2018',
      newDeadline: ''
    }
  }

changeDeadline() {

this.setState({deadline: this.state.newDeadline});
}
```

- State - the pertinent data to an application. Each component has its local state as long as you declare add the constructor to a Component and declare its state object.

LifeCycle Methods - events in React components that trigger in cases such as rendering on or off the screen, or during state updates. One example is the `componentDidMount()` lifeCycle hook.
