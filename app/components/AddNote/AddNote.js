import React from 'react';


class AddNote extends React.Component {
  state = {
    note: ''
  }

  onChange = (e) => {
    this.setState({note: e.target.value});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Add new note"
          onChange={this.onChange}
          value={this.state.note}
        />
      </div>
    );
  }
}

export default AddNote;