import './App.css';
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Signin from './components/Signin'
import ForgotPassword from './components/ForgotPassword'
import StaffManagement from './components/Dashboard-Components/StaffManagement'
import EditStaff from './components/Dashboard-Components/EditStaff'
import AddStaff from './components/Dashboard-Components/AddStaff';
import AddFoodCategory from './components/Dashboard-Components/AddFoodCategory'
import FoodCategory from './components/Dashboard-Components/FoodCategory'
import EditFoodCategory from './components/Dashboard-Components/EditFoodCategory'
import FoodItemMenu from './components/Dashboard-Components/FoodItemMenu'
import AddFoodItem from './components/Dashboard-Components/AddFoodItem'
import EditFoodItem from './components/Dashboard-Components/EditFoodItem'
import HeadChefDashboard from './components/HeadChefDashboard'
import HomePage from './components/Dashboard-Components/HomePage'
import Error from './components/Dashboard-Components/error'
import TableManagement from './components/Dashboard-Components/TableManagement'
import ConfigureTable from './components/Dashboard-Components/ConfigureTable';
import FoodOrder from './components/FoodOrder';
import EditTable from './components/Dashboard-Components/EditTable'
import LandingPage from './components/LandingPage'
import NewOrder from './components/Dashboard-Components/NewOrder';
import ServedOrders from './components/Dashboard-Components/ServedOrders';
import TotalOrders from './components/Dashboard-Components/TotalOrders';
import ViewOrder from './components/Dashboard-Components/ViewOrder';
import SalesAndBills from './components/Dashboard-Components/SalesAndBills';
import ViewBills from './components/Dashboard-Components/ViewBills';
import OrderTicket from './components/HeadChefDashboard/OrderTicket';
import OrderConfirm from './components/FoodOrder-Components/OrderConfirm';
import TableNotFound from './components/HomePage/TableNotFound';





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Registration />} />
        <Route path="menu/table/:id" element={<FoodOrder/>} />
        <Route path="tablenotfound" element={<TableNotFound />} />
        <Route path="orderconfirm/:id" element={<OrderConfirm />} />
        <Route path="dashboard" element={<Dashboard/>}>
          <Route path="neworders" element={<NewOrder />} />
          <Route path="servedorders" element={<ServedOrders />} />
          <Route path="totalorders" element={<TotalOrders />} />
          <Route path="employee" element={<StaffManagement />} />
          <Route path="editemployee/:id" element={<EditStaff />} />
          <Route path="addemployee" element={<AddStaff />} />
          <Route path="fooditemcategory" element={<FoodCategory />} />
          <Route path="addfoodcategory" element={<AddFoodCategory />} />
          <Route path="editfoodcategory/:id" element={<EditFoodCategory />} />
          <Route path="fooditemmenu" element={<FoodItemMenu />} />
          <Route path="addfooditem" element={<AddFoodItem />} />
          <Route path="editfooditem/:id" element={<EditFoodItem />} />
          <Route path="tablemanagement" element={<TableManagement />} />
          <Route path="configuretable" element={<ConfigureTable />} />
          <Route path="edittabledetails/:id" element={<EditTable />} />
          <Route path="vieworder/:id" element={<ViewOrder />} />
          <Route path="viewbill/:id" element={<ViewBills />} />
          <Route path="salesbills" element={<SalesAndBills />} />
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<Error />} />

        </Route>
        <Route path="*" element={<Error />} />

        <Route path="headchefdashboard" element={<HeadChefDashboard/>} >
          <Route path="" element={<OrderTicket />} />
        </Route>

        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/fgpassword" element={<ForgotPassword />} />
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
