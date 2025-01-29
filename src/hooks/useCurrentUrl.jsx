import { useEffect, useState } from 'react';

const useCurrentUrl = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      setUrl(currentUrl);
    }
  }, []);

  return url;
};

export default useCurrentUrl;
