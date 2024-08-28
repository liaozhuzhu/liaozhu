import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {ProjectsScroll} from '../../components/ProjectsScroll';
export default function Projects() {
    return (
      <div className="flex justify-center items-center h-full flex-col bg-zinc-950 z-10 ">
        <Navbar />
        <div className="flex justify-center items-center flex-col text-zinc-50 gap-3 h-auto text-center text-zinc-50">
	    <h1 className="text-3xl font-bold mt-40">Publications</h1>
	    <div className="px-10">
	    	<ul className="flex justify-center items-start flex-col gap-5 text-start list-disc px-4 max-w-5xl">
			<li>Maddala, P., Kolodziejski, J., Adhikari, A., Hermstein, K., Chen, D., <span className="font-bold text-blue-600">Zhu, L.</span>, Chen, T., Seskar, I., & Zussman, G. (2024). Demo: Experimentation with Mobile 28 GHz Phased Array Antenna Modules. In Proceedings of the ACM MobiCom 2024.</li>
	    		<li>Zhong, Y., <span className="font-bold text-yellow-500">Zhu, L.</span>, Adhikari, B. (In Preparation). Implicit Subgraph.</li>
	    	</ul>
	    </div>
          <h1 className="text-3xl font-bold mt-28">Projects</h1>
          <ProjectsScroll />
        </div>
        <Footer />
      </div>
    );
}
