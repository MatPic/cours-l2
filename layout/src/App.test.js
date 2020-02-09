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
        render(<App/>, container)
      })
    })
    
    it('return an image', () => {
      act( () => {
        render(<App/>, container)
        const img = document.querySelector("[data-testid = 'img']")
        expect(img).toBeInTheDocument
        expect(img.src).not.toMatch(" ")
      })
    })
    
    it('return the title', () => {
      act( () => {
        render(<App/>, container)
        const name = document.querySelector("[data-testid='name']");
        expect(name).toBeInTheDocument
        expect(name.textContent).not.toMatch(" ")
      })
    })
})