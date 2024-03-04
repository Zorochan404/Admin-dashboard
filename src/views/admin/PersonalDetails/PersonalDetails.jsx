import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function PersonalDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate()

  const detail = async () => {
    try {
      const response = await Axios.get(
        `$/api/single/order/${id}`,
        { withCredentials: true }
      );

      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    detail();
  }, []);

  const handleDetailsClick = () => {
    navigate(`/Invoice/${id}`);
  };

  const handlePrint = () => {
    const qrCodeDiv = document.getElementById("qrCodeDiv");
    if (qrCodeDiv) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(qrCodeDiv.innerHTML);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div>
      <h>hola amigo</h>
      <div className="flex flex-wrap justify-around h-screen" key={details._id}>
        <div className="w-4/5 flex flex-col items-center">
          <div className="w-full pt-24 flex justify-start">
            <div className="flex-1 pr-8 pt-4 pb-4">
              <h5>Name: </h5>
              <h5>{details.name}</h5>
            </div>
            <div className="flex-1 pl-8 pt-4 pb-4">
              <h5>Phone Number: </h5>
              <h5>{details.phoneno}</h5>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <div className="flex-1 pr-8 pt-4 pb-4">
              <h5>Order Date: </h5>
              <h5>{formatDate(details.createdat)}</h5>
            </div>
            <div className="flex-1 pl-8 pt-4 pb-4">
              <h5>Pickup Date: </h5>
              <h5>{formatDate(details.pickupdate)}</h5>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <div className="flex-1 pr-8 pt-4 pb-4">
              <h5>Pincode: </h5>
              <h5>{details.Pincode}</h5>
            </div>
            <div className="flex-1 pl-8 pt-4 pb-4">
              <h5>House No:</h5>
              <h5>{details.hno}</h5>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <div className="flex-1 pr-8 pt-4 pb-4">
              <h5>Address: </h5>
              <h5>{details.address}</h5>
            </div>
            <div className="flex-1 pl-8 pt-4 pb-4">
              <h5>Landmark:</h5>
              <h5>{details.Landmark}</h5>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <div className="flex-1 pr-8 pt-4 pb-4">
              <h5>Status: </h5>
              <h5>{details.orderreceived}</h5>
            </div>
            <div className="flex-1 pl-8 pt-4 pb-4">
              <h5>Store: </h5>
              <h5>{details.servicelocation}</h5>
            </div>
          </div>
          <div className="w-full flex justify-start">
            {details._id && (
              <div className="flex-1 pr-8 pt-4 pb-4">
                <h5>QR:</h5>
                <div id="qrCodeDiv">
                  <QRCode
                    value={`http://prestoclean.in/PersonalDetails/${id}`}
                  />
                </div>
              </div>
            )}
            <div className="flex-1 pl-8 pt-4 pb-4">
              <h5>Service: </h5>
              <h5>{details.service}</h5>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <div className="flex-1 pr-8 pt-4 pb-4">
              <h5>price: </h5>
              <h5>{details.price}</h5>
            </div>
            <div className="flex-1 pr-8 pt-4 pb-4">
              <h5>Items: </h5>
              {Array.isArray(details.items) && details.items.length > 0 ? (
                <ul>
                  {details.items.map((item, index) => (
                    <li key={index}>
                      <h5>{`${item.quantity} x ${item.item}`}</h5>
                    </li>
                  ))}
                </ul>
              ) : (
                <h5>No items available</h5>
              )}
            </div>
          </div>
          <div className="btndiv">
            <div className="m-4 bg-green-200 cursor-pointer border border-gray-700 py-2 px-4 text-black rounded transition duration-300" onClick={handlePrint}>
              Print QR
            </div>
            <div className="m-4 bg-green-200 cursor-pointer border border-gray-700 py-2 px-4 text-black rounded transition duration-300" onClick={handleDetailsClick}>
              Invoice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
