import Header from "../components/header";

export default function AboutUs() {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {/* Container for About Us Content */}
        <div className="max-w-4xl text-white px-6 py-8 bg-opacity-80 rounded-lg text-left">
          
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6">About Us</h1>

          {/* Main About Content */}
          <p className="text-lg mb-4">
            Our team includes five innovators specializing in data science, engineering, and creative problem-solving. Collectively, we bring over 20 years of expertise in machine learning, data visualization, and time series forecasting. 
            Together, we’ve developed CoralSense—an AI-driven model that predicts future reef health by integrating diverse environmental data. Our interactive map empowers policymakers, researchers, and conservationists with 
            real-time insights to protect and restore reefs before it’s too late.
          </p>

          {/* Meet Our Team Section */}
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap justify-start gap-8 mt-8">
            {/* Team Member 1 - Kiara Monahan */}
            <div className="text-left">
              <img src="kiara_monahan.png" alt="Kiara Monahan" className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Kiara Monahan</h3>
              <p className="text-sm mb-2">UC Berkeley MIDS Student</p>
              <a href="https://www.linkedin.com/in/kiaramonahan/" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
              <p className="text-sm mt-2">Kiara is a data scientist with biomedical research experience passionate about using technology to address real-world challenges and create positive change. With a Master of Information and Data Science from UC Berkeley, she brings expertise in data analysis, machine learning, and visualization. A new member of the Golden Gate Bird Alliance's San Francisco Conservation Committee, Kiara is committed to contributing to conservation in her local community.</p>
            </div>

            {/* Team Member 2 - Nigel Lewis */}
            <div className="text-left">
              <img src="headshot_berkeley.png" alt="Nigel Lewis" className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Nigel Lewis</h3>
              <p className="text-sm mb-2">UC Berkeley MIDS Student</p>
              <a href="https://www.linkedin.com/in/nigel-lewis-ds/" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
              <p className="text-sm mt-2">Nigel Lewis is a seasoned public health professional with over 10 years of experience spanning local, state, and federal levels. Based in Atlanta, GA, he is currently a Data Engineer at Booz Allen Hamilton, where he leverages data to drive impactful solutions in public health and beyond. Nigel is set to graduate from the UC Berkeley Master of Information and Data Science (MIDS) program in December 2024, bringing advanced skills in data science, machine learning, and analytics to address complex health and societal challenges..</p>
            </div>

            {/* Team Member 3 - Ted Johnson */}
            <div className="text-left">
              <img src="/ted_johnson.png" alt="Ted Johnson" className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Ted Johnson</h3>
              <p className="text-sm mb-2">UC Berkeley MIDS Student</p>
              <a href="https://www.linkedin.com/in/ted-johnson-712439186/" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
              <p className="text-sm mt-2">Ted Johnson is a technology professional with a foundation in digital advertising and engineering. Formerly a Senior AdTech Engineer at a leading digital advertising agency, Ted spent five years driving innovative solutions in the fast-paced ad technology space. He holds a bachelor’s degree in Computer Science and is currently completing his Master of Information and Data Science at the University of California, Berkeley. With expertise in engineering, data science, and analytics, Ted is passionate about leveraging technology to solve complex challenges and create meaningful impact.</p>
            </div>

            {/* Team Member 4 - Theresa Sumarta */}
            <div className="text-left">
              <img src="/path/to/theresa.jpg" alt="Theresa Sumarta" className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Theresa Sumarta</h3>
              <p className="text-sm mb-2">UC Berkeley MIDS Student</p>
              <a href="https://www.linkedin.com/in/theresa" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
              <p className="text-sm mt-2">[Brief bio for Theresa, highlighting background, skills, and interests related to CoralSense]</p>
            </div>

            {/* Team Member 5 - Tigran Poladian */}
            <div className="text-left">
              <img src="/path/to/tigran.jpg" alt="Tigran Poladian" className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Tigran Poladian</h3>
              <p className="text-sm mb-2">UC Berkeley MIDS Student</p>
              <a href="https://www.linkedin.com/in/tigran" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
              <p className="text-sm mt-2">[Brief bio for Tigran, highlighting background, skills, and interests related to CoralSense]</p>
            </div>
          </div>

          {/* Vision Section */}
          <h2 className="text-3xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="text-lg mb-6">
            Coral reefs, the foundation of marine biodiversity, are facing unprecedented challenges from climate change, pollution, and human impact. With cutting-edge data analysis and predictive modeling, we aim to lead global efforts in reef conservation, providing insights that drive sustainable action for a healthier planet.
          </p>

          {/* Our Approach Section */}
          <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
          <p className="text-lg">
            Coral Sense integrates satellite imagery, underwater surveys, and advanced machine learning algorithms including time-series modeling to monitor the current health of coral reefs and project their future conditions. By analyzing key environmental factors like water temperature, pollution levels, and historical reef data, we generate precise insights to inform actionable conservation strategies.
          </p>
        </div>
      </div>
    </div>
  );
}

