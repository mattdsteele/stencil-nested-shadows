import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'inner-component',
  styleUrl: 'inner-component.scss',
  shadow: true
})
export class InnerComponent {
  render() {
    return <div>An inner component!</div>;
  }
}
