import React from 'react';
import Modala from './Modal';

function Main() {

    const IMAGES = [
        {src : new URL('../images/Screenshot1.png', import.meta.url).href, ind: 1, spot: 'Charminar'},
        {src : new URL('../images/Screenshot2.png', import.meta.url).href, ind: 2, spot: 'Ramoji Film City'},
        {src : new URL('../images/Screenshot3.png', import.meta.url).href, ind: 3, spot: 'Wonderla'},
        {src : new URL('../images/Screenshot4.png', import.meta.url).href, ind: 4, spot: 'Hussain Sagar'},
        {src : new URL('../images/Screenshot5.png', import.meta.url).href, ind: 5, spot: 'Statue of Equality'},
        {src : new URL('../images/Screenshot6.png', import.meta.url).href, ind: 6, spot: 'Nehru Zoological Park'},
        {src : new URL('../images/Screenshot7.png', import.meta.url).href, ind: 7, spot: 'Cable Bridge'},
        {src : new URL('../images/Screenshot8.png', import.meta.url).href, ind: 8, spot: 'Birla Mandir'},
        {src : new URL('../images/Screenshot9.png', import.meta.url).href, ind: 9, spot: 'Taj Falaknuma Palace'}
    ];


    return (
        <div>
            <h1 style={{textAlign:'center', marginBottom:'30px', marginTop:'20px', color:'#454545', fontFamily:'cursive'}}>Tourist Places to visit in Hyderabad</h1>
            <div className='main-page'>

                {IMAGES.map((img, ind) => (
                    <div key={img.ind}>
                        <Modala
                            imgsrc={img.src}
                            key={img.ind}
                            indexx={img.ind}
                            images={IMAGES}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;


