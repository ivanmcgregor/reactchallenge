import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PlayerCard.scss'

interface Props {
  isActive?: boolean;
  realName: string;
  playerName: string;
  asset: string;
  onClick: () => void;
}

function PlayerCard({ isActive, realName, playerName, asset, onClick }: Props) {
  const cardClass = `player-card mb-2${isActive ? ' active' : ''}`
  return (
    <Card className={cardClass} onClick={onClick}>
      <Card.Body>
        <div className="text-truncate">{realName}</div>
        <div className="text-truncate">{playerName}</div>
        <div className="text-truncate">{asset}</div>
        <Button className= "visually-hidden" onClick={onClick}>
          select this player
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
