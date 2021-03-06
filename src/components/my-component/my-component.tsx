import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: false
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        <p>
          Hello, World! I'm {this.first} {this.last}
        </p>
        <inner-shadow />
        <inner-noshadow />
      </div>
    );
  }
}
