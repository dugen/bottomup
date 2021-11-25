import React from "react"
import Navbar from "../components/NavBar/NavBar";
import {graphql} from "gatsby";



export default function Home({data}) {
  console.log(data)
  const markdown= data.allMarkdownRemark.edges
console.log(markdown)
  return(
  <div>
    <Navbar/>
    {markdown.map(markdown =>(
        <div>
        <h2 id={markdown.node.frontmatter.link} key={markdown.node.frontmatter.id}>
          {markdown.node.frontmatter.title}
        </h2>
        <div dangerouslySetInnerHTML={{__html: markdown.node.html }}/>
        </div>
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