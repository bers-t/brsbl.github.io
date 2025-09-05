const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.post('/create-checkout-session', async (req, res) => {
  // Mock session response for testing
  const mockSession = {
    id: 'cs_test_mock_session_id_123',
    object: 'checkout.session',
    payment_status: 'unpaid',
    url: 'https://checkout.stripe.com/test/mock'
  };
  
  res.json({ id: mockSession.id });
});

app.listen(4242, () => console.log(`Test server listening on port 4242!`));