
import RemainingBudgetCard from "../Components/RemainingBudgetCard";
import ItemCard from "../Components/ItemCard";
import RecentTransactions from "../Components/RecentTransactions";
import Footer from "../Components/Footer";
// const [periodType, setPeriodType] = useState<'day' | 'week' | 'month'>('month')
// const [anchor, setAnchor] = useState<Date>(new Date())
const HomePage = () => {
  return ( 
    <div className="flex flex-col items-center mt-5 text-text ">
    <div id="header" >
      <h1 className="text-xl mb-5 ">Spending Tracker</h1>
    </div>

    <RemainingBudgetCard/>

    <div className="grid grid-cols-2 gap-3 w-90">
     <ItemCard category="Food" amount={43250}/>
     <ItemCard category="Transport" amount={15600}/>
     <ItemCard category="Shopping" amount={28975}/>
     <ItemCard category="Bills" amount={28975}/>
    </div>

    <div>
    <RecentTransactions title="Metro Ride" amount={27500}/>
    </div>


    <div>
    <Footer />

    </div>
    </div>
   );
}
 
export default HomePage;


