import React, { useState } from 'react';
import './PricesSection.css';


const enumCat = {
    men: <PricesMen />,
    women: <PricesWomen />,
    children: <PricesChildren />
}

function PricesSection() {

    /* handle selected category */
    const [category, setCategory] = useState('women');
    const handleCategory = (cat) =>{
        setCategory(cat);
    }

    return (
      <>
        <div className='section-prices' id='section-prices'>
            <div className='section-prices-image-tile'></div>
            <div className='section-prices-tile'>
                <div className='section-title'>Preise</div>
                <div className='section-prices-container'>
                    <div className='section-prices-selection-container'>
                        <button className={category==='women' ? 'cat-button active' : 'cat-button'} onClick={() => handleCategory('women')}>
                            Frauen
                        </button>
                        <button className={category==='men' ? 'cat-button active' : 'cat-button'} onClick={() => handleCategory('men')}>
                            Männer
                        </button>
                        <button className={category==='children' ? 'cat-button active' : 'cat-button'} onClick={() => handleCategory('children')}>
                            Kinder (bis 16)
                        </button>
                    </div>
                    <div className='section-prices-wrapper'>
                        {enumCat[category]}
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

/* cat and prices for men */
function PricesMen(){
    return (
        <>
        <div className='price-row'>
            <span className='description'>Herrenhaarschnitt ohne waschen</span>
            <span className='price'>37.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Herrenhaarschnitt mit waschen</span>
            <span className='price'>43.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Nur Konturen ohne Bart schneiden</span>
            <span className='price'>25.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Bart schneiden mit Konture</span>
            <span className='price'>35.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Komplette Rasur</span>
            <span className='price'>45.-</span>
        </div>
        </>
    );
}

/* cat and prices for women */
function PricesWomen(){
    return (
        <>
        <div className='price-row'>
            <span className='description'>Waschen, föhnen oder wickeln</span>
            <span className='price'>ab 44.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Trendiger kurz Haarschnitt</span>
            <span className='price'>ab 61.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Klassischer Haarschnitt mit föhnen oder wickeln</span>
            <span className='price'>ab 71.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Dauerwelle mit föhnen oder wickeln</span>
            <span className='price'>ab 102.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Dauerwelle mit schneiden, föhnen oder wickeln</span>
            <span className='price'>ab 129.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Farbe mit föhnen oder wickeln</span>
            <span className='price'>ab 93.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Farbe mit schneiden, föhnen oder wickeln</span>
            <span className='price'>ab 120.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Meches mit föhnen oder wickeln</span>
            <span className='price'>ab 99.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Meches mit schneiden, föhnen oder wickeln</span>
            <span className='price'>ab 126.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Hochsteckfrisur / Flechtfrisur</span>
            <span className='price'>ab 35.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Augenbrauen zupfen und färben</span>
            <span className='price'>25.-</span>
        </div>
        </>
    );
}


/* cat and prices for children */
function PricesChildren(){
    return (
        <>
        <div className='price-row'>
            <span className='description'>Jungs bis 3 Jahre</span>
            <span className='price'>15.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Jungs 3-7 Jahre</span>
            <span className='price'>21.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Jungs 7-12 Jahre</span>
            <span className='price'>25.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Jungs 12-16 Jahre</span>
            <span className='price'>29.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Girls bis 3 Jahre</span>
            <span className='price'>15.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Girls 3-7 Jahre</span>
            <span className='price'>23.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Girls 7-12 Jahre</span>
            <span className='price'>31.-</span>
        </div>
        <div className='price-row'>
            <span className='description'>Girls 12-16 Jahre</span>
            <span className='price'>43.-</span>
        </div>
        </>
    );
}


export default PricesSection;
