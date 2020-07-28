import React from 'react'

import Loader from '../components/Loader/Loader'

const withLoading = Component => ({ isLoading }) => {
  return isLoading ? <Loader /> : <Component />
}

export default withLoading
