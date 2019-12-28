import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class MergeRequestProps extends Component {
  constructor() {
    super();

    this.changeProperty = this.changeProperty.bind(this);
    this.allProps = [
      {
        name: 'Opened',
        prop: 'opened'
      },
      {
        name: 'Closed',
        prop: 'closed'
      }
    ]
  }

  changeProperty(propName, event) {
    const newValue = event.target.checked
    const props = {}
    this.allProps.forEach(item => {
      props[item.prop] = this.getValue(item.prop)
    })
    props[propName] = newValue
    this.props.onChange(props)
  }

  getValue(propName) {
    return this.props.properties[propName] === true;
  }

  render() {
    const content = this.allProps.map(item => {
      return <Form.Check inline 
          label={item.name} 
          key={item.prop} 
          type="checkbox" 
          onChange={this.changeProperty.bind(this, item.prop)}
          checked={this.getValue(item.prop)} />
    });

    return (
      <Form>
        {content}
      </Form>
    )
  }
}