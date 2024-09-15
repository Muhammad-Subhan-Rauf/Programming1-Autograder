import React from 'react';
import LinksList from './LinksList';

const CalendarRow = ({ weekNumber, row, rowSpan }) => {
    return (
        <tr className="bg-[#DAE5EC] transition-all duration-200 hover:bg-[#B8D1DC] text-black">
            {rowSpan && (
                <td rowSpan={rowSpan} className="p-2 text-center bg-[#DAE5EC]  border-white border-[2px]">
                    {weekNumber}
                </td>
            )}
            <td className=" border-white border-[2px] p-2 ">{row.date}</td>
            <td className=" border-white border-[2px] p-2">
                <div className="font-semibold ">{row.lecture.title || 'No Lecture'}</div>
                <LinksList links={row.lecture.links} />
            </td>
            <td className=" border-white border-[2px] p-2">
                <LinksList links={row.textbook} />
            </td>
            <td className=" border-white border-[2px] p-2">
                <LinksList links={row.labLinks} />
            </td>
            <td className="border-white border-2 p-4  rounded-lg transition-colors duration-300 ">
                {row.homework ? (
                    <div className="space-y-2">
                        <a
                            href={row.homework.href}
                            className="block text-black hover:text-white no-underline p-2 rounded-lg bg-[#e7f3ff] transition-colors duration-500 hover:bg-[#253b80]  mr-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {row.homework.label}
                        </a>
                        {row.homework.dueDate && (
                            <div className="text-sm text-gray-700">
                                Due: {row.homework.dueDate}
                            </div>
                        )}
                        {row.homework.solutionHref && (
                            <a
                                href={row.homework.solutionHref}
                                className="block text-black hover:text-white no-underline p-2 rounded-lg bg-[#e7f3ff] transition-colors duration-500 hover:bg-[#253b80] mr-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {row.homework.solutionLabel}
                            </a>
                        )}
                    </div>
                ) : (
                    <span className="text-gray-500">N/A</span>
                )}
            </td>


        </tr>
    );
};

export default CalendarRow;
