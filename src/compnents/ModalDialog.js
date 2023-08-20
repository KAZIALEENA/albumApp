import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalDialog({ buttonText, buttonName, onAddAlbum, albumId, userId, title }) {
  // States to manage input values and modal visibility
  const [userIdInput, setUserIdInput] = React.useState('');
  const [titleInput, setTitleInput] = React.useState('');
  const [idInput, setIdInput] = React.useState('');
  const [isShow, setIsShow] = React.useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <Button variant="success" onClick={toggleModal}>
        {buttonText || 'Open Modal'}
      </Button>
      {/* Modal component */}
      <Modal show={isShow} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* Input field for UserId */}
            <label>Enter UserId</label><br />
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
            /><br />
            {/* Input field for Album Title */}
            <label>Enter Album Title</label><br />
            <input
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            /><br />
            {/* Input field for Album id */}
            <label>Enter id</label><br />
            <input
              type="text"
              value={idInput}
              onChange={(e) => setIdInput(e.target.value)}
            /><br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal */}
          <Button variant="danger" onClick={toggleModal}>
            Close
          </Button>
          {/* Button to add the new album */}
          <Button
            variant="dark"
            onClick={() => {
              const newAlbum = {
                userId: userIdInput,
                title: titleInput,
                id: idInput,
              };
              onAddAlbum(newAlbum);
              toggleModal();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialog;
