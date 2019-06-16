import React,{Component} from 'react'
import { Form, Icon, Input, Button} from 'antd';
import Logo from './images/logo.png'
import './login.less'


const Item=Form.Item;




class Login extends Component {

    handleSubmit=(event)=>{
        //阻止表单提交
        event.preventDefault()
         //获取表单输入的值
        // const userName=this.props.form.getFieldValue('userName')
        // const passWord=this.props.form.getFieldValue('passWord')
        // const values=this.props.form.getFieldsValue()
        // console.log(userName,passWord,values)

        //点击提交统一进行验证
        this.props.form.validateFields ((err,values)=>{
             if(!err){
                 console.log('发送Ajax请求')
             }
        })

    }

    validatorpwd=(rule, value, callback)=>{
        if(!value){
            callback('请输入你的密码！')
        }else if(value.length<4){
            callback('密码长达不能小于4')
        }else if(value.length > 12){
            callback('密码长度不能大于12')
        }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
            callback('密码格式为字母数字下划线')
        }else{
            callback()
        }
    }
    
    render(){
        const  {getFieldDecorator}=this.props.form
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
                            {
                                getFieldDecorator('userName',{
                                    rules: [
                                        { required: true, message: '请输入你的用户名!' },
                                        {min:4,message:'用户名不能小于4'},
                                        {max:12,message:'用户名长度不能超过12'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message:'密码只能为英文数字下划线'}
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                          
                        </Item>
                        <Item>
                           {
                               getFieldDecorator('passWord',{
                                        rules:[{validator:this.validatorpwd}]
                               })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                               )
                           }
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

const wrapLogin=Form.create()(Login)
export default wrapLogin