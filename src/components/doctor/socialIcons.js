import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => (
  <div className="flex gap-2">
    <span className="border-2 rounded-full p-2 text-zinc-500"><FaFacebookF /></span>
    <span className="border-2 rounded-full p-2 text-zinc-500"><FaTwitter /></span>
    <span className="border-2 rounded-full p-2 text-zinc-500"><FaInstagram /></span>
  </div>
);

export default SocialIcons;
