# A New Approach to Angular Development

This project proposes a new approach to developing Angular applications. In the conventional approach components forward navigation requests and events directly to the target components and services. In the proposed approach navigation requests and events are forwarded to a broker component which in turn forwards the requests to the target components/services. The broker component ensures that the state transitions are valid. The resulting Angular application is therefore fully state machine conformant and robust. The approach is demonstrated in a simple SPA with [three views](https://mapteb.github.io/new-approach-to-angular-development/) - Home, Products List and Product Details.

The approach uses the following steps:

1. Identify the state transitions for the required application
2. Configure the states, events and processes identified in the state transitions in Typescript enum and const variables
3. Generate a starter app using Angular cli
4. Add the components and services needed using Angular cli
5. Create a broker component that implements the identified state transitions
6. Update the application components to forward the events to the broker component

## State Transitions:

A simple SPA with [thee views](https://mapteb.github.io/new-approach-to-angular-development) is considered to illustrate this approach. The Home page has a Products button, the Products List page has list of products that are hyperlinked to a corresponding Product Details page. The product Details page has a Back to Products button. The state transitions for this application can be written as:
   
<strong>Initial State</strong> | <strong>Pre-event</strong> | <strong>Processor</strong> | <strong>Post-event</strong>     | <strong>Final State</strong>
----------------- | ------------------ |------------------ | ------------------ | ------------------ 
  UNKNOWN       -> | home     -> | processHome()     -> | home_success     -> | HOMEVIEW
  HOMEVIEW      -> | products -> | processProducts() -> | products_success -> | PRODUCTSVIEW
  --
  PRODUCTSVIEW  -> | product  -> | processProduct()  -> | product_success  -> | PRODUCTVIEW
  PRODUCTSVIEW  -> | home     -> | processHome()     -> | home_success     -> | HOMEVIEW
  --
  PRODUCTVIEW   -> | products -> | processProducts() -> | products_success -> | PRODUCTSVIEW
  PRODUCTVIEW   -> | home     -> | processHome()     -> | home_success     -> | HOMEVIEW

## Configurations:

The events, application states are configured using Typescript enum variables like: [app-events.enum.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-transitions-config/app-events.enum.ts) and [app-states.enum.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-transitions-config/app-states.enum.ts) and the process methods identified in the state transitions table above are configured in TypeScript const variables like:[state-transions.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-transitions-config/state-transitions.ts)

## State Transitions Manager Component

The application components forward their events (along with a payload) to a navigation broker component. The [State Transitions Manager Component](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-transitions-manager/state-transitions-manager.component.ts) acts like a navigation broker that forwards the events to the target components and services. It uses the above Typescipt configurations to ensure that the state transitions are valid. Optionally, the state manager component can also handle authentication, authorization, pre-fetching data, etc.  

## Test Cases

### Unit Testing
For unit testing we can test each state transition in isolation. Interestingly, this can be done by testing the doTransition() method in the StateTransitionsManagerComponent for various initial states and pre-events and then asserting for the final paths. The file [test-state-transitions.spec.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/test/test-state-transitions.spec.ts) has the unit tests for all the state transitions. This project uses Jasmine for unit testing. The command "ng test" runs the tests.
### Integration Testing
This project uses Cypress to perform the integration tests. The file [cypress-integration-tests.spec.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/cypress/integration/cypress-integration-tests.spec.ts) has all the test cases. The command "ng e2e" runs all test cases.

## Demo

A demo of this project can be viewed [here](https://mapteb.github.io/new-approach-to-angular-development) where all the four state transitions listed above can be reviewed.

## Next Steps

Support for bookmarkable intermediary view states is discussed in the branch [bookmark-a-view-state](https://github.com/mapteb/new-approach-to-angular-development/tree/bookmark-a-view-state).

Support for modules and lazy loading are discussed in a different branch - [modules-lazy-loading](https://github.com/mapteb/new-approach-to-angular-development/tree/modules-lazy-loading)

## Benefits

1. The proposed approach enables creating Angular applications that are fully state machine conformant and therefore robust.
2. The approach does not allow state transitions by clicking the browser Back button or by modifying the URL. This feature would be of interest to security critical applications like financial/banking applications.
3. The architecture of the approach enables producing Angular code that follows clean code guidelines.
4. The approach provides a framework and a usage template which makes it easy to develop Angular applications.
5. The state transitions list simplifies writing unit tests and also serves as a check list for test cases.
