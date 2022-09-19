import useLoginStatus from "../../Hooks/useLoginStatus";
import ProductSlide from "../SwiperSliders/ProductSlide/ProductSlide";

const ShoppingCart = () => {
    useLoginStatus();

    const cartFetch = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null)
            user = JSON.parse(user);
        // Function that fetches data from database about the users cart
    }
    
    return (
        <>
            <div className="container w-50 mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <ProductSlide/> {/* Substitute with cart slides */}
                    </div>
                    <div className="col-md-4">
                        <ProductSlide/>
                    </div>
                    <div className="col-md-4">
                        <ProductSlide/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;

