import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('App Layout materials', () => {
    it('renders without crashing', () => {
      act( () => {
        render(<App/>, container);
      });
    });
})
