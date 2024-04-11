import React from 'react';

const GradientProfileIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F3F3" />
          <stop offset="100%" stopColor="#7C5AED" />
        </linearGradient>
      </defs>
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"  fill="url(#gradient)"/>
    </svg>  
  );
};

export default GradientProfileIcon;
