import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'
import { sizes } from '../constants'

const PageWrapper = styled(Container)`
  max-width: ${({ $maxWidth }) => $maxWidth ? $maxWidth : sizes.defaultContainer}px;
  width: 100%;
`

const Page = ({ children, ...props }) => (
  <PageWrapper $maxWidth={props.maxWidth} className={props.className}>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </PageWrapper>
)

Page.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.number,
}

Page.defaultProps = {
  maxWidth: null,
  children: [],
}

export default Page
