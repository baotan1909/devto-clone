"use client";

import { FaHashtag, FaRegComments, FaRegNewspaper } from "react-icons/fa";

export default function UserStats() {
    // placehodlder values
    const postNum: number = 0;
    const commentNum: number = 0;
    const tagsFollowed: number = 0;
    
    const stats = [
        {label: "post published", value: postNum, icon: <FaRegNewspaper className="text-gray-500 w-5 h-5"/>},
        {label: "comments written", value: commentNum, icon: <FaRegComments className="text-gray-500 w-5 h-5"/>},
        {label: "tags followed", value: tagsFollowed, icon: <FaHashtag className="text-gray-500 w-5 h-5"/>}
    ]
    return(
    <div className="max-w-sm bg-white rouded-xl shadow p-6">
        {stats.map((stat) => (
           <div
            key={stat.label}
            className="flex items center justify-between p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                    {stat.icon}
                    <span className="text-gray-700 whitespace-nowrap">{stat.value} {stat.label}</span>
                </div>
           </div> 
        ))}
    </div>
    )
}