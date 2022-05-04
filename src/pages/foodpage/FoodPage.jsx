import Food from "../../components/food/Food.jsx";
import FoodHeader from "../../components/foodheader/FoodHeader.jsx";
import "./foodpage.css";

export default function FoodPage() {
    return (
        <div className="food"> 
            <FoodHeader />
            <Food />
        </div>
    )
}