import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

const PageMetaTitle = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
)

PageMetaTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageMetaTitle
