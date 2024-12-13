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
            <strong>Key takeaways include:</strong>
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
           <strong>University of California Berkeley School of Information:</strong> For supporting our project.
           </li>
           <li>
           <strong>Kira Wetzel and Puya Vahabi</strong> For support and guidance as mentors and instructors.
           </li>
           <li>
           <strong>Data Providers:</strong> NOAA, Coral Reef Alliance, Allen Coral Atlas, and other organizations for making critical datasets publicly available.
           </li>
           <li>
           <strong>Our Mentors and Peers:</strong> For their guidance and encouragement throughout the project.
           </li>
           <li><strong>Dr. Helen Fox</strong> from the Coral Reef Alliance for guidance and expertise</li>
          <li>Megan Howson from the Department of Oceanography at Texas A&M University for her subject matter expertise and invaluable insights.</li>
          </ul>
          <h1 className="text-4xl font-bold mb-6"><br></br>References</h1>
<div className="text-sm leading-5 space-y-2">
  <p>Beyer, H. L., Kennedy, E. V., Wood, S., Puotinen, M., Skirving, W., & Hoegh-Guldberg, O. (2019). <a href="https://doi.org/10.14264/uql.2019.782" target="_blank" rel="noopener noreferrer">50 Reefs Global Coral Ocean Warming, Connectivity and Cyclone Dataset [Data set]</a>. The University of Queensland.</p>
  <p>Cael, B. B., Burger, F. A., Henson, S. A., Britten, G. L., & Frölicher, T. L. (2024). <a href="https://doi.org/10.1126/sciadv.adj5569" target="_blank" rel="noopener noreferrer">Historical and future maximum sea surface temperatures</a>. Science Advances, 10(4), eadj5569.</p>
  <p>Caspermeyer, J. (2020, April 22). <a href="https://news.asu.edu/20200422-discoveries-caribbean-coral-reef-decline-began-1950s-and-60s-human-activities" target="_blank" rel="noopener noreferrer">Caribbean coral reef decline began in 1950s and ’60s from human activities</a>. ASU News.</p>
  <p>Cinner, J., Huchery, C., MacNeil, M. et al. (2016). <a href="https://doi.org/10.1038/nature18607" target="_blank" rel="noopener noreferrer">Bright spots among the world’s coral reefs</a>. Nature, 535, 416–419.</p>
  <p>Copernicus Climate Change Service. (n.d.). <a href="https://cds.climate.copernicus.eu/datasets/sis-biodiversity-cmip5-global?tab=overview" target="_blank" rel="noopener noreferrer">SIS biodiversity CMIP5 global dataset</a>. Copernicus Climate Change Service.</p>
  <p>Coral Triangle Initiative. (n.d.). <a href="https://coral.org/en/coral-reefs-101/why-care-about-reefs/" target="_blank" rel="noopener noreferrer">Why care about reefs?</a> Coral Triangle Initiative.</p>
  <p>Dickie, G. (2024, May 16). <a href="https://www.reuters.com/business/environment/more-than-60-worlds-coral-reefs-may-have-bleached-past-year-noaa-says-2024-05-16/" target="_blank" rel="noopener noreferrer">More than 60% of world’s coral reefs may have bleached in past year, NOAA says</a>. Reuters.</p>
  <p>Eakin, C. M., Morgan, J., Heron, S., et al. (2010). <a href="https://doi.org/10.1371/journal.pone.0013969.g001" target="_blank" rel="noopener noreferrer">Thermal stress and bleaching during the 2005 Caribbean bleaching event [Image]</a>. PLOS ONE, 5(11), e13969.</p>
  <p>NASA Goddard Space Flight Center. (n.d.). <a href="https://oceancolor.gsfc.nasa.gov/l3/" target="_blank" rel="noopener noreferrer">MODIS Aqua L3 data [Data set]</a>. NASA Ocean Color.</p>
  <p>Nemer, Z. N., Jasim, W. N., & Harfash, E. J. (2022). <a href="https://doi.org/10.31449/inf.v47i1.4429" target="_blank" rel="noopener noreferrer">Implementation of multiple CNN architectures to classify sea coral images</a>. Information, 47(1), 4429.</p>
  <p>NOAA. (2024, April 15). <a href="https://www.noaa.gov/news-release/noaa-confirms-4th-global-coral-bleaching-event" target="_blank" rel="noopener noreferrer">This three-panel image shows a boulder star coral in St. Croix, USVI</a>. National Oceanic and Atmospheric Administration.</p>
  <p>Oliver, E. C. J., Burrows, M. T., Donat, M. G., et al. (2019). <a href="https://doi.org/10.3389/fmars.2019.00734" target="_blank" rel="noopener noreferrer">Marine heatwaves and their impacts on marine ecosystems</a>. Frontiers in Marine Science, 6, 734.</p>
  <p>Protected Planet. (n.d.). <a href="https://www.protectedplanet.net/en/thematic-areas/wdpa?tab=WDPA" target="_blank" rel="noopener noreferrer">World Database on Protected Areas (WDPA) [Data set]</a>.</p>
  <p>Scott, M., & Lindsey, R. (2018, August 1). <a href="https://www.climate.gov/news-features/understanding-climate/unprecedented-3-years-global-coral-bleaching-2014%E2%80%932017" target="_blank" rel="noopener noreferrer">Unprecedented 3 years of global coral bleaching, 2014–2017</a>. NOAA Climate.gov.</p>
  <p>Sully, S., Hodgson, G., & van Woesik, R. (2022). <a href="https://doi.org/10.1111/gcb.16083" target="_blank" rel="noopener noreferrer">Present and future bright and dark spots for coral reefs through climate change</a>. Global Change Biology, 28(3), 735–746.</p>
  <p>Sutthacheep, M., Saenghaisuk, C., et al. (2013). <a href="https://doi.org/10.3755/galaxea.15.379" target="_blank" rel="noopener noreferrer">Underwater photos during the surveys of mass coral bleaching event in 2010</a>. Galaxea, Journal of Coral Reef Studies, 15, 379-390.</p>
  <p>UNEP-WCMC. (n.d.). <a href="https://data.unep-wcmc.org/datasets/1" target="_blank" rel="noopener noreferrer">Global distribution of coral reefs [Data set]</a>. United Nations Environment Programme World Conservation Monitoring Centre.</p>
  <p>United Nations Development Programme. (n.d.). <a href="https://hdr.undp.org/data-center/human-development-index#/indicies/HDI" target="_blank" rel="noopener noreferrer">Human development index (HDI) dataset [Data set]</a>. Human Development Reports.</p>
  <p>Van Woesik, R., & Burkepile, D. (2022). <a href="https://www.bco-dmo.org/dataset/773466" target="_blank" rel="noopener noreferrer">Global bleaching and environmental data [Data set]</a>. Biological & Chemical Oceanography Data Management Office.</p>
  <p>Weier, J. (2001, March 12). <a href="https://earthobservatory.nasa.gov/features/Coral" target="_blank" rel="noopener noreferrer">Mapping the decline of coral reefs</a>. NASA Earth Observatory.</p>
  <p>White band disease affecting elkhorn coral ("Acropora palmata") in Africa [Image]. (n.d.). <a href="https://en.wikipedia.org/wiki/White_band_disease" target="_blank" rel="noopener noreferrer">White band disease</a>. Wikipedia.</p>
  <p>World Resources Institute. (2011). <a href="https://www.wri.org/data/reefs-risk-revisited" target="_blank" rel="noopener noreferrer">Reefs at risk revisited [Data set]</a>.</p>
  <p>XL Catlin Seaview Survey. (2015, October 13). <a href="https://news.mongabay.com/2015/10/massive-bleaching-event-puts-worlds-coral-reefs-at-risk/" target="_blank" rel="noopener noreferrer">A fire coral before and after bleaching</a>. Mongabay.</p>
</div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

