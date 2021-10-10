# A New Approach to ngular Development

This project proposes a new apprpoach to developing Angular applications. In the conventional approach components forward navigation requests and events directly to the target components and services. In the proposed approach navigation requests and events are forwarded to a broker component which in turn forwards the requests to the target components/services. The broker component ensures that the state transitions are valid. The resulting Angular application is therefore fully state machine conformant and robust. The approach is demonstrated in a simple SPA with three views - Home, Products List and Product Details.

The approach uses the following steps:

1. List the state transitions for the required application
2. Configure the states, events and processes identified in the state transitions in Typescript enum and const variables
3. Generate a starter app using Angular cli
4. Add the components and sevices needed using Angular cli
5. Create a broker component that implements the listed state transitions
6. Forward the events raised in each application component to the broker component

## State Transitions:

A simple SPA with [thee views](https://mapteb.github.io/new-approach-to-angular-development) is considered to illustrate this approach. The Home page has a Products button, the Products List page has list of products that are hyperlinked to a corresponding Product Details page. The product Details page has a Back to Products button. The state transitions for this application can be written as:
   
<strong>Initial State</strong> | <strong>Pre-event</strong> | <strong>Processor</strong> | <strong>Post-event</strong>     | <strong>Final State</strong>
----------------- | ------------------ |------------------ | ------------------ | ------------------ 
  UNKNOWN       -> | onload   -> | processOnload()   -> | onload_success   -> | HOMEVIEW
  HOMEVIEW      -> | products -> | processProducts() -> | products_success -> | PRODUCTSVIEW
  PRODUCTSVIEW  -> | product  -> | processProduct()  -> | product_success  -> | PODUCTVIEW
  PODUCTVIEW    -> | products -> | processProducts() -> | products_success -> | PRODUCTSVIEW

## Configurations:

The events, application states and process methods identified in the state transitions table above are configured in TypeScript const variables like:[state-transions.ts](https://github.com/mapteb/angular-a-development-pattern/blob/main/src/app/state-transitions/state-transitions.ts)

## State Manager Component

The application components forward their events (along with a payload) to a navigation broker component. The State Manager Component acts like a navigation broker component that uses the above Typescipt const configurations to ensure that the state transitions are valid. Optionally, the state manager component can handle athentication, authorization, pre-fetching data, etc.  

## Demo

A demo of this project can be viewed [here](https://mapteb.github.io/angular-a-development-pattern) where all the state transitions listed above can be tested.

## Benefits

1. The resulting Angular application is fully state machine conformant and therefore robust.
2. The architecture of the approach enables producing code that follows clean code guidelines.
