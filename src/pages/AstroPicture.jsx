import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'
import { API_KEY, ASTRONOMY_PICTURE_URL } from '../utils/constants';

const AstroPicture = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          `${ASTRONOMY_PICTURE_URL}apod?api_key=${API_KEY}&date=${date}`
        );
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };
    fetchApodData();
  }, [date]);

  const renderApod = () => {
    if (!apodData) {
      return <p className='py-3'>Data Not Available for This Date.</p>;
    }

    const { title, url, explanation, media_type } = apodData;
    if (media_type === 'image') {
      return (
        <>
          <img src={url} alt={title} className="max-w-full h-auto mx-auto pt-5" />
          <p className="mt-2 items-center text-white px-24 text-justify py-8">{explanation}</p>
        </>
      );
    } else if (media_type === 'video') {
      return (
        <>
          <div className="video-container">
            <iframe
              title={title}
              src={url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full px-24"
            ></iframe>
          </div>
          <p className="mt-2 items-center text-white px-24 text-justify py-8 border-solid border-white">{explanation}</p>
        </>
      );
    }
  };

return (
  <div className="flex flex-col items-center">
    <label htmlFor="date-picker" className="label-date-picker">
        Select Date
    </label>

    <input
        type="date"
        id="date-picker"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="date-input mt-1 block w-80 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-sm text-black"
        max={new Date().toISOString().split('T')[0]}
    />
    {renderApod()}
</div>

);

};

export default AstroPicture;
