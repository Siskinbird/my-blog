import {useState} from "react";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut} from 'firebase/auth'
import {auth} from "../../firebase-config";


const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }
    const login = () => {
        try {
            const user = signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }
    const logout = async () => {
        await signOut(auth)
    }
    return (
        <div>
            <div className='register'>
                <form>
                    <h3>Register User</h3>
                    <input type='email'
                           placeholder='Email...'
                           onChange={(e) => {
                               setRegisterEmail(e.target.value)
                           }}/>

                    <input type='password'
                           placeholder='Password...'
                           onChange={(e) => {
                               setRegisterPassword(e.target.value)
                           }}/>

                    <button onClick={register}>Create User</button>
                </form>
            </div>

            <div className='login'>
                <form>
                    <h3>Log in</h3>
                    <input type='email'
                           placeholder='Email...'
                           onChange={(e) => {
                               setLoginEmail(e.target.value)
                           }}/>
                    <input type='password'
                           placeholder='Password...'
                           onChange={(e) => {
                               setLoginPassword(e.target.value)
                           }}/>

                    <button onClick={login}>Login</button>
                </form>
            </div>

            <h4>User Logged in: {user?.email} </h4>
            <button onClick={logout}>Sign out</button>

        </div>
    )
}
export default Login;