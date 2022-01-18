const token = '5082903760:AAGZo9CqZ0JsFLTLktcPVS5_DY0zX9WIbAA';
const github = {
  version: '3.0.0',
  // optional
  debug: true,
  protocol: 'https',
  host: 'api.github.com',
  pathPrefix: '',
  timeout: 5000,
  headers: {
    'user-agent': 'Telegram Github Search Bot'
  }
};

export default {
  token,
  github
};
