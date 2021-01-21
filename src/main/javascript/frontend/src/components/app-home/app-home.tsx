import { Component, h, Prop } from '@stencil/core';
import { Guitar } from "./Guitar";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @Prop() guitars:[Guitar] = [new Guitar("Jackson", "Warrior")]

  componentDidLoad() {
    fetch('http://localhost:8080/guitars')
    .then(response => response.json())
    .then(data => this.guitars = data);
  }

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <h4>Awesome Great Guitars</h4>

        {this.guitars.map(guitar => <p>Guitar: {guitar.brand} {guitar.model}</p>)}

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
