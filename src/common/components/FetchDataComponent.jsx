import React from 'react';
import useFetchAndPost from '../../hooks/useFetchAndPost';
import { fetchDataFromSource, postDataToStrapi } from '../../api/strapiService';

const FetchDataComponent = () => {
  // const { data, error, loading } = useFetchAndPost();

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const fetchData = async () => {
    try {
      const sourceData = await fetchDataFromSource();
      for (const item of sourceData.data) {
        console.log('item', item);
        const postData = {
          data: {
            name: item.name,
            type: item.type,
            totalsales: item.total_sales
          }
        }
      
        await postDataToStrapi(postData);
      }
    } catch (error) {
    } finally {
    }
  };
  return (
    <div>
      <h1>Data</h1>
      <button onClick={()=> fetchData()}>Fetch here</button>
    </div>
  );
};

export default FetchDataComponent;