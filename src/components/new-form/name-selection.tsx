import { SoldierType } from "@/shared/types";
import { useState } from "react";

interface NameSelectionProps {
  data: {
    name: string;
    email: string;
    dob: string;
    gender: string;
    address: string;
    soldiers: SoldierType[];
    selectedSoldiers: SoldierType[];
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameSelection: React.FC<NameSelectionProps> = ({
  data,
  handleChange,
}) => {
  const [selectedNames, setSelectedNames] = useState<string[]>(
    data.selectedSoldiers.map((soldier) => soldier.name)
  );
  const [availableNames, setAvailableNames] = useState<string[]>(
    data.soldiers
      .map((soldier) => soldier.name)
      .filter((name) => !selectedNames.includes(name))
  );

  const handleNameSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    if (selectedNames.includes(value)) {
      setSelectedNames((prevSelectedNames) =>
        prevSelectedNames.filter((name) => name !== value)
      );
    } else {
      setSelectedNames((prevSelectedNames) => [...prevSelectedNames, value]);
    }

    handleChange(event);
  };

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    name: string
  ) => {
    event.dataTransfer.setData("name", name);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetList: "availableNames" | "selectedNames"
  ) => {
    const name = event.dataTransfer.getData("name");
    const updatedSelectedNames = [...selectedNames];
    const updatedAvailableNames = [...availableNames];

    if (targetList === "availableNames") {
      updatedAvailableNames.push(name);
      updatedSelectedNames.splice(updatedSelectedNames.indexOf(name), 1);
    } else {
      updatedSelectedNames.push(name);
      updatedAvailableNames.splice(updatedAvailableNames.indexOf(name), 1);
    }

    setSelectedNames(updatedSelectedNames);
    setAvailableNames(updatedAvailableNames);
  };

  return (
    <div className="flex justify-between my-8">
      <div
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "availableNames")}
        className="w-1/2  p-4 overflow-hidden h-80"
      >
        <h2 className="text-xl font-semibold mb-4">Available Names</h2>
        <div className="overflow-x-auto h-72">
          <table className="table table-pin-rows">
            <tbody>
              {availableNames.map((name) => (
                <tr>
                  <td
                    key={name}
                    draggable
                    onDragStart={(e) => handleDragStart(e, name)}
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, "availableNames")}
                  >
                    {name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "selectedNames")}
        className="w-1/2 p-4 overflow-x-auto h-80"
      >
        <h2 className="text-xl font-semibold mb-4">Selected Names</h2>
        <table className="table table-pin-rows">
          <tbody>
            {selectedNames.map((name) => (
              <tr>
                <td
                  key={name}
                  draggable
                  onDragStart={(e) => handleDragStart(e, name)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, "availableNames")}
                >
                  {name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NameSelection;
