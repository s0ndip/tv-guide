import '../styles/globals.css'; // Importing global styles
import 'semantic-ui-css/semantic.min.css'; // Importing Semantic UI CSS for styling
import { Container } from 'semantic-ui-react'; // Importing Semantic UI's Container component

// Custom App component that wraps your pages with global configurations
function MyApp({ Component, pageProps }) {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
