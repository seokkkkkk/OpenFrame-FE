import { useState } from "react";
import { Stage } from "react-konva";

import BackGroundLayer from "./BackGroundLayer";
import PresentationLayer from "./PresentationLayer";

function TreeGraph({
    selectedNode,
    setSelectedNode,
    nodes,
    links,
    addChildNode,
    setNodes,
    stageRef,
    scale,
    position,
    handleWheel,
    context,
    isReady,
}) {
    const [hoveredNode, setHoveredNode] = useState(null);
    const [memoedNode, setMemoedNode] = useState(null);

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onWheel={handleWheel}
            ref={stageRef}
            scaleX={scale}
            scaleY={scale}
            x={position.x}
            y={position.y}
            draggable
            style={{
                background: "#F4F8FD",
                backgroundImage: "radial-gradient(#D9D9D9 10%, transparent 0)",
                backgroundPosition: "0 0, 10px 10px",
                backgroundSize: "20px 20px",
            }}
            onDragStart={(e) => {}}
            onDragEnd={(e) => {}}
        >
            <BackGroundLayer
                setSelectedNode={setSelectedNode}
                setMemoedNode={setMemoedNode}
            />
            {isReady && (
                <PresentationLayer
                    nodes={nodes}
                    links={links}
                    hoveredNode={hoveredNode}
                    memoedNode={memoedNode}
                    selectedNode={selectedNode}
                    setNodes={setNodes}
                    setHoveredNode={setHoveredNode}
                    setMemoedNode={setMemoedNode}
                    setSelectedNode={setSelectedNode}
                    addChildNode={addChildNode}
                    context={context}
                />
            )}
        </Stage>
    );
}

export default TreeGraph;
