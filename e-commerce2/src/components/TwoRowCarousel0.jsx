import twoRowCarousel0 from "../data/twoRowCarousel0";

function TwoRowCarousel() {

    const data = twoRowCarousel0.map(element => {
        return (
            <div className="mx-5 mt-5 ">
                <div className="m-1 TwoRowHead d-flex justify-content-between">
                    <h2>Popular products</h2>
                    <ul className="d-flex">
                        <button className="m-2 p-2 rounded btn">Cameras</button>
                        <button className="m-2 p-2 rounded btn">Laptops</button>
                        <button className="m-2 p-2 rounded btn">Tablets</button>
                        <button className="m-2 p-2 rounded btn">Mouse</button>
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>{data}</div>
            
        </div>
    )
}
export default TwoRowCarousel