// import React from "react";

// const Searchbar = () => {
//   return <div className="Searchbar">Searchbar</div>;
// };

// export default Searchbar;
/* import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    const { query, value } = event.currentTarget;
    this.setState({
      query: value,
    });
  };
  handleSubmit = (event) => {
    const { props, state } = this;
    event.preventDefault();
    props.onSubmit(state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="button-label"></span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}
 */
import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <>
        {" "}
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="button-label"></span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}
