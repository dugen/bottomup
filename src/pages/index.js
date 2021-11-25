import React from "react"
import Navbar from "../components/NavBar/NavBar";
import {graphql} from "gatsby";
import CardComponent from "../components/CardComponent";


export default function Home({data}) {
  const markdown= data.allMarkdownRemark.edges
  return(
  <div>
    <Navbar/>
    {markdown.map(markdown =>(
          <CardComponent markdown={markdown} key={markdown.node.frontmatter.id}/>
          ))}
  </div>
  )
    }
export const query=graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}) {
    edges {
      node {
        html
        frontmatter {
          id
          link
          title
        }
      }
    }
  }
}

`