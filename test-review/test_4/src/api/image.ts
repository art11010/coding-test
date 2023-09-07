import instance from './axiosCustom';

export const getImages = async (page: number, limit: number) => {
  try {
    const response = await instance.get(`/v2/list?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
