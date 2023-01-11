import twoRowCarousel0 from "../data/twoRowCarousel0";
import { heart, cart4 } from "react-bootstrap";

function TwoRowCarousel() {

    const data = twoRowCarousel0.map(element => {
        return (
            <div className="mx-5 mt-5 ">
                <div className="m-1 TwoRowHead justify-content-between">
                    <h2>Popular products</h2>
                    <ul className="d-flex">
                        <button className="m-2 p-2 rounded">Cameras</button>
                        <button className="m-2 p-2 rounded">Laptops</button>
                        <button className="m-2 p-2 rounded">Tablets</button>
                        <button className="m-2 p-2 rounded">Mouse</button>
                    </ul>
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
export default TwoRowCarousel