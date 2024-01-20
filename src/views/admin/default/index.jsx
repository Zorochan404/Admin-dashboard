import MiniCalendar from "../../../components/calendar/MiniCalendar";
import PieChartCard from "./components/PieChartCard";
import { useSelector } from 'react-redux'
import { MdOutlinePendingActions } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { PiPackageLight } from "react-icons/pi";
import { BiCheckDouble } from "react-icons/bi";
import { GrDeliver } from "react-icons/gr";
import Axios from "axios";
import { useState, useEffect } from "react";

import { columnsDataCheck } from "./variables/columnsData";

import Widget from "../../../components/widget/Widget";
import CheckTable from "../default/components/CheckTable";
import tableDataCheck from "./variables/tableDataCheck.json";

const Dashboard = () => {
  const url = useSelector((state) => state.shop.value2)
  const Date = useSelector((state) => state.date.value)
  const Date2 = useSelector((state) => state.date.value2)
  const [PendingData, setPendingData] = useState([]);
  const [PickupData, setPickupData] = useState([]);
  const [ReceivedData, setReceivedData] = useState([]);
  const [DeliveredData, setDeliveredData] = useState([]);
  const [TotalData, setTotalData] = useState([]);
  const [Earning, setEarning] = useState([]);


  const PendingOrders = async () => {
    try {
      const response = await Axios.get(
        `/api/pending/orders`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const filteredData = response.data.filter(order => order.servicelocation === url);
        if (Date2 === "today") {
          
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0] === Date);
          setPendingData(dataWithDate);

        }if (Date2 === "thismonth") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 7) === Date);
          setPendingData(dataWithDate);

        }if (Date2 === "thisyear") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 4) === Date);
          setPendingData(dataWithDate);

        }if (Date === "total") {
          setPendingData(filteredData);

        }
      } else {
        console.log('ooooopppppsssss');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  


  useEffect(() => {
    PendingOrders();
  }, [url, Date]);

  const PickupOrders = async () => {
    try {
      const response = await Axios.get(
        `/api/pickup/orders`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const filteredData = response.data.filter(order => order.servicelocation === url);
        if (Date2 === "today") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0] === Date);
          setPickupData(dataWithDate);

        }if (Date2 === "thismonth") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 7) === Date);
          setPickupData(dataWithDate);

        }if (Date2 === "thisyear") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 4) === Date);
          setPickupData(dataWithDate);

        }if (Date === "total") {
          setPickupData(filteredData);

        }

      } else {
        console.log('ooooopppppsssss')
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };


  useEffect(() => {
    PickupOrders();
  }, [url, Date]);


  const ReceivedOrders = async () => {
    try {
      const response = await Axios.get(
        `/api/received/orders`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const filteredData = response.data.filter(order => order.servicelocation === url);
        if (Date2 === "today") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0] === Date);
          setReceivedData(dataWithDate);

        }if (Date2 === "thismonth") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 7) === Date);
          setReceivedData(dataWithDate);

        }if (Date2 === "thisyear") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 4) === Date);
          setReceivedData(dataWithDate);

        }if (Date === "total") {
          setReceivedData(filteredData);

        }
        
      }else{
        console.log('ooooopppppsssss')
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };


  useEffect(() => {
    ReceivedOrders();
  }, [url, Date]);


  const DeliveredOrders = async () => {
    try {
      const response = await Axios.get(
        `/api/delivered/orders`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const filteredData = response.data.filter(order => order.servicelocation === url);
        if (Date2 === "today") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0] === Date);
          setDeliveredData(dataWithDate);

        }if (Date2 === "thismonth") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 7) === Date);
          setDeliveredData(dataWithDate);

        }if (Date2 === "thisyear") {
          const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 4) === Date);
          setDeliveredData(dataWithDate);

        }if (Date === "total") {
          setDeliveredData(filteredData);

        }
      } else {
        console.log("ooopppssss")
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };


  useEffect(() => {
    DeliveredOrders();
  }, [url,Date]);


  const TotalOrders = async () => {
    try {
      const response = await Axios.get(
        `/api/total/orders`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const filteredData = response.data.filter(order => order.servicelocation === url);
          if (Date2 === "today") {
            const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0] === Date);
            setTotalData(dataWithDate);
            const todayEarnings = dataWithDate.reduce((accumulator, order) => accumulator + order.price, 0);
            setEarning(todayEarnings)
          }if (Date2 === "thismonth") {
            const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 7) === Date);
            setTotalData(dataWithDate);
            const monthlyEarnings = dataWithDate.reduce((accumulator, order) => accumulator + order.price, 0);
            setEarning(monthlyEarnings)
          }if (Date2 === "thisyear") {
            const dataWithDate = filteredData.filter(order => order.createdat.split("T")[0].slice(0, 4) === Date);
            setTotalData(dataWithDate);
            const yearlyEarnings = dataWithDate.reduce((accumulator, order) => accumulator + order.price, 0);
            setEarning(yearlyEarnings)
          }if (Date === "total") {
            setTotalData(filteredData);
            const totalEarnings = filteredData.reduce((accumulator, order) => accumulator + order.price, 0);
            setEarning(totalEarnings)
          }
      } else {
        console.log("ooopppppssss.......error")
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    TotalOrders();
  }, [url, Date]);



  const pieChartData = [PendingData.length, PickupData.length, ReceivedData.length, DeliveredData.length]





  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={Earning}
        />
        <Widget
          icon={<MdOutlinePendingActions className="h-6 w-6" />}
          title={"Pending Order"}
          subtitle={PendingData.length}
        />
        <Widget
          icon={<PiPackageLight className="h-7 w-7" />}
          title={"Pickup orders"}
          subtitle={PickupData.length}
        />
        <Widget
          icon={<BiCheckDouble className="h-6 w-6" />}
          title={"Received orders"}
          subtitle={ReceivedData.length}
        />
        <Widget
          icon={<GrDeliver className="h-7 w-7" />}
          title={"Delivered orders"}
          subtitle={DeliveredData.length}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"Total customers"}
          subtitle={TotalData.length}
        />
      </div>

      {/* table */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div>
          <CheckTable
            name="Total Order"
            tableData={TotalData}
            action= {null}
          />
        </div>


        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
        <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
          <PieChartCard pieChartData = {pieChartData}/>
        </div>
        <div>
          <CheckTable
           name="Pending Order"
            tableData={PendingData}
            action= "Pick up"
            status = "update/pending/topickup"
          />
        </div>
        <div>
          <CheckTable
            name="Pickup Orders"
            tableData={PickupData}
            action= "Received"
            status = "update/pickup/toreceived"
          />
        </div>
        <div>
          <CheckTable
            name="Received Orders"
            tableData={ReceivedData}
            action= "Delivery"
            status= "update/received/todelivery"
          />
        </div>
        <div>
          <CheckTable
            name="Delivered  Orders"
            tableData={DeliveredData}
            action= {null}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
