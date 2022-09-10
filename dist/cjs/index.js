'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styleInject = require('../node_modules/style-inject/dist/style-inject.es.js');
var Graphin = require('@antv/graphin');
var G6 = require('@antv/g6');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);
var Graphin__default = /*#__PURE__*/_interopDefaultLegacy(Graphin);
var G6__default = /*#__PURE__*/_interopDefaultLegacy(G6);

var css_248z = "button {\n  font-size: 60px;\n}";
styleInject__default["default"](css_248z);

var Button = function (props) {
    return React__default["default"].createElement("button", null, props.label);
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
Graphin.Behaviors.DragCanvas; var ZoomCanvas = Graphin.Behaviors.ZoomCanvas; Graphin.Behaviors.DragNode; Graphin.Behaviors.ActivateRelations;
var Graph = (function () {
    return (React__default["default"].createElement(Graphin__default["default"], { data: data$1, layout: { type: 'preset' } },
        React__default["default"].createElement(ZoomCanvas, { disabled: true })));
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
    React.useEffect(function () {
        // 创建 G6 图实例
        var graph = new G6__default["default"].Graph({
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
    return (React__default["default"].createElement("div", { id: "mountNode" }));
});

exports.Button = Button;
exports.G6Graph = G6Graph;
exports.Graph = Graph;
//# sourceMappingURL=index.js.map
