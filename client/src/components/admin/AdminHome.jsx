import React, { useState, useEffect } from "react";
import Navbar from "../admin/navbar/Navbar";
import Box from "@mui/material/Box";

const AdminHome = () => {
  const [courses, setCourses] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Simulated API call for courses
    const fetchCourseData = async () => {
      try {
        // Simulating a response with fake course data
        const fakeCourseData = [
          {
            id: 1,
            title: "ReactJs",
            description: "The most popular JavaScript Framewrok",
          },
          { id: 2, title: "NodeJs", description: "The most useful backend" },
          { id: 3, title: "Express", description: "Web Server Framework" },
        ];
        setCourses(fakeCourseData);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    // Simulated API call for announcements
    const fetchAnnouncementData = async () => {
      try {
        // Simulating a response with fake announcement data
        const fakeAnnouncementData = [
          { id: 1, title: "Welcome to the new semester!", date: "2024-09-01" },
          { id: 2, title: "Important Exam Announcement", date: "2024-10-15" },
          { id: 3, title: "Upcoming Events", date: "2025-11-05" },
        ];
        setAnnouncements(fakeAnnouncementData);
      } catch (error) {
        console.error("Error fetching announcement data:", error);
      }
    };

    // Fetch fake data
    fetchCourseData();
    fetchAnnouncementData();
  }, []);
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container mx-auto mt-8">
            <h2
              className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-500 to-yellow-400 
           text-transparent bg-clip-text"
            >
              University Of Computer Studies Taungoo
            </h2>

            {/* Display Courses */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Courses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                  <div key={course.id} className="bg-white p-4 rounded shadow">
                    <h4 className="text-lg font-semibold mb-2">
                      {course.title}
                    </h4>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Display Announcements */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Announcements</h3>
              <ul className="list-disc pl-4">
                {announcements.map((announcement) => (
                  <li key={announcement.id} className="text-gray-800 mb-2">
                    {announcement.title} - {announcement.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AdminHome;
