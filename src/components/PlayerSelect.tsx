import React, {useState, useMemo} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import PlayerCard from './PlayerCard';
import {usePlayers, IPlayer} from '../utils/api';
import sortBy from 'lodash/sortBy';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SORT_ASC = "ASC";
const SORT_DESC = "DESC";

const sortOptions = [
  { name: 'Sort Asc', value: SORT_ASC },
  { name: 'Sort Desc', value: SORT_DESC },
];

function PlayerSelect() {
  const [sorting, setSorting] = useState<null | string>(null);
  const {players, isLoading, isError} = usePlayers();
  const [selected, setSelected] = useState<null | IPlayer>(null);

  const sortedPlayers = useMemo<IPlayer[]>(() => {
    // if no sorting option was selected, return in server order
    if (!sorting) {
      return players;
    }
    const sorted = sortBy(players, ['realName']);
    if (sorting === SORT_DESC) {
      return sorted.reverse();
    }
    return sorted;
  }, [sorting, players]);

  return (
    <div className="player-select">
      <div className="d-flex">
        <h2 className="flex-grow-1">Overview</h2>
        <ToggleButtonGroup className="mb-2" name="sortoptions-radio">
          {sortOptions.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="secondary"
              value={radio.value}
              checked={sorting === radio.value}
              onChange={(e) => setSorting(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      {isLoading && (<h3>Loading players...</h3>)}
      {isError && (<h3>Could not fetch players.</h3>)}
      {sortedPlayers?.length > 0 && (
        <Row>
          {sortedPlayers.map((player) => (
            <Col key={player.playerName} sm={2} md={3}>
              <PlayerCard
                {...player}
                isActive={player.playerName === selected?.playerName}
                onClick={() => setSelected(player)} ></PlayerCard>
            </Col>
          ))}
        </Row>
      )}
      
    </div>
  );
}

export default PlayerSelect;
