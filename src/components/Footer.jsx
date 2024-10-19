import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col mf:flex-row justify-between items-center py-4">
        <div className="flex space-x-6 mb-2 ">
          <a
            href="https://www.faceook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className="text-sm">&copy; 2024 VastuSpaze. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
