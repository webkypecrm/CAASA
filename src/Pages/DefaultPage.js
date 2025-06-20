import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff; /* White background */
  text-align: center;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1.5s ease-out forwards;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  color: #e74c3c; /* Red color for the icon */
  margin-bottom: 20px;
  animation: ${bounce} 2s infinite;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333; /* Dark gray for the title */
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 1.5s ease-out forwards;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #555; /* Medium gray for the subtitle */
  margin: 0;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 1.5s ease-out forwards;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: #333; /* Dark gray for the text */
  max-width: 600px;
  margin: 20px;
  line-height: 1.5;
  animation: ${slideInLeft} 1.5s ease-out forwards;

  p {
    margin: 15px 0;
  }
`;

const StyledLink = styled(RouterLink)`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #ffffff;
  background: #3498db; /* Blue color for the button */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  animation: ${slideInRight} 1.5s ease-out forwards;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #2980b9; /* Darker blue on hover */
    transform: scale(1.05);
  }
`;

// DefaultPage component
const DefaultPage = () => (
  <PageContainer>
    <Icon icon={faExclamationTriangle} />
    <Title>Page Not Found</Title>
    <Subtitle>It looks like this page doesn’t exist.</Subtitle>
    <Text>
      <p>We couldn’t find the page you were looking for. You might want to check the URL or go back to the homepage.</p>
    </Text>
    <StyledLink to="/">Back to Homepage</StyledLink>
  </PageContainer>
);

export default DefaultPage;
