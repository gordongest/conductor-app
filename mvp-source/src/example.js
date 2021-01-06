import React, { Component, useState } from 'react';




class ClassExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Adam'
    }
  }

  render() {

    return (
      <ChildComponent name={this.state.name} />
    )
  }
}




const HooksExample = () => {

  const [name, setName] = useState('Adam')

  return (
    <ChildComponent name={name} />
  )
}