import React from 'react'

import Loader from '../components/Loader/Loader'

const withLoading = Component => ({ isLoading, ...props }) => {
  return isLoading ? <Loader /> : <Component {...props} />
}

export default withLoading
