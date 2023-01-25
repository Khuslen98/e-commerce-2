export default function Cart(props) {
    props.cart.map((element, index) => {
        return ( 
            <div key={index}>
                <h1>cart is here</h1>
                <img src={element.image} alt="" />
                {element.name}
    
    
            </div>
        )
        
    })
    
}