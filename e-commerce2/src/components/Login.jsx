import { Outlet } from "react-bootstrap-icons"
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="m-4 ">Login page</h1>

            <form>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="UserName">Name</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="First Name or Last Name whatever" />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>


                <Link to={"/home"}>
                    <button type="submit" class=" col-8 btn btn-primary ">Sign in</button>
                </Link>

            </form>
            <Outlet />
        </div>
    )
}