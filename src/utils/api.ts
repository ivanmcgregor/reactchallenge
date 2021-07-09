import useSWR from 'swr';
import {useState} from 'react';

const fetcher = (...rest) => fetch(...rest).then(res => res.json())

export interface IPlayer {
  realName: string;
  playerName: string;
  asset: string;
}

export function usePlayers() {
  const { data, error } = useSWR<{data: IPlayer[]; error: any;}>(`/api/players/`, fetcher)

  return {
    players: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useSubmitPlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitPlayer = (player: IPlayer) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    // API Likely to change once it is known what this does
    fetch('/api/player/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(player),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit player.');
        }
        setIsSuccess(true);
      })
      .catch(err => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    isSuccess,
    isLoading,
    isError,
    submitPlayer,
  }
}