import Logo from "./Logo";

const Navbar = () => {
  const navLinks = ['Features', 'Pricing', 'About', 'Blog'];

  return (
    <div className="fixed w-full z-50 px-6 py-4">
      <nav className="mx-auto max-w-7xl backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-full px-8 py-4 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.3)]">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium">
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default Navbar; 