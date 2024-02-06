import React from "react";
import avatar from "../../../../assets/img/avatars/avatar4.png";
import banner from "../../../../assets/img/profile/banner.png";
import Card from "../../../../components/card/index";

const Banner = () => {

  const shop_owners = [
    {
      id: 1,
      avatar: "images/demo.png",
      name: "Shop Manager 1",
      shop:"Hengrabari",
      role: "Shop manager",
      mail:"demo1@gmail.com",
      passcode:"Code123"
    },
    {
      id: 2,
      avatar: "images/demo.png",
      name: "Shop Manager 2",
      shop:"Zoo Road",
      role: "Shop manager",
      mail:"demo2@gmail.com",
      passcode:"kIO3522##"
    },
    {
      id: 3,
      avatar: "images/demo.png",
      name: "Shop Manager 3",
      shop:"Lokhra",
      role: "Shop manager",
      mail:"demo3@gmail.com",
      passcode:"C33fdt#"
    },

  ];


  return (
    <>  {shop_owners.map((shop_owner)=>(
    
    <Card extra={"items-center w-full h-half p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      


    
     
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {shop_owner.name}
        </h4>{shop_owner.shop}
        <p className="text-base font-normal text-gray-600">{shop_owner.role}</p>
        <p className="text-base font-normal text-gray-600">{shop_owner.mail}</p>
        <p className="text-base font-normal text-gray-600">Code :  {shop_owner.passcode}</p>
      </div> 
      
    </Card>
   ))}
    </>
    
  );
};

export default Banner;
