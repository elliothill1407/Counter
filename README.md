# I'm the Count(er)

A simple **React** counter app built with **Next.js** that lets you increment, decrement, and reset a number. The interface is clean and minimal, featuring buttons aligned horizontally and styled with CSS modules.

## Features

- Increment the count by 1 using the **+1** button
- Decrement the count by 1 using the **-1** button
- Reset the count to zero with the **Reset** button (only visible when count is not zero)
- Responsive and accessible buttons styled with CSS modules
- Buttons are aligned horizontally using flexbox

## What I Learned

Building this app helped me practice and understand several core frontend and React concepts:

- **React State Management**: Using `useState` hook to manage the counter value and update the UI on state changes.
- **Component Reusability**: Creating a reusable `CounterButton` component that accepts `onClick` handler and children for flexibility.
- **Conditional Rendering**: Rendering the reset button only if the count is not zero, using logical operators in JSX.
- **Event Handling**: Handling button clicks and passing functions as props to components.
- **CSS Modules**: Styling components with scoped CSS modules to avoid style conflicts.
- **Flexbox Layout**: Aligning buttons side-by-side with flexbox for a clean and responsive layout.
- **Code Organization**: Defining simple components inside the main component file for convenience.
- **Basic Next.js Structure**: Using pages and global CSS import in a Next.js app.

## Potential Improvements

- Add input fields to set a custom increment/decrement step
- Add keyboard accessibility (e.g., arrow keys to change count)
- Persist count state using localStorage
- Add tests with React Testing Library or Jest
- Explore separating components into their own files
- Animate count changes or button clicks

---

## How to Run This App

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) to view the app

---

Feel free to use this project as a starting point for learning React fundamentals and building more complex apps!