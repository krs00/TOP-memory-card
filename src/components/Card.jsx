import React, { useState, useEffect } from 'react';


function Card() {

  const [imageData, setImageData] = useState(null)

  useEffect(() => { 
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        const imageURL = data.message;
        setImageData(imageURL);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);




    return (
      <>
      <div>
        <img src={imageData} alt="" />
      </div>
      </> 
    )
  }
  
  export default Card
  