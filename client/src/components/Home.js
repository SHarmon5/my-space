import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { members: [], };
  
  componentDidMount() {
    axios.get('/api/members')
      .then( res => this.setState({ members: res.data, }))
  }
  
  sample = () => {
    const { members, } = this.state;

    if (members.length) {
      const index = Math.floor(Math.random() * members.length);
      return members[index];
    } else {
      return null;
    }
  }

  downVote = (id) => {
    let { members, } = this.state
    this.setState({ members: members.filter( m => m.id !== id ) })
  }

  upVote = (id) => {
    let { members, } = this.state;
    axios.put(`/api/members/${id}`)
      .then( res => this.setState({ members: members.filter( m => m.id !== id ) }) )
  }
  
  
  render() {
    const mem = this.sample();

    if (mem) {
      return (
        <div>
          <br />
          <Header as='h1'>Add a Friend?</Header>
          <br />
          <Card key={mem.id}>
            <Image src={mem.avatar} />
            <Card.Content>
              <Card.Header>
                { mem.firstname }
              </Card.Header>
              <Card.Header>
                { mem.lastname }
              </Card.Header>
              <Card.Description>
                { mem.from }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.downVote(mem.id)}>
                <Icon name="trash alternate outline" />
              </Button>
              <Button color="green" icon basic onClick={() => this.upVote(mem.id)}>
                <Icon name="plus" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_members">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Friends</Header>
    }
  }
}

export default Home;