import React from "react";
import { awrapper } from "../../dummydata";
import CountUp from "react-countup";
import user from "../../../src/assets/mainBg.jpg"
import { useLocation } from "react-router-dom";


const Awrapper = () => {
  const location = useLocation()


  if (
    location.pathname !== "/admin" &&
    location.pathname !== "/admin/settings" &&
    location.pathname !== "/admin/about" &&
    location.pathname !== "/admin/userlist" &&
    location.pathname !== "/auth"
  )
  return (
    <>
    
     {/* Speech  */}
     <section className="flex justify-between gap-2 items-center mt-4 container">
        <div className=" w-[60%] shadow-xl p-1">
          <h3 className="text-3xl bg-gradient-to-r from-sky-500 to-yellow-400 
          font-medium text-transparent bg-clip-text">
            RECTOR'S MESSAGE
          </h3>
          <p className=" text-2xl">
            University of Computer Studies, Taungoo is located at Taungoo, Bago
            Division, Myanmar. It was formerly known as Government Computer
            University, Taungoo.Computer University was first opened on 4
            September 2000 as a College in Katumati Myo Thit, Taung-Ngu. Then,
            it was transferred to the campus of Computer University(Taung-Ngu)in
            Kanyo village on 20 April 2008.
          </p>
        </div>

        {/* img  */}
        <div>
          <img src={user} alt="School-Image"  />
        </div>
      </section>





      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((val) => {
            return (
              <div className="box flex">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>
                    <CountUp delay={0.8} end={val.data} duration={3} />
                  </h1>
                  <h2>{val.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>

     
    </>
  );
};

export default Awrapper;
