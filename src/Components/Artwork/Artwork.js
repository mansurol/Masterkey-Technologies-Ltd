import React from 'react';
import './Artwork.css'
import KaziNazrul from '../Img/kazi nuzrol.jpg'
const Artwork = () => {
    return (
        <div className='bgColor'>
             <div className='container'>
                 <div className='row'>
                     <div className='col-lg-8 col-sm-7 ContentStyle'>
                       <h2 className='mt-5'>Kazi Nazrul Islam</h2>
                       <p>Kazi Nazrul Islam was an Indian-Bangladeshi poet, writer, musician, and is the national poet of Bangladesh. 
                           Nazrul is regarded as one of the greatest poets in Bengali literature.
                           Nazrul wrote and composed music for nearly 4,000 songs (many recorded on HMV and gramophone records),[22] collectively known as Nazrul Geeti. In 1942 at the age of 43, he began to suffer from an unknown disease, losing his voice and memory.</p>
                     </div>

                     <div className='col-lg-4  col-sm-5 mt-3 mb-5'>
                         <img src={KaziNazrul} alt="" />
                     </div>

                 </div>

             </div>
        </div>
    );
};

export default Artwork;