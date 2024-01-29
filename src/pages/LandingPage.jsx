// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

import { useLocale } from '../hooks/useContext';
import { ButtonContent, LandingContent } from '../utils/lang-content';

import Banner from '../components/ui/Banner';
import HomeBanner from '../assets/home-banner.jpg';

import { IoAccessibility, IoCloudUpload , IoWallet, IoThumbsUp } from 'react-icons/io5';

const LandingPage = () => {
  const { language } = useLocale();

  const content = [
    { icon: <IoAccessibility /> },
    { icon: <IoCloudUpload /> },
    { icon: <IoWallet /> },
    { icon: <IoThumbsUp /> },
  ];
  return (
    <>
      <div className="container--wrap container--padding-y">
        <Banner 
          image={HomeBanner}
          title={LandingContent[language].bannerTitle}
          desc={LandingContent[language].bannerDesc}
        />
      </div>
      <div className="container--home">
        <div className="card--home">
          {content.map((item, index) => (
            <div key={index} className="card--home__item">
              <div className="card--home__title">
                {item.icon} {LandingContent[language].content[index].title}
              </div>
              <div className="card--home__desc">
                <p>{LandingContent[language].content[index].desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container--full-width container--muted">
        <div className="container--home text--center ">
          <h2 className="text__heading">{LandingContent[language].startedTitle}</h2>
          <p>{LandingContent[language].startedDesc}</p>
          <Link to="/note" className="button--home">{ButtonContent[language].started}</Link>
        </div>  
      </div>
    </>
  );
};

export default LandingPage;
