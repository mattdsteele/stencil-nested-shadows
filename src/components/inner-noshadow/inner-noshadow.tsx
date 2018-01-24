import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'inner-noshadow',
  styleUrl: 'inner-noshadow.scss',
  shadow: true
})
export class InnerNoshadow {
  render() {
    return <div>An inner component without shadow!</div>;
  }
}
