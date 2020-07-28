import React from 'react'

import Loader from '../components/Loader/Loader'

export default function(Component) {
  return function({ isLoading }) {
    return (
      <>
        <Component />
        {isLoading && <Loader />}
      </>
    )
  }
}
