import useSWR from 'swr';

const fetcher = (...rest) => fetch(...rest).then(res => res.json())

export interface IPlayer {
  realName: string;
  playerName: string;
  asset: string;
}

export function usePlayers () {
  const { data, error } = useSWR<{data: IPlayer[]; error: any;}>(`/api/players/`, fetcher)

  return {
    players: data,
    isLoading: !error && !data,
    isError: error
  }
}