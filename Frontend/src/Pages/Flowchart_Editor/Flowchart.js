import React from "react";
import "./Flowchart.css";


const nodeTypes ={
    special: customNode,
};

const initialElements = [
    {
      id: '1',
      type: 'special',
      data: { text: 'Input Node' },
      position: { x: 250, y: 25 },
    },
    {
      id: '2',
      type: 'special',
      data: { text: 'Another Node' },
      position: { x: 100, y: 125 },
    },
  ]  


  const NodesDebugger = () => {
    const nodes = useStoreState((state) => state.nodes);
    
    //console.log(nodes);
  
    return null;
  };
  
const Flowchart = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null);
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {
      if (reactflowInstance && elements.length > 0) {
        reactflowInstance.fitView();
      }
    }, [reactflowInstance, elements.length]);
    useEffect(()=>{ if(reactflowInstance && elements.length > 0) reactflowInstance.fitView();},[elements])
  function addNode() {
    
      
      let newid ='0',newx=window.innerWidth * (0.5),newy=window.innerHeight*(0.5);
    
      let element;
      elements.forEach((i)=>{
        if(isNode(i)){
         
          element=i;
          

        }});
      
     
      let newElements = elements;

     newid = element.id;
   
        let num= parseInt(newid) + 1;
        
      newElements.push(
        {
          id: num.toString(),
          type: 'special',
          data: { text: 'Another Node' },
          position: { x: element.position.x+10, y: element.position.y+10},
        }
      ) 
    
      setElements(newElements);

     console.log(elements);
      }
      useEffect(()=>{ setElements(elements)},[elements,setElements])
      const onLoad = useCallback(
        (rfi) => {
          if (!reactflowInstance) {
            setReactflowInstance(rfi);
            console.log('flow loaded:', rfi);
          }
        },
        [reactflowInstance]
      );
    return (
      <div className = 'flowchart' style={{ height: '100vh' }}>
        <button onClick = {addNode} > JUST A BUTTON </button>
      
      <ReactFlow elements={elements} nodeTypes={nodeTypes}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      deleteKeyCode={46}
      onLoad = {onLoad}>
      
            
          
            
              
            <NodesDebugger /> </ReactFlow>
    
         
        </div>
    )
}

export default Flowchart;
