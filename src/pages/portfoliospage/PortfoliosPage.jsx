import Portfolios from "../../components/portfolios/Portfolios";
import PortfoliosHeader from "../../components/portfoliosheader/PortfoliosHeader";
import "./portfoliospage.css";

export default function PortfoliosPage() {
    return (
        <div className="portfoliosPage"> 
            <PortfoliosHeader />
            <Portfolios />
        </div>
    )
}