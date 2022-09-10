import React, { useEffect } from 'react';
import styleInject from '../node_modules/style-inject/dist/style-inject.es.js';
import Graphin, { Behaviors } from '@antv/graphin';
import G6 from '@antv/g6';

var css_248z = "button {\n  font-size: 60px;\n}";
styleInject(css_248z);

var Button = function (props) {
    return React.createElement("button", null, props.label);
};

var data$1 = {
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
Behaviors.DragCanvas; var ZoomCanvas = Behaviors.ZoomCanvas; Behaviors.DragNode; Behaviors.ActivateRelations;
var Graph = (function () {
    return (React.createElement(Graphin, { data: data$1, layout: { type: 'preset' } },
        React.createElement(ZoomCanvas, { disabled: true })));
});

// 定义数据源
var data = {
    // 点集
    nodes: [
        {
            id: 'node1',
            x: 100,
            y: 200,
        },
        {
            id: 'node2',
            x: 300,
            y: 200,
        },
    ],
    // 边集
    edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        {
            source: 'node1',
            target: 'node2',
        },
    ],
};
var G6Graph = (function () {
    useEffect(function () {
        // 创建 G6 图实例
        var graph = new G6.Graph({
            container: 'mountNode',
            // 画布宽高
            width: 800,
            height: 500,
        });
        // 读取数据
        graph.data(data);
        // 渲染图
        graph.render();
    }, []);
    return (React.createElement("div", { id: "mountNode" }));
});

export { Button, G6Graph, Graph };
//# sourceMappingURL=index.js.map
