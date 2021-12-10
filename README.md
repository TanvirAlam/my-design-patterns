## This my collections and understanding of all Design Patterns

- # React

  - Stateless Components:
  - State reducer:
  - Conditional Rendering:
  - Creational

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
    - Basically, we have `Wrapper` and `App` passes props (`render`) to Wrapper componenent with function that has the entire presentation layer. this show how we can do seperation of concern, seperate the logic from presentation.

  - Props Getters:
  - Controlled Components:
  - Custom Hook:
  - Higher-Order Components:
  - Context API:
  - Presentational and Container Components:
  - Compound components:
  - Flux:
  - Redux:
  - Dependency injection:

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
