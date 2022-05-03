import React from 'react';
import Section from '../section/Section';
import './Certificate.css';
import Button from '@material-ui/core/Button';
// import certificatesData from '../../data/certificate.json';
// import Slider from '../SliderComponent/Slider';

const Certificate = () => {

    // var i = 0;
    // var images = [];

    // while(i<certificatesData.certificates.length){
    //     images.push(certificatesData.certificates[i].url)
    //     // images.push("../../images/certificates/"+certificatesData.certificates[i].filename)
    //     i++;
    // }

    return (
        <Section title="Certificate">
            <div className="certificate-content">
                <div className='certificate-list' >
                    {/* <Slider slides={images} autoPlay={3}/> */}
                    <p>
                        Contents of this section have been moved to 
                        <a className='certificate-hyperlink' href='https://darkhorse1998.github.io/proof-of-existence/' target='_blank' rel='noopener noreferrer' >
                            view Certificates
                        </a>
                    </p>
                    
                </div>
            </div>
        </Section>
    )
}

export default Certificate;