import axios from "axios";
import useSWR from "swr";

const useGetPhoto = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);

  const { data, error } = useSWR(`/express_backend`, fetcher);

  return {
    photoDetails: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetPhoto;
