import React from 'react';
import Graphin, { Behaviors } from '@antv/graphin';

const data = {
    nodes: [
        {
            id: 'node-0',
            x: 100,
            y: 100,
        },
        {
            id: 'node-1',
            x: 200,
            y: 200,
        },
        {
            id: 'node-2',
            x: 100,
            y: 300,
        },
    ],
    edges: [
        {
            source: 'node-0',
            target: 'node-1',
        },
    ],
};

const { DragCanvas, ZoomCanvas, DragNode, ActivateRelations } = Behaviors;
export default () => {
    return (
        <Graphin data={data} layout={{ type: 'preset' }}>
            <ZoomCanvas disabled />
        </Graphin>
    );
};