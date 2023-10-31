import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface NameListProps {
  names: string[];
  selectedNames: string[];
  setSelectedNames: React.Dispatch<React.SetStateAction<string[]>>;
}

const NameList: React.FC<NameListProps> = ({
  names,
  selectedNames,
  setSelectedNames,
}) => {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const updatedSelectedNames = [...selectedNames];
    const [draggedName] = updatedSelectedNames.splice(sourceIndex, 1);
    updatedSelectedNames.splice(destinationIndex, 0, draggedName);

    setSelectedNames(updatedSelectedNames);
  };

  return (
    <div className="flex justify-between">
      <Droppable droppableId="names" direction="vertical">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-1/2 border p-4"
          >
            <h2 className="text-xl font-semibold mb-4">Available Names</h2>
            {names.map((name, index) => (
              <Draggable key={name} draggableId={name} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white border p-2 mb-2 cursor-pointer"
                  >
                    {name}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="selectedNames" direction="vertical">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-1/2 border p-4"
          >
            <h2 className="text-xl font-semibold mb-4">Selected Names</h2>
            <DragDropContext onDragEnd={handleDragEnd}>
              {selectedNames.map((name, index) => (
                <Draggable key={name} draggableId={name} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-white border p-2 mb-2 cursor-pointer"
                    >
                      {name}
                    </div>
                  )}
                </Draggable>
              ))}
            </DragDropContext>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default NameList;
