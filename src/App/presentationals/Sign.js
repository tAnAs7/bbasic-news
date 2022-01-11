import { Link } from "react-router-dom"
import { BreakLine } from "../styles/bodyStyles"
import { Button, Input, Panel, Password, SignInForm, Switch } from "../styles/signAreaStyles"

function SignIn() {
    return <>
        <SignInForm id='login'>
            <Input placeholder="Tên đăng nhập" autoFocus required/>
            <Password type='password' placeholder="Mật khẩu" required/>
            <Button type='button' value="Đăng nhập"/>
        </SignInForm>
        <Link to='/'>Quên mật khẩu?</Link>
        <BreakLine/>
        <Switch>Tạo tài khoản mới</Switch>
    </>
	}

const SignUp = () => {
    <></>
} //đăng kí

export function LogInPanel () {
    return(
        <Panel>
            <SignIn />
        </Panel>
    )
}