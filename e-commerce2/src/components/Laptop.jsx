export default function Laptop() {
    return (
        <div className="laptop">
            <div className="LaptopMain">
                <img className="LaptopImg" src="/img/pexels-nao-triponez-129208.png" alt="" />
                <div className="LaptopSection">
                    <button className="btn bg-warning m-3">New Laptop</button>
                    <h1 className="text-primary m-1">Sale up 50% off</h1>
                    <h5 className="text-white m-1">12 inch Hd display</h5>
                    <button className="btn bg-warning m-3">Shop now</button>
                </div>
            </div>
        </div>
    )
}