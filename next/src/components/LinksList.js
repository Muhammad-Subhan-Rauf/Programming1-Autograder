import React from 'react';

const LinksList = ({ links }) => {
    if (!links || links.length === 0) return <span className="text-gray-500">N/A</span>;

    return (
        <ul className="list-none space-y-1">
            {links.map((link, index) => (
                <li
                    key={index}
                    className="inline-flex items-center p-0 bg-[#e7f3ff] rounded-lg  transition-colors duration-500 hover:bg-[#253b80] mr-2"
                >
                    <a
                        href={link.href}
                        className="block text-black hover:text-white no-underline p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
    
    
    



};

export default LinksList;
