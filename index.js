// index.js

// Define currentUser
const currentUser = 'Grace Hopper';

// Define welcomeMessage
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define excitedWelcomeMessage
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define shortGreeting
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Export the variables
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
};

