import React from 'react';
import {Link} from 'react-router';
import {Breadcrumb, Row, Col, Form, Input, Button, Checkbox } from 'antd';
import Pannel from '../../components/Pannel/'
const FormItem = Form.Item;

class Index extends React.Component {
  constructor(props) {
    super(props);

  }
  handleChange() {
    console.log(1)
  }
  handleSubmit() {
    alert(1)
  }

  render () {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    }
    const formTailLayout = {
      wrapperCol: { span: 8, offset: 4 },
    }
    const loginBd = (
      <div className="bd">
        <Form layout={'horizontal'} onSubmit={this.handleSubmit.bind(this)}>
          <FormItem
            label="用户名" {...formItemLayout}
            validateStatus={passwordError ? 'error' : ''}>
            <Input />
          </FormItem>
          <FormItem
            label="密码" {...formItemLayout} >
            <Input type="password" />
          </FormItem>
          <FormItem {...formTailLayout}>
            <Checkbox
              value={'false'}
              onChange={this.handleChange.bind(this)}
            >
              保存密码
            </Checkbox>
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    )
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
          <Breadcrumb.Item>登录</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt20">
          <Row>
            <Col span={17}>
              <Pannel hd={'用户登录'} bd={loginBd}></Pannel>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Index;
