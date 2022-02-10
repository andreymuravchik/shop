import React from 'react'
import ContentLoader from "react-content-loader"

function GoodsLoadingBlock() {
  return (

    <ContentLoader
      speed={2}
      width={280}
      height={360}
      viewBox="0 0 280 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"

    >
      <rect x="0" y="27" rx="0" ry="0" width="280" height="193" />
      <rect x="0" y="236" rx="0" ry="0" width="325" height="163" />
    </ContentLoader>

  )
}

export default GoodsLoadingBlock
