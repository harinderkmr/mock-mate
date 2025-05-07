// emails/WelcomeEmail.jsx
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Text,
    Heading,
  } from '@react-email/components';
  
  export default function WelcomeEmail({ userEmail }) {
    return (
      <Html>
        <Head />
        <Preview>Welcome to MockMate!🚀</Preview>
        <Body
          style={{
            backgroundColor: '#f3f0ff',
            margin: 0,
            padding: '24px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <Container
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 0 10px rgba(0,0,0,0.05)',
            }}
          >
            <Heading
              style={{
                fontSize: '24px',
                color: '#6b21a8',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Welcome to <span style={{ color: '#7c3aed' }}>MockMate</span>, {userEmail}!
            </Heading>
  
            <Section>
              <Text
                style={{
                  fontSize: '16px',
                  color: '#333',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}
              >
                 Thanks for subscribing!🎉
              </Text>
  
              <Text
                style={{
                  fontSize: '15px',
                  color: '#4b5563',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                MockMate helps you practice mock interviews using AI. We're thrilled to help you sharpen your skills and land your dream job.
              </Text>
  
              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://mock-mate-iota-pied.vercel.app/"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#7c3aed',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  Visit MockMate
                </a>
              </div>
  
              <Text
                style={{
                  fontSize: '13px',
                  color: '#9ca3af',
                  marginTop: '32px',
                  textAlign: 'center',
                }}
              >
                — The MockMate Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
  