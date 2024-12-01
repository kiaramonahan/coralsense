import React from 'react';
import Header from "../components/header";

const GetInvolved = () => {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="pt-16 flex flex-col items-center justify-center text-white px-6 py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">Get Involved</h1>

        {/* Educational Resources Section */}
        <section className="max-w-4xl mb-12"> 
          <h2 className="text-3xl font-semibold mb-4">Educational Resources</h2>
          <p className="text-lg mb-6">
           Learn more about coral reef ecosystems and how you can help. Access guides, videos, and lesson plans to educate and inspire action.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://coral.org/en/how-can-you-help/"
              className="inline-block bg-[#715eb7] hover:bg-[#5e4aa2] text-white font-semibold py-2 px-4 rounded-full"
            >
              How Can You Help?
            </a>
            <a
             href="https://artsandculture.google.com/project/coral-reef-ecosystems"
             className="inline-block bg-[#715eb7] hover:bg-[#5e4aa2] text-white font-semibold py-2 px-4 rounded-full"
            >
             Learn About Coral Reefs
            </a>
            <a
              href="https://youtu.be/aGGBGcjdjXA?feature=shared"
              className="inline-block bg-[#715eb7] hover:bg-[#5e4aa2] text-white font-semibold py-2 px-4 rounded-full"
            >
              Chasing Coral
            </a>
          </div>
        </section>


        {/* Donations Section */}
        <section className="max-w-4xl mb-12"> 
          <h2 className="text-3xl font-semibold mb-4">Make a Donation</h2>
          <p className="text-lg mb-6">
            Donate to organizations like the Coral Reef Alliance or The Nature Conservancy that are working to save, protect, and restore coral reefs.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://give.coral.org/give/406853/#!/donation/checkout"
              className="inline-block bg-[#fc9a02] hover:bg-[#fd4d01] text-white font-semibold py-2 px-4 rounded-full"
            >
              Coral Reef Alliance
            </a>
            <a
             href="https://preserve.nature.org/page/80429/donate/1"
             className="inline-block bg-[#fc9a02] hover:bg-[#fd4d01] text-white font-semibold py-2 px-4 rounded-full"
            >
             The Nature Conservancy
            </a>
          </div>

        </section>

        {/* Volunteering Section */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Volunteer</h2>
          <p className="text-lg mb-6">
           Volunteer with organizations that are working to save and protect coral reefs. See how you can get involved at the links below.
          </p>
          <div className="flex space-x-4">
           <a
             href="https://coralreef.noaa.gov/education/volunteer.html"
             className="inline-block bg-[#f65e6a] hover:bg-[#C54E56] text-white font-semibold py-2 px-4 rounded-full"
           >
              NOAA Volunteer Opportunities
            </a>
           <a
              href="https://www.reefcheck.org/get-involved/volunteer/"
             className="inline-block bg-[#f65e6a] hover:bg-[#C54E56] text-white font-semibold py-2 px-4 rounded-full"
           >
             Reef Check Volunteer Opportunities
           </a>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Partner with Us</h2>
          <p className="text-lg mb-6">
            Collaborate with CoralSense to amplify our impact. We’re always looking for meaningful partnerships with organizations that share our vision. <br></br>
            Email us at kmonahan@berkeley.edu
          </p>
        </section>


      </div>
    </div>
  );
};

export default GetInvolved;
