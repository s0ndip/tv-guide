import Head from 'next/head';
import { Button, Container, Header, Message, Segment } from 'semantic-ui-react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TV Guide for Indian Channels</title>
        <meta name="description" content="Access TV Guide for Indian Channels directly from the API." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container textAlign="center" style={{ marginTop: '50px' }}>
        <Header as="h1" style={{ fontSize: '3em' }}>
          TV Guide for Indian Channels by s0ndip
        </Header>
        <main>
          <Message info style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Message.Header>Access TV Guide for Indian Channels</Message.Header>
            <p>
              You can access the TV Guide directly from API. The TV Guide you can use
              in OTT apps such as OTT Navigator and Tivimate.
            </p>
          </Message>
          <Segment style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Header as="h3" style={{ fontSize: '1.5em' }}>
              M3U Playlist
            </Header>
            <p>Click the links below to access or download TV Guide:</p>
            <Button 
              primary 
              size="large" 
              href="/jiotv.xml.gz" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ marginTop: '10px' }}
              aria-label="Download Jio TV Guide"
            >
              Download Jio TV Guide
            </Button>
            <Button 
              secondary 
              size="large" 
              href="/tataplay.xml.gz" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ marginTop: '10px', marginLeft: '10px' }}
              aria-label="Download TataPlay TV Guide"
            >
              Download TataPlay TV Guide
            </Button>
          </Segment>
          <Message success style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Message.Header>Note</Message.Header>
            <p>
              This content is for educational purposes only. Please do not misuse or abuse the service. The creators
              are not responsible for any misuse of the content or links provided.
            </p>
          </Message>
        </main>
      </Container>
    </div>
  );
}
