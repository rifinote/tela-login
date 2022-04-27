
import './App.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);

    
    };

    return ( 
     
      //inicio do form
      <div id="form">
      <Form name = "normal_login" className = "login-form" initialValues = {
            {
                remember: true,
            }
        }
        
        onFinish = { onFinish } >
           <h1 id="title_form1">Faça seu Login</h1>
        <Form.Item name = "seuemail@email.com"
        rules = {
            [{
                required: true,
                message: 'Please input your Email!',
            }, ]
        } >
          



         <label for="userEmail" class="input-title2" required >E mail</label> 
        < Input prefix = { < UserOutlined className = "site-form-item-icon" / > }
        placeholder = "Username" / >
        </Form.Item> 
        <Form.Item name = "password"
        rules = {
            [{ required: true,
                message: 'Please input your Password!',
            }, ]
        } >

        <label for="userPsw" class="input-title2" required >Senha</label>
        <Input prefix = { < LockOutlined className = "site-form-item-icon" / > }
        type = "password"
        placeholder = "Password" /
        >
        </Form.Item>
        
        



        <Form.Item >
        <Form.Item name = "remember"
        valuePropName = "checked"
        noStyle >
        <Checkbox  > Remember me </Checkbox> </Form.Item >

        <a className = "login-form-forgot"
        href = "" >Forgot password </a> </Form.Item >





        <Form.Item>
        <Button type = "primary" htmlType = "submit"  className = "login-form-button" > Entrar</Button>
        <label id="or">ou</label>
         <Button type = "primary" htmlType = "submit" className = "login-form-button" >< a href = "" id='a'> Cadastre agora! </a> </Button>
        </Form.Item > 
        <br></br>
        </Form>
        </div>
    );
};

export default()=>< NormalLoginForm/>;