import Header from "../components/header";

export default function Datasets() {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {/* Container for Content */}
        <div className="max-w-4xl text-white text-center px-6 py-8 bg-opacity-80 rounded-lg">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6"><br></br>About Our Datasets</h1>

          {/* Datasets Content */}
          <div className="text-left">
            <h2 className="text-2xl font-semibold mt-4">Bleaching and Environmental Data for Global Coral Reef Sites from 1980-2020</h2>
            <p>
              Source: <a href="https://demo.bco-dmo.org/dataset/773466" target="_blank" className="underline text-blue-300">Biological and Chemical Oceanography Data Management Office</a>
            </p>
            <p>
            This is our main dataset, which contains information on environmental factors that could affect coral health globally as well as our target feature: hard coral cover percentage. The dataset is publicly available and it contains environmental attributes such as sea surface temperature, water quality, sunlight exposure, time series data and geographical locations. The dataset contains standardized attributes such as temperature and geographic coordinates that can make visualization and correlation analysis easier. 
            </p>

            <h2 className="text-2xl font-semibold mt-4">MODIS Aqua Level-3 Remote Sensing Reflectance (Rrs) Dataset</h2>
            <p>
              Source: <a href="https://oceancolor.gsfc.nasa.gov/l3/" target="_blank" className="underline text-blue-300">NASA Earthdata</a>
            </p>
            <p>
              These datasets provide measurements of reflectance in various spectral bands (e.g., 412 nm, 443 nm, 488 nm, 547 nm, 667 nm). Reflectance data helps to analyze the interaction between light and the ocean surface, which is vital for understanding water quality, chlorophyll concentration, and overall ecosystem health, all of which can affect coral health. Our preprocessing includes cropping the images to 100x100 pixels around the location of each data point and using Gaussian distance to give higher weight to the parts of the image closest to the coral test site location.
            </p>

            <h2 className="text-2xl font-semibold mt-4">50 Reefs Global Coral Ocean Warming, Connectivity and Cyclone Dataset</h2>
            <p>
              Source: <a href="https://doi.org/10.14264/uql.2019.782" target="_blank" className="underline text-blue-300">Beyer, Hawthorne L., Kennedy, Emma V., Wood, Sally, Puotinen, Marji, Skirving, William, and Hoegh-Guldberg, Ove (2019), The University of Queensland</a>
            </p>
            <p>
            Connectivity refers to the extent to which populations are linked by the exchange of eggs, larval recruits, juveniles, or adults. Increased connectivity of reefs improves biodiversity and can help reefs regenerate after degradation due to high heat events or other causes. In the paper, the authors outline their methodology of modeling probability of coral larvae dispersal. 
            </p>

            <h2 className="text-2xl font-semibold mt-4">Human Development Index</h2>
            <p>
              Source: <a href="https://hdr.undp.org/data-center/human-development-index#/indicies/HDI" target="_blank" className="underline text-blue-300">United Nations Development Programme</a>
            </p>
            <p>
              Previous research by <a href="https://eprints.whiterose.ac.uk/112677/1/Cinner%20et%20al%20%20Bright%20spots%20Nature%20second%20revision.pdf" target="_blank" className="underline text-blue-300">Cinner et al. 2016</a> shows a positive relationship between Human Development Index and reef health. This dataset provides HDI data used to estimate regional and national trends in reef health.
            </p>

            <h2 className="text-2xl font-semibold mt-4">World Database on Protected Areas</h2>
            <p>
              Source: <a href="https://www.protectedplanet.net/en/thematic-areas/wdpa?tab=WDPA" target="_blank" className="underline text-blue-300">Protected Planet</a>
            </p>
            <p>
            We hypothesized that reefs in marine protected areas may tend to be in better condition than those who aren’t due to fishing, pollution, and other protections. We were able to determine if each geographic data point was within a marine protected area at the time the data was collected. We also incorporated IUCN category for each marine protected area, hypothesizing that the type of marine protected area may be of importance.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Reefs at Risk Revisited</h2>
            <p>
              Source: <a href="https://www.wri.org/data/reefs-risk-revisited" target="_blank" className="underline text-blue-300">World Resources Institute</a>
            </p>
            <p>
            The Reefs at Risk Revisited project assessed threats to reefs around the world in 2011. We incorporated overfishing, marine pollution, and coastal development ratings for each location. Although the ratings only provide a snapshot in time, conservationists explained that these features are very important when considering reef health, and we hypothesize that the ratings relative to each other may be important to our models.  
            </p>

            <h2 className="text-2xl font-semibold mt-4">Global Distribution of Coral Reefs</h2>
            <p>
              Source: <a href="https://www.wri.org/data/reefs-risk-revisited" target="_blank" className="underline text-blue-300">United Nations World Conservation Monitoring Center</a>
            </p>
            <p>
            The United Nations created gathered information from many sources to create one of the most detailed datasets on warm-water coral reefs available. We use this dataset to map locations of tropical and subtropical reefs on our map tool. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
