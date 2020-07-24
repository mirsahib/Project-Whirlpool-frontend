const prod = {
    url: {
     API_URL: 'https://frozen-sierra-86813.herokuapp.com/',
     API_URL_USERS: 'https://frozen-sierra-86813.herokuapp.com/'}
   };
const dev = {
    url: {
        API_URL: 'https://frozen-sierra-86813.herokuapp.com/',
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;