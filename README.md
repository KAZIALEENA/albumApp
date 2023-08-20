# Albums Management App

The Albums Management App is a simple React application that allows users to manage a list of albums. It provides features such as viewing existing albums, adding new albums, editing album information, and deleting albums. The app uses React Bootstrap for modal dialogs and styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)


## Installation

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system.

## usage

cd albums-app

## project dependencies:

npm install

## componenets

1. App
The App component serves as the entry point of the application. It renders the Albums component to display the list of albums.

2. Albums
The Albums component manages the state of albums and renders the list of albums. It also handles actions such as adding, editing, and deleting albums. The component uses the AlbumItems component to render individual album items and the ModalDialog component to provide a user-friendly way to add new albums.

3. AlbumItems
The AlbumItems component is responsible for rendering individual album items. It provides options to edit the album details and delete the album.

4. ModalDialog
The ModalDialog component displays a modal dialog that allows users to input details for adding a new album. It triggers the onAddAlbum function when the "Add" button is clicked.

## contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open issues or pull requests on the GitHub repository.



1. Clone the repository:

   ```sh
   git clone https://github.com/KAZIALEENA/albumApp.git
