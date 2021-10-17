# A New Approach to Angular Development

This project proposes a new approach to developing Angular applications. In the conventional approach components forward navigation requests and events directly to the target components and services. In the proposed approach navigation requests and events are forwarded to a broker component which in turn forwards the requests to the target components/services. The broker component ensures that the state transitions are valid. The resulting Angular application is therefore fully state machine conformant and robust. The approach is demonstrated in a simple SPA with [thee views](https://mapteb.github.io/new-approach-to-angular-development) - Home, Products List and Product Details.

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
  UNKNOWN       -> | onload   -> | processOnload()   -> | onload_success   -> | HOMEVIEW
  HOMEVIEW      -> | products -> | processProducts() -> | products_success -> | PRODUCTSVIEW
  PRODUCTSVIEW  -> | product  -> | processProduct()  -> | product_success  -> | PODUCTVIEW
  PODUCTVIEW    -> | products -> | processProducts() -> | products_success -> | PRODUCTSVIEW

## Configurations:

The events, application states are configured using Typescript enum variables like: [app-events.enum.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-transitions-config/app-events.enum.ts) and [app-states.enum.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-transitions-config/app-states.enum.ts) and the process methods identified in the state transitions table above are configured in TypeScript const variables like:[state-transions.ts](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-transitions-config/state-transitions.ts)

## State Manager Component

The application components forward their events (along with a payload) to a navigation broker component. The [State Manager Component](https://github.com/mapteb/new-approach-to-angular-development/blob/main/src/app/state-manager/state-manager.component.ts) acts like a navigation broker that forwards the events to the target components and services. It uses the above Typescipt configurations to ensure that the state transitions are valid. Optionally, the state manager component can also handle athentication, authorization, pre-fetching data, etc.  

## Demo

A demo of this project can be viewed [here](https://mapteb.github.io/new-approach-to-angular-development) where all the four state transitions listed above can be tested.

## Benefits

1. The proposed approach enables creating Angular applications that are fully state machine conformant and therefore robust.
2. The architecture of the approach enables producing Angular code that follows clean code guidelines.
3. The approach provides a template which makes it easy to develop Angular applications.
