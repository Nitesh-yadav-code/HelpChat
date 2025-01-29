import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Connect, Chat, and Collaborate Effortlessly</h1>
          <p className="mt-4 text-lg md:text-xl">Welcome to HelpChat, your all-in-one platform for instant messaging, voice, and video communication.</p>
          <div className="mt-6">
            <a href="#" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow-lg hover:bg-gray-100">Get Started</a>
            <a href="#features" className="ml-4 px-6 py-3 bg-blue-600 border border-white text-white rounded hover:bg-blue-700">Learn More</a>
          </div>
          <img src="https://via.placeholder.com/800x400" alt="Chat Illustration" className="mt-10 mx-auto w-full max-w-lg rounded-lg shadow-xl" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose HelpChat?</h2>
          <p className="mt-4 text-center text-gray-600">Explore our amazing features that make communication seamless and fun!</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Real-Time Messaging</h3>
              <p className="mt-2 text-gray-600">Send and receive messages instantly with zero delays.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Secure Communication</h3>
              <p className="mt-2 text-gray-600">End-to-end encryption to keep your conversations private.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Voice & Video Calls</h3>
              <p className="mt-2 text-gray-600">High-quality voice and video calls for personal and professional use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">About HelpChat</h2>
          <p className="mt-4 text-lg">HelpChat is designed to make communication simple, fast, and secure. Whether you're chatting with friends or collaborating with your team, HelpChat has you covered.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-center text-gray-600">Have questions or need support? We're here to help!</p>
          <form action="#" method="POST" className="mt-10 max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 HelpChat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Home - HelpChat',
  description: 'Connecting Minds, Solving Together.',
}