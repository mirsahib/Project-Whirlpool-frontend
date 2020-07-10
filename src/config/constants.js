const prod = {
    url: {
     API_URL: 'https://myapp.herokuapp.com',
     API_URL_USERS: 'https://myapp.herokuapp.com/users'}
   };
const dev = {
    url: {
        API_URL: 'http://127.0.0.1:8000/'
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;