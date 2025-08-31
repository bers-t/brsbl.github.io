const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Mock checkout session endpoint for testing
app.post('/create-checkout-session', async (req, res) => {
  // Return a mock session ID for testing
  res.json({ 
    id: 'cs_test_mock_session_123456789',
    status: 'test_mode',
    message: 'Mock checkout session created successfully'
  });
});

app.listen(4242, () => console.log(`Test server listening on port 4242!`));