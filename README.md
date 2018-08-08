# Bakery E-Commerce Application

## Screenshot

<p align="center">
  <img src="https://i.imgur.com/f5DOInP.png">
</p>

## Video

[![Video](https://i.imgur.com/e12Bhfj.png)](https://www.youtube.com/watch?v=c-8ugezqV-0)
## How to Run

- Clone from Github
- Cd to Project Folder
- Run npm install
- Run npm start

## Features

- Adding an item that is already in the cart, increases the quantity of the item by 1.
- Setting the quantity of an item in cart to 0 or null, removes it from cart.
- On successful transaction, going back to the shop resets the cart.
- User cannot checkout before adding at least one item to cart.

## Component Descriptions

- Cart Component
  - This component renders the Cart Sidebar on the right-hand side.
- Cart Item Component
  - This component renders each item that is placed in the Cart Sidebar.
- Home Component
  - This component renders both Shop and Cart.
- Item Component
  - This renders the items that are in the Shop.
- Shop Component
  - This renders the Shop on the E-commerce application.
- Success Component
  - This renders the Success Page after a transaction has been made.

## Container Descriptions

- Cart Container
  - This is the container for the Cart Component.
- Shop Container
  - This is the container for the Shop Component.
- Success Container
  - This is the container for the Success Component.

## Project Structure Reasoning

- As of right now, all files are grouped based on their type (components, actions, containers, and reducers). 
- This application is quite small scale, so I decided to leave it like this.
- In bigger scale projects, files should be grouped by their functionality (home, cart, shop, etc.).
  - Related files would be in those folders.

## Data Source Reasoning

- Images are stored in the public/images folder.
- In a production environment, images would come from the server.
- Inventory data is hard-coded. 
- In a production environment, data would be retrieved from server using AJAX.