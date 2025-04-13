import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        <div className="space-y-3">
          <div className="">
            <img src="/RTV.png" alt="" className=" h-[128px]" />
          </div>
          <p className="text-sm text-gray-400 max-w-sm">
            Pushing the boundaries of visual storytelling through art, technology, and imagination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm w-full md:w-auto">
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#team" className="hover:text-white transition">Team</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="#projects" className="hover:text-white transition">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p><a href="mailto:careers@realtimevfx.in" className="hover:text-white transition">careers@realtimevfx.in</a></p>
            <p className="text-sm text-gray-400 mt-2">Hyderabad, India</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} REAL TIME VFX. All rights reserved.
      </div>
    </footer>
  );
}
