import React from 'react'
import { Header, Item } from 'semantic-ui-react'
import axios from 'axios';


class mySpace extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/my_posts')
      .then( res => this.setState({ posts: res.data, }))
  }

  ListPosts = () => {
    const { posts, } = this.state

    if (posts.length <= 0)
      return <h2>No Posts yet, add a post!</h2>
    return posts.map(p => (
        <Item>
          <Item.Content>
            <Item.Header as='h2'>{p.title}</Item.Header>
            <Item.Meta as='h3'>{p.body}</Item.Meta>
          </Item.Content>
        </Item>
    ))
}
  
  render() {
    return (
      <>
      <div>
        <Header textAlign="center" as="h1">This is my Space!</Header>
      </div>
      <br />
      <br />
      <Item.Group>
        {this.ListPosts()}
      </Item.Group>
      </>
    )
  }
}
  
  export default mySpace;