# NrwlTodos

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

# Aim

Building two Angular Applications Together With Nx

# project

multiple app shared assets and angular components using Nx

# Technologies used

Angular,node,nx

# instruction

- To run first app nx serve landing-page
- To run second app nx serve todos-app

# approach

1.  created a work space using nx.
2.  Add the capability to create Angular applications.
3.  create the ui library .
4.  created assets and component in UI library
5.  used nx dep-graph to view the diagram of dependencies in the workspace

## reference

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Generate an application

Run `ng g @nrwl/angular:app todos-app` to generate an application.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

## Development server

Run `ng serve todos-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
