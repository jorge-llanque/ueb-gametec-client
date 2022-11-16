import React from 'react'
import image from '../../utils/static/default-image.svg';

export const DefaultView = () => {
  return (
    <div>
      <img
        src={image}
        alt={'default-children'}
        style={{
          width: '100%',
        }}
      />
    </div>
  )
}
