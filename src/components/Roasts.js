import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Container, CardHeader, CardActions, Typography, IconButton, } from '@material-ui/core'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';




import moment from 'moment'
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [{
        "isboast": true,
        "post_body": "post body",
        "post_upvote": 2,
        "post_downvote": 2,
        "date_created": '2001.0.2',
        "last_update": '2001.0.2',
        "s_key": "aasdfe"
      }]
    };
  }
  handleUpVote = (e, id) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/posts/' + id + '/upvote/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify('')
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        fetch("http://127.0.0.1:8000/api/posts/roasts")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                posts: result
              });
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

      });


  }
  handleDownVote = (e, id) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/posts/' + id + '/downvote/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify('')
    })
      .then(res => res.json())
      .then(res => {

        fetch("http://127.0.0.1:8000/api/posts/roasts")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                posts: result
              });
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

      });


  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/posts/roasts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, posts } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container maxWidth="sm">


          {posts.map(post => (

            <Card key={post.id} className="postcard">
              <CardHeader

                title={post.isboast ? 'Boast' : 'Roast'}
                subheader={moment(post.date_created).format('MMMM Do YYYY, h:mm:ss a')}
              />
              <CardContent>
                <Typography variant="body1" >
                  {post.post_body}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Last Update: {moment(post.last_update).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total vote: {post.total}
                </Typography>

              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="Upvote" onClick={(e) => this.handleUpVote(e, post.id)}>
                  <ThumbUpIcon />  {post.post_upvote}
                </IconButton>
                <IconButton aria-label="downvote" onClick={(e) => this.handleDownVote(e, post.id)}>
                  <ThumbDownIcon /> {Math.abs(post.post_downvote)}
                </IconButton>

              </CardActions>
            </Card>


          ))
          }




        </Container >
      );
    }
  }
}

export default Post;