# 安装

> copy 大法

# 使用

Form 下每个崽组件的key 对应 data 的 属性

获取data this.from && this.from.getData()

子组件取值  props.key && props[props.key].toString()

> example

1. react 

import React, { Component } from 'react'
import Form from './../com/from';
import EInput from '../com/Einput';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Form
          ref={e => this.from = e}
          data={{
            a: 1111
          }}
        >
          <EInput
            key="a"
          />
        </Form>
        <button
          onClick={() => {
            console.log(this.from && this.from.getData());
          }}
        >
          获取
        </button>
      </div>
    )
  }
}


export default class EInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.key && props[props.key].toString()
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}
        />
      </div>
    )
  }
}

2. 1. react-native


export default Tsts = () => {

  const [from, useFrom] = useState("")
  const [data, useData] = useState({ abc: 22, def: "333" })

  const get = () => {
    let _data = from && from.getData();
    console.log(_data);
  }
  
  return (
    <View style={styles.page}>
      <Text onPress={get}>获取</Text>
      <From
        ref={e => useFrom(e)}
        data={data}
      >
        <EInput
          title="做过什么"
          key="abc"
          placeholder="请输入"
        />
        <EInput
          title="做过什么"
          key="def"
        />
      </From>
    </View>
  );
}



export default class EInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.key && props[props.key].toString()
    };
  }

  render() {
    const { title, placeholder, maxLength } = this.props;
    return (
      <View style={styles.page}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.select}>
          <TextInput
            placeholder={placeholder}
            onChangeText={(value) => this.setState({ value })}
            style={styles.input}
            value={this.state.value}
            maxLength={maxLength}
          />
        </View>
      </View>
    )
  }
}