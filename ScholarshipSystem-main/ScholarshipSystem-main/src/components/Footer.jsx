const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: contact@yourcollege.edu</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: Your College, Ludhiana, India</p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-400">
            © 2025 Your College Name. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
