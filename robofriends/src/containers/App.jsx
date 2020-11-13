import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((robots) => setTimeout(() => this.setState({ robots }), 500));
  }

  onSearchChange = ({ target: { value: searchfield } }) => {
    this.setState({ searchfield });
  };

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className="tc">
        {!robots.length ? (
          <h1 className="f1">Loading...</h1>
        ) : (
          <>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              {filteredRobots.length ? (
                <ErrorBoundary>
                  <CardList robots={filteredRobots} />
                </ErrorBoundary>
              ) : (
                <h2 className="f2">Not found</h2>
              )}
            </Scroll>
          </>
        )}
      </div>
    );
  }
}

export default App;
