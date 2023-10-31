import React from "react";
import Soldier from "../soldier/soldier";
import { Mission } from "@/shared/types";

type Props = {
  index: number;
  missions: Mission[];
};

const MissionColumns = ({ index, missions }: Props) => {
  return (
    <tr key={index}>
      <td className="table-zebra-td">{index + 1}</td>
      {missions.map((mission) => {
        const shift = mission.shifts[index];
        if (shift) {
          return (
            <td key={shift.shift_id} className="table-zebra-td">
              {shift.shift_id}
              <br />
              {shift.start} - {shift.end}
              <br />
              <strong>Soldiers:</strong>
              <ul>
                {shift.soldiers.map((soldier) => (
                  <Soldier name={soldier.name} />
                ))}
              </ul>
            </td>
          );
        } else {
          return <td key={mission.mission_id} className="table-zebra-td"></td>;
        }
      })}
    </tr>
  );
};

export default MissionColumns;
