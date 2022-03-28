/** @jsx jsx */
import { memo } from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content, width}) => {

  return (
    <a href={content} target="_blank" rel='noreferrer'>
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
      `}
    > 
      {/* <a href={content} target="_blank" rel='noreferrer'> */}
      {/* <img src={content} alt={content} style={{objectFit:'contain',maxHeight:'100%'}}/> */}
      {/* </a> */}
    </div>
    </a>
  )
}

export default memo(Slide)
