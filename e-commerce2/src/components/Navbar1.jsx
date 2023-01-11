import navbarData from "../data/navBarRow1"


function Navbar1() {

    const data = navbarData.map(element => {
        return (
            <div className="d-flex mx-5 my-4 justify-content-center align-items">
                <div className="m-1">
                   <img src={element.imgURL} className="imgLogo1 mx-3 mt-4" />
                </div>
                <div className="input-group p-3">
                    <input type="text" className="form-control rounded-pill" placeholder="Search Any Things" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button class="btn btn-outline-secondary bg-warning p-3 rounded-pill btn-1" type="button">Button</button>
                        </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {data}
        </div>
    )
}
export default Navbar1