
import RemainingBudgetCard from "../Components/RemainingBudgetCard";
import ItemCard from "../Components/ItemCard";
import RecentTransactions from "../Components/RecentTransactions";
// const [periodType, setPeriodType] = useState<'day' | 'week' | 'month'>('month')
// const [anchor, setAnchor] = useState<Date>(new Date())
const HomePage = () => {
  return ( 
    <div className="flex flex-col items-center mt-5 text-text">
      <div id="top">
        <div id="header" >
          <h1 className="text-xl mb-5 ">Spending Tracker</h1>
        </div>

        <RemainingBudgetCard/>
      </div>

      <div id="middle" className="pb-20">

        <div className="grid grid-cols-2 gap-3 w-90">
          <ItemCard category="Food" amount={43250}/>
          <ItemCard category="Transport" amount={15600}/>
          <ItemCard category="Shopping" amount={28975}/>
          <ItemCard category="Bills" amount={28975}/>
        </div>
        <div className="flex justify-between mb-2 mt-4">
                <h3 className="font-bold">Recent Transactions</h3>
                <a href="/viewAll" className="text-accent text-sm">View All</a>
            </div>
        <div>
          <RecentTransactions title="Metro Ride" amount={27500}/>
          <RecentTransactions title="Grocery Market" amount={68400}/>
          <RecentTransactions title="Coffee Shop" amount={12500}/>
          <RecentTransactions title="Electricity Bill" amount={92000}/>
       
        </div>

      </div>

    </div>
   );
}
 
export default HomePage;


