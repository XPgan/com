import React, { Component } from 'react'

export default class From extends Component {

  dataName = [];

  getData = () => {
    let data = {};
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
    this.dataName = []; // 防止多次渲染 重复push
    return (
      <>
        {Childrens.map((Item, index) => {
          if (data[Item.key] === undefined) {
            Item.key = index
            return Item
          }
          this.dataName.push(Item.key);
          Item.ref = this["myRef" + Item.key] = React.createRef();
          Item.props = Object.assign({ [Item.key]: data[Item.key], key: Item.key }, Item.props);
          return Item
        })}
      </>
    )
  }
}
