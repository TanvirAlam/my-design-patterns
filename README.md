## This my collections and understanding of all Design Patterns

- # React

- ## State reducer

  - The most `advanced pattern` in terms of inversion of control.
  - It gives an advanced way for the user to `change` how your component operates internally.
  - The code is similar to Custom Hook Pattern, but in addition the user defines a reducer which is passed to the hook.
  - This `reducer` will overload any internal action of your component.
  - In this example we have assocated the` State reducer pattern` and the `Custom hook pattern`
  - but you could also use it with the `Compound components pattern` and pass the reducer directly to the main component Counter.

  - Simple example: `/React-env/state-reducer`

  - Give more controle: In the most complicated cases, using state `reducers` is the best way to leave control to the user.
  - All your internal component’s actions are now accessible from the outside and can be overridden.

    - ![/React-env/state-reducer/images/img.png](/React-env/state-reducer/images/img.png)
    - ![/React-env/state-reducer/images/img_1.png](/React-env/state-reducer/images/img_1.png)

  - Through these 5 advanced React patterns, we have seen different ways to take advantage of the concept of “inversion of control”.
  - They give you a powerful way to create flexible and adaptable Components.
  - ![/React-env/state-reducer/images/img_2.png](/React-env/state-reducer/images/img_2.png)

- ## Render Props

  - Its is just `props` with functions, the main purpose is to update props of sibling components

    ```
    <Route
      path='/about'
      render={(props) => (
        <About {...props} isLoad={true} />
      )}
    />
    ```

    - Simple example: `/React-env/render-props`
    - Basically, we have `Wrapper` and `App` passes props (`render`) to Wrapper componenent with function that has the entire presentation layer.
    - This show how we can do seperation of concern, seperate the logic from presentation.

- ## Higher-Order Components

  - Components take one or more components as arguments, and return a new upgraded component
  - We don’t modify or mutate components. We create new ones.
  - A HOC is used to compose components for code reuse.
  - A HOC is a pure function. It has no side effects, returning only a new component.

    ```
    import React from 'react';
    ********* Take in a component as argument WrappedComponent **********
    const higherOrderComponent = (WrappedComponent) => {
      ****** And return another component *******
      class HOC extends React.Component {
        render() {
          return <WrappedComponent />;
        }
      }
      return HOC;
    };
    ```

  - Simple example: `/React-env/high-order-components`

- ## Conditional Rendering:
- ## Creational
- ## Props Getters:
- ## Controlled Components:
- ## Custom Hook:
- ## Stateless Components:
- ## Context API:
- ## Presentational and Container Components:
- ## Compound components:
- ## Flux:
- ## Redux:
- ## Dependency injection:

- # Vue

  - Direct parent-child communication:
  - Cross-component communication:
  - Handling Loading State:
  - Cheap Static Components with “v-once”:
  - Recursive Components:
  - Inline Templates:
  - Dynamic Directive Arguments:
  - Event & Key Modifiers:
  - Dependency Injection (Provide/Inject):

- # JavaScript

  - Singleton:
  - Factory:
  - Observer:
  - Command:
  - Constructor Design:
  - Prototype:
  - Module Design:

Reference:
<https://github.com/themithy/react-design-patterns>
<https://medium.com/js-dojo/7-vue-patterns-that-you-should-be-using-more-often-b13cde4d2ae6>
