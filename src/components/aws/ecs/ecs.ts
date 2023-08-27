import { fetchEx } from '@/tools/fetch'

export interface EcsService {
    id: string
    account_alias: string
    cluster_name: string
    service_name: string
    operate_At: string
}

export const defaultEcsService: EcsService = {
    id: '',
    account_alias: '',
    cluster_name: '',
    service_name: '',
    operate_At: ''
}

export const getEcsServices = async (page: number, limit: number, account_id: string) => {
    let ecsEndpoint =
        import.meta.env.REACT_APP_AWS_SERVER + 'v1/ecsservices?page=' + page + '&limit=' + limit
    if (account_id) {
        ecsEndpoint += '&account_id=' + account_id
    }

    return fetchEx(ecsEndpoint)
}

export const getEcsServiceDetail  = async (id: string) => {
    const ecsEndpoint =
        import.meta.env.REACT_APP_AWS_SERVER + 'v1/ecsservices/' + id
    return fetchEx(ecsEndpoint)
}