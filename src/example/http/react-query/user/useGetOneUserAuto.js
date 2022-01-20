import {useQuery} from 'react-query'
import {getOneUserForId} from '../../api/user'

const Query = id => {
  const query = useQuery(['getOneUserAuto', id], () => getOneUserForId(id), {
    placeholderData() {
      // return {count: 0, rows: []}
    },
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
    // staleTime: 0,
    enabled: true,
    retry: false,
  })
  return query
}

export default Query
