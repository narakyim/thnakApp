import React from 'react'
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Explore our projects! <br className="sm:block hidden"/>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We have a catalog of fun and creative projects that you can do!
        </p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )

export default CardDeal