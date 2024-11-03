import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

function SocialBar() {
  return (
    <div className="absolute left-0 top-0 h-full w-40 flex justify-start">
      <div className="flex flex-col justify-center items-center ml-5 gap-3 z-10">
        <Link
          href="https://www.linkedin.com/in/liaozhu/"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-50"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[24px] transition duration-300 hover:scale-110 "
          />
        </Link>
        <div className="bg-white w-[1px] h-16 block"></div>
        <Link
          href="https://github.com/liaozhuzhu"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-50"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[24px] transition duration-300 hover:scale-110 "
          />
        </Link>
        <div className="bg-white w-[1px] h-16 block"></div>
        <Link
          href="https://www.youtube.com/@liaozhuu"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-50"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-[24px] transition duration-300 hover:scale-110 "
          />
        </Link>
        <div className="bg-white w-[1px] h-16 block"></div>
        <Link
          href="mailto:liaozhucs@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-50"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[24px] transition duration-300  hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}

export default SocialBar;
