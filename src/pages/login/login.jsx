import React,{Component} from 'react'
import { Form, Icon, Input, Button} from 'antd';
import Logo from './images/logo.png'
import './login.less'

const Item=Form.Item;

export default class Login extends Component {

    render(){
        return (
            <div className="login">
                <header className="login-header">
                   <img src={Logo} alt="Logo"/>
                   <p>React项目: 后台管理系统</p>
                </header>
                <section className="login-content">
                   <h2>用户登录</h2>
                   <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                           <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />
                        </Item>
                        <Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Item>
                   </Form>
                </section>
            </div>
        )
    }
}