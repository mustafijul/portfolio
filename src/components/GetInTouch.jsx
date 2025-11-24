import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export default function GetInTouch() {
  return (
    <section className="w-full py-20  text-gray-900">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          I’m always open to new collaborations, exciting ideas, or even a friendly chat.
          Reach out anytime through any platform below!
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs border-gray-100">

          {/* Email */}
          <a
            href="mailto:mustafijulislam21@gmail.com"
            className="p-6 bg-white  rounded-xl hover:shadow-lg border-gray-100 hover:border-indigo-400 transition flex flex-col items-center"
          >
            <FaEnvelope size={38} className="mb-3 text-gray-500" />
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <p className="text-gray-600 break-all">mustafijulislam21@gmail.com</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/01328342516"
            className="p-6 bg-white rounded-xl hover:shadow-lg border-gray-100 hover:border-green-500 transition flex flex-col items-center"
          >
            <FaWhatsapp size={38} className="mb-3 text-green-500" />
            <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
            <p className="text-gray-600">01328342516</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mustafijul"
            target="_blank"
            className="p-6 bg-white rounded-xl hover:shadow-lg border-gray-100 hover:border-gray-700 transition flex flex-col items-center"
          >
            <FaGithub size={38} className="mb-3 text-gray-800" />
            <h3 className="text-xl font-semibold mb-1">GitHub</h3>
            <p className="text-gray-600">github.com/mustafijul</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mustafijul/"
            target="_blank"
            className="p-6 bg-white rounded-xl hover:shadow-lg border-gray-100 hover:border-blue-600 transition flex flex-col items-center"
          >
            <FaLinkedin size={38} className="mb-3 text-blue-600" />
            <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-600">linkedin.com/in/mustafijul</p>
          </a>

          {/* Vercel */}
          <a
            href="https://vercel.com/mustafijuls-projects"
            target="_blank"
            className="p-6 bg-white rounded-xl hover:shadow-lg border-gray-700 hover:border-black transition flex flex-col items-center"
          >
            <SiVercel size={38} className="mb-3 text-gray-900" />
            <h3 className="text-xl font-semibold mb-1">Vercel</h3>
            <p className="text-gray-600">vercel.com/mustafijuls-projects</p>
          </a>
        </div>

      </div>
    </section>
  );
}
