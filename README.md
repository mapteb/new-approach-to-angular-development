# A New Approach to Angular Development

Launch in [StackBlitz](https://stackblitz.com/edit/angular-ivy-mgfxis)

This branch has changes to add a new feature - Bookmark an Intermediary View State

The changes include:
1. Add a new state transition like:
   UNKNOWN       -> | products -> | processProducts() -> | products_success -> | PRODUCTSVIEW
2. Make corresponding changes to BaseComponent, LayoutComponent and state-transitions.ts

After these changes when the application is run (ng serve) the bookmarked URL http://localhost:4200/products can be acessed directly.

Modules and lazy loading are discussed in a different branch - [modules-lazy-loading](https://github.com/mapteb/new-approach-to-angular-development/tree/modules-lazy-loading)