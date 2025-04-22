import React from 'react';
import ReactDOM from 'react-dom/client';
import { SocialIcon } from 'react-social-icons'
import './Index.css';

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  flexDirection: "column",
  height: "100vh" 
}
const heading = {
  textAlign: "center",
  fontSize: 25,
  }
const quote = {
  textAlign: "center",
  fontSize: 50,
  }
 const text = {
  boxShadow: "3px 3px 15px grey",
  padding: 10,
  width: "50%",
  height: "auto",
  borderRadius: 25
 }


class RandomQuoteMachinel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.getRandomIndex()
    };
    this.getRandomIndex = this.getRandomIndex.bind(this);
    this.handleNextIndex = this.handleNextIndex.bind(this);
  }

  getRandomIndex = () => {
    return Math.floor(Math.random() * 10);
  };

  handleNextIndex = () => {
    this.setState({
      currentIndex: this.getRandomIndex()
    });
  };
  render() {
    const quotations = [
      {
        quote: "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
        author : "―Bill Watterson"
      },
      {
        quote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there.", 
        author : "—Stephen Chbosky"
      },
      {
        quote: "And now that you don't have to be perfect, you can be good.", 
        author : "—John Steinbeck"
      },
      {
        quote: "Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.",
        author : "―Ilona Andrews"
      },
      {
        quote: "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
        author : "―Charles Darwin"
      },
      {
        quote: "I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.",
        author : "―Holly Black"
      },
      {
        quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
        author : "—J.K. Rowling"
      },
      {
        quote: "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
        author : "—Ray Bradbury"
      },
      {
        quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        author : "—Oscar Wilde"
      },
      {
        quote: "I've had the sort of day that would make St. Francis of Assisi kick babies.",
        author : "―Douglas Adams"
      }
    ]; 
    const index = this.state.currentIndex        
    const twit = quotations[index].quote + " " + quotations[index].author;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twit)}`;
    return (
      <div>
        <div id="quote-box" style={styles}>
        <div style={heading}>
          <h1>Quote</h1>
          <p style={quote}>&quot;</p>
        </div>
          <div id="text" style={text}>
            <p>{quotations[index].quote}</p>
          </div>
          <div id="author">
            <p>{quotations[index].author}</p>
          </div>
          <br/>
          <br/>
          <button onClick={this.handleNextIndex} id="new-quote">Next Quote!</button>
          <br/>
          <br/>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" id="tweet-quote">
        <SocialIcon url="https://twitter.com" />
      </a>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RandomQuoteMachinel />);
