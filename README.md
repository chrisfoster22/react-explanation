# Basic React explanation

## The purpose of React

The purpose of React is to streamline the development of modern user interfaces. To accomplish this streamlining it utilizes two concepts: **components** and **state**. It is a small library that is often enhanced with other libraries to enable more featuers, which means it's relatively easy to learn the basics compared to other libraries like Angular but there can be a learning curve depending upon which libraries a developer or company uses with a React application.

## Key concepts

### Components

A react app is organized into **components**. A component is a small piece of a UI that is encompassed within a JavaScript function. A class can also be used but the React ecosystem is moving away from classes, so I will only show **functional components**.

The easiest way to imagine a component is to take a small piece of a UI that you want to code, such as a header, footer, or button. For a header I'm going to create a `Header` component. Note that all components will be capitalized.

```
function Header () {
  return (
    <header>
      <h1>Welcome to my React app!</h1>
    </header>
  );
}
```

Notice that this function contains both JavaScript and HTML. This is referred to as **JSX** and it's only used in React. **The return statement of a component will always be a JSX element.

You can also add JavaScript to your component. Here's a component that displays a button that will display an alert:

```
function AlertButton () {
  return (
    <button onClick={() => alert("I was clicked!")}>Click me!</button>
  );
}
```

A couple of things to note here:
- In order to use JavaScript code within your return function you must surround it with a single curly brace: `onClick={() => alert("I was clicked!")}`
- `button`s and all other components and JSX elements have event listeners attached to them. This is one of the most important aspects of components that allows us to easily build interactive web apps. You can attach any event to any component. [Learn more here](https://reactjs.org/docs/handling-events.html).

### Props

`props` are used to make components reusable and are another primary feature of components. They are arguments that are passed to components in order to differentiate components in a UI. For instance, if I wanted two have two `AlertButton`s that show different alerts I would use `props` to make that happen:

```
function AlertButton (props) {
  return (
    <button onClick={() => alert(props.message)}>Click me!</button>
  );
}
```

`props` is an object and is always the first argument passed into a component. Here's how I'd use them to show two different messages:

```
function App () {
  return (
    <div>
      <AlertButton message="Button 1 clicked" />
      <AlertButton message="Button 2 clicked" />
    </div>
  );
}
```

A couple things to note here:
- In order to use my two components I need to have a `parent` component, in this case `App`.
- There can only be a single top-level JSX element returned from a component. I wrapped the two buttons in a `div` in order to make this work. 

(Learn more about props here)[https://reactjs.org/docs/components-and-props.html]
