import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './api.css';

function Api() {
  const [statsData, setStatsData] = useState([]);

  const fetchStatsData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/games');
      const sortedData = response.data.sort(
        (a, b) => b.BattingAverage - a.BattingAverage
      );
      setStatsData(sortedData);
    } catch (error) {
      console.error('Error fetching player stats:', error);
    }
  };

  useEffect(() => {
    fetchStatsData();
  }, []);

  const filteredStatsData = statsData.filter(
    (player) => player.BattingAverage !== 0
  );

  return (
    <div>
      <h1 className="title">Dodger Stats</h1>
      <div className="stats-container">
        {filteredStatsData.length > 0 ? (
          <table className="stats-table">
            <thead>
              <tr className="table-rows">
                <th className="lable">Player Name</th>
                <th className="lable">Batting Average</th>
                <th className="lable">HRs</th>
                <th className="lable">RBIs</th>
                <th className="lable">OBS</th>
                <th className="lable">OPS</th>
              </tr>
            </thead>
            <tbody>
              {filteredStatsData.map((player) => (
                <tr key={player.PlayerID}>
                  <td className="player-stats">{player.Name}</td>
                  <td className="player-stats">{player.BattingAverage.toFixed(3)}</td>
                  <td className="player-stats">{player.HomeRuns}</td>
                  <td className="player-stats">{player.RunsBattedIn}</td>
                  <td className="player-stats">{player.OnBasePercentage.toFixed(3)}</td>
                  <td className="player-stats">{player.OnBasePlusSlugging.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No player stats available.</p>
        )}
      </div>
    </div>
  );
}

export default Api;