import header1 from "../data/header1"

function CustomerService1() {

    const data = header1.map(element => {
        return (
            <div className="d-flex">
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
export default CustomerService1