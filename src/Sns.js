import React from "react";

const Sns = () => {
  const socialMediaLinks = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/seventeen.official.jp",
      icon: "fab fa-facebook-f",
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://twitter.com/SEVENTEEN_OFFICIAL",
      icon: "fab fa-twitter",
    },
    {
      id: 3,
      name: "YouTube",
      url: "https://www.youtube.com/channel/UC6t3-_N5Y5oOZGJ_YGD5YJA",
      icon: "fab fa-youtube",
    },
    {
      id: 4,
      name: "Instagram",
      url: "https://www.instagram.com/seventeen_official_jp/",
      icon: "fab fa-instagram",
    },
  ];

  return (
    <div className="fan-club">
      <img
        src="https://i.imgur.com/K6j6g6Q.jpg"
        alt="SEVENTEEN"
        className="fan-club-image"
      />
      <div className="social-media-links">
        {socialMediaLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <i className={link.icon} />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sns;
