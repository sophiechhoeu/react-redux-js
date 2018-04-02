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
