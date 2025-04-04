import APIConfig from "./api.config"

export const LatestCollectionAPI = async (status: string) => {
    const response = await APIConfig.get('/api/prod/get-all-product', {
        params: {
            status
        }
    })
    return response.data.data;
}