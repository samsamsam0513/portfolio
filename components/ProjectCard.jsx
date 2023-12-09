import React from 'react';
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/24/outline';


const ProjectCard = ({image, title, description, gitURL}) => {
    return(
        <div>
            <div 
            className='h-52 rounded-t-xl relative center center bg-no-repeat group'
            style={{background:`url(${image})`, backgroundSize:"cover"}}>
                <div className="overlay items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link
                    href={gitURL}
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" ></CodeBracketIcon>
                    </Link>
                </div>
            </div>

            <div className='text-white'>
                <h5 className='font-semibold text-xl mb-1'>{title}</h5>
                <p className='text-'>{description}</p>
            </div>
        </div>
    )
}
export default ProjectCard;