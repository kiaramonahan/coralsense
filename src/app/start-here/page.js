import Header from "../components/header";

export default function StartHere() {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {/* Container Content */}
        <div className="max-w-4xl text-white text-center px-6 py-8 bg-opacity-80 rounded-lg">
      
          {/* Content */}
          <div className="text-left">
          <h1 className="text-4xl  mb-6"><br></br>“Our mission is to use machine learning to monitor and model global coral reef health, providing accessible tools and insights to protect these vital ecosystems. By empowering communities and policymakers with actionable data, we aim to ensure a sustainable future for coral reefs and our oceans.”</h1>
          <h1 className="text-4xl font-bold mb-6"><br></br>Problem & Motivation</h1>
            <p>
            CoralSense addresses the urgent issue of coral reef degradation caused by climate change, overfishing, pollution, and coastal development. Coral reefs, often referred to as the "rainforests of the sea," are critical ecosystems supporting 25% of marine life and protecting over 45,000 miles of coastline. However, without immediate intervention, up to 90% of coral reefs could disappear by 2050. Traditional conservation methods lack the predictive capabilities needed to prioritize efforts effectively.

            </p>
            <div className="flex justify-center mb-6">
            <img
              src="timeline.png"
              alt="Timeline of Global Coral Reef Health Decline"
              
            />
            </div>
            
            <strong>Why this matters:</strong>
            <ul className="list-disc list-inside pl-4">
            <li>
             Coral reefs are essential for biodiversity, supporting over 500 million people globally through food security and coastal protection.
            </li>
            <li>Their loss would have devastating environmental, economic, and social impacts.</li>
            <li>A proactive, data-driven approach is required to address this crisis.</li>
            </ul>
            <br></br>
            <div className="flex justify-center mb-4">
            <img
              src="statistics.png"
              alt="Statistics on the Importance of Reefs"
              
            />
            </div>
            <h1 className="text-4xl font-bold mb-6">Our Solution</h1>
            <p>
            CoralSense integrates cutting-edge machine learning with a user-friendly interactive map to forecast coral reef health under various environmental scenarios. Key features include:
            </p>
            <ul className="list-disc list-inside pl-4">
            <li>
            <strong>Predictive Analytics</strong> Identifies regions at highest risk and forecasts coral health trajectories.
            </li>
            <li><strong>Interactive Visualization:</strong> Allows users to explore current and future reef conditions globally.</li>
            <li><strong>Scenario Testing:</strong> Enables stakeholders to test how adjustments in key environmental variables (e.g., sea surface temperature, pollution) impact reef health.</li>
            <li><strong>Actionable Insights: </strong>Empowers policymakers, conservationists, and communities to prioritize and optimize conservation efforts effectively.</li>
            </ul>
            <h1 className="text-4xl font-bold mb-6"><br></br>Data Pipeline</h1>
            <ol className="list-decimal list-inside pl-4">
            <li>
              <strong>Data Ingestion:</strong> Collection and preprocessing of geospatial, environmental, and socioeconomic data.
            </li>
            <li>
              <strong>Feature Engineering:</strong> Extraction of key indicators like sea surface temperature, coral cover, and marine biodiversity.
            </li>
            <li>
              <strong>Model Training:</strong> Machine learning algorithms (Random Forest, XGBoost, CNNs) to predict reef health.
            </li>
            <li>
              <strong>Visualization:</strong> Integration into an interactive global map with predictive scenarios and feature adjustment capabilities.
            </li>
          </ol>
          <h1 className="text-4xl font-bold mb-6"><br></br>Model Selection</h1>
          <p>
            To predict coral reef health, CoralSense tested a combination of classification and time series forecasting models, ensuring robust performance across diverse data types and use cases:
            </p>
          <h2 className="text-2xl font-semibold mt-4">Classification Models</h2>
          <ol className="list-decimal list-inside pl-4">
            <li>
              <strong>Logistic Regression:</strong> A simple yet effective baseline model for binary classification tasks, providing insights into the relationships between variables.
            </li>
            <li>
             <strong>Random Forest Classifier:</strong> An ensemble method that combines decision trees to improve prediction accuracy and handle non-linear relationships effectively.
            </li>
            <li>
             <strong>Extreme Gradient Boosting (XGBoost):</strong> A powerful gradient boosting algorithm known for its high efficiency and predictive accuracy, particularly in structured data scenarios.
            </li>
            <li>
             <strong>Support Vector Machine (SVM):</strong> A model well-suited for high-dimensional data, separating classes with maximum margin to enhance classification performance.
            </li>
            <li>
              <strong>K-Nearest Neighbors (KNN):</strong> A straightforward algorithm that classifies data points based on the closest training examples in the feature space, useful for non-parametric analysis.
            </li>
            <li>
             <strong>Neural Network - Multi-Layer Perceptron (MLP) Classifier:</strong> A deep learning model capable of capturing complex patterns and relationships in data through multiple hidden layers.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-4">Time Series Forecasting Models</h2>
          <ol className="list-decimal list-inside pl-4">
            <li>
             <strong>Seasonal Autoregressive Integrated Moving Average (SARIMA):</strong> Used to forecast temporal trends in coral health by capturing seasonality, trends, and dependencies in time series data.
            </li>
           <li>
              <strong>Long Short-Term Memory Networks (LSTM):</strong> A specialized recurrent neural network (RNN) designed to model sequential data by capturing long-term dependencies, making it well-suited for time series analysis.
            </li>
          </ol>
          <br></br>
          <p>
          By integrating both classification and time series forecasting approaches, CoralSense provides a comprehensive solution to predict coral reef health trends and inform proactive conservation strategies.
          </p>

          <h1 className="text-4xl font-bold mb-6"><br></br>Model Evaluation</h1>
            <p>
            CoralSense models achieved high accuracy and F1-scores, validated through:
            </p>
            <ul className="list-disc list-inside pl-4">
           <li>
              <strong>Cross-validation:</strong> Ensuring model generalizability.
           </li>
           <li>
              <strong>Real-world comparisons:</strong> Predictions aligned with historical trends.
           </li>
           <li>
              <strong>Evaluation Metrics:</strong> Metrics like RMSE and accuracy demonstrated reliability.
           </li>
          </ul>
          <p>
          Based on the evaluation of several classification models, Random Forest demonstrated the best performance, achieving the highest weighted F1-score of 0.84 and accuracy of 0.84. Consequently, Random Forest was selected for time series forecasting, where forecasted feature values, such as sea surface temperature and wind speed, were used to predict coral reef health for the years 2030, 2035, and 2040. 
<br></br>
These future projections were visualized on an interactive global map, providing users with a dynamic tool for scenario analysis which allows for the exploration of various conservation strategies.
          </p>
          <h1 className="text-4xl font-bold mb-6"><br></br>Key Learnings & Impact</h1>
          <p>
            Key takeaways include:
            </p>
            <ul className="list-disc list-inside pl-4">
           <li>
           A proactive, data-driven approach is essential to mitigate coral reef losses.
           </li>
           <li>
           Integrating diverse datasets (environmental, socio-economic, and geospatial) significantly improves prediction accuracy.
           </li>
           <li>
           The interactive map provides an accessible platform for visualizing data, empowering stakeholders to make informed decisions.
           </li>
           </ul>
           <h2 className="text-2xl font-semibold mt-4">Impact</h2>
           <p>CoralSense equips conservationists and policymakers with the tools to protect vital marine ecosystems and foster sustainable practices.</p>
           <h1 className="text-4xl font-bold mb-6"><br></br>Acknowledgements</h1>
           <p>
            We express our gratitude to:
            </p>
            <ul className="list-disc list-inside pl-4">
           <li>
           University of California Berkeley School of Information: For supporting our project.
           </li>
           <li>
           Data Providers: NOAA, Coral Reef Alliance, Allen Coral Atlas, and other organizations for making critical datasets publicly available.
           </li>
           <li>
           Our Mentors and Peers: For their guidance and encouragement throughout the project.
           </li>
           <li>Dr. Helen Fox from the Coral Reef Alliance for guidance and expertise</li>
          <li>Megan Howson from the Department of Oceanography at Texas A&M University for her subject matter expertise and invaluable insights.</li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

