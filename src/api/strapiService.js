const sourceApiUrl = 'https://beta.account.babysonbroadway.com/strapi/products'; // Replace with your source API URL
const strapiApiUrl = 'http://localhost:1337/api/testDatas'; // Replace with your Strapi API URL
const strapiAuthToken = 'YOUR_JWT_TOKEN'; // Replace with your actual JWT token

const fetchDataFromSource = async () => {
  try {
    const response = await fetch(sourceApiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data from source:', error);
    throw error;
  }
};

const postDataToStrapi = async (data) => {
  try {
    const response = await fetch(strapiApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${strapiAuthToken}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to post data to Strapi:', error);
    throw error;
  }
};

export { fetchDataFromSource, postDataToStrapi };
