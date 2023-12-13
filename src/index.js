import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';



import Mani from './App';
import Man from './Ax';

const root = createRoot(document.getElementById('app'));
const urlimgu = "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_1028x578.v1582751026.png";
root.render(
  <StrictMode>
    <Mani urlimgu={urlimgu}/>
    <Man />
   
  </StrictMode>
);
