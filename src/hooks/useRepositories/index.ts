import getRepositories from '../../services/repositories/get'
import { useQuery } from '@tanstack/react-query'

export default function useRepositories(techName: string, sort: string) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['repositories', techName, sort],
    queryFn: () => getRepositories(techName, sort),
  })

  return { repositories: data, isLoading, isError, error }
}
