import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../admin/navbar/Navbar";

import { team } from "../../dummydata";
import Modal from "./Modal";

const AdminUserList = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
       
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* list here  */}

          <div className="overflow-x-auto p-1">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>

                  <th></th>
                </tr>
              </thead>
              {team?.map((info) => {
                return (
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={info.cover} alt="usrImg" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{info.name}</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {info.work}
                        </span>
                      </td>

                      <th>
                        
                          <Modal/>
                       
                      </th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AdminUserList;
