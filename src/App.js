import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';



class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg" },
      { id: 2, value: 5, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg" },
      { id: 3, value: 1, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg"},
      { id: 4, value: 0, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg" },
      { id: 5, value: 5, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg" },
      { id: 6, value: 3, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg" },
      { id: 7, value: 4, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg" },
      { id: 8, value: 1, url: "https://s3.amazonaws.com/libapps/accounts/40322/images/larry200.jpg" }
    ]
  };

  // constructor method allows u to initialize state; this.state=this.props.smth

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });

  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });

  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value=0;
      return c;
    });
    this.setState({ counters });
  };

  render(){
  return (
    <React.Fragment>
    <NavBar
      totalCounters={this.state.counters.filter(c => c.value >0).length}
     />
    <main className="container text-center">
    <Counters
    counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      onDecrement={this.handleDecrement}
     />
    </main>
    </React.Fragment>
  );
}
}

export default App;




//
// import React from 'react';
// import NavBar from './components/navbar';
// import Counters from './components/counters';
// import './App.css';
//
//
//
// function App() {
//   return (
//     <React.Fragment>
//     <NavBar />
//     <main className="container">
//     <Counters />
//     </main>
//     </React.Fragment>
//   );
// }
//
// export default App;
