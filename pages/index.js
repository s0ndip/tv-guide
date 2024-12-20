import Head from 'next/head'; // Correct import statement for Head
import { Button, Container, Header, Message, Segment } from 'semantic-ui-react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TV Guide for Indian TV Channels</title>
        <meta name="description" content="Access TV Guide directly from the API." />
      </Head>

      <Container textAlign="center" style={{ marginTop: '50px' }}>
        <Header as="h1" style={{ fontSize: '3em' }}>
          TV Guide by s0ndip
        </Header>

        <Message info style={{ maxWidth: '600px', margin: '20px auto' }}>
          <Message.Header>Access TV Guide for Indian TV Channels</Message.Header>
          <p>
            You can access the TV Guide. The TV Guide you can use in OTT apps such as OTT Navigator and Tivimate.
          </p>
        </Message>

        <Segment style={{ maxWidth: '600px', margin: '20px auto' }}>
          <Header as="h3" style={{ fontSize: '1.5em' }}>
            M3U Playlist
          </Header>
          <p>
            Click the link below to access or download TV Guide:
          </p>
          <Button 
            primary 
            size="large" 
            href="/jiotv.xml.gz"  // This file should be in the public directory
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ marginTop: '10px' }}
          >
            Download M3U Playlist
          </Button>
        </Segment>

        <Message success style={{ maxWidth: '600px', margin: '20px auto' }}>
          <Message.Header>Note</Message.Header>
          <p>
            This content is for educational purposes only. Please do not misuse or abuse the service. The creators
            are not responsible for any misuse of the content or links provided.
          </p>
        </Message>
      </Container>
    </div>
  );
}
