import { Outlet } from "react-bootstrap-icons"
export default function Login() {
    return (
        <div>
            <h1>it's login page</h1>
            <form>
                <label for="email">Email</label>
                <input name="email" type="email"></input>
                <br />
                <label for="password">password</label>
                <input name="password" type="password"></input>
                <br />
                <button>
                    sign in
                </button>
            </form>
            <Outlet />
        </div>
    )
}