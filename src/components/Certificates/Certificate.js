import React from 'react';
import Section from '../section/Section';
import './Certificate.css';
import certificatesData from '../../data/certificate.json';
import Slider from '../SliderComponent/Slider';

const Certificate = () => {

    var i = 0;
    var images = [];

    while(i<certificatesData.certificates.length){
        images.push(certificatesData.certificates[i].url)
        // images.push("../../images/certificates/"+certificatesData.certificates[i].filename)
        i++;
    }

    return (
        <Section title="Certificate">
            <div className="certificate-content">
                <div className='certificate-list' >
                    <Slider slides={images} />
                </div>
            </div>
        </Section>
    )
}

export default Certificate;