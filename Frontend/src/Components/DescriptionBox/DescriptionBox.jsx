import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (101)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Featuring a lightweight yet durable construction, these shoes are crafted with breathable mesh uppers to keep your feet cool and comfortable during intense workouts. The responsive cushioning in the midsole provides exceptional energy return, helping you maintain your pace and push through fatigue.With a supportive heel counter and integrated arch support, these shoes offer stability and balance with every step. The rugged rubber outsole delivers superior traction on a variety of surfaces, ensuring you stay steady and confident in any conditions.</p>
        <p>This description provides potential buyers with detailed information about the product's features, benefits, and specifications, helping them make an informed purchasing decision.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
