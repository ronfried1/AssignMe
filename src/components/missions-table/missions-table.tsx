import { Mission, SoldierType } from "@/shared/types";
import Soldier from "../soldier/soldier";
import { useState } from "react";

interface MissionTableProps {
  missions: Mission[];
  updateMissions: (newMissions: Mission[]) => void;
}

const MissionTable: React.FC<MissionTableProps> = ({
  missions,
  updateMissions,
}) => {
  const [missionData, setMissionData] = useState(missions);
  const [draggedSoldier, setDraggedSoldier] = useState<SoldierType | null>(
    null
  );

  const maxShifts = Math.max(
    ...missions.map((mission) => mission.shifts.length)
  );

  const handleDragStart = (soldier: SoldierType) => {
    setDraggedSoldier(soldier);
  };

  const handleDrop = (missionIndex: number, shiftIndex: number) => {
    if (draggedSoldier !== null) {
      const updatedMissions = [...missionData];
      const targetShift = updatedMissions[missionIndex].shifts[shiftIndex];

      // Remove the dragged soldier from the original shift
      updatedMissions.forEach((mission, mIndex) => {
        mission.shifts.forEach((shift) => {
          shift.soldiers = shift.soldiers.filter(
            (s) => s.name !== draggedSoldier.name
          );
        });
      });

      console.log(targetShift);

      // Add the dragged soldier to the target shift
      targetShift.soldiers.push(draggedSoldier);

      setMissionData(updatedMissions);
      setDraggedSoldier(null);

      // Update the missions in the parent component
      updateMissions(updatedMissions);
    }
  };

  return (
    <div className="overflow-x-auto shadow-xl">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th className="table-zebra-th"></th>
            {missions.map((mission) => (
              <th key={mission.mission_id} className="table-zebra-th">
                {mission.mission_id}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: maxShifts }).map((_, index) => (
            <tr key={index}>
              <td className="table-zebra-td">{index + 1}</td>
              {missions.map((mission, missionIndex) => {
                const shift = mission.shifts[index];
                return (
                  <td
                    key={
                      shift
                        ? `${mission.mission_id}${shift.shift_id} `
                        : mission.mission_id
                    }
                    className="table-zebra-td"
                  >
                    {shift ? (
                      <div
                        draggable
                        onDrop={() => handleDrop(missionIndex, index)}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        <br />
                        {shift.start} - {shift.end}
                        <br />
                        <strong>Soldiers:</strong>
                        <ul>
                          {shift.soldiers.map((soldier, soldierIndex) => (
                            <li
                              key={soldier.name}
                              draggable
                              onDragStart={() => handleDragStart(soldier)}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={() => handleDrop(missionIndex, index)}
                            >
                              {soldier.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionTable;
