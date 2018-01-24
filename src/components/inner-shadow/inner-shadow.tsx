import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'inner-shadow',
  styleUrl: 'inner-shadow.scss',
  shadow: true
})
export class InnerShadow {
  render() {
    return <div>An inner component with shadow!</div>;
  }
}
