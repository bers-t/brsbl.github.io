const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Mock endpoint for testing
app.post('/create-checkout-session', (req, res) => {
  // Return a mock session ID
  res.json({ 
    id: 'cs_test_mock_session_123456789',
    status: 'test_mode' 
  });
});

app.listen(4242, () => console.log(`Test server listening on port 4242!`));