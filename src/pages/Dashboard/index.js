import React from "react"
import MetaTags from "react-meta-tags"
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import BlogList from "./BlogList"
import RightBar from "./RightBar"

function Index(props) {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Il mio personal MBA | Antonio de Sanctis</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Blog" breadcrumbItem="Blog List" />
          <Row>
            <BlogList />
            <RightBar />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Index
