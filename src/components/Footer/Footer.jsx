export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Brand */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Gadget Heaven
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">Product Support</li>
              <li className="hover:text-black cursor-pointer">Order Tracking</li>
              <li className="hover:text-black cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-black cursor-pointer">Returns</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">Terms of Service</li>
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
              <li className="hover:text-black cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}