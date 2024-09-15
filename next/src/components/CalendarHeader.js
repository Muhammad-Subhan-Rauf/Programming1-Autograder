"use client";

import React, { useState, useEffect } from 'react';

const CalendarHeader = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        // Fetch the JSON data directly from the public folder
        fetch('/calendarData.json')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!content) {
        return <div>Loading...</div>;  // Show loading while fetching data
    }

    return (
        <div className="p-6 bg-gray-50 shadow-lg rounded-xl mb-5">
            {/* <!-- Course Title and Semester --> */}
            <h1 className="text-4xl font-extrabold text-blue-800 mb-2">{content.header.courseTitle}</h1>
            <p className="text-lg text-gray-500 mb-6">{content.header.semester}</p>

            {/* <!-- Announcements Section --> */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">Announcements</h2>
                {content.header.announcements.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2">
                        {content.header.announcements.map((announcement, index) => (
                            <li key={index} className="text-lg text-gray-700">{announcement}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No Announcements yet</p>
                )}
            </div>

            {/* <!-- Assignments Section --> */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">Assignments</h2>
                <div className="flex flex-wrap gap-4">
                    {content.header.assignments.map((assignment, index) => (
                        <a
                            key={index}
                            href={assignment.link}
                            className="group flex-1 p-4 bg-[#F9FAFB] rounded-lg shadow-sm max-w-xs hover:bg-[#253B80] border border-[#253B80] transition-colors duration-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="text-blue-600 font-semibold group-hover:text-[#F9FAFB]">
                                {assignment.title}
                            </div>
                            <p className="text-sm text-white mt-2 bg-[#253B80] p-2 rounded-full inline-block">Due:&nbsp;{assignment.dueDate}</p>
                        </a>
                    ))}
                </div>
            </div>



            {/* <!-- Book Section --> */}
            <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Book:</h2>
                <a
                    href="https://drive.google.com/file/d/1CDtIBq5Wgvt6bu6-YGjAxJQDC36gzMoP/view?usp=drive_link"
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    Python for Everyone by Cay Horstmann (~90MB)
                </a>
            </div>
        </div>

    );
}

export default CalendarHeader;