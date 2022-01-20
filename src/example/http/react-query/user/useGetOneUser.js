import {useQuery} from 'react-query'
import {getOneUser} from '../../api/user'

const Query = id => {
  const query = useQuery(['getOneUser', id], () => getOneUser(id), {
    placeholderData() {
      // return {count: 0, rows: []}
    },
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
    // staleTime: 0,
    enabled: false,
    retry: false,
  })
  return query
}

export default Query
