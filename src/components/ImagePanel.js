import React, { useState, useEffect } from 'react';

function ImagePanel({setExerciseToEdit}) {
    const [imageData, setImageData] = useState([])

    const loadImages = async () => {
        let today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth() + 1); 
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        const cameras = ['FHAZ', 'NAVCAM', 'MAHLI'];
  
        const fetchImage = async (camera) => {
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${today}&camera=${camera}&api_key=DEMO_KEY`;
            const response = await fetch(url);
            const data = await response.json();
            return data.photos || [];
        };
        
        let cameraData = []
        for (let camera of cameras) {
            const data = await fetchImage(camera);
            cameraData.push(data);
          }

        setImageData(cameraData);
    };

    useEffect( () => {
        loadImages();
    }, []);

    return (
      <div className="ImagePanel">
        {imageData.map((cameraImages, index) => (
          cameraImages.map((image) => (
            <div key={image.id} className="imageNode">
              <img
                src={image.img_src}
                alt={'Mars Image'}
                className="gallery-image"
              />
              <p>
                {index === 0 ? 'Front Hazard Avoidance Camera' :
                 index === 1 ? 'Navigation Camera' :
                 'Mars Hand Lens Imager'}
              </p>
            </div>
          ))
        ))}
      </div>
    )
};

export default ImagePanel;


