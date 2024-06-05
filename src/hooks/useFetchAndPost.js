import { useState, useEffect } from 'react';
import { fetchDataFromSource, postDataToStrapi } from '../api/strapiService';

const useFetchAndPost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const sourceData = await fetchDataFromSource();
        console.log('count', sourceData.data.length)
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
        setData(sourceData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchAndPost;
