import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-green-500 font-bold mb-2">Company</h4>
          <ul>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">About Us</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Careers</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-green-500 font-bold mb-2">Help</h4>
          <ul>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Customer Service</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Returns</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-green-500 font-bold mb-2">Shop</h4>
          <ul>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Men</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Women</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Children</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-green-500 font-bold mb-2">Legal</h4>
          <ul>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Terms of Use</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition-all duration-300">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
