import React, { Component } from 'react'

export default class From extends Component {

  dataName = [];

  getData = () => {
    let data = {}
    for (let index = 0; index < this.dataName.length; index++) {
      let value = this["myRef" + this.dataName[index]].current.state.value
      data[this.dataName[index]] = value
    }
    return data
  }

  render() {
    let children = this.props.children;
    if (!children) {
      return null;
    }
    let Childrens = [];
    let data = this.props.data;
    if (children.length > 1) {
      for (let i = 0; i < children.length; i++) {
        Childrens.push({ ...children[i] });
      }
    } else {
      Childrens.push({ ...children });
    }
    return (
      <>
        {Childrens.map((item, index) => {
          if (data[item.key] === undefined) {
            return item
          }
          this.dataName.push(item.key);
          item.ref = this["myRef" + item.key] = React.createRef();
          item.props = Object.assign({ [item.key]: data[item.key], key: item.key }, item.props);
          return item
        })}
      </>
    )
  }
}