import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className="text-white bg-bgBlack">
      <p className="font-normal text-buttonYellow flex items-center text-sm px-4 py-2">
        <Copyright className="w-3 h-3 mr-2 inline-block align-middle" />
        <span className="align-middle">2023. <span className="text-white mx-2">All Rights Reserved.</span>Where Is My Bus?</span>
      </p>
    </div>
  );
};

export default Footer;
