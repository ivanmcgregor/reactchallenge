import React from 'react';
import BButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSubmitPlayer, IPlayer} from '../utils/api';
import Alert from 'react-bootstrap/Alert'

function PlayerCard({player}: {player?: IPlayer}) {
  const { isSuccess, isLoading, isError, submitPlayer } = useSubmitPlayer();

  if (!player) {
    return (<Card>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <div>Select a player to continue.</div>
      </Card.Body>
    </Card>)
  }

  const {realName, playerName, asset} = player;

  return (
    <Card>
      <Card.Body>
        <Alert show={isSuccess} variant="success">
          The player was selected successfully.
        </Alert>
        <Alert show={isError} variant="danger">
          It was not possible to select the player. Please try again or contact support.
        </Alert>
        <dl>
          <dt>Real name</dt>
          <dd>{realName}</dd>

          <dt>Player name</dt>
          <dd>{playerName}</dd>

          <dt>Asset</dt>
          <dd>{asset}</dd>
        </dl>
        <BButton onClick={() => submitPlayer(player)} disabled={isLoading}>
          Select this player
        </BButton>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
