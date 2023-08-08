import React from "react";

export default function HumberMenu({ isOpen }) {
  if (isOpen) {
    return (
      <div className="humber-container">
        <svg
          width="41"
          height="34"
          viewBox="0 0 41 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M38.5399 19.6378C39.7036 19.808 40.4923 20.933 40.0805 22.0345C38.822 25.4004 36.325 28.3776 32.9085 30.532C28.8023 33.1214 23.6699 34.3317 18.5352 33.9217C13.4004 33.5117 8.64078 31.5115 5.20582 28.32C1.77087 25.1285 -0.0869062 20.9804 0.00312225 16.7033C0.0931507 12.4262 2.12436 8.3344 5.69154 5.24428C9.25872 2.15416 14.0996 0.292861 19.2485 0.0317084C24.3974 -0.229444 29.4757 1.12874 33.4705 3.83533C36.7987 6.09034 39.1708 9.14321 40.285 12.5491C40.6483 13.6599 39.8262 14.7476 38.6652 14.8829C37.5864 15.0086 36.6149 14.2585 36.2582 13.2326C35.34 10.5912 33.4715 8.22653 30.8764 6.46826C27.6806 4.303 23.6179 3.21644 19.4988 3.42537C15.3797 3.63429 11.507 5.12333 8.65323 7.59542C5.79949 10.0675 4.17452 13.3409 4.1025 16.7626C4.03048 20.1844 5.51669 23.5028 8.26466 26.056C11.0126 28.6092 14.8203 30.2094 18.9281 30.5374C23.0359 30.8654 27.1419 29.8971 30.4268 27.8256C33.1055 26.1365 35.0777 23.8151 36.103 21.1883C36.4934 20.1881 37.4775 19.4825 38.5399 19.6378Z"
            fill="#A5830D"
          />
          <line
            x1="2.5"
            y1="-2.5"
            x2="24.058"
            y2="-2.5"
            transform="matrix(-0.796962 0.604029 -0.796962 -0.604029 29.7599 8.27094)"
            stroke="#CE9B01"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="2.5"
            y1="-2.5"
            x2="24.0587"
            y2="-2.5"
            transform="matrix(0.796962 0.604029 -0.796962 0.604029 8.59424 10.8764)"
            stroke="#84690B"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="humber-container">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12.5 30H47.5H12.5Z" fill="white" />
<path d="M12.5 30H47.5" stroke="#EFC74E" strokeWidth="1.5" strokeLinecap="round" />
<path fillRule="evenodd" clipRule="evenodd" d="M12.5 17.5H47.5H12.5Z" fill="white" />
<path d="M12.5 17.5H47.5" stroke="#EFC74E" strokeWidth="1.5" strokeLinecap="round" />
<path fillRule="evenodd" clipRule="evenodd" d="M12.5 42.5H47.5H12.5Z" fill="white" />
<path d="M12.5 42.5H47.5" stroke="#EFC74E" strokeWidth="1.5" strokeLinecap="round" />
</svg>


    </div>
  );
}
