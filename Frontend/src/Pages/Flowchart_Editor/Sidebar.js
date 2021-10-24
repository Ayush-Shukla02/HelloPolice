 import React from 'react';

 export default () => {
  const onDragStart = (event, nodeType) => {
     event.dataTransfer.setData('application/reactflow', nodeType);
     event.dataTransfer.effectAllowed = 'move';
   };

   return (
     <aside className="sidebar">
       <div className="description">You can drag these nodes to the pane on the right.</div>
       <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
         Start Node
       </div>
       <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Node
       </div>
       <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
         End Node
       </div>
     </aside>
   );
 };