import banner from "../assets/banner.jpg"; // Import the image

const Header = () => {
  return (
    <header className="mt-0 w-full flex justify-center bg-gray-100 mb-1">
      <img
        src={banner}
        alt="Guru Nanak Dev Engineering College Banner"
        loading="lazy"
        className="w-full max-w-screen-xl mx-auto h-auto object-cover shadow-lg"
      />
    </header>
  );
};

export default Header;
