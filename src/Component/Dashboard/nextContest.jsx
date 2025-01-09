import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Install react-icons if not already installed

const demoContests = [
    {
        id: 1,
        platform: "Codeforces",
        logo: "https://codeforces.org/s/0/favicon-32x32.png",
        name: "Codeforces Round #898 (Div. 2)",
        date: "2024-03-25",
        time: "19:35 UTC"
    },
    {
        id: 2,
        platform: "LeetCode",
        logo: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
        name: "Weekly Contest 389",
        date: "2024-03-26",
        time: "02:30 UTC"
    }
];

const NextContest = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className="pb-4 h-full sm:h-auto grid  overflow-y-auto place-items-center">
            <h2 className="text-2xl font-bold text-gray-800 p-4 text-center">
                Upcoming Contests
            </h2>

            <div className="space-y-3">
                {demoContests.map((contest) => (
                    <div
                        key={contest.id}
                        className="bg-gray-200 w-50 rounded-lg p-2 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center mb-2">
                            <img
                                src={contest.logo}
                                alt={`${contest.platform} logo`}
                                className="w-8 h-8 mb-2"
                            />
                            <span className="text-sm font-medium text-gray-600">
                                {contest.platform}
                            </span>
                        </div>

                        <div className="text-center">
                            <h3 className="font-semibold text-sm text-gray-800 mb-2">
                                {contest.name}
                            </h3>
                            <div className="text-sm text-gray-600">
                                <p>{new Date(contest.date).toLocaleDateString()}</p>
                                <p>{contest.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextContest;