import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getProductById = (id) =>
  axios.get(\`\${API_BASE}/products/\${id}\`);
