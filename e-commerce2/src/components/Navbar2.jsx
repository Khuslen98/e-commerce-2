import navbarData1 from "../data/navBarRow2"


function Navbar2() {

    const data = navbarData1.map(element => {
        return (
            <div className="d-flex mx-5 mt-5">
                <div className="m-1">
                    {element.Image}
                </div>
                <div className="m-1">
                    {element.paragraph}
                </div>
            </div>
        )
    })
    return (
        <div className="d-flex">
            {data}
        </div>
    )
}
export default Navbar2