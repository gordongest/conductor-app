import React, { Component, useState } from 'react';

class ClassExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe'
    };
  };

  render() {

    const { name } = this.state;

    return (
      <ChildComponent name={name} />
    )
  };
};


const HooksExample = () => {

  const [ name, setName ] = useState('John Doe')

  return (
    <ChildComponent name={name} />
  )
}