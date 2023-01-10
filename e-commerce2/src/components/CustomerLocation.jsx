import header1 from "../data/header1"


function CustomerService1() {

    const data1 = header1.map(element => {
        return (
            <div className="d-flex mx-5 my-4">
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
            {data1}
        </div>
    )
}
export default CustomerService1