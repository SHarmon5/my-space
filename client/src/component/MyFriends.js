import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { members: [], };

  componentDidMount() {
    axios.get('/api/my_members')
      .then( res => this.setState({ members: res.data, }) );
  }

  render() {
    const { members, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { members.map( member =>
          <Card key={member.id}>
            <Image src={member.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { member.firstname }
              </Card.Header>
              <Card.Header>
                { member.firstname }
              </Card.Header>
              <Card.Header>
                { member.lastname }
              </Card.Header>
              <Card.Header>
                { member.from }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyFriends;
