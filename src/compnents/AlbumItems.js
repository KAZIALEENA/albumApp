import React, { Component } from 'react';
import '../App.css';

class AlbumItems extends Component {
  constructor(props) {
    super(props);

    // Initialize the component's state
    this.state = {
      isEditing: false,
      updatedTitle: '',
      updatedUserId: '',
    };
  }

  // Toggle the edit form display
  toggleEditForm = () => {
    const { title, userId } = this.props;

    // Update the state to toggle isEditing and copy the current values to state
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
      updatedTitle: title,
      updatedUserId: userId,
    }));
  };

  // Handle changes in the updated title
  handleTitleChange = event => {
    this.setState({ updatedTitle: event.target.value });
  };

  // Handle changes in the updated userId
  handleUserIdChange = event => {
    this.setState({ updatedUserId: event.target.value });
  };

  // Handle the update action
  handleUpdate = () => {
    const { id, onhandleEditAlbum } = this.props;
    const { updatedTitle, updatedUserId } = this.state;

    // Create an updated album object with new values
    const updatedAlbum = {
      id,
      title: updatedTitle,
      userId: updatedUserId,
    };

    // Call the parent component's function to update the album
    onhandleEditAlbum(updatedAlbum);

    // Reset the isEditing state and form values
    this.setState({ isEditing: false });
  };

  render() {
    const { title, userId, id, onhandleDelete } = this.props;
    const { isEditing, updatedTitle, updatedUserId } = this.state;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          {/* Display the album image */}
          <img src="https://live.staticflickr.com/466/32217737216_4e720b8496_z.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            {/* Conditionally render either the update form or the card content */}
            {isEditing ? (
              /* Render the update form */
              <div>
                <label>Title:</label>
                <input type="text" value={updatedTitle} onChange={this.handleTitleChange} />
                <br />
                <label>UserId:</label>
                <input type="text" value={updatedUserId} onChange={this.handleUserIdChange} />
                <br />
                <button className="btn btn-primary" onClick={this.handleUpdate}>Save</button>
                <button className="btn btn-secondary" onClick={this.toggleEditForm}>Cancel</button>
              </div>
            ) : (
              /* Render the card content */
              <>
                <h5 className="card-title">Title: {title}...</h5>
                <p className="card-text">UserId: {userId}</p>
                <div className="button-group">
                  {/* Button to toggle the edit form */}
                  <button className="btn btn-primary" onClick={this.toggleEditForm}>Update</button>
                  {/* Button to delete the album */}
                  <button className="btn btn-danger ml-2" onClick={() => onhandleDelete(id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumItems;
