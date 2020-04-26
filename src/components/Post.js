
import React from 'react'
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'
// import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, path, date, body}) => (
        <Card>
          <CardBody>
            <CardTitle>
              <Link> {title}</Link>
            </CardTitle>
            <CardSubtitle>
              <span className="text-info">{date}</span> by{' '}
              <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
            <Link
              to={path}
              className="btn btn-outline-primary float-right text-uppercase"
            >
              Read more
            </Link>
          </CardBody>
        </Card>
      )
export default Post
