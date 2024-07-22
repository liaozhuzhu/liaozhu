import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {ProjectsScroll} from '../../components/ProjectsScroll';
export default function Projects() {
    return (
        <div className="flex justify-center items-center h-full flex-col bg-zinc-950 z-10 ">
            <Navbar />
            <div className="flex justify-center items-center h-screen text-zinc-50">
                <ProjectsScroll/>
            </div>
            <Footer/>
        </div>
    )
}