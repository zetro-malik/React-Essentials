# React Notes

React is a JavaScript library for building user interfaces.

- React is used to build single-page applications.
- React allows us to create reusable UI components.

---

## Virtual DOM

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating before making the changes in the browser DOM. React only changes what needs to be changed!

---

## Rendering in React

React renders HTML to the web page by using a function called `createRoot()` and its method `render()`. 

The `createRoot()` function takes one argument, an HTML element. Its purpose is to define the HTML element where a React component should be displayed. The `render()` method is then called to define the React component that should be rendered.

---

## What is JSX?

JSX stands for JavaScript XML.

- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()` and/or `appendChild()` methods.
- JSX is an extension of the JavaScript language based on ES6 and is translated into regular JavaScript at runtime.

With JSX, you can write expressions inside curly braces `{}`. For example:
x
```jsx
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```
---

# React Components

Components are like functions that return HTML elements. They are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components. In this tutorial, we will concentrate on Function components.

## Class Component

A class component must include the `extends React.Component` statement. This statement creates an inheritance to `React.Component` and gives your component access to `React.Component`'s functions.

## Function Component

Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML and behaves much the same way as a Class component. However, Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

Note that the component's filename must start with an uppercase character.

# React Props

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes.

# React Events

Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover, etc.

React events are written in camelCase syntax.

To pass an argument to an event handler, use an arrow function because it executes the function on page load without interaction.

# React Lists

In React, you will render lists with some type of loop.

The JavaScript `map()` array method is generally the preferred method.


# Form Submission in React

In form submission, this will work as normal, the form will submit and the page will refresh. But this is generally not what we want to happen in React. We want to prevent this default behavior and let React control the form. This is used: event.preventDefault();

# Add React Router

We wrap our content first with <BrowserRouter>. Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one. <Route>s can be nested. The first <Route> has a path of / and renders the Layout component.

# Using memo in React

Using memo will cause React to skip rendering a component if its props have not changed.

# Styling React Using CSS

There are different ways to style React components:

- Inline Styling
- CSS Stylesheets
- CSS Modules

1. Create a new file called "App.css" and insert some CSS code in it.
2. Import the stylesheet in your application: import './App.css';

CSS Modules

1. Create the CSS module with the .module.css extension, for example, my-style.module.css.
2. Use it like this: import styles from './my-style.module.css';

---

## What is a Hook?

Hooks allow us to "hook" into React features such as state and lifecycle methods. Here we are using the useState Hook to keep track of the application state.

State generally refers to application data or properties that need to be tracked.

There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

### Initialize useState

We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

- The current state.
- A function that updates the state.

### What Can State Hold

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.

## React useEffect Hooks

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:   //Runs on every render
2. An empty array:   //Runs only on the first render
3. Props or state values: //Runs on the first render //And any time any dependency value changes

## React useContext Hook

React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone. State should be held by the highest parent component in the stack that requires access to the state.

## React useRef Hook

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

### 1- Does Not Cause Re-renders

If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).

### 2- Accessing DOM Elements

In general, we want to let React handle all DOM manipulation.

But there are some instances where useRef can be used without causing issues.

In React, we can add a ref attribute to an element to access it directly in the DOM.

### Tracking State Changes

The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.

## React useReducer Hook

The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

useReducer(<reducer>, <initialState>)

The useReducer Hook returns the current state and a dispatch method.


# Understanding State in React.js and Introducing Redux

## What is State in React.js?

In React.js, "state" refers to a built-in object used to store and manage data or information specific to a component. Understanding how to use state is fundamental to building dynamic and interactive user interfaces in React.

## Why Do We Need Redux?

Redux is a state management library that plays a crucial role in large-scale React applications. It allows you to centralize your application's state, making it more manageable, predictable, and traceable. Redux simplifies the process of handling complex data flows, making your app easier to maintain and debug.

## Getting Started with Redux

If you're interested in implementing Redux in your React application, here are the basic steps to get started:

### Step 1 – Install Redux and Redux Toolkit Package

Begin by installing the Redux library and Redux Toolkit package in your React project. These packages provide essential tools for setting up and managing your application's state.

### Step 2 – Create a Global Store

Next, create a global store using Redux. The store serves as the centralized repository for your application's data and state. All components can access and modify the state stored in the global store.

### Step 3 – Providing the Store to the Entire App

To make the global store accessible to your entire React application, you need to provide it to the component tree. This typically involves using the `Provider` component provided by Redux.

### Step 4 – Creating a Slice

Slices are portions of your application's state that you can define and manage separately. Create slices to organize and manage different parts of your state more effectively.

### Step 5 – Adding Slice Reducers to the Store

Reducers are functions that specify how the state should change in response to actions. Add the slice reducers to the global store to handle state updates effectively.

### Step 6 – Implementing useSelector and useDispatch

In your React components, utilize the `useSelector` and `useDispatch` hooks to read and dispatch actions to modify the global state. These hooks make it easy to connect your components to the Redux store.

By following these steps, you'll be well on your way to effectively managing and utilizing state in your React applications with Redux.

Feel free to explore the documentation and resources provided by Redux for more in-depth guidance on implementing Redux in your projects.

