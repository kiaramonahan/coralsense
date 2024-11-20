import React from 'react';
import Header from "../components/header";

const GetInvolved = () => {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center text-white px-6 py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">Get Involved</h1>

        {/* Donations Section */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Make a Donation</h2>
          <p className="text-lg mb-6">
            Your contributions help us develop advanced tools to protect coral reefs and support global conservation efforts. Every donation makes a difference.
          </p>
          <a
            href="#donate"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Donate Now
          </a>
        </section>

        {/* Volunteering Section */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Volunteer with Us</h2>
          <p className="text-lg mb-6">
            Join our mission by volunteering your time and expertise. Whether you're a scientist, designer, or data enthusiast, there's a place for you at CoralSense.
          </p>
          <a
            href="#volunteer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Volunteer Now
          </a>
        </section>

        {/* Partnerships Section */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Partner with Us</h2>
          <p className="text-lg mb-6">
            Collaborate with CoralSense to amplify our impact. We’re always looking for meaningful partnerships with organizations that share our vision.
          </p>
          <a
            href="#partner"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded"
          >
            Partner with Us
          </a>
        </section>

        {/* Educational Resources Section */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4">Educational Resources</h2>
          <p className="text-lg mb-6">
            Learn more about coral reef ecosystems and how you can help. Access guides, videos, and lesson plans to educate and inspire action.
          </p>
          <a
            href="#resources"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
          >
            Explore Resources
          </a>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
