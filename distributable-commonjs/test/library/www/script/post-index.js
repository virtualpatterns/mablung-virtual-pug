(() => {
  var __defineProperty = Object.defineProperty;
  var __hasOwnProperty = Object.prototype.hasOwnProperty;
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __markAsModule = (target) => {
    return __defineProperty(target, "__esModule", {value: true});
  };
  var __exportStar = (target, module) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key in module)
        if (!__hasOwnProperty.call(target, key) && key !== "default")
          __defineProperty(target, key, {get: () => module[key], enumerable: true});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defineProperty({}, "default", {value: module, enumerable: true}), module);
  };

  // empty:/Volumes/DUMBLEDORE1/Users/fficnar/Projects/Shared Projects/mablung-virtual-pug/node_modules/min-document/index.js
  var require_index = __commonJS(() => {
  });

  // node_modules/global/document.js
  var require_document = __commonJS((exports, module) => {
    var topLevel = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {};
    var minDoc = require_index();
    var doccy;
    if (typeof document !== "undefined") {
      doccy = document;
    } else {
      doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"];
      if (!doccy) {
        doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = minDoc;
      }
    }
    module.exports = doccy;
  });

  // node_modules/is-object/index.js
  var require_is_object = __commonJS((exports, module) => {
    "use strict";
    module.exports = function isObject(x) {
      return typeof x === "object" && x !== null;
    };
  });

  // node_modules/virtual-dom/vnode/is-vhook.js
  var require_is_vhook = __commonJS((exports, module) => {
    module.exports = isHook;
    function isHook(hook) {
      return hook && (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") || typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"));
    }
  });

  // node_modules/virtual-dom/vdom/apply-properties.js
  var require_apply_properties = __commonJS((exports, module) => {
    var isObject = require_is_object();
    var isHook = require_is_vhook();
    module.exports = applyProperties;
    function applyProperties(node, props, previous) {
      for (var propName in props) {
        var propValue = props[propName];
        if (propValue === void 0) {
          removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
          removeProperty(node, propName, propValue, previous);
          if (propValue.hook) {
            propValue.hook(node, propName, previous ? previous[propName] : void 0);
          }
        } else {
          if (isObject(propValue)) {
            patchObject(node, props, previous, propName, propValue);
          } else {
            node[propName] = propValue;
          }
        }
      }
    }
    function removeProperty(node, propName, propValue, previous) {
      if (previous) {
        var previousValue = previous[propName];
        if (!isHook(previousValue)) {
          if (propName === "attributes") {
            for (var attrName in previousValue) {
              node.removeAttribute(attrName);
            }
          } else if (propName === "style") {
            for (var i in previousValue) {
              node.style[i] = "";
            }
          } else if (typeof previousValue === "string") {
            node[propName] = "";
          } else {
            node[propName] = null;
          }
        } else if (previousValue.unhook) {
          previousValue.unhook(node, propName, propValue);
        }
      }
    }
    function patchObject(node, props, previous, propName, propValue) {
      var previousValue = previous ? previous[propName] : void 0;
      if (propName === "attributes") {
        for (var attrName in propValue) {
          var attrValue = propValue[attrName];
          if (attrValue === void 0) {
            node.removeAttribute(attrName);
          } else {
            node.setAttribute(attrName, attrValue);
          }
        }
        return;
      }
      if (previousValue && isObject(previousValue) && getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue;
        return;
      }
      if (!isObject(node[propName])) {
        node[propName] = {};
      }
      var replacer = propName === "style" ? "" : void 0;
      for (var k in propValue) {
        var value = propValue[k];
        node[propName][k] = value === void 0 ? replacer : value;
      }
    }
    function getPrototype(value) {
      if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value);
      } else if (value.__proto__) {
        return value.__proto__;
      } else if (value.constructor) {
        return value.constructor.prototype;
      }
    }
  });

  // node_modules/virtual-dom/vnode/version.js
  var require_version = __commonJS((exports, module) => {
    module.exports = "2";
  });

  // node_modules/virtual-dom/vnode/is-vnode.js
  var require_is_vnode = __commonJS((exports, module) => {
    var version = require_version();
    module.exports = isVirtualNode;
    function isVirtualNode(x) {
      return x && x.type === "VirtualNode" && x.version === version;
    }
  });

  // node_modules/virtual-dom/vnode/is-vtext.js
  var require_is_vtext = __commonJS((exports, module) => {
    var version = require_version();
    module.exports = isVirtualText;
    function isVirtualText(x) {
      return x && x.type === "VirtualText" && x.version === version;
    }
  });

  // node_modules/virtual-dom/vnode/is-widget.js
  var require_is_widget = __commonJS((exports, module) => {
    module.exports = isWidget;
    function isWidget(w) {
      return w && w.type === "Widget";
    }
  });

  // node_modules/virtual-dom/vnode/is-thunk.js
  var require_is_thunk = __commonJS((exports, module) => {
    module.exports = isThunk;
    function isThunk(t) {
      return t && t.type === "Thunk";
    }
  });

  // node_modules/virtual-dom/vnode/handle-thunk.js
  var require_handle_thunk = __commonJS((exports, module) => {
    var isVNode = require_is_vnode();
    var isVText = require_is_vtext();
    var isWidget = require_is_widget();
    var isThunk = require_is_thunk();
    module.exports = handleThunk;
    function handleThunk(a, b) {
      var renderedA = a;
      var renderedB = b;
      if (isThunk(b)) {
        renderedB = renderThunk(b, a);
      }
      if (isThunk(a)) {
        renderedA = renderThunk(a, null);
      }
      return {
        a: renderedA,
        b: renderedB
      };
    }
    function renderThunk(thunk, previous) {
      var renderedThunk = thunk.vnode;
      if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous);
      }
      if (!(isVNode(renderedThunk) || isVText(renderedThunk) || isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
      }
      return renderedThunk;
    }
  });

  // node_modules/virtual-dom/vdom/create-element.js
  var require_create_element = __commonJS((exports, module) => {
    var document2 = require_document();
    var applyProperties = require_apply_properties();
    var isVNode = require_is_vnode();
    var isVText = require_is_vtext();
    var isWidget = require_is_widget();
    var handleThunk = require_handle_thunk();
    module.exports = createElement;
    function createElement(vnode, opts) {
      var doc = opts ? opts.document || document2 : document2;
      var warn = opts ? opts.warn : null;
      vnode = handleThunk(vnode).a;
      if (isWidget(vnode)) {
        return vnode.init();
      } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text);
      } else if (!isVNode(vnode)) {
        if (warn) {
          warn("Item is not a valid virtual dom node", vnode);
        }
        return null;
      }
      var node = vnode.namespace === null ? doc.createElement(vnode.tagName) : doc.createElementNS(vnode.namespace, vnode.tagName);
      var props = vnode.properties;
      applyProperties(node, props);
      var children = vnode.children;
      for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts);
        if (childNode) {
          node.appendChild(childNode);
        }
      }
      return node;
    }
  });

  // node_modules/virtual-dom/create-element.js
  var require_create_element2 = __commonJS((exports, module) => {
    var createElement = require_create_element();
    module.exports = createElement;
  });

  // node_modules/x-is-array/index.js
  var require_x_is_array = __commonJS((exports, module) => {
    var nativeIsArray = Array.isArray;
    var toString = Object.prototype.toString;
    module.exports = nativeIsArray || isArray;
    function isArray(obj) {
      return toString.call(obj) === "[object Array]";
    }
  });

  // node_modules/virtual-dom/vnode/vpatch.js
  var require_vpatch = __commonJS((exports, module) => {
    var version = require_version();
    VirtualPatch.NONE = 0;
    VirtualPatch.VTEXT = 1;
    VirtualPatch.VNODE = 2;
    VirtualPatch.WIDGET = 3;
    VirtualPatch.PROPS = 4;
    VirtualPatch.ORDER = 5;
    VirtualPatch.INSERT = 6;
    VirtualPatch.REMOVE = 7;
    VirtualPatch.THUNK = 8;
    module.exports = VirtualPatch;
    function VirtualPatch(type, vNode, patch2) {
      this.type = Number(type);
      this.vNode = vNode;
      this.patch = patch2;
    }
    VirtualPatch.prototype.version = version;
    VirtualPatch.prototype.type = "VirtualPatch";
  });

  // node_modules/virtual-dom/vtree/diff-props.js
  var require_diff_props = __commonJS((exports, module) => {
    var isObject = require_is_object();
    var isHook = require_is_vhook();
    module.exports = diffProps;
    function diffProps(a, b) {
      var diff2;
      for (var aKey in a) {
        if (!(aKey in b)) {
          diff2 = diff2 || {};
          diff2[aKey] = void 0;
        }
        var aValue = a[aKey];
        var bValue = b[aKey];
        if (aValue === bValue) {
          continue;
        } else if (isObject(aValue) && isObject(bValue)) {
          if (getPrototype(bValue) !== getPrototype(aValue)) {
            diff2 = diff2 || {};
            diff2[aKey] = bValue;
          } else if (isHook(bValue)) {
            diff2 = diff2 || {};
            diff2[aKey] = bValue;
          } else {
            var objectDiff = diffProps(aValue, bValue);
            if (objectDiff) {
              diff2 = diff2 || {};
              diff2[aKey] = objectDiff;
            }
          }
        } else {
          diff2 = diff2 || {};
          diff2[aKey] = bValue;
        }
      }
      for (var bKey in b) {
        if (!(bKey in a)) {
          diff2 = diff2 || {};
          diff2[bKey] = b[bKey];
        }
      }
      return diff2;
    }
    function getPrototype(value) {
      if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value);
      } else if (value.__proto__) {
        return value.__proto__;
      } else if (value.constructor) {
        return value.constructor.prototype;
      }
    }
  });

  // node_modules/virtual-dom/vtree/diff.js
  var require_diff = __commonJS((exports, module) => {
    var isArray = require_x_is_array();
    var VPatch = require_vpatch();
    var isVNode = require_is_vnode();
    var isVText = require_is_vtext();
    var isWidget = require_is_widget();
    var isThunk = require_is_thunk();
    var handleThunk = require_handle_thunk();
    var diffProps = require_diff_props();
    module.exports = diff2;
    function diff2(a, b) {
      var patch2 = {a};
      walk(a, b, patch2, 0);
      return patch2;
    }
    function walk(a, b, patch2, index) {
      if (a === b) {
        return;
      }
      var apply = patch2[index];
      var applyClear = false;
      if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch2, index);
      } else if (b == null) {
        if (!isWidget(a)) {
          clearState(a, patch2, index);
          apply = patch2[index];
        }
        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b));
      } else if (isVNode(b)) {
        if (isVNode(a)) {
          if (a.tagName === b.tagName && a.namespace === b.namespace && a.key === b.key) {
            var propsPatch = diffProps(a.properties, b.properties);
            if (propsPatch) {
              apply = appendPatch(apply, new VPatch(VPatch.PROPS, a, propsPatch));
            }
            apply = diffChildren(a, b, patch2, apply, index);
          } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
            applyClear = true;
          }
        } else {
          apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
          applyClear = true;
        }
      } else if (isVText(b)) {
        if (!isVText(a)) {
          apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
          applyClear = true;
        } else if (a.text !== b.text) {
          apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
        }
      } else if (isWidget(b)) {
        if (!isWidget(a)) {
          applyClear = true;
        }
        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b));
      }
      if (apply) {
        patch2[index] = apply;
      }
      if (applyClear) {
        clearState(a, patch2, index);
      }
    }
    function diffChildren(a, b, patch2, apply, index) {
      var aChildren = a.children;
      var orderedSet = reorder(aChildren, b.children);
      var bChildren = orderedSet.children;
      var aLen = aChildren.length;
      var bLen = bChildren.length;
      var len = aLen > bLen ? aLen : bLen;
      for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i];
        var rightNode = bChildren[i];
        index += 1;
        if (!leftNode) {
          if (rightNode) {
            apply = appendPatch(apply, new VPatch(VPatch.INSERT, null, rightNode));
          }
        } else {
          walk(leftNode, rightNode, patch2, index);
        }
        if (isVNode(leftNode) && leftNode.count) {
          index += leftNode.count;
        }
      }
      if (orderedSet.moves) {
        apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, orderedSet.moves));
      }
      return apply;
    }
    function clearState(vNode, patch2, index) {
      unhook(vNode, patch2, index);
      destroyWidgets(vNode, patch2, index);
    }
    function destroyWidgets(vNode, patch2, index) {
      if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
          patch2[index] = appendPatch(patch2[index], new VPatch(VPatch.REMOVE, vNode, null));
        }
      } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children;
        var len = children.length;
        for (var i = 0; i < len; i++) {
          var child = children[i];
          index += 1;
          destroyWidgets(child, patch2, index);
          if (isVNode(child) && child.count) {
            index += child.count;
          }
        }
      } else if (isThunk(vNode)) {
        thunks(vNode, null, patch2, index);
      }
    }
    function thunks(a, b, patch2, index) {
      var nodes = handleThunk(a, b);
      var thunkPatch = diff2(nodes.a, nodes.b);
      if (hasPatches(thunkPatch)) {
        patch2[index] = new VPatch(VPatch.THUNK, null, thunkPatch);
      }
    }
    function hasPatches(patch2) {
      for (var index in patch2) {
        if (index !== "a") {
          return true;
        }
      }
      return false;
    }
    function unhook(vNode, patch2, index) {
      if (isVNode(vNode)) {
        if (vNode.hooks) {
          patch2[index] = appendPatch(patch2[index], new VPatch(VPatch.PROPS, vNode, undefinedKeys(vNode.hooks)));
        }
        if (vNode.descendantHooks || vNode.hasThunks) {
          var children = vNode.children;
          var len = children.length;
          for (var i = 0; i < len; i++) {
            var child = children[i];
            index += 1;
            unhook(child, patch2, index);
            if (isVNode(child) && child.count) {
              index += child.count;
            }
          }
        }
      } else if (isThunk(vNode)) {
        thunks(vNode, null, patch2, index);
      }
    }
    function undefinedKeys(obj) {
      var result = {};
      for (var key in obj) {
        result[key] = void 0;
      }
      return result;
    }
    function reorder(aChildren, bChildren) {
      var bChildIndex = keyIndex(bChildren);
      var bKeys = bChildIndex.keys;
      var bFree = bChildIndex.free;
      if (bFree.length === bChildren.length) {
        return {
          children: bChildren,
          moves: null
        };
      }
      var aChildIndex = keyIndex(aChildren);
      var aKeys = aChildIndex.keys;
      var aFree = aChildIndex.free;
      if (aFree.length === aChildren.length) {
        return {
          children: bChildren,
          moves: null
        };
      }
      var newChildren = [];
      var freeIndex = 0;
      var freeCount = bFree.length;
      var deletedItems = 0;
      for (var i = 0; i < aChildren.length; i++) {
        var aItem = aChildren[i];
        var itemIndex;
        if (aItem.key) {
          if (bKeys.hasOwnProperty(aItem.key)) {
            itemIndex = bKeys[aItem.key];
            newChildren.push(bChildren[itemIndex]);
          } else {
            itemIndex = i - deletedItems++;
            newChildren.push(null);
          }
        } else {
          if (freeIndex < freeCount) {
            itemIndex = bFree[freeIndex++];
            newChildren.push(bChildren[itemIndex]);
          } else {
            itemIndex = i - deletedItems++;
            newChildren.push(null);
          }
        }
      }
      var lastFreeIndex = freeIndex >= bFree.length ? bChildren.length : bFree[freeIndex];
      for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j];
        if (newItem.key) {
          if (!aKeys.hasOwnProperty(newItem.key)) {
            newChildren.push(newItem);
          }
        } else if (j >= lastFreeIndex) {
          newChildren.push(newItem);
        }
      }
      var simulate = newChildren.slice();
      var simulateIndex = 0;
      var removes = [];
      var inserts = [];
      var simulateItem;
      for (var k = 0; k < bChildren.length; ) {
        var wantedItem = bChildren[k];
        simulateItem = simulate[simulateIndex];
        while (simulateItem === null && simulate.length) {
          removes.push(remove(simulate, simulateIndex, null));
          simulateItem = simulate[simulateIndex];
        }
        if (!simulateItem || simulateItem.key !== wantedItem.key) {
          if (wantedItem.key) {
            if (simulateItem && simulateItem.key) {
              if (bKeys[simulateItem.key] !== k + 1) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key));
                simulateItem = simulate[simulateIndex];
                if (!simulateItem || simulateItem.key !== wantedItem.key) {
                  inserts.push({key: wantedItem.key, to: k});
                } else {
                  simulateIndex++;
                }
              } else {
                inserts.push({key: wantedItem.key, to: k});
              }
            } else {
              inserts.push({key: wantedItem.key, to: k});
            }
            k++;
          } else if (simulateItem && simulateItem.key) {
            removes.push(remove(simulate, simulateIndex, simulateItem.key));
          }
        } else {
          simulateIndex++;
          k++;
        }
      }
      while (simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex];
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key));
      }
      if (removes.length === deletedItems && !inserts.length) {
        return {
          children: newChildren,
          moves: null
        };
      }
      return {
        children: newChildren,
        moves: {
          removes,
          inserts
        }
      };
    }
    function remove(arr, index, key) {
      arr.splice(index, 1);
      return {
        from: index,
        key
      };
    }
    function keyIndex(children) {
      var keys = {};
      var free = [];
      var length = children.length;
      for (var i = 0; i < length; i++) {
        var child = children[i];
        if (child.key) {
          keys[child.key] = i;
        } else {
          free.push(i);
        }
      }
      return {
        keys,
        free
      };
    }
    function appendPatch(apply, patch2) {
      if (apply) {
        if (isArray(apply)) {
          apply.push(patch2);
        } else {
          apply = [apply, patch2];
        }
        return apply;
      } else {
        return patch2;
      }
    }
  });

  // node_modules/virtual-dom/diff.js
  var require_diff2 = __commonJS((exports, module) => {
    var diff2 = require_diff();
    module.exports = diff2;
  });

  // node_modules/virtual-dom/vdom/dom-index.js
  var require_dom_index = __commonJS((exports, module) => {
    var noChild = {};
    module.exports = domIndex;
    function domIndex(rootNode, tree, indices, nodes) {
      if (!indices || indices.length === 0) {
        return {};
      } else {
        indices.sort(ascending);
        return recurse(rootNode, tree, indices, nodes, 0);
      }
    }
    function recurse(rootNode, tree, indices, nodes, rootIndex) {
      nodes = nodes || {};
      if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
          nodes[rootIndex] = rootNode;
        }
        var vChildren = tree.children;
        if (vChildren) {
          var childNodes = rootNode.childNodes;
          for (var i = 0; i < tree.children.length; i++) {
            rootIndex += 1;
            var vChild = vChildren[i] || noChild;
            var nextIndex = rootIndex + (vChild.count || 0);
            if (indexInRange(indices, rootIndex, nextIndex)) {
              recurse(childNodes[i], vChild, indices, nodes, rootIndex);
            }
            rootIndex = nextIndex;
          }
        }
      }
      return nodes;
    }
    function indexInRange(indices, left, right) {
      if (indices.length === 0) {
        return false;
      }
      var minIndex = 0;
      var maxIndex = indices.length - 1;
      var currentIndex;
      var currentItem;
      while (minIndex <= maxIndex) {
        currentIndex = (maxIndex + minIndex) / 2 >> 0;
        currentItem = indices[currentIndex];
        if (minIndex === maxIndex) {
          return currentItem >= left && currentItem <= right;
        } else if (currentItem < left) {
          minIndex = currentIndex + 1;
        } else if (currentItem > right) {
          maxIndex = currentIndex - 1;
        } else {
          return true;
        }
      }
      return false;
    }
    function ascending(a, b) {
      return a > b ? 1 : -1;
    }
  });

  // node_modules/virtual-dom/vdom/update-widget.js
  var require_update_widget = __commonJS((exports, module) => {
    var isWidget = require_is_widget();
    module.exports = updateWidget;
    function updateWidget(a, b) {
      if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
          return a.id === b.id;
        } else {
          return a.init === b.init;
        }
      }
      return false;
    }
  });

  // node_modules/virtual-dom/vdom/patch-op.js
  var require_patch_op = __commonJS((exports, module) => {
    var applyProperties = require_apply_properties();
    var isWidget = require_is_widget();
    var VPatch = require_vpatch();
    var updateWidget = require_update_widget();
    module.exports = applyPatch;
    function applyPatch(vpatch, domNode, renderOptions) {
      var type = vpatch.type;
      var vNode = vpatch.vNode;
      var patch2 = vpatch.patch;
      switch (type) {
        case VPatch.REMOVE:
          return removeNode(domNode, vNode);
        case VPatch.INSERT:
          return insertNode(domNode, patch2, renderOptions);
        case VPatch.VTEXT:
          return stringPatch(domNode, vNode, patch2, renderOptions);
        case VPatch.WIDGET:
          return widgetPatch(domNode, vNode, patch2, renderOptions);
        case VPatch.VNODE:
          return vNodePatch(domNode, vNode, patch2, renderOptions);
        case VPatch.ORDER:
          reorderChildren(domNode, patch2);
          return domNode;
        case VPatch.PROPS:
          applyProperties(domNode, patch2, vNode.properties);
          return domNode;
        case VPatch.THUNK:
          return replaceRoot(domNode, renderOptions.patch(domNode, patch2, renderOptions));
        default:
          return domNode;
      }
    }
    function removeNode(domNode, vNode) {
      var parentNode = domNode.parentNode;
      if (parentNode) {
        parentNode.removeChild(domNode);
      }
      destroyWidget(domNode, vNode);
      return null;
    }
    function insertNode(parentNode, vNode, renderOptions) {
      var newNode = renderOptions.render(vNode, renderOptions);
      if (parentNode) {
        parentNode.appendChild(newNode);
      }
      return parentNode;
    }
    function stringPatch(domNode, leftVNode, vText, renderOptions) {
      var newNode;
      if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text);
        newNode = domNode;
      } else {
        var parentNode = domNode.parentNode;
        newNode = renderOptions.render(vText, renderOptions);
        if (parentNode && newNode !== domNode) {
          parentNode.replaceChild(newNode, domNode);
        }
      }
      return newNode;
    }
    function widgetPatch(domNode, leftVNode, widget, renderOptions) {
      var updating = updateWidget(leftVNode, widget);
      var newNode;
      if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode;
      } else {
        newNode = renderOptions.render(widget, renderOptions);
      }
      var parentNode = domNode.parentNode;
      if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode);
      }
      if (!updating) {
        destroyWidget(domNode, leftVNode);
      }
      return newNode;
    }
    function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
      var parentNode = domNode.parentNode;
      var newNode = renderOptions.render(vNode, renderOptions);
      if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode);
      }
      return newNode;
    }
    function destroyWidget(domNode, w) {
      if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode);
      }
    }
    function reorderChildren(domNode, moves) {
      var childNodes = domNode.childNodes;
      var keyMap = {};
      var node;
      var remove;
      var insert;
      for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i];
        node = childNodes[remove.from];
        if (remove.key) {
          keyMap[remove.key] = node;
        }
        domNode.removeChild(node);
      }
      var length = childNodes.length;
      for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j];
        node = keyMap[insert.key];
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to]);
      }
    }
    function replaceRoot(oldRoot, newRoot) {
      if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot);
      }
      return newRoot;
    }
  });

  // node_modules/virtual-dom/vdom/patch.js
  var require_patch = __commonJS((exports, module) => {
    var document2 = require_document();
    var isArray = require_x_is_array();
    var render = require_create_element();
    var domIndex = require_dom_index();
    var patchOp = require_patch_op();
    module.exports = patch2;
    function patch2(rootNode, patches, renderOptions) {
      renderOptions = renderOptions || {};
      renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch2 ? renderOptions.patch : patchRecursive;
      renderOptions.render = renderOptions.render || render;
      return renderOptions.patch(rootNode, patches, renderOptions);
    }
    function patchRecursive(rootNode, patches, renderOptions) {
      var indices = patchIndices(patches);
      if (indices.length === 0) {
        return rootNode;
      }
      var index = domIndex(rootNode, patches.a, indices);
      var ownerDocument = rootNode.ownerDocument;
      if (!renderOptions.document && ownerDocument !== document2) {
        renderOptions.document = ownerDocument;
      }
      for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i];
        rootNode = applyPatch(rootNode, index[nodeIndex], patches[nodeIndex], renderOptions);
      }
      return rootNode;
    }
    function applyPatch(rootNode, domNode, patchList, renderOptions) {
      if (!domNode) {
        return rootNode;
      }
      var newNode;
      if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
          newNode = patchOp(patchList[i], domNode, renderOptions);
          if (domNode === rootNode) {
            rootNode = newNode;
          }
        }
      } else {
        newNode = patchOp(patchList, domNode, renderOptions);
        if (domNode === rootNode) {
          rootNode = newNode;
        }
      }
      return rootNode;
    }
    function patchIndices(patches) {
      var indices = [];
      for (var key in patches) {
        if (key !== "a") {
          indices.push(Number(key));
        }
      }
      return indices;
    }
  });

  // node_modules/virtual-dom/patch.js
  var require_patch2 = __commonJS((exports, module) => {
    var patch2 = require_patch();
    module.exports = patch2;
  });

  // node_modules/punycode/punycode.js
  var require_punycode = __commonJS((exports, module) => {
    "use strict";
    const maxInt = 2147483647;
    const base = 36;
    const tMin = 1;
    const tMax = 26;
    const skew = 38;
    const damp = 700;
    const initialBias = 72;
    const initialN = 128;
    const delimiter = "-";
    const regexPunycode = /^xn--/;
    const regexNonASCII = /[^\0-\x7E]/;
    const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    const errors = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    const baseMinusTMin = base - tMin;
    const floor = Math.floor;
    const stringFromCharCode = String.fromCharCode;
    function error(type) {
      throw new RangeError(errors[type]);
    }
    function map(array, fn) {
      const result = [];
      let length = array.length;
      while (length--) {
        result[length] = fn(array[length]);
      }
      return result;
    }
    function mapDomain(string, fn) {
      const parts = string.split("@");
      let result = "";
      if (parts.length > 1) {
        result = parts[0] + "@";
        string = parts[1];
      }
      string = string.replace(regexSeparators, ".");
      const labels = string.split(".");
      const encoded = map(labels, fn).join(".");
      return result + encoded;
    }
    function ucs2decode(string) {
      const output = [];
      let counter = 0;
      const length = string.length;
      while (counter < length) {
        const value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          const extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
    const ucs2encode = (array) => String.fromCodePoint(...array);
    const basicToDigit = function(codePoint) {
      if (codePoint - 48 < 10) {
        return codePoint - 22;
      }
      if (codePoint - 65 < 26) {
        return codePoint - 65;
      }
      if (codePoint - 97 < 26) {
        return codePoint - 97;
      }
      return base;
    };
    const digitToBasic = function(digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    const adapt = function(delta, numPoints, firstTime) {
      let k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    const decode = function(input) {
      const output = [];
      const inputLength = input.length;
      let i = 0;
      let n = initialN;
      let bias = initialBias;
      let basic = input.lastIndexOf(delimiter);
      if (basic < 0) {
        basic = 0;
      }
      for (let j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 128) {
          error("not-basic");
        }
        output.push(input.charCodeAt(j));
      }
      for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
        let oldi = i;
        for (let w = 1, k = base; ; k += base) {
          if (index >= inputLength) {
            error("invalid-input");
          }
          const digit = basicToDigit(input.charCodeAt(index++));
          if (digit >= base || digit > floor((maxInt - i) / w)) {
            error("overflow");
          }
          i += digit * w;
          const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (digit < t) {
            break;
          }
          const baseMinusT = base - t;
          if (w > floor(maxInt / baseMinusT)) {
            error("overflow");
          }
          w *= baseMinusT;
        }
        const out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        if (floor(i / out) > maxInt - n) {
          error("overflow");
        }
        n += floor(i / out);
        i %= out;
        output.splice(i++, 0, n);
      }
      return String.fromCodePoint(...output);
    };
    const encode = function(input) {
      const output = [];
      input = ucs2decode(input);
      let inputLength = input.length;
      let n = initialN;
      let delta = 0;
      let bias = initialBias;
      for (const currentValue of input) {
        if (currentValue < 128) {
          output.push(stringFromCharCode(currentValue));
        }
      }
      let basicLength = output.length;
      let handledCPCount = basicLength;
      if (basicLength) {
        output.push(delimiter);
      }
      while (handledCPCount < inputLength) {
        let m = maxInt;
        for (const currentValue of input) {
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
        const handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error("overflow");
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (const currentValue of input) {
          if (currentValue < n && ++delta > maxInt) {
            error("overflow");
          }
          if (currentValue == n) {
            let q = delta;
            for (let k = base; ; k += base) {
              const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t) {
                break;
              }
              const qMinusT = q - t;
              const baseMinusT = base - t;
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
              q = floor(qMinusT / baseMinusT);
            }
            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
        ++delta;
        ++n;
      }
      return output.join("");
    };
    const toUnicode = function(input) {
      return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
      });
    };
    const toASCII = function(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
      });
    };
    const punycode = {
      version: "2.1.0",
      ucs2: {
        decode: ucs2decode,
        encode: ucs2encode
      },
      decode,
      encode,
      toASCII,
      toUnicode
    };
    module.exports = punycode;
  });

  // node_modules/ent/reversed.json
  var require_reversed = __commonJS((exports, module) => {
    module.exports = {
      "9": "Tab;",
      "10": "NewLine;",
      "33": "excl;",
      "34": "quot;",
      "35": "num;",
      "36": "dollar;",
      "37": "percnt;",
      "38": "amp;",
      "39": "apos;",
      "40": "lpar;",
      "41": "rpar;",
      "42": "midast;",
      "43": "plus;",
      "44": "comma;",
      "46": "period;",
      "47": "sol;",
      "58": "colon;",
      "59": "semi;",
      "60": "lt;",
      "61": "equals;",
      "62": "gt;",
      "63": "quest;",
      "64": "commat;",
      "91": "lsqb;",
      "92": "bsol;",
      "93": "rsqb;",
      "94": "Hat;",
      "95": "UnderBar;",
      "96": "grave;",
      "123": "lcub;",
      "124": "VerticalLine;",
      "125": "rcub;",
      "160": "NonBreakingSpace;",
      "161": "iexcl;",
      "162": "cent;",
      "163": "pound;",
      "164": "curren;",
      "165": "yen;",
      "166": "brvbar;",
      "167": "sect;",
      "168": "uml;",
      "169": "copy;",
      "170": "ordf;",
      "171": "laquo;",
      "172": "not;",
      "173": "shy;",
      "174": "reg;",
      "175": "strns;",
      "176": "deg;",
      "177": "pm;",
      "178": "sup2;",
      "179": "sup3;",
      "180": "DiacriticalAcute;",
      "181": "micro;",
      "182": "para;",
      "183": "middot;",
      "184": "Cedilla;",
      "185": "sup1;",
      "186": "ordm;",
      "187": "raquo;",
      "188": "frac14;",
      "189": "half;",
      "190": "frac34;",
      "191": "iquest;",
      "192": "Agrave;",
      "193": "Aacute;",
      "194": "Acirc;",
      "195": "Atilde;",
      "196": "Auml;",
      "197": "Aring;",
      "198": "AElig;",
      "199": "Ccedil;",
      "200": "Egrave;",
      "201": "Eacute;",
      "202": "Ecirc;",
      "203": "Euml;",
      "204": "Igrave;",
      "205": "Iacute;",
      "206": "Icirc;",
      "207": "Iuml;",
      "208": "ETH;",
      "209": "Ntilde;",
      "210": "Ograve;",
      "211": "Oacute;",
      "212": "Ocirc;",
      "213": "Otilde;",
      "214": "Ouml;",
      "215": "times;",
      "216": "Oslash;",
      "217": "Ugrave;",
      "218": "Uacute;",
      "219": "Ucirc;",
      "220": "Uuml;",
      "221": "Yacute;",
      "222": "THORN;",
      "223": "szlig;",
      "224": "agrave;",
      "225": "aacute;",
      "226": "acirc;",
      "227": "atilde;",
      "228": "auml;",
      "229": "aring;",
      "230": "aelig;",
      "231": "ccedil;",
      "232": "egrave;",
      "233": "eacute;",
      "234": "ecirc;",
      "235": "euml;",
      "236": "igrave;",
      "237": "iacute;",
      "238": "icirc;",
      "239": "iuml;",
      "240": "eth;",
      "241": "ntilde;",
      "242": "ograve;",
      "243": "oacute;",
      "244": "ocirc;",
      "245": "otilde;",
      "246": "ouml;",
      "247": "divide;",
      "248": "oslash;",
      "249": "ugrave;",
      "250": "uacute;",
      "251": "ucirc;",
      "252": "uuml;",
      "253": "yacute;",
      "254": "thorn;",
      "255": "yuml;",
      "256": "Amacr;",
      "257": "amacr;",
      "258": "Abreve;",
      "259": "abreve;",
      "260": "Aogon;",
      "261": "aogon;",
      "262": "Cacute;",
      "263": "cacute;",
      "264": "Ccirc;",
      "265": "ccirc;",
      "266": "Cdot;",
      "267": "cdot;",
      "268": "Ccaron;",
      "269": "ccaron;",
      "270": "Dcaron;",
      "271": "dcaron;",
      "272": "Dstrok;",
      "273": "dstrok;",
      "274": "Emacr;",
      "275": "emacr;",
      "278": "Edot;",
      "279": "edot;",
      "280": "Eogon;",
      "281": "eogon;",
      "282": "Ecaron;",
      "283": "ecaron;",
      "284": "Gcirc;",
      "285": "gcirc;",
      "286": "Gbreve;",
      "287": "gbreve;",
      "288": "Gdot;",
      "289": "gdot;",
      "290": "Gcedil;",
      "292": "Hcirc;",
      "293": "hcirc;",
      "294": "Hstrok;",
      "295": "hstrok;",
      "296": "Itilde;",
      "297": "itilde;",
      "298": "Imacr;",
      "299": "imacr;",
      "302": "Iogon;",
      "303": "iogon;",
      "304": "Idot;",
      "305": "inodot;",
      "306": "IJlig;",
      "307": "ijlig;",
      "308": "Jcirc;",
      "309": "jcirc;",
      "310": "Kcedil;",
      "311": "kcedil;",
      "312": "kgreen;",
      "313": "Lacute;",
      "314": "lacute;",
      "315": "Lcedil;",
      "316": "lcedil;",
      "317": "Lcaron;",
      "318": "lcaron;",
      "319": "Lmidot;",
      "320": "lmidot;",
      "321": "Lstrok;",
      "322": "lstrok;",
      "323": "Nacute;",
      "324": "nacute;",
      "325": "Ncedil;",
      "326": "ncedil;",
      "327": "Ncaron;",
      "328": "ncaron;",
      "329": "napos;",
      "330": "ENG;",
      "331": "eng;",
      "332": "Omacr;",
      "333": "omacr;",
      "336": "Odblac;",
      "337": "odblac;",
      "338": "OElig;",
      "339": "oelig;",
      "340": "Racute;",
      "341": "racute;",
      "342": "Rcedil;",
      "343": "rcedil;",
      "344": "Rcaron;",
      "345": "rcaron;",
      "346": "Sacute;",
      "347": "sacute;",
      "348": "Scirc;",
      "349": "scirc;",
      "350": "Scedil;",
      "351": "scedil;",
      "352": "Scaron;",
      "353": "scaron;",
      "354": "Tcedil;",
      "355": "tcedil;",
      "356": "Tcaron;",
      "357": "tcaron;",
      "358": "Tstrok;",
      "359": "tstrok;",
      "360": "Utilde;",
      "361": "utilde;",
      "362": "Umacr;",
      "363": "umacr;",
      "364": "Ubreve;",
      "365": "ubreve;",
      "366": "Uring;",
      "367": "uring;",
      "368": "Udblac;",
      "369": "udblac;",
      "370": "Uogon;",
      "371": "uogon;",
      "372": "Wcirc;",
      "373": "wcirc;",
      "374": "Ycirc;",
      "375": "ycirc;",
      "376": "Yuml;",
      "377": "Zacute;",
      "378": "zacute;",
      "379": "Zdot;",
      "380": "zdot;",
      "381": "Zcaron;",
      "382": "zcaron;",
      "402": "fnof;",
      "437": "imped;",
      "501": "gacute;",
      "567": "jmath;",
      "710": "circ;",
      "711": "Hacek;",
      "728": "breve;",
      "729": "dot;",
      "730": "ring;",
      "731": "ogon;",
      "732": "tilde;",
      "733": "DiacriticalDoubleAcute;",
      "785": "DownBreve;",
      "913": "Alpha;",
      "914": "Beta;",
      "915": "Gamma;",
      "916": "Delta;",
      "917": "Epsilon;",
      "918": "Zeta;",
      "919": "Eta;",
      "920": "Theta;",
      "921": "Iota;",
      "922": "Kappa;",
      "923": "Lambda;",
      "924": "Mu;",
      "925": "Nu;",
      "926": "Xi;",
      "927": "Omicron;",
      "928": "Pi;",
      "929": "Rho;",
      "931": "Sigma;",
      "932": "Tau;",
      "933": "Upsilon;",
      "934": "Phi;",
      "935": "Chi;",
      "936": "Psi;",
      "937": "Omega;",
      "945": "alpha;",
      "946": "beta;",
      "947": "gamma;",
      "948": "delta;",
      "949": "epsilon;",
      "950": "zeta;",
      "951": "eta;",
      "952": "theta;",
      "953": "iota;",
      "954": "kappa;",
      "955": "lambda;",
      "956": "mu;",
      "957": "nu;",
      "958": "xi;",
      "959": "omicron;",
      "960": "pi;",
      "961": "rho;",
      "962": "varsigma;",
      "963": "sigma;",
      "964": "tau;",
      "965": "upsilon;",
      "966": "phi;",
      "967": "chi;",
      "968": "psi;",
      "969": "omega;",
      "977": "vartheta;",
      "978": "upsih;",
      "981": "varphi;",
      "982": "varpi;",
      "988": "Gammad;",
      "989": "gammad;",
      "1008": "varkappa;",
      "1009": "varrho;",
      "1013": "varepsilon;",
      "1014": "bepsi;",
      "1025": "IOcy;",
      "1026": "DJcy;",
      "1027": "GJcy;",
      "1028": "Jukcy;",
      "1029": "DScy;",
      "1030": "Iukcy;",
      "1031": "YIcy;",
      "1032": "Jsercy;",
      "1033": "LJcy;",
      "1034": "NJcy;",
      "1035": "TSHcy;",
      "1036": "KJcy;",
      "1038": "Ubrcy;",
      "1039": "DZcy;",
      "1040": "Acy;",
      "1041": "Bcy;",
      "1042": "Vcy;",
      "1043": "Gcy;",
      "1044": "Dcy;",
      "1045": "IEcy;",
      "1046": "ZHcy;",
      "1047": "Zcy;",
      "1048": "Icy;",
      "1049": "Jcy;",
      "1050": "Kcy;",
      "1051": "Lcy;",
      "1052": "Mcy;",
      "1053": "Ncy;",
      "1054": "Ocy;",
      "1055": "Pcy;",
      "1056": "Rcy;",
      "1057": "Scy;",
      "1058": "Tcy;",
      "1059": "Ucy;",
      "1060": "Fcy;",
      "1061": "KHcy;",
      "1062": "TScy;",
      "1063": "CHcy;",
      "1064": "SHcy;",
      "1065": "SHCHcy;",
      "1066": "HARDcy;",
      "1067": "Ycy;",
      "1068": "SOFTcy;",
      "1069": "Ecy;",
      "1070": "YUcy;",
      "1071": "YAcy;",
      "1072": "acy;",
      "1073": "bcy;",
      "1074": "vcy;",
      "1075": "gcy;",
      "1076": "dcy;",
      "1077": "iecy;",
      "1078": "zhcy;",
      "1079": "zcy;",
      "1080": "icy;",
      "1081": "jcy;",
      "1082": "kcy;",
      "1083": "lcy;",
      "1084": "mcy;",
      "1085": "ncy;",
      "1086": "ocy;",
      "1087": "pcy;",
      "1088": "rcy;",
      "1089": "scy;",
      "1090": "tcy;",
      "1091": "ucy;",
      "1092": "fcy;",
      "1093": "khcy;",
      "1094": "tscy;",
      "1095": "chcy;",
      "1096": "shcy;",
      "1097": "shchcy;",
      "1098": "hardcy;",
      "1099": "ycy;",
      "1100": "softcy;",
      "1101": "ecy;",
      "1102": "yucy;",
      "1103": "yacy;",
      "1105": "iocy;",
      "1106": "djcy;",
      "1107": "gjcy;",
      "1108": "jukcy;",
      "1109": "dscy;",
      "1110": "iukcy;",
      "1111": "yicy;",
      "1112": "jsercy;",
      "1113": "ljcy;",
      "1114": "njcy;",
      "1115": "tshcy;",
      "1116": "kjcy;",
      "1118": "ubrcy;",
      "1119": "dzcy;",
      "8194": "ensp;",
      "8195": "emsp;",
      "8196": "emsp13;",
      "8197": "emsp14;",
      "8199": "numsp;",
      "8200": "puncsp;",
      "8201": "ThinSpace;",
      "8202": "VeryThinSpace;",
      "8203": "ZeroWidthSpace;",
      "8204": "zwnj;",
      "8205": "zwj;",
      "8206": "lrm;",
      "8207": "rlm;",
      "8208": "hyphen;",
      "8211": "ndash;",
      "8212": "mdash;",
      "8213": "horbar;",
      "8214": "Vert;",
      "8216": "OpenCurlyQuote;",
      "8217": "rsquor;",
      "8218": "sbquo;",
      "8220": "OpenCurlyDoubleQuote;",
      "8221": "rdquor;",
      "8222": "ldquor;",
      "8224": "dagger;",
      "8225": "ddagger;",
      "8226": "bullet;",
      "8229": "nldr;",
      "8230": "mldr;",
      "8240": "permil;",
      "8241": "pertenk;",
      "8242": "prime;",
      "8243": "Prime;",
      "8244": "tprime;",
      "8245": "bprime;",
      "8249": "lsaquo;",
      "8250": "rsaquo;",
      "8254": "OverBar;",
      "8257": "caret;",
      "8259": "hybull;",
      "8260": "frasl;",
      "8271": "bsemi;",
      "8279": "qprime;",
      "8287": "MediumSpace;",
      "8288": "NoBreak;",
      "8289": "ApplyFunction;",
      "8290": "it;",
      "8291": "InvisibleComma;",
      "8364": "euro;",
      "8411": "TripleDot;",
      "8412": "DotDot;",
      "8450": "Copf;",
      "8453": "incare;",
      "8458": "gscr;",
      "8459": "Hscr;",
      "8460": "Poincareplane;",
      "8461": "quaternions;",
      "8462": "planckh;",
      "8463": "plankv;",
      "8464": "Iscr;",
      "8465": "imagpart;",
      "8466": "Lscr;",
      "8467": "ell;",
      "8469": "Nopf;",
      "8470": "numero;",
      "8471": "copysr;",
      "8472": "wp;",
      "8473": "primes;",
      "8474": "rationals;",
      "8475": "Rscr;",
      "8476": "Rfr;",
      "8477": "Ropf;",
      "8478": "rx;",
      "8482": "trade;",
      "8484": "Zopf;",
      "8487": "mho;",
      "8488": "Zfr;",
      "8489": "iiota;",
      "8492": "Bscr;",
      "8493": "Cfr;",
      "8495": "escr;",
      "8496": "expectation;",
      "8497": "Fscr;",
      "8499": "phmmat;",
      "8500": "oscr;",
      "8501": "aleph;",
      "8502": "beth;",
      "8503": "gimel;",
      "8504": "daleth;",
      "8517": "DD;",
      "8518": "DifferentialD;",
      "8519": "exponentiale;",
      "8520": "ImaginaryI;",
      "8531": "frac13;",
      "8532": "frac23;",
      "8533": "frac15;",
      "8534": "frac25;",
      "8535": "frac35;",
      "8536": "frac45;",
      "8537": "frac16;",
      "8538": "frac56;",
      "8539": "frac18;",
      "8540": "frac38;",
      "8541": "frac58;",
      "8542": "frac78;",
      "8592": "slarr;",
      "8593": "uparrow;",
      "8594": "srarr;",
      "8595": "ShortDownArrow;",
      "8596": "leftrightarrow;",
      "8597": "varr;",
      "8598": "UpperLeftArrow;",
      "8599": "UpperRightArrow;",
      "8600": "searrow;",
      "8601": "swarrow;",
      "8602": "nleftarrow;",
      "8603": "nrightarrow;",
      "8605": "rightsquigarrow;",
      "8606": "twoheadleftarrow;",
      "8607": "Uarr;",
      "8608": "twoheadrightarrow;",
      "8609": "Darr;",
      "8610": "leftarrowtail;",
      "8611": "rightarrowtail;",
      "8612": "mapstoleft;",
      "8613": "UpTeeArrow;",
      "8614": "RightTeeArrow;",
      "8615": "mapstodown;",
      "8617": "larrhk;",
      "8618": "rarrhk;",
      "8619": "looparrowleft;",
      "8620": "rarrlp;",
      "8621": "leftrightsquigarrow;",
      "8622": "nleftrightarrow;",
      "8624": "lsh;",
      "8625": "rsh;",
      "8626": "ldsh;",
      "8627": "rdsh;",
      "8629": "crarr;",
      "8630": "curvearrowleft;",
      "8631": "curvearrowright;",
      "8634": "olarr;",
      "8635": "orarr;",
      "8636": "lharu;",
      "8637": "lhard;",
      "8638": "upharpoonright;",
      "8639": "upharpoonleft;",
      "8640": "RightVector;",
      "8641": "rightharpoondown;",
      "8642": "RightDownVector;",
      "8643": "LeftDownVector;",
      "8644": "rlarr;",
      "8645": "UpArrowDownArrow;",
      "8646": "lrarr;",
      "8647": "llarr;",
      "8648": "uuarr;",
      "8649": "rrarr;",
      "8650": "downdownarrows;",
      "8651": "ReverseEquilibrium;",
      "8652": "rlhar;",
      "8653": "nLeftarrow;",
      "8654": "nLeftrightarrow;",
      "8655": "nRightarrow;",
      "8656": "Leftarrow;",
      "8657": "Uparrow;",
      "8658": "Rightarrow;",
      "8659": "Downarrow;",
      "8660": "Leftrightarrow;",
      "8661": "vArr;",
      "8662": "nwArr;",
      "8663": "neArr;",
      "8664": "seArr;",
      "8665": "swArr;",
      "8666": "Lleftarrow;",
      "8667": "Rrightarrow;",
      "8669": "zigrarr;",
      "8676": "LeftArrowBar;",
      "8677": "RightArrowBar;",
      "8693": "duarr;",
      "8701": "loarr;",
      "8702": "roarr;",
      "8703": "hoarr;",
      "8704": "forall;",
      "8705": "complement;",
      "8706": "PartialD;",
      "8707": "Exists;",
      "8708": "NotExists;",
      "8709": "varnothing;",
      "8711": "nabla;",
      "8712": "isinv;",
      "8713": "notinva;",
      "8715": "SuchThat;",
      "8716": "NotReverseElement;",
      "8719": "Product;",
      "8720": "Coproduct;",
      "8721": "sum;",
      "8722": "minus;",
      "8723": "mp;",
      "8724": "plusdo;",
      "8726": "ssetmn;",
      "8727": "lowast;",
      "8728": "SmallCircle;",
      "8730": "Sqrt;",
      "8733": "vprop;",
      "8734": "infin;",
      "8735": "angrt;",
      "8736": "angle;",
      "8737": "measuredangle;",
      "8738": "angsph;",
      "8739": "VerticalBar;",
      "8740": "nsmid;",
      "8741": "spar;",
      "8742": "nspar;",
      "8743": "wedge;",
      "8744": "vee;",
      "8745": "cap;",
      "8746": "cup;",
      "8747": "Integral;",
      "8748": "Int;",
      "8749": "tint;",
      "8750": "oint;",
      "8751": "DoubleContourIntegral;",
      "8752": "Cconint;",
      "8753": "cwint;",
      "8754": "cwconint;",
      "8755": "CounterClockwiseContourIntegral;",
      "8756": "therefore;",
      "8757": "because;",
      "8758": "ratio;",
      "8759": "Proportion;",
      "8760": "minusd;",
      "8762": "mDDot;",
      "8763": "homtht;",
      "8764": "Tilde;",
      "8765": "bsim;",
      "8766": "mstpos;",
      "8767": "acd;",
      "8768": "wreath;",
      "8769": "nsim;",
      "8770": "esim;",
      "8771": "TildeEqual;",
      "8772": "nsimeq;",
      "8773": "TildeFullEqual;",
      "8774": "simne;",
      "8775": "NotTildeFullEqual;",
      "8776": "TildeTilde;",
      "8777": "NotTildeTilde;",
      "8778": "approxeq;",
      "8779": "apid;",
      "8780": "bcong;",
      "8781": "CupCap;",
      "8782": "HumpDownHump;",
      "8783": "HumpEqual;",
      "8784": "esdot;",
      "8785": "eDot;",
      "8786": "fallingdotseq;",
      "8787": "risingdotseq;",
      "8788": "coloneq;",
      "8789": "eqcolon;",
      "8790": "eqcirc;",
      "8791": "cire;",
      "8793": "wedgeq;",
      "8794": "veeeq;",
      "8796": "trie;",
      "8799": "questeq;",
      "8800": "NotEqual;",
      "8801": "equiv;",
      "8802": "NotCongruent;",
      "8804": "leq;",
      "8805": "GreaterEqual;",
      "8806": "LessFullEqual;",
      "8807": "GreaterFullEqual;",
      "8808": "lneqq;",
      "8809": "gneqq;",
      "8810": "NestedLessLess;",
      "8811": "NestedGreaterGreater;",
      "8812": "twixt;",
      "8813": "NotCupCap;",
      "8814": "NotLess;",
      "8815": "NotGreater;",
      "8816": "NotLessEqual;",
      "8817": "NotGreaterEqual;",
      "8818": "lsim;",
      "8819": "gtrsim;",
      "8820": "NotLessTilde;",
      "8821": "NotGreaterTilde;",
      "8822": "lg;",
      "8823": "gtrless;",
      "8824": "ntlg;",
      "8825": "ntgl;",
      "8826": "Precedes;",
      "8827": "Succeeds;",
      "8828": "PrecedesSlantEqual;",
      "8829": "SucceedsSlantEqual;",
      "8830": "prsim;",
      "8831": "succsim;",
      "8832": "nprec;",
      "8833": "nsucc;",
      "8834": "subset;",
      "8835": "supset;",
      "8836": "nsub;",
      "8837": "nsup;",
      "8838": "SubsetEqual;",
      "8839": "supseteq;",
      "8840": "nsubseteq;",
      "8841": "nsupseteq;",
      "8842": "subsetneq;",
      "8843": "supsetneq;",
      "8845": "cupdot;",
      "8846": "uplus;",
      "8847": "SquareSubset;",
      "8848": "SquareSuperset;",
      "8849": "SquareSubsetEqual;",
      "8850": "SquareSupersetEqual;",
      "8851": "SquareIntersection;",
      "8852": "SquareUnion;",
      "8853": "oplus;",
      "8854": "ominus;",
      "8855": "otimes;",
      "8856": "osol;",
      "8857": "odot;",
      "8858": "ocir;",
      "8859": "oast;",
      "8861": "odash;",
      "8862": "plusb;",
      "8863": "minusb;",
      "8864": "timesb;",
      "8865": "sdotb;",
      "8866": "vdash;",
      "8867": "LeftTee;",
      "8868": "top;",
      "8869": "UpTee;",
      "8871": "models;",
      "8872": "vDash;",
      "8873": "Vdash;",
      "8874": "Vvdash;",
      "8875": "VDash;",
      "8876": "nvdash;",
      "8877": "nvDash;",
      "8878": "nVdash;",
      "8879": "nVDash;",
      "8880": "prurel;",
      "8882": "vltri;",
      "8883": "vrtri;",
      "8884": "trianglelefteq;",
      "8885": "trianglerighteq;",
      "8886": "origof;",
      "8887": "imof;",
      "8888": "mumap;",
      "8889": "hercon;",
      "8890": "intercal;",
      "8891": "veebar;",
      "8893": "barvee;",
      "8894": "angrtvb;",
      "8895": "lrtri;",
      "8896": "xwedge;",
      "8897": "xvee;",
      "8898": "xcap;",
      "8899": "xcup;",
      "8900": "diamond;",
      "8901": "sdot;",
      "8902": "Star;",
      "8903": "divonx;",
      "8904": "bowtie;",
      "8905": "ltimes;",
      "8906": "rtimes;",
      "8907": "lthree;",
      "8908": "rthree;",
      "8909": "bsime;",
      "8910": "cuvee;",
      "8911": "cuwed;",
      "8912": "Subset;",
      "8913": "Supset;",
      "8914": "Cap;",
      "8915": "Cup;",
      "8916": "pitchfork;",
      "8917": "epar;",
      "8918": "ltdot;",
      "8919": "gtrdot;",
      "8920": "Ll;",
      "8921": "ggg;",
      "8922": "LessEqualGreater;",
      "8923": "gtreqless;",
      "8926": "curlyeqprec;",
      "8927": "curlyeqsucc;",
      "8928": "nprcue;",
      "8929": "nsccue;",
      "8930": "nsqsube;",
      "8931": "nsqsupe;",
      "8934": "lnsim;",
      "8935": "gnsim;",
      "8936": "prnsim;",
      "8937": "succnsim;",
      "8938": "ntriangleleft;",
      "8939": "ntriangleright;",
      "8940": "ntrianglelefteq;",
      "8941": "ntrianglerighteq;",
      "8942": "vellip;",
      "8943": "ctdot;",
      "8944": "utdot;",
      "8945": "dtdot;",
      "8946": "disin;",
      "8947": "isinsv;",
      "8948": "isins;",
      "8949": "isindot;",
      "8950": "notinvc;",
      "8951": "notinvb;",
      "8953": "isinE;",
      "8954": "nisd;",
      "8955": "xnis;",
      "8956": "nis;",
      "8957": "notnivc;",
      "8958": "notnivb;",
      "8965": "barwedge;",
      "8966": "doublebarwedge;",
      "8968": "LeftCeiling;",
      "8969": "RightCeiling;",
      "8970": "lfloor;",
      "8971": "RightFloor;",
      "8972": "drcrop;",
      "8973": "dlcrop;",
      "8974": "urcrop;",
      "8975": "ulcrop;",
      "8976": "bnot;",
      "8978": "profline;",
      "8979": "profsurf;",
      "8981": "telrec;",
      "8982": "target;",
      "8988": "ulcorner;",
      "8989": "urcorner;",
      "8990": "llcorner;",
      "8991": "lrcorner;",
      "8994": "sfrown;",
      "8995": "ssmile;",
      "9005": "cylcty;",
      "9006": "profalar;",
      "9014": "topbot;",
      "9021": "ovbar;",
      "9023": "solbar;",
      "9084": "angzarr;",
      "9136": "lmoustache;",
      "9137": "rmoustache;",
      "9140": "tbrk;",
      "9141": "UnderBracket;",
      "9142": "bbrktbrk;",
      "9180": "OverParenthesis;",
      "9181": "UnderParenthesis;",
      "9182": "OverBrace;",
      "9183": "UnderBrace;",
      "9186": "trpezium;",
      "9191": "elinters;",
      "9251": "blank;",
      "9416": "oS;",
      "9472": "HorizontalLine;",
      "9474": "boxv;",
      "9484": "boxdr;",
      "9488": "boxdl;",
      "9492": "boxur;",
      "9496": "boxul;",
      "9500": "boxvr;",
      "9508": "boxvl;",
      "9516": "boxhd;",
      "9524": "boxhu;",
      "9532": "boxvh;",
      "9552": "boxH;",
      "9553": "boxV;",
      "9554": "boxdR;",
      "9555": "boxDr;",
      "9556": "boxDR;",
      "9557": "boxdL;",
      "9558": "boxDl;",
      "9559": "boxDL;",
      "9560": "boxuR;",
      "9561": "boxUr;",
      "9562": "boxUR;",
      "9563": "boxuL;",
      "9564": "boxUl;",
      "9565": "boxUL;",
      "9566": "boxvR;",
      "9567": "boxVr;",
      "9568": "boxVR;",
      "9569": "boxvL;",
      "9570": "boxVl;",
      "9571": "boxVL;",
      "9572": "boxHd;",
      "9573": "boxhD;",
      "9574": "boxHD;",
      "9575": "boxHu;",
      "9576": "boxhU;",
      "9577": "boxHU;",
      "9578": "boxvH;",
      "9579": "boxVh;",
      "9580": "boxVH;",
      "9600": "uhblk;",
      "9604": "lhblk;",
      "9608": "block;",
      "9617": "blk14;",
      "9618": "blk12;",
      "9619": "blk34;",
      "9633": "square;",
      "9642": "squf;",
      "9643": "EmptyVerySmallSquare;",
      "9645": "rect;",
      "9646": "marker;",
      "9649": "fltns;",
      "9651": "xutri;",
      "9652": "utrif;",
      "9653": "utri;",
      "9656": "rtrif;",
      "9657": "triangleright;",
      "9661": "xdtri;",
      "9662": "dtrif;",
      "9663": "triangledown;",
      "9666": "ltrif;",
      "9667": "triangleleft;",
      "9674": "lozenge;",
      "9675": "cir;",
      "9708": "tridot;",
      "9711": "xcirc;",
      "9720": "ultri;",
      "9721": "urtri;",
      "9722": "lltri;",
      "9723": "EmptySmallSquare;",
      "9724": "FilledSmallSquare;",
      "9733": "starf;",
      "9734": "star;",
      "9742": "phone;",
      "9792": "female;",
      "9794": "male;",
      "9824": "spadesuit;",
      "9827": "clubsuit;",
      "9829": "heartsuit;",
      "9830": "diams;",
      "9834": "sung;",
      "9837": "flat;",
      "9838": "natural;",
      "9839": "sharp;",
      "10003": "checkmark;",
      "10007": "cross;",
      "10016": "maltese;",
      "10038": "sext;",
      "10072": "VerticalSeparator;",
      "10098": "lbbrk;",
      "10099": "rbbrk;",
      "10184": "bsolhsub;",
      "10185": "suphsol;",
      "10214": "lobrk;",
      "10215": "robrk;",
      "10216": "LeftAngleBracket;",
      "10217": "RightAngleBracket;",
      "10218": "Lang;",
      "10219": "Rang;",
      "10220": "loang;",
      "10221": "roang;",
      "10229": "xlarr;",
      "10230": "xrarr;",
      "10231": "xharr;",
      "10232": "xlArr;",
      "10233": "xrArr;",
      "10234": "xhArr;",
      "10236": "xmap;",
      "10239": "dzigrarr;",
      "10498": "nvlArr;",
      "10499": "nvrArr;",
      "10500": "nvHarr;",
      "10501": "Map;",
      "10508": "lbarr;",
      "10509": "rbarr;",
      "10510": "lBarr;",
      "10511": "rBarr;",
      "10512": "RBarr;",
      "10513": "DDotrahd;",
      "10514": "UpArrowBar;",
      "10515": "DownArrowBar;",
      "10518": "Rarrtl;",
      "10521": "latail;",
      "10522": "ratail;",
      "10523": "lAtail;",
      "10524": "rAtail;",
      "10525": "larrfs;",
      "10526": "rarrfs;",
      "10527": "larrbfs;",
      "10528": "rarrbfs;",
      "10531": "nwarhk;",
      "10532": "nearhk;",
      "10533": "searhk;",
      "10534": "swarhk;",
      "10535": "nwnear;",
      "10536": "toea;",
      "10537": "tosa;",
      "10538": "swnwar;",
      "10547": "rarrc;",
      "10549": "cudarrr;",
      "10550": "ldca;",
      "10551": "rdca;",
      "10552": "cudarrl;",
      "10553": "larrpl;",
      "10556": "curarrm;",
      "10557": "cularrp;",
      "10565": "rarrpl;",
      "10568": "harrcir;",
      "10569": "Uarrocir;",
      "10570": "lurdshar;",
      "10571": "ldrushar;",
      "10574": "LeftRightVector;",
      "10575": "RightUpDownVector;",
      "10576": "DownLeftRightVector;",
      "10577": "LeftUpDownVector;",
      "10578": "LeftVectorBar;",
      "10579": "RightVectorBar;",
      "10580": "RightUpVectorBar;",
      "10581": "RightDownVectorBar;",
      "10582": "DownLeftVectorBar;",
      "10583": "DownRightVectorBar;",
      "10584": "LeftUpVectorBar;",
      "10585": "LeftDownVectorBar;",
      "10586": "LeftTeeVector;",
      "10587": "RightTeeVector;",
      "10588": "RightUpTeeVector;",
      "10589": "RightDownTeeVector;",
      "10590": "DownLeftTeeVector;",
      "10591": "DownRightTeeVector;",
      "10592": "LeftUpTeeVector;",
      "10593": "LeftDownTeeVector;",
      "10594": "lHar;",
      "10595": "uHar;",
      "10596": "rHar;",
      "10597": "dHar;",
      "10598": "luruhar;",
      "10599": "ldrdhar;",
      "10600": "ruluhar;",
      "10601": "rdldhar;",
      "10602": "lharul;",
      "10603": "llhard;",
      "10604": "rharul;",
      "10605": "lrhard;",
      "10606": "UpEquilibrium;",
      "10607": "ReverseUpEquilibrium;",
      "10608": "RoundImplies;",
      "10609": "erarr;",
      "10610": "simrarr;",
      "10611": "larrsim;",
      "10612": "rarrsim;",
      "10613": "rarrap;",
      "10614": "ltlarr;",
      "10616": "gtrarr;",
      "10617": "subrarr;",
      "10619": "suplarr;",
      "10620": "lfisht;",
      "10621": "rfisht;",
      "10622": "ufisht;",
      "10623": "dfisht;",
      "10629": "lopar;",
      "10630": "ropar;",
      "10635": "lbrke;",
      "10636": "rbrke;",
      "10637": "lbrkslu;",
      "10638": "rbrksld;",
      "10639": "lbrksld;",
      "10640": "rbrkslu;",
      "10641": "langd;",
      "10642": "rangd;",
      "10643": "lparlt;",
      "10644": "rpargt;",
      "10645": "gtlPar;",
      "10646": "ltrPar;",
      "10650": "vzigzag;",
      "10652": "vangrt;",
      "10653": "angrtvbd;",
      "10660": "ange;",
      "10661": "range;",
      "10662": "dwangle;",
      "10663": "uwangle;",
      "10664": "angmsdaa;",
      "10665": "angmsdab;",
      "10666": "angmsdac;",
      "10667": "angmsdad;",
      "10668": "angmsdae;",
      "10669": "angmsdaf;",
      "10670": "angmsdag;",
      "10671": "angmsdah;",
      "10672": "bemptyv;",
      "10673": "demptyv;",
      "10674": "cemptyv;",
      "10675": "raemptyv;",
      "10676": "laemptyv;",
      "10677": "ohbar;",
      "10678": "omid;",
      "10679": "opar;",
      "10681": "operp;",
      "10683": "olcross;",
      "10684": "odsold;",
      "10686": "olcir;",
      "10687": "ofcir;",
      "10688": "olt;",
      "10689": "ogt;",
      "10690": "cirscir;",
      "10691": "cirE;",
      "10692": "solb;",
      "10693": "bsolb;",
      "10697": "boxbox;",
      "10701": "trisb;",
      "10702": "rtriltri;",
      "10703": "LeftTriangleBar;",
      "10704": "RightTriangleBar;",
      "10716": "iinfin;",
      "10717": "infintie;",
      "10718": "nvinfin;",
      "10723": "eparsl;",
      "10724": "smeparsl;",
      "10725": "eqvparsl;",
      "10731": "lozf;",
      "10740": "RuleDelayed;",
      "10742": "dsol;",
      "10752": "xodot;",
      "10753": "xoplus;",
      "10754": "xotime;",
      "10756": "xuplus;",
      "10758": "xsqcup;",
      "10764": "qint;",
      "10765": "fpartint;",
      "10768": "cirfnint;",
      "10769": "awint;",
      "10770": "rppolint;",
      "10771": "scpolint;",
      "10772": "npolint;",
      "10773": "pointint;",
      "10774": "quatint;",
      "10775": "intlarhk;",
      "10786": "pluscir;",
      "10787": "plusacir;",
      "10788": "simplus;",
      "10789": "plusdu;",
      "10790": "plussim;",
      "10791": "plustwo;",
      "10793": "mcomma;",
      "10794": "minusdu;",
      "10797": "loplus;",
      "10798": "roplus;",
      "10799": "Cross;",
      "10800": "timesd;",
      "10801": "timesbar;",
      "10803": "smashp;",
      "10804": "lotimes;",
      "10805": "rotimes;",
      "10806": "otimesas;",
      "10807": "Otimes;",
      "10808": "odiv;",
      "10809": "triplus;",
      "10810": "triminus;",
      "10811": "tritime;",
      "10812": "iprod;",
      "10815": "amalg;",
      "10816": "capdot;",
      "10818": "ncup;",
      "10819": "ncap;",
      "10820": "capand;",
      "10821": "cupor;",
      "10822": "cupcap;",
      "10823": "capcup;",
      "10824": "cupbrcap;",
      "10825": "capbrcup;",
      "10826": "cupcup;",
      "10827": "capcap;",
      "10828": "ccups;",
      "10829": "ccaps;",
      "10832": "ccupssm;",
      "10835": "And;",
      "10836": "Or;",
      "10837": "andand;",
      "10838": "oror;",
      "10839": "orslope;",
      "10840": "andslope;",
      "10842": "andv;",
      "10843": "orv;",
      "10844": "andd;",
      "10845": "ord;",
      "10847": "wedbar;",
      "10854": "sdote;",
      "10858": "simdot;",
      "10861": "congdot;",
      "10862": "easter;",
      "10863": "apacir;",
      "10864": "apE;",
      "10865": "eplus;",
      "10866": "pluse;",
      "10867": "Esim;",
      "10868": "Colone;",
      "10869": "Equal;",
      "10871": "eDDot;",
      "10872": "equivDD;",
      "10873": "ltcir;",
      "10874": "gtcir;",
      "10875": "ltquest;",
      "10876": "gtquest;",
      "10877": "LessSlantEqual;",
      "10878": "GreaterSlantEqual;",
      "10879": "lesdot;",
      "10880": "gesdot;",
      "10881": "lesdoto;",
      "10882": "gesdoto;",
      "10883": "lesdotor;",
      "10884": "gesdotol;",
      "10885": "lessapprox;",
      "10886": "gtrapprox;",
      "10887": "lneq;",
      "10888": "gneq;",
      "10889": "lnapprox;",
      "10890": "gnapprox;",
      "10891": "lesseqqgtr;",
      "10892": "gtreqqless;",
      "10893": "lsime;",
      "10894": "gsime;",
      "10895": "lsimg;",
      "10896": "gsiml;",
      "10897": "lgE;",
      "10898": "glE;",
      "10899": "lesges;",
      "10900": "gesles;",
      "10901": "eqslantless;",
      "10902": "eqslantgtr;",
      "10903": "elsdot;",
      "10904": "egsdot;",
      "10905": "el;",
      "10906": "eg;",
      "10909": "siml;",
      "10910": "simg;",
      "10911": "simlE;",
      "10912": "simgE;",
      "10913": "LessLess;",
      "10914": "GreaterGreater;",
      "10916": "glj;",
      "10917": "gla;",
      "10918": "ltcc;",
      "10919": "gtcc;",
      "10920": "lescc;",
      "10921": "gescc;",
      "10922": "smt;",
      "10923": "lat;",
      "10924": "smte;",
      "10925": "late;",
      "10926": "bumpE;",
      "10927": "preceq;",
      "10928": "succeq;",
      "10931": "prE;",
      "10932": "scE;",
      "10933": "prnE;",
      "10934": "succneqq;",
      "10935": "precapprox;",
      "10936": "succapprox;",
      "10937": "prnap;",
      "10938": "succnapprox;",
      "10939": "Pr;",
      "10940": "Sc;",
      "10941": "subdot;",
      "10942": "supdot;",
      "10943": "subplus;",
      "10944": "supplus;",
      "10945": "submult;",
      "10946": "supmult;",
      "10947": "subedot;",
      "10948": "supedot;",
      "10949": "subseteqq;",
      "10950": "supseteqq;",
      "10951": "subsim;",
      "10952": "supsim;",
      "10955": "subsetneqq;",
      "10956": "supsetneqq;",
      "10959": "csub;",
      "10960": "csup;",
      "10961": "csube;",
      "10962": "csupe;",
      "10963": "subsup;",
      "10964": "supsub;",
      "10965": "subsub;",
      "10966": "supsup;",
      "10967": "suphsub;",
      "10968": "supdsub;",
      "10969": "forkv;",
      "10970": "topfork;",
      "10971": "mlcp;",
      "10980": "DoubleLeftTee;",
      "10982": "Vdashl;",
      "10983": "Barv;",
      "10984": "vBar;",
      "10985": "vBarv;",
      "10987": "Vbar;",
      "10988": "Not;",
      "10989": "bNot;",
      "10990": "rnmid;",
      "10991": "cirmid;",
      "10992": "midcir;",
      "10993": "topcir;",
      "10994": "nhpar;",
      "10995": "parsim;",
      "11005": "parsl;",
      "64256": "fflig;",
      "64257": "filig;",
      "64258": "fllig;",
      "64259": "ffilig;",
      "64260": "ffllig;"
    };
  });

  // node_modules/ent/encode.js
  var require_encode = __commonJS((exports, module) => {
    var punycode = require_punycode();
    var revEntities = require_reversed();
    module.exports = encode;
    function encode(str, opts) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a String");
      }
      if (!opts)
        opts = {};
      var numeric = true;
      if (opts.named)
        numeric = false;
      if (opts.numeric !== void 0)
        numeric = opts.numeric;
      var special = opts.special || {
        '"': true,
        "'": true,
        "<": true,
        ">": true,
        "&": true
      };
      var codePoints = punycode.ucs2.decode(str);
      var chars = [];
      for (var i = 0; i < codePoints.length; i++) {
        var cc = codePoints[i];
        var c = punycode.ucs2.encode([cc]);
        var e = revEntities[cc];
        if (e && (cc >= 127 || special[c]) && !numeric) {
          chars.push("&" + (/;$/.test(e) ? e : e + ";"));
        } else if (cc < 32 || cc >= 127 || special[c]) {
          chars.push("&#" + cc + ";");
        } else {
          chars.push(c);
        }
      }
      return chars.join("");
    }
  });

  // node_modules/ent/entities.json
  var require_entities = __commonJS((exports, module) => {
    module.exports = {
      "Aacute;": "Á",
      Aacute: "Á",
      "aacute;": "á",
      aacute: "á",
      "Abreve;": "Ă",
      "abreve;": "ă",
      "ac;": "∾",
      "acd;": "∿",
      "acE;": "∾̳",
      "Acirc;": "Â",
      Acirc: "Â",
      "acirc;": "â",
      acirc: "â",
      "acute;": "´",
      acute: "´",
      "Acy;": "А",
      "acy;": "а",
      "AElig;": "Æ",
      AElig: "Æ",
      "aelig;": "æ",
      aelig: "æ",
      "af;": "⁡",
      "Afr;": "𝔄",
      "afr;": "𝔞",
      "Agrave;": "À",
      Agrave: "À",
      "agrave;": "à",
      agrave: "à",
      "alefsym;": "ℵ",
      "aleph;": "ℵ",
      "Alpha;": "Α",
      "alpha;": "α",
      "Amacr;": "Ā",
      "amacr;": "ā",
      "amalg;": "⨿",
      "AMP;": "&",
      AMP: "&",
      "amp;": "&",
      amp: "&",
      "And;": "⩓",
      "and;": "∧",
      "andand;": "⩕",
      "andd;": "⩜",
      "andslope;": "⩘",
      "andv;": "⩚",
      "ang;": "∠",
      "ange;": "⦤",
      "angle;": "∠",
      "angmsd;": "∡",
      "angmsdaa;": "⦨",
      "angmsdab;": "⦩",
      "angmsdac;": "⦪",
      "angmsdad;": "⦫",
      "angmsdae;": "⦬",
      "angmsdaf;": "⦭",
      "angmsdag;": "⦮",
      "angmsdah;": "⦯",
      "angrt;": "∟",
      "angrtvb;": "⊾",
      "angrtvbd;": "⦝",
      "angsph;": "∢",
      "angst;": "Å",
      "angzarr;": "⍼",
      "Aogon;": "Ą",
      "aogon;": "ą",
      "Aopf;": "𝔸",
      "aopf;": "𝕒",
      "ap;": "≈",
      "apacir;": "⩯",
      "apE;": "⩰",
      "ape;": "≊",
      "apid;": "≋",
      "apos;": "'",
      "ApplyFunction;": "⁡",
      "approx;": "≈",
      "approxeq;": "≊",
      "Aring;": "Å",
      Aring: "Å",
      "aring;": "å",
      aring: "å",
      "Ascr;": "𝒜",
      "ascr;": "𝒶",
      "Assign;": "≔",
      "ast;": "*",
      "asymp;": "≈",
      "asympeq;": "≍",
      "Atilde;": "Ã",
      Atilde: "Ã",
      "atilde;": "ã",
      atilde: "ã",
      "Auml;": "Ä",
      Auml: "Ä",
      "auml;": "ä",
      auml: "ä",
      "awconint;": "∳",
      "awint;": "⨑",
      "backcong;": "≌",
      "backepsilon;": "϶",
      "backprime;": "‵",
      "backsim;": "∽",
      "backsimeq;": "⋍",
      "Backslash;": "∖",
      "Barv;": "⫧",
      "barvee;": "⊽",
      "Barwed;": "⌆",
      "barwed;": "⌅",
      "barwedge;": "⌅",
      "bbrk;": "⎵",
      "bbrktbrk;": "⎶",
      "bcong;": "≌",
      "Bcy;": "Б",
      "bcy;": "б",
      "bdquo;": "„",
      "becaus;": "∵",
      "Because;": "∵",
      "because;": "∵",
      "bemptyv;": "⦰",
      "bepsi;": "϶",
      "bernou;": "ℬ",
      "Bernoullis;": "ℬ",
      "Beta;": "Β",
      "beta;": "β",
      "beth;": "ℶ",
      "between;": "≬",
      "Bfr;": "𝔅",
      "bfr;": "𝔟",
      "bigcap;": "⋂",
      "bigcirc;": "◯",
      "bigcup;": "⋃",
      "bigodot;": "⨀",
      "bigoplus;": "⨁",
      "bigotimes;": "⨂",
      "bigsqcup;": "⨆",
      "bigstar;": "★",
      "bigtriangledown;": "▽",
      "bigtriangleup;": "△",
      "biguplus;": "⨄",
      "bigvee;": "⋁",
      "bigwedge;": "⋀",
      "bkarow;": "⤍",
      "blacklozenge;": "⧫",
      "blacksquare;": "▪",
      "blacktriangle;": "▴",
      "blacktriangledown;": "▾",
      "blacktriangleleft;": "◂",
      "blacktriangleright;": "▸",
      "blank;": "␣",
      "blk12;": "▒",
      "blk14;": "░",
      "blk34;": "▓",
      "block;": "█",
      "bne;": "=⃥",
      "bnequiv;": "≡⃥",
      "bNot;": "⫭",
      "bnot;": "⌐",
      "Bopf;": "𝔹",
      "bopf;": "𝕓",
      "bot;": "⊥",
      "bottom;": "⊥",
      "bowtie;": "⋈",
      "boxbox;": "⧉",
      "boxDL;": "╗",
      "boxDl;": "╖",
      "boxdL;": "╕",
      "boxdl;": "┐",
      "boxDR;": "╔",
      "boxDr;": "╓",
      "boxdR;": "╒",
      "boxdr;": "┌",
      "boxH;": "═",
      "boxh;": "─",
      "boxHD;": "╦",
      "boxHd;": "╤",
      "boxhD;": "╥",
      "boxhd;": "┬",
      "boxHU;": "╩",
      "boxHu;": "╧",
      "boxhU;": "╨",
      "boxhu;": "┴",
      "boxminus;": "⊟",
      "boxplus;": "⊞",
      "boxtimes;": "⊠",
      "boxUL;": "╝",
      "boxUl;": "╜",
      "boxuL;": "╛",
      "boxul;": "┘",
      "boxUR;": "╚",
      "boxUr;": "╙",
      "boxuR;": "╘",
      "boxur;": "└",
      "boxV;": "║",
      "boxv;": "│",
      "boxVH;": "╬",
      "boxVh;": "╫",
      "boxvH;": "╪",
      "boxvh;": "┼",
      "boxVL;": "╣",
      "boxVl;": "╢",
      "boxvL;": "╡",
      "boxvl;": "┤",
      "boxVR;": "╠",
      "boxVr;": "╟",
      "boxvR;": "╞",
      "boxvr;": "├",
      "bprime;": "‵",
      "Breve;": "˘",
      "breve;": "˘",
      "brvbar;": "¦",
      brvbar: "¦",
      "Bscr;": "ℬ",
      "bscr;": "𝒷",
      "bsemi;": "⁏",
      "bsim;": "∽",
      "bsime;": "⋍",
      "bsol;": "\\",
      "bsolb;": "⧅",
      "bsolhsub;": "⟈",
      "bull;": "•",
      "bullet;": "•",
      "bump;": "≎",
      "bumpE;": "⪮",
      "bumpe;": "≏",
      "Bumpeq;": "≎",
      "bumpeq;": "≏",
      "Cacute;": "Ć",
      "cacute;": "ć",
      "Cap;": "⋒",
      "cap;": "∩",
      "capand;": "⩄",
      "capbrcup;": "⩉",
      "capcap;": "⩋",
      "capcup;": "⩇",
      "capdot;": "⩀",
      "CapitalDifferentialD;": "ⅅ",
      "caps;": "∩︀",
      "caret;": "⁁",
      "caron;": "ˇ",
      "Cayleys;": "ℭ",
      "ccaps;": "⩍",
      "Ccaron;": "Č",
      "ccaron;": "č",
      "Ccedil;": "Ç",
      Ccedil: "Ç",
      "ccedil;": "ç",
      ccedil: "ç",
      "Ccirc;": "Ĉ",
      "ccirc;": "ĉ",
      "Cconint;": "∰",
      "ccups;": "⩌",
      "ccupssm;": "⩐",
      "Cdot;": "Ċ",
      "cdot;": "ċ",
      "cedil;": "¸",
      cedil: "¸",
      "Cedilla;": "¸",
      "cemptyv;": "⦲",
      "cent;": "¢",
      cent: "¢",
      "CenterDot;": "·",
      "centerdot;": "·",
      "Cfr;": "ℭ",
      "cfr;": "𝔠",
      "CHcy;": "Ч",
      "chcy;": "ч",
      "check;": "✓",
      "checkmark;": "✓",
      "Chi;": "Χ",
      "chi;": "χ",
      "cir;": "○",
      "circ;": "ˆ",
      "circeq;": "≗",
      "circlearrowleft;": "↺",
      "circlearrowright;": "↻",
      "circledast;": "⊛",
      "circledcirc;": "⊚",
      "circleddash;": "⊝",
      "CircleDot;": "⊙",
      "circledR;": "®",
      "circledS;": "Ⓢ",
      "CircleMinus;": "⊖",
      "CirclePlus;": "⊕",
      "CircleTimes;": "⊗",
      "cirE;": "⧃",
      "cire;": "≗",
      "cirfnint;": "⨐",
      "cirmid;": "⫯",
      "cirscir;": "⧂",
      "ClockwiseContourIntegral;": "∲",
      "CloseCurlyDoubleQuote;": "”",
      "CloseCurlyQuote;": "’",
      "clubs;": "♣",
      "clubsuit;": "♣",
      "Colon;": "∷",
      "colon;": ":",
      "Colone;": "⩴",
      "colone;": "≔",
      "coloneq;": "≔",
      "comma;": ",",
      "commat;": "@",
      "comp;": "∁",
      "compfn;": "∘",
      "complement;": "∁",
      "complexes;": "ℂ",
      "cong;": "≅",
      "congdot;": "⩭",
      "Congruent;": "≡",
      "Conint;": "∯",
      "conint;": "∮",
      "ContourIntegral;": "∮",
      "Copf;": "ℂ",
      "copf;": "𝕔",
      "coprod;": "∐",
      "Coproduct;": "∐",
      "COPY;": "©",
      COPY: "©",
      "copy;": "©",
      copy: "©",
      "copysr;": "℗",
      "CounterClockwiseContourIntegral;": "∳",
      "crarr;": "↵",
      "Cross;": "⨯",
      "cross;": "✗",
      "Cscr;": "𝒞",
      "cscr;": "𝒸",
      "csub;": "⫏",
      "csube;": "⫑",
      "csup;": "⫐",
      "csupe;": "⫒",
      "ctdot;": "⋯",
      "cudarrl;": "⤸",
      "cudarrr;": "⤵",
      "cuepr;": "⋞",
      "cuesc;": "⋟",
      "cularr;": "↶",
      "cularrp;": "⤽",
      "Cup;": "⋓",
      "cup;": "∪",
      "cupbrcap;": "⩈",
      "CupCap;": "≍",
      "cupcap;": "⩆",
      "cupcup;": "⩊",
      "cupdot;": "⊍",
      "cupor;": "⩅",
      "cups;": "∪︀",
      "curarr;": "↷",
      "curarrm;": "⤼",
      "curlyeqprec;": "⋞",
      "curlyeqsucc;": "⋟",
      "curlyvee;": "⋎",
      "curlywedge;": "⋏",
      "curren;": "¤",
      curren: "¤",
      "curvearrowleft;": "↶",
      "curvearrowright;": "↷",
      "cuvee;": "⋎",
      "cuwed;": "⋏",
      "cwconint;": "∲",
      "cwint;": "∱",
      "cylcty;": "⌭",
      "Dagger;": "‡",
      "dagger;": "†",
      "daleth;": "ℸ",
      "Darr;": "↡",
      "dArr;": "⇓",
      "darr;": "↓",
      "dash;": "‐",
      "Dashv;": "⫤",
      "dashv;": "⊣",
      "dbkarow;": "⤏",
      "dblac;": "˝",
      "Dcaron;": "Ď",
      "dcaron;": "ď",
      "Dcy;": "Д",
      "dcy;": "д",
      "DD;": "ⅅ",
      "dd;": "ⅆ",
      "ddagger;": "‡",
      "ddarr;": "⇊",
      "DDotrahd;": "⤑",
      "ddotseq;": "⩷",
      "deg;": "°",
      deg: "°",
      "Del;": "∇",
      "Delta;": "Δ",
      "delta;": "δ",
      "demptyv;": "⦱",
      "dfisht;": "⥿",
      "Dfr;": "𝔇",
      "dfr;": "𝔡",
      "dHar;": "⥥",
      "dharl;": "⇃",
      "dharr;": "⇂",
      "DiacriticalAcute;": "´",
      "DiacriticalDot;": "˙",
      "DiacriticalDoubleAcute;": "˝",
      "DiacriticalGrave;": "`",
      "DiacriticalTilde;": "˜",
      "diam;": "⋄",
      "Diamond;": "⋄",
      "diamond;": "⋄",
      "diamondsuit;": "♦",
      "diams;": "♦",
      "die;": "¨",
      "DifferentialD;": "ⅆ",
      "digamma;": "ϝ",
      "disin;": "⋲",
      "div;": "÷",
      "divide;": "÷",
      divide: "÷",
      "divideontimes;": "⋇",
      "divonx;": "⋇",
      "DJcy;": "Ђ",
      "djcy;": "ђ",
      "dlcorn;": "⌞",
      "dlcrop;": "⌍",
      "dollar;": "$",
      "Dopf;": "𝔻",
      "dopf;": "𝕕",
      "Dot;": "¨",
      "dot;": "˙",
      "DotDot;": "⃜",
      "doteq;": "≐",
      "doteqdot;": "≑",
      "DotEqual;": "≐",
      "dotminus;": "∸",
      "dotplus;": "∔",
      "dotsquare;": "⊡",
      "doublebarwedge;": "⌆",
      "DoubleContourIntegral;": "∯",
      "DoubleDot;": "¨",
      "DoubleDownArrow;": "⇓",
      "DoubleLeftArrow;": "⇐",
      "DoubleLeftRightArrow;": "⇔",
      "DoubleLeftTee;": "⫤",
      "DoubleLongLeftArrow;": "⟸",
      "DoubleLongLeftRightArrow;": "⟺",
      "DoubleLongRightArrow;": "⟹",
      "DoubleRightArrow;": "⇒",
      "DoubleRightTee;": "⊨",
      "DoubleUpArrow;": "⇑",
      "DoubleUpDownArrow;": "⇕",
      "DoubleVerticalBar;": "∥",
      "DownArrow;": "↓",
      "Downarrow;": "⇓",
      "downarrow;": "↓",
      "DownArrowBar;": "⤓",
      "DownArrowUpArrow;": "⇵",
      "DownBreve;": "̑",
      "downdownarrows;": "⇊",
      "downharpoonleft;": "⇃",
      "downharpoonright;": "⇂",
      "DownLeftRightVector;": "⥐",
      "DownLeftTeeVector;": "⥞",
      "DownLeftVector;": "↽",
      "DownLeftVectorBar;": "⥖",
      "DownRightTeeVector;": "⥟",
      "DownRightVector;": "⇁",
      "DownRightVectorBar;": "⥗",
      "DownTee;": "⊤",
      "DownTeeArrow;": "↧",
      "drbkarow;": "⤐",
      "drcorn;": "⌟",
      "drcrop;": "⌌",
      "Dscr;": "𝒟",
      "dscr;": "𝒹",
      "DScy;": "Ѕ",
      "dscy;": "ѕ",
      "dsol;": "⧶",
      "Dstrok;": "Đ",
      "dstrok;": "đ",
      "dtdot;": "⋱",
      "dtri;": "▿",
      "dtrif;": "▾",
      "duarr;": "⇵",
      "duhar;": "⥯",
      "dwangle;": "⦦",
      "DZcy;": "Џ",
      "dzcy;": "џ",
      "dzigrarr;": "⟿",
      "Eacute;": "É",
      Eacute: "É",
      "eacute;": "é",
      eacute: "é",
      "easter;": "⩮",
      "Ecaron;": "Ě",
      "ecaron;": "ě",
      "ecir;": "≖",
      "Ecirc;": "Ê",
      Ecirc: "Ê",
      "ecirc;": "ê",
      ecirc: "ê",
      "ecolon;": "≕",
      "Ecy;": "Э",
      "ecy;": "э",
      "eDDot;": "⩷",
      "Edot;": "Ė",
      "eDot;": "≑",
      "edot;": "ė",
      "ee;": "ⅇ",
      "efDot;": "≒",
      "Efr;": "𝔈",
      "efr;": "𝔢",
      "eg;": "⪚",
      "Egrave;": "È",
      Egrave: "È",
      "egrave;": "è",
      egrave: "è",
      "egs;": "⪖",
      "egsdot;": "⪘",
      "el;": "⪙",
      "Element;": "∈",
      "elinters;": "⏧",
      "ell;": "ℓ",
      "els;": "⪕",
      "elsdot;": "⪗",
      "Emacr;": "Ē",
      "emacr;": "ē",
      "empty;": "∅",
      "emptyset;": "∅",
      "EmptySmallSquare;": "◻",
      "emptyv;": "∅",
      "EmptyVerySmallSquare;": "▫",
      "emsp;": " ",
      "emsp13;": " ",
      "emsp14;": " ",
      "ENG;": "Ŋ",
      "eng;": "ŋ",
      "ensp;": " ",
      "Eogon;": "Ę",
      "eogon;": "ę",
      "Eopf;": "𝔼",
      "eopf;": "𝕖",
      "epar;": "⋕",
      "eparsl;": "⧣",
      "eplus;": "⩱",
      "epsi;": "ε",
      "Epsilon;": "Ε",
      "epsilon;": "ε",
      "epsiv;": "ϵ",
      "eqcirc;": "≖",
      "eqcolon;": "≕",
      "eqsim;": "≂",
      "eqslantgtr;": "⪖",
      "eqslantless;": "⪕",
      "Equal;": "⩵",
      "equals;": "=",
      "EqualTilde;": "≂",
      "equest;": "≟",
      "Equilibrium;": "⇌",
      "equiv;": "≡",
      "equivDD;": "⩸",
      "eqvparsl;": "⧥",
      "erarr;": "⥱",
      "erDot;": "≓",
      "Escr;": "ℰ",
      "escr;": "ℯ",
      "esdot;": "≐",
      "Esim;": "⩳",
      "esim;": "≂",
      "Eta;": "Η",
      "eta;": "η",
      "ETH;": "Ð",
      ETH: "Ð",
      "eth;": "ð",
      eth: "ð",
      "Euml;": "Ë",
      Euml: "Ë",
      "euml;": "ë",
      euml: "ë",
      "euro;": "€",
      "excl;": "!",
      "exist;": "∃",
      "Exists;": "∃",
      "expectation;": "ℰ",
      "ExponentialE;": "ⅇ",
      "exponentiale;": "ⅇ",
      "fallingdotseq;": "≒",
      "Fcy;": "Ф",
      "fcy;": "ф",
      "female;": "♀",
      "ffilig;": "ﬃ",
      "fflig;": "ﬀ",
      "ffllig;": "ﬄ",
      "Ffr;": "𝔉",
      "ffr;": "𝔣",
      "filig;": "ﬁ",
      "FilledSmallSquare;": "◼",
      "FilledVerySmallSquare;": "▪",
      "fjlig;": "fj",
      "flat;": "♭",
      "fllig;": "ﬂ",
      "fltns;": "▱",
      "fnof;": "ƒ",
      "Fopf;": "𝔽",
      "fopf;": "𝕗",
      "ForAll;": "∀",
      "forall;": "∀",
      "fork;": "⋔",
      "forkv;": "⫙",
      "Fouriertrf;": "ℱ",
      "fpartint;": "⨍",
      "frac12;": "½",
      frac12: "½",
      "frac13;": "⅓",
      "frac14;": "¼",
      frac14: "¼",
      "frac15;": "⅕",
      "frac16;": "⅙",
      "frac18;": "⅛",
      "frac23;": "⅔",
      "frac25;": "⅖",
      "frac34;": "¾",
      frac34: "¾",
      "frac35;": "⅗",
      "frac38;": "⅜",
      "frac45;": "⅘",
      "frac56;": "⅚",
      "frac58;": "⅝",
      "frac78;": "⅞",
      "frasl;": "⁄",
      "frown;": "⌢",
      "Fscr;": "ℱ",
      "fscr;": "𝒻",
      "gacute;": "ǵ",
      "Gamma;": "Γ",
      "gamma;": "γ",
      "Gammad;": "Ϝ",
      "gammad;": "ϝ",
      "gap;": "⪆",
      "Gbreve;": "Ğ",
      "gbreve;": "ğ",
      "Gcedil;": "Ģ",
      "Gcirc;": "Ĝ",
      "gcirc;": "ĝ",
      "Gcy;": "Г",
      "gcy;": "г",
      "Gdot;": "Ġ",
      "gdot;": "ġ",
      "gE;": "≧",
      "ge;": "≥",
      "gEl;": "⪌",
      "gel;": "⋛",
      "geq;": "≥",
      "geqq;": "≧",
      "geqslant;": "⩾",
      "ges;": "⩾",
      "gescc;": "⪩",
      "gesdot;": "⪀",
      "gesdoto;": "⪂",
      "gesdotol;": "⪄",
      "gesl;": "⋛︀",
      "gesles;": "⪔",
      "Gfr;": "𝔊",
      "gfr;": "𝔤",
      "Gg;": "⋙",
      "gg;": "≫",
      "ggg;": "⋙",
      "gimel;": "ℷ",
      "GJcy;": "Ѓ",
      "gjcy;": "ѓ",
      "gl;": "≷",
      "gla;": "⪥",
      "glE;": "⪒",
      "glj;": "⪤",
      "gnap;": "⪊",
      "gnapprox;": "⪊",
      "gnE;": "≩",
      "gne;": "⪈",
      "gneq;": "⪈",
      "gneqq;": "≩",
      "gnsim;": "⋧",
      "Gopf;": "𝔾",
      "gopf;": "𝕘",
      "grave;": "`",
      "GreaterEqual;": "≥",
      "GreaterEqualLess;": "⋛",
      "GreaterFullEqual;": "≧",
      "GreaterGreater;": "⪢",
      "GreaterLess;": "≷",
      "GreaterSlantEqual;": "⩾",
      "GreaterTilde;": "≳",
      "Gscr;": "𝒢",
      "gscr;": "ℊ",
      "gsim;": "≳",
      "gsime;": "⪎",
      "gsiml;": "⪐",
      "GT;": ">",
      GT: ">",
      "Gt;": "≫",
      "gt;": ">",
      gt: ">",
      "gtcc;": "⪧",
      "gtcir;": "⩺",
      "gtdot;": "⋗",
      "gtlPar;": "⦕",
      "gtquest;": "⩼",
      "gtrapprox;": "⪆",
      "gtrarr;": "⥸",
      "gtrdot;": "⋗",
      "gtreqless;": "⋛",
      "gtreqqless;": "⪌",
      "gtrless;": "≷",
      "gtrsim;": "≳",
      "gvertneqq;": "≩︀",
      "gvnE;": "≩︀",
      "Hacek;": "ˇ",
      "hairsp;": " ",
      "half;": "½",
      "hamilt;": "ℋ",
      "HARDcy;": "Ъ",
      "hardcy;": "ъ",
      "hArr;": "⇔",
      "harr;": "↔",
      "harrcir;": "⥈",
      "harrw;": "↭",
      "Hat;": "^",
      "hbar;": "ℏ",
      "Hcirc;": "Ĥ",
      "hcirc;": "ĥ",
      "hearts;": "♥",
      "heartsuit;": "♥",
      "hellip;": "…",
      "hercon;": "⊹",
      "Hfr;": "ℌ",
      "hfr;": "𝔥",
      "HilbertSpace;": "ℋ",
      "hksearow;": "⤥",
      "hkswarow;": "⤦",
      "hoarr;": "⇿",
      "homtht;": "∻",
      "hookleftarrow;": "↩",
      "hookrightarrow;": "↪",
      "Hopf;": "ℍ",
      "hopf;": "𝕙",
      "horbar;": "―",
      "HorizontalLine;": "─",
      "Hscr;": "ℋ",
      "hscr;": "𝒽",
      "hslash;": "ℏ",
      "Hstrok;": "Ħ",
      "hstrok;": "ħ",
      "HumpDownHump;": "≎",
      "HumpEqual;": "≏",
      "hybull;": "⁃",
      "hyphen;": "‐",
      "Iacute;": "Í",
      Iacute: "Í",
      "iacute;": "í",
      iacute: "í",
      "ic;": "⁣",
      "Icirc;": "Î",
      Icirc: "Î",
      "icirc;": "î",
      icirc: "î",
      "Icy;": "И",
      "icy;": "и",
      "Idot;": "İ",
      "IEcy;": "Е",
      "iecy;": "е",
      "iexcl;": "¡",
      iexcl: "¡",
      "iff;": "⇔",
      "Ifr;": "ℑ",
      "ifr;": "𝔦",
      "Igrave;": "Ì",
      Igrave: "Ì",
      "igrave;": "ì",
      igrave: "ì",
      "ii;": "ⅈ",
      "iiiint;": "⨌",
      "iiint;": "∭",
      "iinfin;": "⧜",
      "iiota;": "℩",
      "IJlig;": "Ĳ",
      "ijlig;": "ĳ",
      "Im;": "ℑ",
      "Imacr;": "Ī",
      "imacr;": "ī",
      "image;": "ℑ",
      "ImaginaryI;": "ⅈ",
      "imagline;": "ℐ",
      "imagpart;": "ℑ",
      "imath;": "ı",
      "imof;": "⊷",
      "imped;": "Ƶ",
      "Implies;": "⇒",
      "in;": "∈",
      "incare;": "℅",
      "infin;": "∞",
      "infintie;": "⧝",
      "inodot;": "ı",
      "Int;": "∬",
      "int;": "∫",
      "intcal;": "⊺",
      "integers;": "ℤ",
      "Integral;": "∫",
      "intercal;": "⊺",
      "Intersection;": "⋂",
      "intlarhk;": "⨗",
      "intprod;": "⨼",
      "InvisibleComma;": "⁣",
      "InvisibleTimes;": "⁢",
      "IOcy;": "Ё",
      "iocy;": "ё",
      "Iogon;": "Į",
      "iogon;": "į",
      "Iopf;": "𝕀",
      "iopf;": "𝕚",
      "Iota;": "Ι",
      "iota;": "ι",
      "iprod;": "⨼",
      "iquest;": "¿",
      iquest: "¿",
      "Iscr;": "ℐ",
      "iscr;": "𝒾",
      "isin;": "∈",
      "isindot;": "⋵",
      "isinE;": "⋹",
      "isins;": "⋴",
      "isinsv;": "⋳",
      "isinv;": "∈",
      "it;": "⁢",
      "Itilde;": "Ĩ",
      "itilde;": "ĩ",
      "Iukcy;": "І",
      "iukcy;": "і",
      "Iuml;": "Ï",
      Iuml: "Ï",
      "iuml;": "ï",
      iuml: "ï",
      "Jcirc;": "Ĵ",
      "jcirc;": "ĵ",
      "Jcy;": "Й",
      "jcy;": "й",
      "Jfr;": "𝔍",
      "jfr;": "𝔧",
      "jmath;": "ȷ",
      "Jopf;": "𝕁",
      "jopf;": "𝕛",
      "Jscr;": "𝒥",
      "jscr;": "𝒿",
      "Jsercy;": "Ј",
      "jsercy;": "ј",
      "Jukcy;": "Є",
      "jukcy;": "є",
      "Kappa;": "Κ",
      "kappa;": "κ",
      "kappav;": "ϰ",
      "Kcedil;": "Ķ",
      "kcedil;": "ķ",
      "Kcy;": "К",
      "kcy;": "к",
      "Kfr;": "𝔎",
      "kfr;": "𝔨",
      "kgreen;": "ĸ",
      "KHcy;": "Х",
      "khcy;": "х",
      "KJcy;": "Ќ",
      "kjcy;": "ќ",
      "Kopf;": "𝕂",
      "kopf;": "𝕜",
      "Kscr;": "𝒦",
      "kscr;": "𝓀",
      "lAarr;": "⇚",
      "Lacute;": "Ĺ",
      "lacute;": "ĺ",
      "laemptyv;": "⦴",
      "lagran;": "ℒ",
      "Lambda;": "Λ",
      "lambda;": "λ",
      "Lang;": "⟪",
      "lang;": "⟨",
      "langd;": "⦑",
      "langle;": "⟨",
      "lap;": "⪅",
      "Laplacetrf;": "ℒ",
      "laquo;": "«",
      laquo: "«",
      "Larr;": "↞",
      "lArr;": "⇐",
      "larr;": "←",
      "larrb;": "⇤",
      "larrbfs;": "⤟",
      "larrfs;": "⤝",
      "larrhk;": "↩",
      "larrlp;": "↫",
      "larrpl;": "⤹",
      "larrsim;": "⥳",
      "larrtl;": "↢",
      "lat;": "⪫",
      "lAtail;": "⤛",
      "latail;": "⤙",
      "late;": "⪭",
      "lates;": "⪭︀",
      "lBarr;": "⤎",
      "lbarr;": "⤌",
      "lbbrk;": "❲",
      "lbrace;": "{",
      "lbrack;": "[",
      "lbrke;": "⦋",
      "lbrksld;": "⦏",
      "lbrkslu;": "⦍",
      "Lcaron;": "Ľ",
      "lcaron;": "ľ",
      "Lcedil;": "Ļ",
      "lcedil;": "ļ",
      "lceil;": "⌈",
      "lcub;": "{",
      "Lcy;": "Л",
      "lcy;": "л",
      "ldca;": "⤶",
      "ldquo;": "“",
      "ldquor;": "„",
      "ldrdhar;": "⥧",
      "ldrushar;": "⥋",
      "ldsh;": "↲",
      "lE;": "≦",
      "le;": "≤",
      "LeftAngleBracket;": "⟨",
      "LeftArrow;": "←",
      "Leftarrow;": "⇐",
      "leftarrow;": "←",
      "LeftArrowBar;": "⇤",
      "LeftArrowRightArrow;": "⇆",
      "leftarrowtail;": "↢",
      "LeftCeiling;": "⌈",
      "LeftDoubleBracket;": "⟦",
      "LeftDownTeeVector;": "⥡",
      "LeftDownVector;": "⇃",
      "LeftDownVectorBar;": "⥙",
      "LeftFloor;": "⌊",
      "leftharpoondown;": "↽",
      "leftharpoonup;": "↼",
      "leftleftarrows;": "⇇",
      "LeftRightArrow;": "↔",
      "Leftrightarrow;": "⇔",
      "leftrightarrow;": "↔",
      "leftrightarrows;": "⇆",
      "leftrightharpoons;": "⇋",
      "leftrightsquigarrow;": "↭",
      "LeftRightVector;": "⥎",
      "LeftTee;": "⊣",
      "LeftTeeArrow;": "↤",
      "LeftTeeVector;": "⥚",
      "leftthreetimes;": "⋋",
      "LeftTriangle;": "⊲",
      "LeftTriangleBar;": "⧏",
      "LeftTriangleEqual;": "⊴",
      "LeftUpDownVector;": "⥑",
      "LeftUpTeeVector;": "⥠",
      "LeftUpVector;": "↿",
      "LeftUpVectorBar;": "⥘",
      "LeftVector;": "↼",
      "LeftVectorBar;": "⥒",
      "lEg;": "⪋",
      "leg;": "⋚",
      "leq;": "≤",
      "leqq;": "≦",
      "leqslant;": "⩽",
      "les;": "⩽",
      "lescc;": "⪨",
      "lesdot;": "⩿",
      "lesdoto;": "⪁",
      "lesdotor;": "⪃",
      "lesg;": "⋚︀",
      "lesges;": "⪓",
      "lessapprox;": "⪅",
      "lessdot;": "⋖",
      "lesseqgtr;": "⋚",
      "lesseqqgtr;": "⪋",
      "LessEqualGreater;": "⋚",
      "LessFullEqual;": "≦",
      "LessGreater;": "≶",
      "lessgtr;": "≶",
      "LessLess;": "⪡",
      "lesssim;": "≲",
      "LessSlantEqual;": "⩽",
      "LessTilde;": "≲",
      "lfisht;": "⥼",
      "lfloor;": "⌊",
      "Lfr;": "𝔏",
      "lfr;": "𝔩",
      "lg;": "≶",
      "lgE;": "⪑",
      "lHar;": "⥢",
      "lhard;": "↽",
      "lharu;": "↼",
      "lharul;": "⥪",
      "lhblk;": "▄",
      "LJcy;": "Љ",
      "ljcy;": "љ",
      "Ll;": "⋘",
      "ll;": "≪",
      "llarr;": "⇇",
      "llcorner;": "⌞",
      "Lleftarrow;": "⇚",
      "llhard;": "⥫",
      "lltri;": "◺",
      "Lmidot;": "Ŀ",
      "lmidot;": "ŀ",
      "lmoust;": "⎰",
      "lmoustache;": "⎰",
      "lnap;": "⪉",
      "lnapprox;": "⪉",
      "lnE;": "≨",
      "lne;": "⪇",
      "lneq;": "⪇",
      "lneqq;": "≨",
      "lnsim;": "⋦",
      "loang;": "⟬",
      "loarr;": "⇽",
      "lobrk;": "⟦",
      "LongLeftArrow;": "⟵",
      "Longleftarrow;": "⟸",
      "longleftarrow;": "⟵",
      "LongLeftRightArrow;": "⟷",
      "Longleftrightarrow;": "⟺",
      "longleftrightarrow;": "⟷",
      "longmapsto;": "⟼",
      "LongRightArrow;": "⟶",
      "Longrightarrow;": "⟹",
      "longrightarrow;": "⟶",
      "looparrowleft;": "↫",
      "looparrowright;": "↬",
      "lopar;": "⦅",
      "Lopf;": "𝕃",
      "lopf;": "𝕝",
      "loplus;": "⨭",
      "lotimes;": "⨴",
      "lowast;": "∗",
      "lowbar;": "_",
      "LowerLeftArrow;": "↙",
      "LowerRightArrow;": "↘",
      "loz;": "◊",
      "lozenge;": "◊",
      "lozf;": "⧫",
      "lpar;": "(",
      "lparlt;": "⦓",
      "lrarr;": "⇆",
      "lrcorner;": "⌟",
      "lrhar;": "⇋",
      "lrhard;": "⥭",
      "lrm;": "‎",
      "lrtri;": "⊿",
      "lsaquo;": "‹",
      "Lscr;": "ℒ",
      "lscr;": "𝓁",
      "Lsh;": "↰",
      "lsh;": "↰",
      "lsim;": "≲",
      "lsime;": "⪍",
      "lsimg;": "⪏",
      "lsqb;": "[",
      "lsquo;": "‘",
      "lsquor;": "‚",
      "Lstrok;": "Ł",
      "lstrok;": "ł",
      "LT;": "<",
      LT: "<",
      "Lt;": "≪",
      "lt;": "<",
      lt: "<",
      "ltcc;": "⪦",
      "ltcir;": "⩹",
      "ltdot;": "⋖",
      "lthree;": "⋋",
      "ltimes;": "⋉",
      "ltlarr;": "⥶",
      "ltquest;": "⩻",
      "ltri;": "◃",
      "ltrie;": "⊴",
      "ltrif;": "◂",
      "ltrPar;": "⦖",
      "lurdshar;": "⥊",
      "luruhar;": "⥦",
      "lvertneqq;": "≨︀",
      "lvnE;": "≨︀",
      "macr;": "¯",
      macr: "¯",
      "male;": "♂",
      "malt;": "✠",
      "maltese;": "✠",
      "Map;": "⤅",
      "map;": "↦",
      "mapsto;": "↦",
      "mapstodown;": "↧",
      "mapstoleft;": "↤",
      "mapstoup;": "↥",
      "marker;": "▮",
      "mcomma;": "⨩",
      "Mcy;": "М",
      "mcy;": "м",
      "mdash;": "—",
      "mDDot;": "∺",
      "measuredangle;": "∡",
      "MediumSpace;": " ",
      "Mellintrf;": "ℳ",
      "Mfr;": "𝔐",
      "mfr;": "𝔪",
      "mho;": "℧",
      "micro;": "µ",
      micro: "µ",
      "mid;": "∣",
      "midast;": "*",
      "midcir;": "⫰",
      "middot;": "·",
      middot: "·",
      "minus;": "−",
      "minusb;": "⊟",
      "minusd;": "∸",
      "minusdu;": "⨪",
      "MinusPlus;": "∓",
      "mlcp;": "⫛",
      "mldr;": "…",
      "mnplus;": "∓",
      "models;": "⊧",
      "Mopf;": "𝕄",
      "mopf;": "𝕞",
      "mp;": "∓",
      "Mscr;": "ℳ",
      "mscr;": "𝓂",
      "mstpos;": "∾",
      "Mu;": "Μ",
      "mu;": "μ",
      "multimap;": "⊸",
      "mumap;": "⊸",
      "nabla;": "∇",
      "Nacute;": "Ń",
      "nacute;": "ń",
      "nang;": "∠⃒",
      "nap;": "≉",
      "napE;": "⩰̸",
      "napid;": "≋̸",
      "napos;": "ŉ",
      "napprox;": "≉",
      "natur;": "♮",
      "natural;": "♮",
      "naturals;": "ℕ",
      "nbsp;": " ",
      nbsp: " ",
      "nbump;": "≎̸",
      "nbumpe;": "≏̸",
      "ncap;": "⩃",
      "Ncaron;": "Ň",
      "ncaron;": "ň",
      "Ncedil;": "Ņ",
      "ncedil;": "ņ",
      "ncong;": "≇",
      "ncongdot;": "⩭̸",
      "ncup;": "⩂",
      "Ncy;": "Н",
      "ncy;": "н",
      "ndash;": "–",
      "ne;": "≠",
      "nearhk;": "⤤",
      "neArr;": "⇗",
      "nearr;": "↗",
      "nearrow;": "↗",
      "nedot;": "≐̸",
      "NegativeMediumSpace;": "​",
      "NegativeThickSpace;": "​",
      "NegativeThinSpace;": "​",
      "NegativeVeryThinSpace;": "​",
      "nequiv;": "≢",
      "nesear;": "⤨",
      "nesim;": "≂̸",
      "NestedGreaterGreater;": "≫",
      "NestedLessLess;": "≪",
      "NewLine;": "\n",
      "nexist;": "∄",
      "nexists;": "∄",
      "Nfr;": "𝔑",
      "nfr;": "𝔫",
      "ngE;": "≧̸",
      "nge;": "≱",
      "ngeq;": "≱",
      "ngeqq;": "≧̸",
      "ngeqslant;": "⩾̸",
      "nges;": "⩾̸",
      "nGg;": "⋙̸",
      "ngsim;": "≵",
      "nGt;": "≫⃒",
      "ngt;": "≯",
      "ngtr;": "≯",
      "nGtv;": "≫̸",
      "nhArr;": "⇎",
      "nharr;": "↮",
      "nhpar;": "⫲",
      "ni;": "∋",
      "nis;": "⋼",
      "nisd;": "⋺",
      "niv;": "∋",
      "NJcy;": "Њ",
      "njcy;": "њ",
      "nlArr;": "⇍",
      "nlarr;": "↚",
      "nldr;": "‥",
      "nlE;": "≦̸",
      "nle;": "≰",
      "nLeftarrow;": "⇍",
      "nleftarrow;": "↚",
      "nLeftrightarrow;": "⇎",
      "nleftrightarrow;": "↮",
      "nleq;": "≰",
      "nleqq;": "≦̸",
      "nleqslant;": "⩽̸",
      "nles;": "⩽̸",
      "nless;": "≮",
      "nLl;": "⋘̸",
      "nlsim;": "≴",
      "nLt;": "≪⃒",
      "nlt;": "≮",
      "nltri;": "⋪",
      "nltrie;": "⋬",
      "nLtv;": "≪̸",
      "nmid;": "∤",
      "NoBreak;": "⁠",
      "NonBreakingSpace;": " ",
      "Nopf;": "ℕ",
      "nopf;": "𝕟",
      "Not;": "⫬",
      "not;": "¬",
      not: "¬",
      "NotCongruent;": "≢",
      "NotCupCap;": "≭",
      "NotDoubleVerticalBar;": "∦",
      "NotElement;": "∉",
      "NotEqual;": "≠",
      "NotEqualTilde;": "≂̸",
      "NotExists;": "∄",
      "NotGreater;": "≯",
      "NotGreaterEqual;": "≱",
      "NotGreaterFullEqual;": "≧̸",
      "NotGreaterGreater;": "≫̸",
      "NotGreaterLess;": "≹",
      "NotGreaterSlantEqual;": "⩾̸",
      "NotGreaterTilde;": "≵",
      "NotHumpDownHump;": "≎̸",
      "NotHumpEqual;": "≏̸",
      "notin;": "∉",
      "notindot;": "⋵̸",
      "notinE;": "⋹̸",
      "notinva;": "∉",
      "notinvb;": "⋷",
      "notinvc;": "⋶",
      "NotLeftTriangle;": "⋪",
      "NotLeftTriangleBar;": "⧏̸",
      "NotLeftTriangleEqual;": "⋬",
      "NotLess;": "≮",
      "NotLessEqual;": "≰",
      "NotLessGreater;": "≸",
      "NotLessLess;": "≪̸",
      "NotLessSlantEqual;": "⩽̸",
      "NotLessTilde;": "≴",
      "NotNestedGreaterGreater;": "⪢̸",
      "NotNestedLessLess;": "⪡̸",
      "notni;": "∌",
      "notniva;": "∌",
      "notnivb;": "⋾",
      "notnivc;": "⋽",
      "NotPrecedes;": "⊀",
      "NotPrecedesEqual;": "⪯̸",
      "NotPrecedesSlantEqual;": "⋠",
      "NotReverseElement;": "∌",
      "NotRightTriangle;": "⋫",
      "NotRightTriangleBar;": "⧐̸",
      "NotRightTriangleEqual;": "⋭",
      "NotSquareSubset;": "⊏̸",
      "NotSquareSubsetEqual;": "⋢",
      "NotSquareSuperset;": "⊐̸",
      "NotSquareSupersetEqual;": "⋣",
      "NotSubset;": "⊂⃒",
      "NotSubsetEqual;": "⊈",
      "NotSucceeds;": "⊁",
      "NotSucceedsEqual;": "⪰̸",
      "NotSucceedsSlantEqual;": "⋡",
      "NotSucceedsTilde;": "≿̸",
      "NotSuperset;": "⊃⃒",
      "NotSupersetEqual;": "⊉",
      "NotTilde;": "≁",
      "NotTildeEqual;": "≄",
      "NotTildeFullEqual;": "≇",
      "NotTildeTilde;": "≉",
      "NotVerticalBar;": "∤",
      "npar;": "∦",
      "nparallel;": "∦",
      "nparsl;": "⫽⃥",
      "npart;": "∂̸",
      "npolint;": "⨔",
      "npr;": "⊀",
      "nprcue;": "⋠",
      "npre;": "⪯̸",
      "nprec;": "⊀",
      "npreceq;": "⪯̸",
      "nrArr;": "⇏",
      "nrarr;": "↛",
      "nrarrc;": "⤳̸",
      "nrarrw;": "↝̸",
      "nRightarrow;": "⇏",
      "nrightarrow;": "↛",
      "nrtri;": "⋫",
      "nrtrie;": "⋭",
      "nsc;": "⊁",
      "nsccue;": "⋡",
      "nsce;": "⪰̸",
      "Nscr;": "𝒩",
      "nscr;": "𝓃",
      "nshortmid;": "∤",
      "nshortparallel;": "∦",
      "nsim;": "≁",
      "nsime;": "≄",
      "nsimeq;": "≄",
      "nsmid;": "∤",
      "nspar;": "∦",
      "nsqsube;": "⋢",
      "nsqsupe;": "⋣",
      "nsub;": "⊄",
      "nsubE;": "⫅̸",
      "nsube;": "⊈",
      "nsubset;": "⊂⃒",
      "nsubseteq;": "⊈",
      "nsubseteqq;": "⫅̸",
      "nsucc;": "⊁",
      "nsucceq;": "⪰̸",
      "nsup;": "⊅",
      "nsupE;": "⫆̸",
      "nsupe;": "⊉",
      "nsupset;": "⊃⃒",
      "nsupseteq;": "⊉",
      "nsupseteqq;": "⫆̸",
      "ntgl;": "≹",
      "Ntilde;": "Ñ",
      Ntilde: "Ñ",
      "ntilde;": "ñ",
      ntilde: "ñ",
      "ntlg;": "≸",
      "ntriangleleft;": "⋪",
      "ntrianglelefteq;": "⋬",
      "ntriangleright;": "⋫",
      "ntrianglerighteq;": "⋭",
      "Nu;": "Ν",
      "nu;": "ν",
      "num;": "#",
      "numero;": "№",
      "numsp;": " ",
      "nvap;": "≍⃒",
      "nVDash;": "⊯",
      "nVdash;": "⊮",
      "nvDash;": "⊭",
      "nvdash;": "⊬",
      "nvge;": "≥⃒",
      "nvgt;": ">⃒",
      "nvHarr;": "⤄",
      "nvinfin;": "⧞",
      "nvlArr;": "⤂",
      "nvle;": "≤⃒",
      "nvlt;": "<⃒",
      "nvltrie;": "⊴⃒",
      "nvrArr;": "⤃",
      "nvrtrie;": "⊵⃒",
      "nvsim;": "∼⃒",
      "nwarhk;": "⤣",
      "nwArr;": "⇖",
      "nwarr;": "↖",
      "nwarrow;": "↖",
      "nwnear;": "⤧",
      "Oacute;": "Ó",
      Oacute: "Ó",
      "oacute;": "ó",
      oacute: "ó",
      "oast;": "⊛",
      "ocir;": "⊚",
      "Ocirc;": "Ô",
      Ocirc: "Ô",
      "ocirc;": "ô",
      ocirc: "ô",
      "Ocy;": "О",
      "ocy;": "о",
      "odash;": "⊝",
      "Odblac;": "Ő",
      "odblac;": "ő",
      "odiv;": "⨸",
      "odot;": "⊙",
      "odsold;": "⦼",
      "OElig;": "Œ",
      "oelig;": "œ",
      "ofcir;": "⦿",
      "Ofr;": "𝔒",
      "ofr;": "𝔬",
      "ogon;": "˛",
      "Ograve;": "Ò",
      Ograve: "Ò",
      "ograve;": "ò",
      ograve: "ò",
      "ogt;": "⧁",
      "ohbar;": "⦵",
      "ohm;": "Ω",
      "oint;": "∮",
      "olarr;": "↺",
      "olcir;": "⦾",
      "olcross;": "⦻",
      "oline;": "‾",
      "olt;": "⧀",
      "Omacr;": "Ō",
      "omacr;": "ō",
      "Omega;": "Ω",
      "omega;": "ω",
      "Omicron;": "Ο",
      "omicron;": "ο",
      "omid;": "⦶",
      "ominus;": "⊖",
      "Oopf;": "𝕆",
      "oopf;": "𝕠",
      "opar;": "⦷",
      "OpenCurlyDoubleQuote;": "“",
      "OpenCurlyQuote;": "‘",
      "operp;": "⦹",
      "oplus;": "⊕",
      "Or;": "⩔",
      "or;": "∨",
      "orarr;": "↻",
      "ord;": "⩝",
      "order;": "ℴ",
      "orderof;": "ℴ",
      "ordf;": "ª",
      ordf: "ª",
      "ordm;": "º",
      ordm: "º",
      "origof;": "⊶",
      "oror;": "⩖",
      "orslope;": "⩗",
      "orv;": "⩛",
      "oS;": "Ⓢ",
      "Oscr;": "𝒪",
      "oscr;": "ℴ",
      "Oslash;": "Ø",
      Oslash: "Ø",
      "oslash;": "ø",
      oslash: "ø",
      "osol;": "⊘",
      "Otilde;": "Õ",
      Otilde: "Õ",
      "otilde;": "õ",
      otilde: "õ",
      "Otimes;": "⨷",
      "otimes;": "⊗",
      "otimesas;": "⨶",
      "Ouml;": "Ö",
      Ouml: "Ö",
      "ouml;": "ö",
      ouml: "ö",
      "ovbar;": "⌽",
      "OverBar;": "‾",
      "OverBrace;": "⏞",
      "OverBracket;": "⎴",
      "OverParenthesis;": "⏜",
      "par;": "∥",
      "para;": "¶",
      para: "¶",
      "parallel;": "∥",
      "parsim;": "⫳",
      "parsl;": "⫽",
      "part;": "∂",
      "PartialD;": "∂",
      "Pcy;": "П",
      "pcy;": "п",
      "percnt;": "%",
      "period;": ".",
      "permil;": "‰",
      "perp;": "⊥",
      "pertenk;": "‱",
      "Pfr;": "𝔓",
      "pfr;": "𝔭",
      "Phi;": "Φ",
      "phi;": "φ",
      "phiv;": "ϕ",
      "phmmat;": "ℳ",
      "phone;": "☎",
      "Pi;": "Π",
      "pi;": "π",
      "pitchfork;": "⋔",
      "piv;": "ϖ",
      "planck;": "ℏ",
      "planckh;": "ℎ",
      "plankv;": "ℏ",
      "plus;": "+",
      "plusacir;": "⨣",
      "plusb;": "⊞",
      "pluscir;": "⨢",
      "plusdo;": "∔",
      "plusdu;": "⨥",
      "pluse;": "⩲",
      "PlusMinus;": "±",
      "plusmn;": "±",
      plusmn: "±",
      "plussim;": "⨦",
      "plustwo;": "⨧",
      "pm;": "±",
      "Poincareplane;": "ℌ",
      "pointint;": "⨕",
      "Popf;": "ℙ",
      "popf;": "𝕡",
      "pound;": "£",
      pound: "£",
      "Pr;": "⪻",
      "pr;": "≺",
      "prap;": "⪷",
      "prcue;": "≼",
      "prE;": "⪳",
      "pre;": "⪯",
      "prec;": "≺",
      "precapprox;": "⪷",
      "preccurlyeq;": "≼",
      "Precedes;": "≺",
      "PrecedesEqual;": "⪯",
      "PrecedesSlantEqual;": "≼",
      "PrecedesTilde;": "≾",
      "preceq;": "⪯",
      "precnapprox;": "⪹",
      "precneqq;": "⪵",
      "precnsim;": "⋨",
      "precsim;": "≾",
      "Prime;": "″",
      "prime;": "′",
      "primes;": "ℙ",
      "prnap;": "⪹",
      "prnE;": "⪵",
      "prnsim;": "⋨",
      "prod;": "∏",
      "Product;": "∏",
      "profalar;": "⌮",
      "profline;": "⌒",
      "profsurf;": "⌓",
      "prop;": "∝",
      "Proportion;": "∷",
      "Proportional;": "∝",
      "propto;": "∝",
      "prsim;": "≾",
      "prurel;": "⊰",
      "Pscr;": "𝒫",
      "pscr;": "𝓅",
      "Psi;": "Ψ",
      "psi;": "ψ",
      "puncsp;": " ",
      "Qfr;": "𝔔",
      "qfr;": "𝔮",
      "qint;": "⨌",
      "Qopf;": "ℚ",
      "qopf;": "𝕢",
      "qprime;": "⁗",
      "Qscr;": "𝒬",
      "qscr;": "𝓆",
      "quaternions;": "ℍ",
      "quatint;": "⨖",
      "quest;": "?",
      "questeq;": "≟",
      "QUOT;": '"',
      QUOT: '"',
      "quot;": '"',
      quot: '"',
      "rAarr;": "⇛",
      "race;": "∽̱",
      "Racute;": "Ŕ",
      "racute;": "ŕ",
      "radic;": "√",
      "raemptyv;": "⦳",
      "Rang;": "⟫",
      "rang;": "⟩",
      "rangd;": "⦒",
      "range;": "⦥",
      "rangle;": "⟩",
      "raquo;": "»",
      raquo: "»",
      "Rarr;": "↠",
      "rArr;": "⇒",
      "rarr;": "→",
      "rarrap;": "⥵",
      "rarrb;": "⇥",
      "rarrbfs;": "⤠",
      "rarrc;": "⤳",
      "rarrfs;": "⤞",
      "rarrhk;": "↪",
      "rarrlp;": "↬",
      "rarrpl;": "⥅",
      "rarrsim;": "⥴",
      "Rarrtl;": "⤖",
      "rarrtl;": "↣",
      "rarrw;": "↝",
      "rAtail;": "⤜",
      "ratail;": "⤚",
      "ratio;": "∶",
      "rationals;": "ℚ",
      "RBarr;": "⤐",
      "rBarr;": "⤏",
      "rbarr;": "⤍",
      "rbbrk;": "❳",
      "rbrace;": "}",
      "rbrack;": "]",
      "rbrke;": "⦌",
      "rbrksld;": "⦎",
      "rbrkslu;": "⦐",
      "Rcaron;": "Ř",
      "rcaron;": "ř",
      "Rcedil;": "Ŗ",
      "rcedil;": "ŗ",
      "rceil;": "⌉",
      "rcub;": "}",
      "Rcy;": "Р",
      "rcy;": "р",
      "rdca;": "⤷",
      "rdldhar;": "⥩",
      "rdquo;": "”",
      "rdquor;": "”",
      "rdsh;": "↳",
      "Re;": "ℜ",
      "real;": "ℜ",
      "realine;": "ℛ",
      "realpart;": "ℜ",
      "reals;": "ℝ",
      "rect;": "▭",
      "REG;": "®",
      REG: "®",
      "reg;": "®",
      reg: "®",
      "ReverseElement;": "∋",
      "ReverseEquilibrium;": "⇋",
      "ReverseUpEquilibrium;": "⥯",
      "rfisht;": "⥽",
      "rfloor;": "⌋",
      "Rfr;": "ℜ",
      "rfr;": "𝔯",
      "rHar;": "⥤",
      "rhard;": "⇁",
      "rharu;": "⇀",
      "rharul;": "⥬",
      "Rho;": "Ρ",
      "rho;": "ρ",
      "rhov;": "ϱ",
      "RightAngleBracket;": "⟩",
      "RightArrow;": "→",
      "Rightarrow;": "⇒",
      "rightarrow;": "→",
      "RightArrowBar;": "⇥",
      "RightArrowLeftArrow;": "⇄",
      "rightarrowtail;": "↣",
      "RightCeiling;": "⌉",
      "RightDoubleBracket;": "⟧",
      "RightDownTeeVector;": "⥝",
      "RightDownVector;": "⇂",
      "RightDownVectorBar;": "⥕",
      "RightFloor;": "⌋",
      "rightharpoondown;": "⇁",
      "rightharpoonup;": "⇀",
      "rightleftarrows;": "⇄",
      "rightleftharpoons;": "⇌",
      "rightrightarrows;": "⇉",
      "rightsquigarrow;": "↝",
      "RightTee;": "⊢",
      "RightTeeArrow;": "↦",
      "RightTeeVector;": "⥛",
      "rightthreetimes;": "⋌",
      "RightTriangle;": "⊳",
      "RightTriangleBar;": "⧐",
      "RightTriangleEqual;": "⊵",
      "RightUpDownVector;": "⥏",
      "RightUpTeeVector;": "⥜",
      "RightUpVector;": "↾",
      "RightUpVectorBar;": "⥔",
      "RightVector;": "⇀",
      "RightVectorBar;": "⥓",
      "ring;": "˚",
      "risingdotseq;": "≓",
      "rlarr;": "⇄",
      "rlhar;": "⇌",
      "rlm;": "‏",
      "rmoust;": "⎱",
      "rmoustache;": "⎱",
      "rnmid;": "⫮",
      "roang;": "⟭",
      "roarr;": "⇾",
      "robrk;": "⟧",
      "ropar;": "⦆",
      "Ropf;": "ℝ",
      "ropf;": "𝕣",
      "roplus;": "⨮",
      "rotimes;": "⨵",
      "RoundImplies;": "⥰",
      "rpar;": ")",
      "rpargt;": "⦔",
      "rppolint;": "⨒",
      "rrarr;": "⇉",
      "Rrightarrow;": "⇛",
      "rsaquo;": "›",
      "Rscr;": "ℛ",
      "rscr;": "𝓇",
      "Rsh;": "↱",
      "rsh;": "↱",
      "rsqb;": "]",
      "rsquo;": "’",
      "rsquor;": "’",
      "rthree;": "⋌",
      "rtimes;": "⋊",
      "rtri;": "▹",
      "rtrie;": "⊵",
      "rtrif;": "▸",
      "rtriltri;": "⧎",
      "RuleDelayed;": "⧴",
      "ruluhar;": "⥨",
      "rx;": "℞",
      "Sacute;": "Ś",
      "sacute;": "ś",
      "sbquo;": "‚",
      "Sc;": "⪼",
      "sc;": "≻",
      "scap;": "⪸",
      "Scaron;": "Š",
      "scaron;": "š",
      "sccue;": "≽",
      "scE;": "⪴",
      "sce;": "⪰",
      "Scedil;": "Ş",
      "scedil;": "ş",
      "Scirc;": "Ŝ",
      "scirc;": "ŝ",
      "scnap;": "⪺",
      "scnE;": "⪶",
      "scnsim;": "⋩",
      "scpolint;": "⨓",
      "scsim;": "≿",
      "Scy;": "С",
      "scy;": "с",
      "sdot;": "⋅",
      "sdotb;": "⊡",
      "sdote;": "⩦",
      "searhk;": "⤥",
      "seArr;": "⇘",
      "searr;": "↘",
      "searrow;": "↘",
      "sect;": "§",
      sect: "§",
      "semi;": ";",
      "seswar;": "⤩",
      "setminus;": "∖",
      "setmn;": "∖",
      "sext;": "✶",
      "Sfr;": "𝔖",
      "sfr;": "𝔰",
      "sfrown;": "⌢",
      "sharp;": "♯",
      "SHCHcy;": "Щ",
      "shchcy;": "щ",
      "SHcy;": "Ш",
      "shcy;": "ш",
      "ShortDownArrow;": "↓",
      "ShortLeftArrow;": "←",
      "shortmid;": "∣",
      "shortparallel;": "∥",
      "ShortRightArrow;": "→",
      "ShortUpArrow;": "↑",
      "shy;": "­",
      shy: "­",
      "Sigma;": "Σ",
      "sigma;": "σ",
      "sigmaf;": "ς",
      "sigmav;": "ς",
      "sim;": "∼",
      "simdot;": "⩪",
      "sime;": "≃",
      "simeq;": "≃",
      "simg;": "⪞",
      "simgE;": "⪠",
      "siml;": "⪝",
      "simlE;": "⪟",
      "simne;": "≆",
      "simplus;": "⨤",
      "simrarr;": "⥲",
      "slarr;": "←",
      "SmallCircle;": "∘",
      "smallsetminus;": "∖",
      "smashp;": "⨳",
      "smeparsl;": "⧤",
      "smid;": "∣",
      "smile;": "⌣",
      "smt;": "⪪",
      "smte;": "⪬",
      "smtes;": "⪬︀",
      "SOFTcy;": "Ь",
      "softcy;": "ь",
      "sol;": "/",
      "solb;": "⧄",
      "solbar;": "⌿",
      "Sopf;": "𝕊",
      "sopf;": "𝕤",
      "spades;": "♠",
      "spadesuit;": "♠",
      "spar;": "∥",
      "sqcap;": "⊓",
      "sqcaps;": "⊓︀",
      "sqcup;": "⊔",
      "sqcups;": "⊔︀",
      "Sqrt;": "√",
      "sqsub;": "⊏",
      "sqsube;": "⊑",
      "sqsubset;": "⊏",
      "sqsubseteq;": "⊑",
      "sqsup;": "⊐",
      "sqsupe;": "⊒",
      "sqsupset;": "⊐",
      "sqsupseteq;": "⊒",
      "squ;": "□",
      "Square;": "□",
      "square;": "□",
      "SquareIntersection;": "⊓",
      "SquareSubset;": "⊏",
      "SquareSubsetEqual;": "⊑",
      "SquareSuperset;": "⊐",
      "SquareSupersetEqual;": "⊒",
      "SquareUnion;": "⊔",
      "squarf;": "▪",
      "squf;": "▪",
      "srarr;": "→",
      "Sscr;": "𝒮",
      "sscr;": "𝓈",
      "ssetmn;": "∖",
      "ssmile;": "⌣",
      "sstarf;": "⋆",
      "Star;": "⋆",
      "star;": "☆",
      "starf;": "★",
      "straightepsilon;": "ϵ",
      "straightphi;": "ϕ",
      "strns;": "¯",
      "Sub;": "⋐",
      "sub;": "⊂",
      "subdot;": "⪽",
      "subE;": "⫅",
      "sube;": "⊆",
      "subedot;": "⫃",
      "submult;": "⫁",
      "subnE;": "⫋",
      "subne;": "⊊",
      "subplus;": "⪿",
      "subrarr;": "⥹",
      "Subset;": "⋐",
      "subset;": "⊂",
      "subseteq;": "⊆",
      "subseteqq;": "⫅",
      "SubsetEqual;": "⊆",
      "subsetneq;": "⊊",
      "subsetneqq;": "⫋",
      "subsim;": "⫇",
      "subsub;": "⫕",
      "subsup;": "⫓",
      "succ;": "≻",
      "succapprox;": "⪸",
      "succcurlyeq;": "≽",
      "Succeeds;": "≻",
      "SucceedsEqual;": "⪰",
      "SucceedsSlantEqual;": "≽",
      "SucceedsTilde;": "≿",
      "succeq;": "⪰",
      "succnapprox;": "⪺",
      "succneqq;": "⪶",
      "succnsim;": "⋩",
      "succsim;": "≿",
      "SuchThat;": "∋",
      "Sum;": "∑",
      "sum;": "∑",
      "sung;": "♪",
      "Sup;": "⋑",
      "sup;": "⊃",
      "sup1;": "¹",
      sup1: "¹",
      "sup2;": "²",
      sup2: "²",
      "sup3;": "³",
      sup3: "³",
      "supdot;": "⪾",
      "supdsub;": "⫘",
      "supE;": "⫆",
      "supe;": "⊇",
      "supedot;": "⫄",
      "Superset;": "⊃",
      "SupersetEqual;": "⊇",
      "suphsol;": "⟉",
      "suphsub;": "⫗",
      "suplarr;": "⥻",
      "supmult;": "⫂",
      "supnE;": "⫌",
      "supne;": "⊋",
      "supplus;": "⫀",
      "Supset;": "⋑",
      "supset;": "⊃",
      "supseteq;": "⊇",
      "supseteqq;": "⫆",
      "supsetneq;": "⊋",
      "supsetneqq;": "⫌",
      "supsim;": "⫈",
      "supsub;": "⫔",
      "supsup;": "⫖",
      "swarhk;": "⤦",
      "swArr;": "⇙",
      "swarr;": "↙",
      "swarrow;": "↙",
      "swnwar;": "⤪",
      "szlig;": "ß",
      szlig: "ß",
      "Tab;": "	",
      "target;": "⌖",
      "Tau;": "Τ",
      "tau;": "τ",
      "tbrk;": "⎴",
      "Tcaron;": "Ť",
      "tcaron;": "ť",
      "Tcedil;": "Ţ",
      "tcedil;": "ţ",
      "Tcy;": "Т",
      "tcy;": "т",
      "tdot;": "⃛",
      "telrec;": "⌕",
      "Tfr;": "𝔗",
      "tfr;": "𝔱",
      "there4;": "∴",
      "Therefore;": "∴",
      "therefore;": "∴",
      "Theta;": "Θ",
      "theta;": "θ",
      "thetasym;": "ϑ",
      "thetav;": "ϑ",
      "thickapprox;": "≈",
      "thicksim;": "∼",
      "ThickSpace;": "  ",
      "thinsp;": " ",
      "ThinSpace;": " ",
      "thkap;": "≈",
      "thksim;": "∼",
      "THORN;": "Þ",
      THORN: "Þ",
      "thorn;": "þ",
      thorn: "þ",
      "Tilde;": "∼",
      "tilde;": "˜",
      "TildeEqual;": "≃",
      "TildeFullEqual;": "≅",
      "TildeTilde;": "≈",
      "times;": "×",
      times: "×",
      "timesb;": "⊠",
      "timesbar;": "⨱",
      "timesd;": "⨰",
      "tint;": "∭",
      "toea;": "⤨",
      "top;": "⊤",
      "topbot;": "⌶",
      "topcir;": "⫱",
      "Topf;": "𝕋",
      "topf;": "𝕥",
      "topfork;": "⫚",
      "tosa;": "⤩",
      "tprime;": "‴",
      "TRADE;": "™",
      "trade;": "™",
      "triangle;": "▵",
      "triangledown;": "▿",
      "triangleleft;": "◃",
      "trianglelefteq;": "⊴",
      "triangleq;": "≜",
      "triangleright;": "▹",
      "trianglerighteq;": "⊵",
      "tridot;": "◬",
      "trie;": "≜",
      "triminus;": "⨺",
      "TripleDot;": "⃛",
      "triplus;": "⨹",
      "trisb;": "⧍",
      "tritime;": "⨻",
      "trpezium;": "⏢",
      "Tscr;": "𝒯",
      "tscr;": "𝓉",
      "TScy;": "Ц",
      "tscy;": "ц",
      "TSHcy;": "Ћ",
      "tshcy;": "ћ",
      "Tstrok;": "Ŧ",
      "tstrok;": "ŧ",
      "twixt;": "≬",
      "twoheadleftarrow;": "↞",
      "twoheadrightarrow;": "↠",
      "Uacute;": "Ú",
      Uacute: "Ú",
      "uacute;": "ú",
      uacute: "ú",
      "Uarr;": "↟",
      "uArr;": "⇑",
      "uarr;": "↑",
      "Uarrocir;": "⥉",
      "Ubrcy;": "Ў",
      "ubrcy;": "ў",
      "Ubreve;": "Ŭ",
      "ubreve;": "ŭ",
      "Ucirc;": "Û",
      Ucirc: "Û",
      "ucirc;": "û",
      ucirc: "û",
      "Ucy;": "У",
      "ucy;": "у",
      "udarr;": "⇅",
      "Udblac;": "Ű",
      "udblac;": "ű",
      "udhar;": "⥮",
      "ufisht;": "⥾",
      "Ufr;": "𝔘",
      "ufr;": "𝔲",
      "Ugrave;": "Ù",
      Ugrave: "Ù",
      "ugrave;": "ù",
      ugrave: "ù",
      "uHar;": "⥣",
      "uharl;": "↿",
      "uharr;": "↾",
      "uhblk;": "▀",
      "ulcorn;": "⌜",
      "ulcorner;": "⌜",
      "ulcrop;": "⌏",
      "ultri;": "◸",
      "Umacr;": "Ū",
      "umacr;": "ū",
      "uml;": "¨",
      uml: "¨",
      "UnderBar;": "_",
      "UnderBrace;": "⏟",
      "UnderBracket;": "⎵",
      "UnderParenthesis;": "⏝",
      "Union;": "⋃",
      "UnionPlus;": "⊎",
      "Uogon;": "Ų",
      "uogon;": "ų",
      "Uopf;": "𝕌",
      "uopf;": "𝕦",
      "UpArrow;": "↑",
      "Uparrow;": "⇑",
      "uparrow;": "↑",
      "UpArrowBar;": "⤒",
      "UpArrowDownArrow;": "⇅",
      "UpDownArrow;": "↕",
      "Updownarrow;": "⇕",
      "updownarrow;": "↕",
      "UpEquilibrium;": "⥮",
      "upharpoonleft;": "↿",
      "upharpoonright;": "↾",
      "uplus;": "⊎",
      "UpperLeftArrow;": "↖",
      "UpperRightArrow;": "↗",
      "Upsi;": "ϒ",
      "upsi;": "υ",
      "upsih;": "ϒ",
      "Upsilon;": "Υ",
      "upsilon;": "υ",
      "UpTee;": "⊥",
      "UpTeeArrow;": "↥",
      "upuparrows;": "⇈",
      "urcorn;": "⌝",
      "urcorner;": "⌝",
      "urcrop;": "⌎",
      "Uring;": "Ů",
      "uring;": "ů",
      "urtri;": "◹",
      "Uscr;": "𝒰",
      "uscr;": "𝓊",
      "utdot;": "⋰",
      "Utilde;": "Ũ",
      "utilde;": "ũ",
      "utri;": "▵",
      "utrif;": "▴",
      "uuarr;": "⇈",
      "Uuml;": "Ü",
      Uuml: "Ü",
      "uuml;": "ü",
      uuml: "ü",
      "uwangle;": "⦧",
      "vangrt;": "⦜",
      "varepsilon;": "ϵ",
      "varkappa;": "ϰ",
      "varnothing;": "∅",
      "varphi;": "ϕ",
      "varpi;": "ϖ",
      "varpropto;": "∝",
      "vArr;": "⇕",
      "varr;": "↕",
      "varrho;": "ϱ",
      "varsigma;": "ς",
      "varsubsetneq;": "⊊︀",
      "varsubsetneqq;": "⫋︀",
      "varsupsetneq;": "⊋︀",
      "varsupsetneqq;": "⫌︀",
      "vartheta;": "ϑ",
      "vartriangleleft;": "⊲",
      "vartriangleright;": "⊳",
      "Vbar;": "⫫",
      "vBar;": "⫨",
      "vBarv;": "⫩",
      "Vcy;": "В",
      "vcy;": "в",
      "VDash;": "⊫",
      "Vdash;": "⊩",
      "vDash;": "⊨",
      "vdash;": "⊢",
      "Vdashl;": "⫦",
      "Vee;": "⋁",
      "vee;": "∨",
      "veebar;": "⊻",
      "veeeq;": "≚",
      "vellip;": "⋮",
      "Verbar;": "‖",
      "verbar;": "|",
      "Vert;": "‖",
      "vert;": "|",
      "VerticalBar;": "∣",
      "VerticalLine;": "|",
      "VerticalSeparator;": "❘",
      "VerticalTilde;": "≀",
      "VeryThinSpace;": " ",
      "Vfr;": "𝔙",
      "vfr;": "𝔳",
      "vltri;": "⊲",
      "vnsub;": "⊂⃒",
      "vnsup;": "⊃⃒",
      "Vopf;": "𝕍",
      "vopf;": "𝕧",
      "vprop;": "∝",
      "vrtri;": "⊳",
      "Vscr;": "𝒱",
      "vscr;": "𝓋",
      "vsubnE;": "⫋︀",
      "vsubne;": "⊊︀",
      "vsupnE;": "⫌︀",
      "vsupne;": "⊋︀",
      "Vvdash;": "⊪",
      "vzigzag;": "⦚",
      "Wcirc;": "Ŵ",
      "wcirc;": "ŵ",
      "wedbar;": "⩟",
      "Wedge;": "⋀",
      "wedge;": "∧",
      "wedgeq;": "≙",
      "weierp;": "℘",
      "Wfr;": "𝔚",
      "wfr;": "𝔴",
      "Wopf;": "𝕎",
      "wopf;": "𝕨",
      "wp;": "℘",
      "wr;": "≀",
      "wreath;": "≀",
      "Wscr;": "𝒲",
      "wscr;": "𝓌",
      "xcap;": "⋂",
      "xcirc;": "◯",
      "xcup;": "⋃",
      "xdtri;": "▽",
      "Xfr;": "𝔛",
      "xfr;": "𝔵",
      "xhArr;": "⟺",
      "xharr;": "⟷",
      "Xi;": "Ξ",
      "xi;": "ξ",
      "xlArr;": "⟸",
      "xlarr;": "⟵",
      "xmap;": "⟼",
      "xnis;": "⋻",
      "xodot;": "⨀",
      "Xopf;": "𝕏",
      "xopf;": "𝕩",
      "xoplus;": "⨁",
      "xotime;": "⨂",
      "xrArr;": "⟹",
      "xrarr;": "⟶",
      "Xscr;": "𝒳",
      "xscr;": "𝓍",
      "xsqcup;": "⨆",
      "xuplus;": "⨄",
      "xutri;": "△",
      "xvee;": "⋁",
      "xwedge;": "⋀",
      "Yacute;": "Ý",
      Yacute: "Ý",
      "yacute;": "ý",
      yacute: "ý",
      "YAcy;": "Я",
      "yacy;": "я",
      "Ycirc;": "Ŷ",
      "ycirc;": "ŷ",
      "Ycy;": "Ы",
      "ycy;": "ы",
      "yen;": "¥",
      yen: "¥",
      "Yfr;": "𝔜",
      "yfr;": "𝔶",
      "YIcy;": "Ї",
      "yicy;": "ї",
      "Yopf;": "𝕐",
      "yopf;": "𝕪",
      "Yscr;": "𝒴",
      "yscr;": "𝓎",
      "YUcy;": "Ю",
      "yucy;": "ю",
      "Yuml;": "Ÿ",
      "yuml;": "ÿ",
      yuml: "ÿ",
      "Zacute;": "Ź",
      "zacute;": "ź",
      "Zcaron;": "Ž",
      "zcaron;": "ž",
      "Zcy;": "З",
      "zcy;": "з",
      "Zdot;": "Ż",
      "zdot;": "ż",
      "zeetrf;": "ℨ",
      "ZeroWidthSpace;": "​",
      "Zeta;": "Ζ",
      "zeta;": "ζ",
      "Zfr;": "ℨ",
      "zfr;": "𝔷",
      "ZHcy;": "Ж",
      "zhcy;": "ж",
      "zigrarr;": "⇝",
      "Zopf;": "ℤ",
      "zopf;": "𝕫",
      "Zscr;": "𝒵",
      "zscr;": "𝓏",
      "zwj;": "‍",
      "zwnj;": "‌"
    };
  });

  // node_modules/ent/decode.js
  var require_decode = __commonJS((exports, module) => {
    var punycode = require_punycode();
    var entities = require_entities();
    module.exports = decode;
    function decode(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a String");
      }
      return str.replace(/&(#?[^;\W]+;?)/g, function(_, match) {
        var m;
        if (m = /^#(\d+);?$/.exec(match)) {
          return punycode.ucs2.encode([parseInt(m[1], 10)]);
        } else if (m = /^#[Xx]([A-Fa-f0-9]+);?/.exec(match)) {
          return punycode.ucs2.encode([parseInt(m[1], 16)]);
        } else {
          var hasSemi = /;$/.test(match);
          var withoutSemi = hasSemi ? match.replace(/;$/, "") : match;
          var target = entities[withoutSemi] || hasSemi && entities[match];
          if (typeof target === "number") {
            return punycode.ucs2.encode([target]);
          } else if (typeof target === "string") {
            return target;
          } else {
            return "&" + match;
          }
        }
      });
    }
  });

  // node_modules/ent/index.js
  var require_ent = __commonJS((exports) => {
    exports.encode = require_encode();
    exports.decode = require_decode();
  });

  // node_modules/html-to-vdom/lib/convert-tag-attributes.js
  var require_convert_tag_attributes = __commonJS((exports, module) => {
    var decode = require_ent().decode;
    var MUST_USE_ATTRIBUTE = 1;
    var MUST_USE_PROPERTY = 2;
    var HAS_BOOLEAN_VALUE = 8;
    var HAS_NUMERIC_VALUE = 16;
    var HAS_POSITIVE_NUMERIC_VALUE = 32 | 16;
    var HAS_OVERLOADED_BOOLEAN_VALUE = 64;
    function checkMask(value, bitmask) {
      return (value & bitmask) === bitmask;
    }
    var isCustomAttribute = RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/);
    var HTMLDOMPropertyConfig = {
      Properties: {
        accept: null,
        acceptCharset: null,
        accessKey: null,
        action: null,
        allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
        allowTransparency: MUST_USE_ATTRIBUTE,
        alt: null,
        async: HAS_BOOLEAN_VALUE,
        autoComplete: null,
        autoFocus: HAS_BOOLEAN_VALUE,
        autoPlay: HAS_BOOLEAN_VALUE,
        capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
        cellPadding: null,
        cellSpacing: null,
        charSet: MUST_USE_ATTRIBUTE,
        challenge: MUST_USE_ATTRIBUTE,
        checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
        classID: MUST_USE_ATTRIBUTE,
        className: MUST_USE_ATTRIBUTE,
        cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
        colSpan: null,
        content: null,
        contentEditable: null,
        contextMenu: MUST_USE_ATTRIBUTE,
        controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
        coords: null,
        crossOrigin: null,
        data: null,
        dateTime: MUST_USE_ATTRIBUTE,
        defer: HAS_BOOLEAN_VALUE,
        dir: null,
        disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
        download: HAS_OVERLOADED_BOOLEAN_VALUE,
        draggable: null,
        encType: null,
        form: MUST_USE_ATTRIBUTE,
        formAction: MUST_USE_ATTRIBUTE,
        formEncType: MUST_USE_ATTRIBUTE,
        formMethod: MUST_USE_ATTRIBUTE,
        formNoValidate: HAS_BOOLEAN_VALUE,
        formTarget: MUST_USE_ATTRIBUTE,
        frameBorder: MUST_USE_ATTRIBUTE,
        headers: null,
        height: MUST_USE_ATTRIBUTE,
        hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
        high: null,
        href: null,
        hrefLang: null,
        htmlFor: null,
        httpEquiv: null,
        icon: null,
        id: MUST_USE_PROPERTY,
        is: MUST_USE_ATTRIBUTE,
        keyParams: MUST_USE_ATTRIBUTE,
        keyType: MUST_USE_ATTRIBUTE,
        label: null,
        lang: null,
        list: MUST_USE_ATTRIBUTE,
        loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
        low: null,
        manifest: MUST_USE_ATTRIBUTE,
        marginHeight: null,
        marginWidth: null,
        max: null,
        maxLength: MUST_USE_ATTRIBUTE,
        media: MUST_USE_ATTRIBUTE,
        mediaGroup: null,
        method: null,
        min: null,
        minLength: MUST_USE_ATTRIBUTE,
        multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
        muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
        name: null,
        noValidate: HAS_BOOLEAN_VALUE,
        open: HAS_BOOLEAN_VALUE,
        optimum: null,
        pattern: null,
        placeholder: null,
        poster: null,
        preload: null,
        radioGroup: null,
        readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
        rel: null,
        required: HAS_BOOLEAN_VALUE,
        role: MUST_USE_ATTRIBUTE,
        rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
        rowSpan: null,
        sandbox: null,
        scope: null,
        scoped: HAS_BOOLEAN_VALUE,
        scrolling: null,
        seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
        selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
        shape: null,
        size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
        sizes: MUST_USE_ATTRIBUTE,
        span: HAS_POSITIVE_NUMERIC_VALUE,
        spellCheck: null,
        src: null,
        srcDoc: MUST_USE_PROPERTY,
        srcSet: MUST_USE_ATTRIBUTE,
        start: HAS_NUMERIC_VALUE,
        step: null,
        style: null,
        tabIndex: null,
        target: null,
        title: null,
        type: null,
        useMap: null,
        value: MUST_USE_PROPERTY,
        width: MUST_USE_ATTRIBUTE,
        wmode: MUST_USE_ATTRIBUTE,
        autoCapitalize: null,
        autoCorrect: null,
        itemProp: MUST_USE_ATTRIBUTE,
        itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
        itemType: MUST_USE_ATTRIBUTE,
        itemID: MUST_USE_ATTRIBUTE,
        itemRef: MUST_USE_ATTRIBUTE,
        property: null,
        unselectable: MUST_USE_ATTRIBUTE
      }
    };
    var parseStyles = function(input) {
      var attributes = input.split(";");
      var styles = attributes.reduce(function(object, attribute) {
        var entry = attribute.split(/:(.+)/);
        if (entry[0] && entry[1]) {
          object[entry[0].trim()] = entry[1].trim();
        }
        return object;
      }, {});
      return styles;
    };
    var propertyToAttributeMapping = {
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      acceptCharset: "accept-charset"
    };
    var propertyValueConversions = {
      style: parseStyles,
      placeholder: decode,
      title: decode,
      alt: decode
    };
    var getPropertyInfo = function() {
      var propInfoByAttributeName = {};
      Object.keys(HTMLDOMPropertyConfig.Properties).forEach(function(propName) {
        var propConfig = HTMLDOMPropertyConfig.Properties[propName];
        var attributeName = propertyToAttributeMapping[propName] || propName.toLowerCase();
        var propertyInfo = {
          attributeName,
          propertyName: propName,
          mustUseAttribute: checkMask(propConfig, MUST_USE_ATTRIBUTE),
          mustUseProperty: checkMask(propConfig, MUST_USE_PROPERTY),
          hasBooleanValue: checkMask(propConfig, HAS_BOOLEAN_VALUE),
          hasNumericValue: checkMask(propConfig, HAS_NUMERIC_VALUE),
          hasPositiveNumericValue: checkMask(propConfig, HAS_POSITIVE_NUMERIC_VALUE),
          hasOverloadedBooleanValue: checkMask(propConfig, HAS_OVERLOADED_BOOLEAN_VALUE)
        };
        propInfoByAttributeName[attributeName] = propertyInfo;
      });
      return function(attributeName) {
        return propInfoByAttributeName[attributeName];
      };
    }();
    var convertTagAttributes = function(tag) {
      var attributes = tag.attribs;
      var vdomProperties = {
        attributes: {}
      };
      Object.keys(attributes).forEach(function(attributeName) {
        var lowerCased = attributeName.toLowerCase();
        var propInfo = getPropertyInfo(lowerCased);
        var value = attributes[attributeName];
        if (isCustomAttribute(attributeName) || !propInfo) {
          vdomProperties.attributes[attributeName] = value;
          return;
        }
        var valueConverter = propertyValueConversions[propInfo.propertyName];
        if (valueConverter) {
          value = valueConverter(value);
        }
        if (propInfo.mustUseAttribute) {
          if (propInfo.hasBooleanValue) {
            vdomProperties.attributes[propInfo.attributeName] = "";
          } else {
            vdomProperties.attributes[propInfo.attributeName] = value;
          }
        } else {
          var isTrue;
          if (propInfo.hasBooleanValue) {
            isTrue = value === "" || value.toLowerCase() === propInfo.attributeName;
            vdomProperties[propInfo.propertyName] = isTrue ? true : false;
          } else if (propInfo.hasOverloadedBooleanValue) {
            isTrue = value === "";
            vdomProperties[propInfo.propertyName] = isTrue ? true : value;
          } else if (propInfo.hasNumericValue || propInfo.hasPositiveNumericValue) {
            vdomProperties[propInfo.propertyName] = Number(value);
          } else {
            vdomProperties[propInfo.propertyName] = value;
          }
        }
      });
      return vdomProperties;
    };
    module.exports = convertTagAttributes;
  });

  // node_modules/html-to-vdom/lib/htmlparser-to-vdom.js
  var require_htmlparser_to_vdom = __commonJS((exports, module) => {
    var decode = require_ent().decode;
    var convertTagAttributes = require_convert_tag_attributes();
    module.exports = function createConverter(VNode, VText) {
      var converter = {
        convert: function(node, getVNodeKey) {
          if (node.type === "tag" || node.type === "script" || node.type === "style") {
            return converter.convertTag(node, getVNodeKey);
          } else if (node.type === "text") {
            return new VText(decode(node.data));
          } else {
            return new VText("");
          }
        },
        convertTag: function(tag, getVNodeKey) {
          var attributes = convertTagAttributes(tag);
          var key;
          if (getVNodeKey) {
            key = getVNodeKey(attributes);
          }
          var children = Array.prototype.map.call(tag.children || [], function(node) {
            return converter.convert(node, getVNodeKey);
          });
          return new VNode(tag.name, attributes, children, key);
        }
      };
      return converter;
    };
  });

  // node_modules/entities/maps/decode.json
  var require_decode2 = __commonJS((exports, module) => {
    module.exports = {"0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376};
  });

  // node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint = __commonJS((exports, module) => {
    var decodeMap = require_decode2();
    module.exports = decodeCodePoint;
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "�";
      }
      if (codePoint in decodeMap) {
        codePoint = decodeMap[codePoint];
      }
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    }
  });

  // node_modules/entities/maps/entities.json
  var require_entities2 = __commonJS((exports, module) => {
    module.exports = {Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌"};
  });

  // node_modules/entities/maps/legacy.json
  var require_legacy = __commonJS((exports, module) => {
    module.exports = {Aacute: "Á", aacute: "á", Acirc: "Â", acirc: "â", acute: "´", AElig: "Æ", aelig: "æ", Agrave: "À", agrave: "à", amp: "&", AMP: "&", Aring: "Å", aring: "å", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", brvbar: "¦", Ccedil: "Ç", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", Eacute: "É", eacute: "é", Ecirc: "Ê", ecirc: "ê", Egrave: "È", egrave: "è", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", Iacute: "Í", iacute: "í", Icirc: "Î", icirc: "î", iexcl: "¡", Igrave: "Ì", igrave: "ì", iquest: "¿", Iuml: "Ï", iuml: "ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", Ntilde: "Ñ", ntilde: "ñ", Oacute: "Ó", oacute: "ó", Ocirc: "Ô", ocirc: "ô", Ograve: "Ò", ograve: "ò", ordf: "ª", ordm: "º", Oslash: "Ø", oslash: "ø", Otilde: "Õ", otilde: "õ", Ouml: "Ö", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", THORN: "Þ", thorn: "þ", times: "×", Uacute: "Ú", uacute: "ú", Ucirc: "Û", ucirc: "û", Ugrave: "Ù", ugrave: "ù", uml: "¨", Uuml: "Ü", uuml: "ü", Yacute: "Ý", yacute: "ý", yen: "¥", yuml: "ÿ"};
  });

  // node_modules/entities/maps/xml.json
  var require_xml = __commonJS((exports, module) => {
    module.exports = {amp: "&", apos: "'", gt: ">", lt: "<", quot: '"'};
  });

  // node_modules/htmlparser2/lib/Tokenizer.js
  var require_Tokenizer = __commonJS((exports, module) => {
    module.exports = Tokenizer;
    var decodeCodePoint = require_decode_codepoint();
    var entityMap = require_entities2();
    var legacyMap = require_legacy();
    var xmlMap = require_xml();
    var i = 0;
    var TEXT = i++;
    var BEFORE_TAG_NAME = i++;
    var IN_TAG_NAME = i++;
    var IN_SELF_CLOSING_TAG = i++;
    var BEFORE_CLOSING_TAG_NAME = i++;
    var IN_CLOSING_TAG_NAME = i++;
    var AFTER_CLOSING_TAG_NAME = i++;
    var BEFORE_ATTRIBUTE_NAME = i++;
    var IN_ATTRIBUTE_NAME = i++;
    var AFTER_ATTRIBUTE_NAME = i++;
    var BEFORE_ATTRIBUTE_VALUE = i++;
    var IN_ATTRIBUTE_VALUE_DQ = i++;
    var IN_ATTRIBUTE_VALUE_SQ = i++;
    var IN_ATTRIBUTE_VALUE_NQ = i++;
    var BEFORE_DECLARATION = i++;
    var IN_DECLARATION = i++;
    var IN_PROCESSING_INSTRUCTION = i++;
    var BEFORE_COMMENT = i++;
    var IN_COMMENT = i++;
    var AFTER_COMMENT_1 = i++;
    var AFTER_COMMENT_2 = i++;
    var BEFORE_CDATA_1 = i++;
    var BEFORE_CDATA_2 = i++;
    var BEFORE_CDATA_3 = i++;
    var BEFORE_CDATA_4 = i++;
    var BEFORE_CDATA_5 = i++;
    var BEFORE_CDATA_6 = i++;
    var IN_CDATA = i++;
    var AFTER_CDATA_1 = i++;
    var AFTER_CDATA_2 = i++;
    var BEFORE_SPECIAL = i++;
    var BEFORE_SPECIAL_END = i++;
    var BEFORE_SCRIPT_1 = i++;
    var BEFORE_SCRIPT_2 = i++;
    var BEFORE_SCRIPT_3 = i++;
    var BEFORE_SCRIPT_4 = i++;
    var BEFORE_SCRIPT_5 = i++;
    var AFTER_SCRIPT_1 = i++;
    var AFTER_SCRIPT_2 = i++;
    var AFTER_SCRIPT_3 = i++;
    var AFTER_SCRIPT_4 = i++;
    var AFTER_SCRIPT_5 = i++;
    var BEFORE_STYLE_1 = i++;
    var BEFORE_STYLE_2 = i++;
    var BEFORE_STYLE_3 = i++;
    var BEFORE_STYLE_4 = i++;
    var AFTER_STYLE_1 = i++;
    var AFTER_STYLE_2 = i++;
    var AFTER_STYLE_3 = i++;
    var AFTER_STYLE_4 = i++;
    var BEFORE_ENTITY = i++;
    var BEFORE_NUMERIC_ENTITY = i++;
    var IN_NAMED_ENTITY = i++;
    var IN_NUMERIC_ENTITY = i++;
    var IN_HEX_ENTITY = i++;
    var j = 0;
    var SPECIAL_NONE = j++;
    var SPECIAL_SCRIPT = j++;
    var SPECIAL_STYLE = j++;
    function whitespace(c) {
      return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
    }
    function ifElseState(upper, SUCCESS, FAILURE) {
      var lower = upper.toLowerCase();
      if (upper === lower) {
        return function(c) {
          if (c === lower) {
            this._state = SUCCESS;
          } else {
            this._state = FAILURE;
            this._index--;
          }
        };
      } else {
        return function(c) {
          if (c === lower || c === upper) {
            this._state = SUCCESS;
          } else {
            this._state = FAILURE;
            this._index--;
          }
        };
      }
    }
    function consumeSpecialNameChar(upper, NEXT_STATE) {
      var lower = upper.toLowerCase();
      return function(c) {
        if (c === lower || c === upper) {
          this._state = NEXT_STATE;
        } else {
          this._state = IN_TAG_NAME;
          this._index--;
        }
      };
    }
    function Tokenizer(options, cbs) {
      this._state = TEXT;
      this._buffer = "";
      this._sectionStart = 0;
      this._index = 0;
      this._bufferOffset = 0;
      this._baseState = TEXT;
      this._special = SPECIAL_NONE;
      this._cbs = cbs;
      this._running = true;
      this._ended = false;
      this._xmlMode = !!(options && options.xmlMode);
      this._decodeEntities = !!(options && options.decodeEntities);
    }
    Tokenizer.prototype._stateText = function(c) {
      if (c === "<") {
        if (this._index > this._sectionStart) {
          this._cbs.ontext(this._getSection());
        }
        this._state = BEFORE_TAG_NAME;
        this._sectionStart = this._index;
      } else if (this._decodeEntities && this._special === SPECIAL_NONE && c === "&") {
        if (this._index > this._sectionStart) {
          this._cbs.ontext(this._getSection());
        }
        this._baseState = TEXT;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateBeforeTagName = function(c) {
      if (c === "/") {
        this._state = BEFORE_CLOSING_TAG_NAME;
      } else if (c === "<") {
        this._cbs.ontext(this._getSection());
        this._sectionStart = this._index;
      } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
        this._state = TEXT;
      } else if (c === "!") {
        this._state = BEFORE_DECLARATION;
        this._sectionStart = this._index + 1;
      } else if (c === "?") {
        this._state = IN_PROCESSING_INSTRUCTION;
        this._sectionStart = this._index + 1;
      } else {
        this._state = !this._xmlMode && (c === "s" || c === "S") ? BEFORE_SPECIAL : IN_TAG_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInTagName = function(c) {
      if (c === "/" || c === ">" || whitespace(c)) {
        this._emitToken("onopentagname");
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateBeforeCloseingTagName = function(c) {
      if (whitespace(c))
        ;
      else if (c === ">") {
        this._state = TEXT;
      } else if (this._special !== SPECIAL_NONE) {
        if (c === "s" || c === "S") {
          this._state = BEFORE_SPECIAL_END;
        } else {
          this._state = TEXT;
          this._index--;
        }
      } else {
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInCloseingTagName = function(c) {
      if (c === ">" || whitespace(c)) {
        this._emitToken("onclosetag");
        this._state = AFTER_CLOSING_TAG_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateAfterCloseingTagName = function(c) {
      if (c === ">") {
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      }
    };
    Tokenizer.prototype._stateBeforeAttributeName = function(c) {
      if (c === ">") {
        this._cbs.onopentagend();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (c === "/") {
        this._state = IN_SELF_CLOSING_TAG;
      } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInSelfClosingTag = function(c) {
      if (c === ">") {
        this._cbs.onselfclosingtag();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (!whitespace(c)) {
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateInAttributeName = function(c) {
      if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
        this._cbs.onattribname(this._getSection());
        this._sectionStart = -1;
        this._state = AFTER_ATTRIBUTE_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateAfterAttributeName = function(c) {
      if (c === "=") {
        this._state = BEFORE_ATTRIBUTE_VALUE;
      } else if (c === "/" || c === ">") {
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      } else if (!whitespace(c)) {
        this._cbs.onattribend();
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateBeforeAttributeValue = function(c) {
      if (c === '"') {
        this._state = IN_ATTRIBUTE_VALUE_DQ;
        this._sectionStart = this._index + 1;
      } else if (c === "'") {
        this._state = IN_ATTRIBUTE_VALUE_SQ;
        this._sectionStart = this._index + 1;
      } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_VALUE_NQ;
        this._sectionStart = this._index;
        this._index--;
      }
    };
    Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c) {
      if (c === '"') {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
      } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c) {
      if (c === "'") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
      } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c) {
      if (whitespace(c) || c === ">") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateBeforeDeclaration = function(c) {
      this._state = c === "[" ? BEFORE_CDATA_1 : c === "-" ? BEFORE_COMMENT : IN_DECLARATION;
    };
    Tokenizer.prototype._stateInDeclaration = function(c) {
      if (c === ">") {
        this._cbs.ondeclaration(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      }
    };
    Tokenizer.prototype._stateInProcessingInstruction = function(c) {
      if (c === ">") {
        this._cbs.onprocessinginstruction(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      }
    };
    Tokenizer.prototype._stateBeforeComment = function(c) {
      if (c === "-") {
        this._state = IN_COMMENT;
        this._sectionStart = this._index + 1;
      } else {
        this._state = IN_DECLARATION;
      }
    };
    Tokenizer.prototype._stateInComment = function(c) {
      if (c === "-")
        this._state = AFTER_COMMENT_1;
    };
    Tokenizer.prototype._stateAfterComment1 = function(c) {
      if (c === "-") {
        this._state = AFTER_COMMENT_2;
      } else {
        this._state = IN_COMMENT;
      }
    };
    Tokenizer.prototype._stateAfterComment2 = function(c) {
      if (c === ">") {
        this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (c !== "-") {
        this._state = IN_COMMENT;
      }
    };
    Tokenizer.prototype._stateBeforeCdata1 = ifElseState("C", BEFORE_CDATA_2, IN_DECLARATION);
    Tokenizer.prototype._stateBeforeCdata2 = ifElseState("D", BEFORE_CDATA_3, IN_DECLARATION);
    Tokenizer.prototype._stateBeforeCdata3 = ifElseState("A", BEFORE_CDATA_4, IN_DECLARATION);
    Tokenizer.prototype._stateBeforeCdata4 = ifElseState("T", BEFORE_CDATA_5, IN_DECLARATION);
    Tokenizer.prototype._stateBeforeCdata5 = ifElseState("A", BEFORE_CDATA_6, IN_DECLARATION);
    Tokenizer.prototype._stateBeforeCdata6 = function(c) {
      if (c === "[") {
        this._state = IN_CDATA;
        this._sectionStart = this._index + 1;
      } else {
        this._state = IN_DECLARATION;
        this._index--;
      }
    };
    Tokenizer.prototype._stateInCdata = function(c) {
      if (c === "]")
        this._state = AFTER_CDATA_1;
    };
    Tokenizer.prototype._stateAfterCdata1 = function(c) {
      if (c === "]")
        this._state = AFTER_CDATA_2;
      else
        this._state = IN_CDATA;
    };
    Tokenizer.prototype._stateAfterCdata2 = function(c) {
      if (c === ">") {
        this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (c !== "]") {
        this._state = IN_CDATA;
      }
    };
    Tokenizer.prototype._stateBeforeSpecial = function(c) {
      if (c === "c" || c === "C") {
        this._state = BEFORE_SCRIPT_1;
      } else if (c === "t" || c === "T") {
        this._state = BEFORE_STYLE_1;
      } else {
        this._state = IN_TAG_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateBeforeSpecialEnd = function(c) {
      if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
        this._state = AFTER_SCRIPT_1;
      } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
        this._state = AFTER_STYLE_1;
      } else
        this._state = TEXT;
    };
    Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar("R", BEFORE_SCRIPT_2);
    Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar("I", BEFORE_SCRIPT_3);
    Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar("P", BEFORE_SCRIPT_4);
    Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar("T", BEFORE_SCRIPT_5);
    Tokenizer.prototype._stateBeforeScript5 = function(c) {
      if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_SCRIPT;
      }
      this._state = IN_TAG_NAME;
      this._index--;
    };
    Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
    Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
    Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
    Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);
    Tokenizer.prototype._stateAfterScript5 = function(c) {
      if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 6;
        this._index--;
      } else
        this._state = TEXT;
    };
    Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar("Y", BEFORE_STYLE_2);
    Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar("L", BEFORE_STYLE_3);
    Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar("E", BEFORE_STYLE_4);
    Tokenizer.prototype._stateBeforeStyle4 = function(c) {
      if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_STYLE;
      }
      this._state = IN_TAG_NAME;
      this._index--;
    };
    Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
    Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
    Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);
    Tokenizer.prototype._stateAfterStyle4 = function(c) {
      if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 5;
        this._index--;
      } else
        this._state = TEXT;
    };
    Tokenizer.prototype._stateBeforeEntity = ifElseState("#", BEFORE_NUMERIC_ENTITY, IN_NAMED_ENTITY);
    Tokenizer.prototype._stateBeforeNumericEntity = ifElseState("X", IN_HEX_ENTITY, IN_NUMERIC_ENTITY);
    Tokenizer.prototype._parseNamedEntityStrict = function() {
      if (this._sectionStart + 1 < this._index) {
        var entity = this._buffer.substring(this._sectionStart + 1, this._index), map = this._xmlMode ? xmlMap : entityMap;
        if (map.hasOwnProperty(entity)) {
          this._emitPartial(map[entity]);
          this._sectionStart = this._index + 1;
        }
      }
    };
    Tokenizer.prototype._parseLegacyEntity = function() {
      var start = this._sectionStart + 1, limit = this._index - start;
      if (limit > 6)
        limit = 6;
      while (limit >= 2) {
        var entity = this._buffer.substr(start, limit);
        if (legacyMap.hasOwnProperty(entity)) {
          this._emitPartial(legacyMap[entity]);
          this._sectionStart += limit + 1;
          return;
        } else {
          limit--;
        }
      }
    };
    Tokenizer.prototype._stateInNamedEntity = function(c) {
      if (c === ";") {
        this._parseNamedEntityStrict();
        if (this._sectionStart + 1 < this._index && !this._xmlMode) {
          this._parseLegacyEntity();
        }
        this._state = this._baseState;
      } else if ((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")) {
        if (this._xmlMode)
          ;
        else if (this._sectionStart + 1 === this._index)
          ;
        else if (this._baseState !== TEXT) {
          if (c !== "=") {
            this._parseNamedEntityStrict();
          }
        } else {
          this._parseLegacyEntity();
        }
        this._state = this._baseState;
        this._index--;
      }
    };
    Tokenizer.prototype._decodeNumericEntity = function(offset, base) {
      var sectionStart = this._sectionStart + offset;
      if (sectionStart !== this._index) {
        var entity = this._buffer.substring(sectionStart, this._index);
        var parsed = parseInt(entity, base);
        this._emitPartial(decodeCodePoint(parsed));
        this._sectionStart = this._index;
      } else {
        this._sectionStart--;
      }
      this._state = this._baseState;
    };
    Tokenizer.prototype._stateInNumericEntity = function(c) {
      if (c === ";") {
        this._decodeNumericEntity(2, 10);
        this._sectionStart++;
      } else if (c < "0" || c > "9") {
        if (!this._xmlMode) {
          this._decodeNumericEntity(2, 10);
        } else {
          this._state = this._baseState;
        }
        this._index--;
      }
    };
    Tokenizer.prototype._stateInHexEntity = function(c) {
      if (c === ";") {
        this._decodeNumericEntity(3, 16);
        this._sectionStart++;
      } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
        if (!this._xmlMode) {
          this._decodeNumericEntity(3, 16);
        } else {
          this._state = this._baseState;
        }
        this._index--;
      }
    };
    Tokenizer.prototype._cleanup = function() {
      if (this._sectionStart < 0) {
        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
      } else if (this._running) {
        if (this._state === TEXT) {
          if (this._sectionStart !== this._index) {
            this._cbs.ontext(this._buffer.substr(this._sectionStart));
          }
          this._buffer = "";
          this._bufferOffset += this._index;
          this._index = 0;
        } else if (this._sectionStart === this._index) {
          this._buffer = "";
          this._bufferOffset += this._index;
          this._index = 0;
        } else {
          this._buffer = this._buffer.substr(this._sectionStart);
          this._index -= this._sectionStart;
          this._bufferOffset += this._sectionStart;
        }
        this._sectionStart = 0;
      }
    };
    Tokenizer.prototype.write = function(chunk) {
      if (this._ended)
        this._cbs.onerror(Error(".write() after done!"));
      this._buffer += chunk;
      this._parse();
    };
    Tokenizer.prototype._parse = function() {
      while (this._index < this._buffer.length && this._running) {
        var c = this._buffer.charAt(this._index);
        if (this._state === TEXT) {
          this._stateText(c);
        } else if (this._state === BEFORE_TAG_NAME) {
          this._stateBeforeTagName(c);
        } else if (this._state === IN_TAG_NAME) {
          this._stateInTagName(c);
        } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
          this._stateBeforeCloseingTagName(c);
        } else if (this._state === IN_CLOSING_TAG_NAME) {
          this._stateInCloseingTagName(c);
        } else if (this._state === AFTER_CLOSING_TAG_NAME) {
          this._stateAfterCloseingTagName(c);
        } else if (this._state === IN_SELF_CLOSING_TAG) {
          this._stateInSelfClosingTag(c);
        } else if (this._state === BEFORE_ATTRIBUTE_NAME) {
          this._stateBeforeAttributeName(c);
        } else if (this._state === IN_ATTRIBUTE_NAME) {
          this._stateInAttributeName(c);
        } else if (this._state === AFTER_ATTRIBUTE_NAME) {
          this._stateAfterAttributeName(c);
        } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
          this._stateBeforeAttributeValue(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
          this._stateInAttributeValueDoubleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
          this._stateInAttributeValueSingleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
          this._stateInAttributeValueNoQuotes(c);
        } else if (this._state === BEFORE_DECLARATION) {
          this._stateBeforeDeclaration(c);
        } else if (this._state === IN_DECLARATION) {
          this._stateInDeclaration(c);
        } else if (this._state === IN_PROCESSING_INSTRUCTION) {
          this._stateInProcessingInstruction(c);
        } else if (this._state === BEFORE_COMMENT) {
          this._stateBeforeComment(c);
        } else if (this._state === IN_COMMENT) {
          this._stateInComment(c);
        } else if (this._state === AFTER_COMMENT_1) {
          this._stateAfterComment1(c);
        } else if (this._state === AFTER_COMMENT_2) {
          this._stateAfterComment2(c);
        } else if (this._state === BEFORE_CDATA_1) {
          this._stateBeforeCdata1(c);
        } else if (this._state === BEFORE_CDATA_2) {
          this._stateBeforeCdata2(c);
        } else if (this._state === BEFORE_CDATA_3) {
          this._stateBeforeCdata3(c);
        } else if (this._state === BEFORE_CDATA_4) {
          this._stateBeforeCdata4(c);
        } else if (this._state === BEFORE_CDATA_5) {
          this._stateBeforeCdata5(c);
        } else if (this._state === BEFORE_CDATA_6) {
          this._stateBeforeCdata6(c);
        } else if (this._state === IN_CDATA) {
          this._stateInCdata(c);
        } else if (this._state === AFTER_CDATA_1) {
          this._stateAfterCdata1(c);
        } else if (this._state === AFTER_CDATA_2) {
          this._stateAfterCdata2(c);
        } else if (this._state === BEFORE_SPECIAL) {
          this._stateBeforeSpecial(c);
        } else if (this._state === BEFORE_SPECIAL_END) {
          this._stateBeforeSpecialEnd(c);
        } else if (this._state === BEFORE_SCRIPT_1) {
          this._stateBeforeScript1(c);
        } else if (this._state === BEFORE_SCRIPT_2) {
          this._stateBeforeScript2(c);
        } else if (this._state === BEFORE_SCRIPT_3) {
          this._stateBeforeScript3(c);
        } else if (this._state === BEFORE_SCRIPT_4) {
          this._stateBeforeScript4(c);
        } else if (this._state === BEFORE_SCRIPT_5) {
          this._stateBeforeScript5(c);
        } else if (this._state === AFTER_SCRIPT_1) {
          this._stateAfterScript1(c);
        } else if (this._state === AFTER_SCRIPT_2) {
          this._stateAfterScript2(c);
        } else if (this._state === AFTER_SCRIPT_3) {
          this._stateAfterScript3(c);
        } else if (this._state === AFTER_SCRIPT_4) {
          this._stateAfterScript4(c);
        } else if (this._state === AFTER_SCRIPT_5) {
          this._stateAfterScript5(c);
        } else if (this._state === BEFORE_STYLE_1) {
          this._stateBeforeStyle1(c);
        } else if (this._state === BEFORE_STYLE_2) {
          this._stateBeforeStyle2(c);
        } else if (this._state === BEFORE_STYLE_3) {
          this._stateBeforeStyle3(c);
        } else if (this._state === BEFORE_STYLE_4) {
          this._stateBeforeStyle4(c);
        } else if (this._state === AFTER_STYLE_1) {
          this._stateAfterStyle1(c);
        } else if (this._state === AFTER_STYLE_2) {
          this._stateAfterStyle2(c);
        } else if (this._state === AFTER_STYLE_3) {
          this._stateAfterStyle3(c);
        } else if (this._state === AFTER_STYLE_4) {
          this._stateAfterStyle4(c);
        } else if (this._state === BEFORE_ENTITY) {
          this._stateBeforeEntity(c);
        } else if (this._state === BEFORE_NUMERIC_ENTITY) {
          this._stateBeforeNumericEntity(c);
        } else if (this._state === IN_NAMED_ENTITY) {
          this._stateInNamedEntity(c);
        } else if (this._state === IN_NUMERIC_ENTITY) {
          this._stateInNumericEntity(c);
        } else if (this._state === IN_HEX_ENTITY) {
          this._stateInHexEntity(c);
        } else {
          this._cbs.onerror(Error("unknown _state"), this._state);
        }
        this._index++;
      }
      this._cleanup();
    };
    Tokenizer.prototype.pause = function() {
      this._running = false;
    };
    Tokenizer.prototype.resume = function() {
      this._running = true;
      if (this._index < this._buffer.length) {
        this._parse();
      }
      if (this._ended) {
        this._finish();
      }
    };
    Tokenizer.prototype.end = function(chunk) {
      if (this._ended)
        this._cbs.onerror(Error(".end() after done!"));
      if (chunk)
        this.write(chunk);
      this._ended = true;
      if (this._running)
        this._finish();
    };
    Tokenizer.prototype._finish = function() {
      if (this._sectionStart < this._index) {
        this._handleTrailingData();
      }
      this._cbs.onend();
    };
    Tokenizer.prototype._handleTrailingData = function() {
      var data = this._buffer.substr(this._sectionStart);
      if (this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2) {
        this._cbs.oncdata(data);
      } else if (this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2) {
        this._cbs.oncomment(data);
      } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
        this._parseLegacyEntity();
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(2, 10);
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(3, 16);
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state !== IN_TAG_NAME && this._state !== BEFORE_ATTRIBUTE_NAME && this._state !== BEFORE_ATTRIBUTE_VALUE && this._state !== AFTER_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_VALUE_SQ && this._state !== IN_ATTRIBUTE_VALUE_DQ && this._state !== IN_ATTRIBUTE_VALUE_NQ && this._state !== IN_CLOSING_TAG_NAME) {
        this._cbs.ontext(data);
      }
    };
    Tokenizer.prototype.reset = function() {
      Tokenizer.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs);
    };
    Tokenizer.prototype.getAbsoluteIndex = function() {
      return this._bufferOffset + this._index;
    };
    Tokenizer.prototype._getSection = function() {
      return this._buffer.substring(this._sectionStart, this._index);
    };
    Tokenizer.prototype._emitToken = function(name) {
      this._cbs[name](this._getSection());
      this._sectionStart = -1;
    };
    Tokenizer.prototype._emitPartial = function(value) {
      if (this._baseState !== TEXT) {
        this._cbs.onattribdata(value);
      } else {
        this._cbs.ontext(value);
      }
    };
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS((exports, module) => {
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  });

  // node_modules/events/events.js
  var require_events = __commonJS((exports, module) => {
    "use strict";
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn)
        console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++)
        args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args.length > 0)
          er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = {fired: false, wrapFn: void 0, target, type, listener};
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once(emitter, name) {
      return new Promise(function(resolve, reject) {
        function eventListener() {
          if (errorListener !== void 0) {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        var errorListener;
        if (name !== "error") {
          errorListener = function errorListener2(err) {
            emitter.removeListener(name, eventListener);
            reject(err);
          };
          emitter.once("error", errorListener);
        }
        emitter.once(name, eventListener);
      });
    }
  });

  // node_modules/htmlparser2/lib/Parser.js
  var require_Parser = __commonJS((exports, module) => {
    var Tokenizer = require_Tokenizer();
    var formTags = {
      input: true,
      option: true,
      optgroup: true,
      select: true,
      button: true,
      datalist: true,
      textarea: true
    };
    var openImpliesClose = {
      tr: {tr: true, th: true, td: true},
      th: {th: true},
      td: {thead: true, th: true, td: true},
      body: {head: true, link: true, script: true},
      li: {li: true},
      p: {p: true},
      h1: {p: true},
      h2: {p: true},
      h3: {p: true},
      h4: {p: true},
      h5: {p: true},
      h6: {p: true},
      select: formTags,
      input: formTags,
      output: formTags,
      button: formTags,
      datalist: formTags,
      textarea: formTags,
      option: {option: true},
      optgroup: {optgroup: true}
    };
    var voidElements = {
      __proto__: null,
      area: true,
      base: true,
      basefont: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      frame: true,
      hr: true,
      img: true,
      input: true,
      isindex: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var foreignContextElements = {
      __proto__: null,
      math: true,
      svg: true
    };
    var htmlIntegrationElements = {
      __proto__: null,
      mi: true,
      mo: true,
      mn: true,
      ms: true,
      mtext: true,
      "annotation-xml": true,
      foreignObject: true,
      desc: true,
      title: true
    };
    var re_nameEnd = /\s|\//;
    function Parser(cbs, options) {
      this._options = options || {};
      this._cbs = cbs || {};
      this._tagname = "";
      this._attribname = "";
      this._attribvalue = "";
      this._attribs = null;
      this._stack = [];
      this._foreignContext = [];
      this.startIndex = 0;
      this.endIndex = null;
      this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode;
      this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode;
      if (this._options.Tokenizer) {
        Tokenizer = this._options.Tokenizer;
      }
      this._tokenizer = new Tokenizer(this._options, this);
      if (this._cbs.onparserinit)
        this._cbs.onparserinit(this);
    }
    require_inherits_browser()(Parser, require_events().EventEmitter);
    Parser.prototype._updatePosition = function(initialOffset) {
      if (this.endIndex === null) {
        if (this._tokenizer._sectionStart <= initialOffset) {
          this.startIndex = 0;
        } else {
          this.startIndex = this._tokenizer._sectionStart - initialOffset;
        }
      } else
        this.startIndex = this.endIndex + 1;
      this.endIndex = this._tokenizer.getAbsoluteIndex();
    };
    Parser.prototype.ontext = function(data) {
      this._updatePosition(1);
      this.endIndex--;
      if (this._cbs.ontext)
        this._cbs.ontext(data);
    };
    Parser.prototype.onopentagname = function(name) {
      if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      this._tagname = name;
      if (!this._options.xmlMode && name in openImpliesClose) {
        for (var el; (el = this._stack[this._stack.length - 1]) in openImpliesClose[name]; this.onclosetag(el))
          ;
      }
      if (this._options.xmlMode || !(name in voidElements)) {
        this._stack.push(name);
        if (name in foreignContextElements)
          this._foreignContext.push(true);
        else if (name in htmlIntegrationElements)
          this._foreignContext.push(false);
      }
      if (this._cbs.onopentagname)
        this._cbs.onopentagname(name);
      if (this._cbs.onopentag)
        this._attribs = {};
    };
    Parser.prototype.onopentagend = function() {
      this._updatePosition(1);
      if (this._attribs) {
        if (this._cbs.onopentag)
          this._cbs.onopentag(this._tagname, this._attribs);
        this._attribs = null;
      }
      if (!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements) {
        this._cbs.onclosetag(this._tagname);
      }
      this._tagname = "";
    };
    Parser.prototype.onclosetag = function(name) {
      this._updatePosition(1);
      if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      if (name in foreignContextElements || name in htmlIntegrationElements) {
        this._foreignContext.pop();
      }
      if (this._stack.length && (!(name in voidElements) || this._options.xmlMode)) {
        var pos = this._stack.lastIndexOf(name);
        if (pos !== -1) {
          if (this._cbs.onclosetag) {
            pos = this._stack.length - pos;
            while (pos--)
              this._cbs.onclosetag(this._stack.pop());
          } else
            this._stack.length = pos;
        } else if (name === "p" && !this._options.xmlMode) {
          this.onopentagname(name);
          this._closeCurrentTag();
        }
      } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
        this.onopentagname(name);
        this._closeCurrentTag();
      }
    };
    Parser.prototype.onselfclosingtag = function() {
      if (this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1]) {
        this._closeCurrentTag();
      } else {
        this.onopentagend();
      }
    };
    Parser.prototype._closeCurrentTag = function() {
      var name = this._tagname;
      this.onopentagend();
      if (this._stack[this._stack.length - 1] === name) {
        if (this._cbs.onclosetag) {
          this._cbs.onclosetag(name);
        }
        this._stack.pop();
      }
    };
    Parser.prototype.onattribname = function(name) {
      if (this._lowerCaseAttributeNames) {
        name = name.toLowerCase();
      }
      this._attribname = name;
    };
    Parser.prototype.onattribdata = function(value) {
      this._attribvalue += value;
    };
    Parser.prototype.onattribend = function() {
      if (this._cbs.onattribute)
        this._cbs.onattribute(this._attribname, this._attribvalue);
      if (this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)) {
        this._attribs[this._attribname] = this._attribvalue;
      }
      this._attribname = "";
      this._attribvalue = "";
    };
    Parser.prototype._getInstructionName = function(value) {
      var idx = value.search(re_nameEnd), name = idx < 0 ? value : value.substr(0, idx);
      if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      return name;
    };
    Parser.prototype.ondeclaration = function(value) {
      if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("!" + name, "!" + value);
      }
    };
    Parser.prototype.onprocessinginstruction = function(value) {
      if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("?" + name, "?" + value);
      }
    };
    Parser.prototype.oncomment = function(value) {
      this._updatePosition(4);
      if (this._cbs.oncomment)
        this._cbs.oncomment(value);
      if (this._cbs.oncommentend)
        this._cbs.oncommentend();
    };
    Parser.prototype.oncdata = function(value) {
      this._updatePosition(1);
      if (this._options.xmlMode || this._options.recognizeCDATA) {
        if (this._cbs.oncdatastart)
          this._cbs.oncdatastart();
        if (this._cbs.ontext)
          this._cbs.ontext(value);
        if (this._cbs.oncdataend)
          this._cbs.oncdataend();
      } else {
        this.oncomment("[CDATA[" + value + "]]");
      }
    };
    Parser.prototype.onerror = function(err) {
      if (this._cbs.onerror)
        this._cbs.onerror(err);
    };
    Parser.prototype.onend = function() {
      if (this._cbs.onclosetag) {
        for (var i = this._stack.length; i > 0; this._cbs.onclosetag(this._stack[--i]))
          ;
      }
      if (this._cbs.onend)
        this._cbs.onend();
    };
    Parser.prototype.reset = function() {
      if (this._cbs.onreset)
        this._cbs.onreset();
      this._tokenizer.reset();
      this._tagname = "";
      this._attribname = "";
      this._attribs = null;
      this._stack = [];
      if (this._cbs.onparserinit)
        this._cbs.onparserinit(this);
    };
    Parser.prototype.parseComplete = function(data) {
      this.reset();
      this.end(data);
    };
    Parser.prototype.write = function(chunk) {
      this._tokenizer.write(chunk);
    };
    Parser.prototype.end = function(chunk) {
      this._tokenizer.end(chunk);
    };
    Parser.prototype.pause = function() {
      this._tokenizer.pause();
    };
    Parser.prototype.resume = function() {
      this._tokenizer.resume();
    };
    Parser.prototype.parseChunk = Parser.prototype.write;
    Parser.prototype.done = Parser.prototype.end;
    module.exports = Parser;
  });

  // node_modules/domelementtype/index.js
  var require_domelementtype = __commonJS((exports, module) => {
    module.exports = {
      Text: "text",
      Directive: "directive",
      Comment: "comment",
      Script: "script",
      Style: "style",
      Tag: "tag",
      CDATA: "cdata",
      Doctype: "doctype",
      isTag: function(elem) {
        return elem.type === "tag" || elem.type === "script" || elem.type === "style";
      }
    };
  });

  // node_modules/domhandler/lib/node.js
  var require_node = __commonJS((exports, module) => {
    var NodePrototype = module.exports = {
      get firstChild() {
        var children = this.children;
        return children && children[0] || null;
      },
      get lastChild() {
        var children = this.children;
        return children && children[children.length - 1] || null;
      },
      get nodeType() {
        return nodeTypes[this.type] || nodeTypes.element;
      }
    };
    var domLvl1 = {
      tagName: "name",
      childNodes: "children",
      parentNode: "parent",
      previousSibling: "prev",
      nextSibling: "next",
      nodeValue: "data"
    };
    var nodeTypes = {
      element: 1,
      text: 3,
      cdata: 4,
      comment: 8
    };
    Object.keys(domLvl1).forEach(function(key) {
      var shorthand = domLvl1[key];
      Object.defineProperty(NodePrototype, key, {
        get: function() {
          return this[shorthand] || null;
        },
        set: function(val) {
          this[shorthand] = val;
          return val;
        }
      });
    });
  });

  // node_modules/domhandler/lib/element.js
  var require_element = __commonJS((exports, module) => {
    var NodePrototype = require_node();
    var ElementPrototype = module.exports = Object.create(NodePrototype);
    var domLvl1 = {
      tagName: "name"
    };
    Object.keys(domLvl1).forEach(function(key) {
      var shorthand = domLvl1[key];
      Object.defineProperty(ElementPrototype, key, {
        get: function() {
          return this[shorthand] || null;
        },
        set: function(val) {
          this[shorthand] = val;
          return val;
        }
      });
    });
  });

  // node_modules/domhandler/index.js
  var require_domhandler = __commonJS((exports, module) => {
    var ElementType = require_domelementtype();
    var re_whitespace = /\s+/g;
    var NodePrototype = require_node();
    var ElementPrototype = require_element();
    function DomHandler(callback, options, elementCB) {
      if (typeof callback === "object") {
        elementCB = options;
        options = callback;
        callback = null;
      } else if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      this._callback = callback;
      this._options = options || defaultOpts;
      this._elementCB = elementCB;
      this.dom = [];
      this._done = false;
      this._tagStack = [];
      this._parser = this._parser || null;
    }
    var defaultOpts = {
      normalizeWhitespace: false,
      withStartIndices: false,
      withEndIndices: false
    };
    DomHandler.prototype.onparserinit = function(parser) {
      this._parser = parser;
    };
    DomHandler.prototype.onreset = function() {
      DomHandler.call(this, this._callback, this._options, this._elementCB);
    };
    DomHandler.prototype.onend = function() {
      if (this._done)
        return;
      this._done = true;
      this._parser = null;
      this._handleCallback(null);
    };
    DomHandler.prototype._handleCallback = DomHandler.prototype.onerror = function(error) {
      if (typeof this._callback === "function") {
        this._callback(error, this.dom);
      } else {
        if (error)
          throw error;
      }
    };
    DomHandler.prototype.onclosetag = function() {
      var elem = this._tagStack.pop();
      if (this._options.withEndIndices && elem) {
        elem.endIndex = this._parser.endIndex;
      }
      if (this._elementCB)
        this._elementCB(elem);
    };
    DomHandler.prototype._createDomElement = function(properties) {
      if (!this._options.withDomLvl1)
        return properties;
      var element2;
      if (properties.type === "tag") {
        element2 = Object.create(ElementPrototype);
      } else {
        element2 = Object.create(NodePrototype);
      }
      for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
          element2[key] = properties[key];
        }
      }
      return element2;
    };
    DomHandler.prototype._addDomElement = function(element2) {
      var parent = this._tagStack[this._tagStack.length - 1];
      var siblings = parent ? parent.children : this.dom;
      var previousSibling = siblings[siblings.length - 1];
      element2.next = null;
      if (this._options.withStartIndices) {
        element2.startIndex = this._parser.startIndex;
      }
      if (this._options.withEndIndices) {
        element2.endIndex = this._parser.endIndex;
      }
      if (previousSibling) {
        element2.prev = previousSibling;
        previousSibling.next = element2;
      } else {
        element2.prev = null;
      }
      siblings.push(element2);
      element2.parent = parent || null;
    };
    DomHandler.prototype.onopentag = function(name, attribs) {
      var properties = {
        type: name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag,
        name,
        attribs,
        children: []
      };
      var element2 = this._createDomElement(properties);
      this._addDomElement(element2);
      this._tagStack.push(element2);
    };
    DomHandler.prototype.ontext = function(data) {
      var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
      var lastTag;
      if (!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length - 1]).type === ElementType.Text) {
        if (normalize) {
          lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
        } else {
          lastTag.data += data;
        }
      } else {
        if (this._tagStack.length && (lastTag = this._tagStack[this._tagStack.length - 1]) && (lastTag = lastTag.children[lastTag.children.length - 1]) && lastTag.type === ElementType.Text) {
          if (normalize) {
            lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
          } else {
            lastTag.data += data;
          }
        } else {
          if (normalize) {
            data = data.replace(re_whitespace, " ");
          }
          var element2 = this._createDomElement({
            data,
            type: ElementType.Text
          });
          this._addDomElement(element2);
        }
      }
    };
    DomHandler.prototype.oncomment = function(data) {
      var lastTag = this._tagStack[this._tagStack.length - 1];
      if (lastTag && lastTag.type === ElementType.Comment) {
        lastTag.data += data;
        return;
      }
      var properties = {
        data,
        type: ElementType.Comment
      };
      var element2 = this._createDomElement(properties);
      this._addDomElement(element2);
      this._tagStack.push(element2);
    };
    DomHandler.prototype.oncdatastart = function() {
      var properties = {
        children: [{
          data: "",
          type: ElementType.Text
        }],
        type: ElementType.CDATA
      };
      var element2 = this._createDomElement(properties);
      this._addDomElement(element2);
      this._tagStack.push(element2);
    };
    DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function() {
      this._tagStack.pop();
    };
    DomHandler.prototype.onprocessinginstruction = function(name, data) {
      var element2 = this._createDomElement({
        name,
        data,
        type: ElementType.Directive
      });
      this._addDomElement(element2);
    };
    module.exports = DomHandler;
  });

  // node_modules/dom-serializer/node_modules/domelementtype/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.isTag = void 0;
    function isTag(elem) {
      return elem.type === "tag" || elem.type === "script" || elem.type === "style";
    }
    exports.isTag = isTag;
    exports.Text = "text";
    exports.Directive = "directive";
    exports.Comment = "comment";
    exports.Script = "script";
    exports.Style = "style";
    exports.Tag = "tag";
    exports.CDATA = "cdata";
    exports.Doctype = "doctype";
  });

  // node_modules/dom-serializer/node_modules/entities/lib/maps/entities.json
  var require_entities3 = __commonJS((exports, module) => {
    module.exports = {Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌"};
  });

  // node_modules/dom-serializer/node_modules/entities/lib/maps/legacy.json
  var require_legacy2 = __commonJS((exports, module) => {
    module.exports = {Aacute: "Á", aacute: "á", Acirc: "Â", acirc: "â", acute: "´", AElig: "Æ", aelig: "æ", Agrave: "À", agrave: "à", amp: "&", AMP: "&", Aring: "Å", aring: "å", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", brvbar: "¦", Ccedil: "Ç", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", Eacute: "É", eacute: "é", Ecirc: "Ê", ecirc: "ê", Egrave: "È", egrave: "è", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", Iacute: "Í", iacute: "í", Icirc: "Î", icirc: "î", iexcl: "¡", Igrave: "Ì", igrave: "ì", iquest: "¿", Iuml: "Ï", iuml: "ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", Ntilde: "Ñ", ntilde: "ñ", Oacute: "Ó", oacute: "ó", Ocirc: "Ô", ocirc: "ô", Ograve: "Ò", ograve: "ò", ordf: "ª", ordm: "º", Oslash: "Ø", oslash: "ø", Otilde: "Õ", otilde: "õ", Ouml: "Ö", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", THORN: "Þ", thorn: "þ", times: "×", Uacute: "Ú", uacute: "ú", Ucirc: "Û", ucirc: "û", Ugrave: "Ù", ugrave: "ù", uml: "¨", Uuml: "Ü", uuml: "ü", Yacute: "Ý", yacute: "ý", yen: "¥", yuml: "ÿ"};
  });

  // node_modules/dom-serializer/node_modules/entities/lib/maps/xml.json
  var require_xml2 = __commonJS((exports, module) => {
    module.exports = {amp: "&", apos: "'", gt: ">", lt: "<", quot: '"'};
  });

  // node_modules/dom-serializer/node_modules/entities/lib/maps/decode.json
  var require_decode3 = __commonJS((exports, module) => {
    module.exports = {"0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376};
  });

  // node_modules/dom-serializer/node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint2 = __commonJS((exports) => {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var decode_json_1 = __importDefault(require_decode3());
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "�";
      }
      if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
      }
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    }
    exports.default = decodeCodePoint;
  });

  // node_modules/dom-serializer/node_modules/entities/lib/decode.js
  var require_decode4 = __commonJS((exports) => {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
    var entities_json_1 = __importDefault(require_entities3());
    var legacy_json_1 = __importDefault(require_legacy2());
    var xml_json_1 = __importDefault(require_xml2());
    var decode_codepoint_1 = __importDefault(require_decode_codepoint2());
    exports.decodeXML = getStrictDecoder(xml_json_1.default);
    exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
    function getStrictDecoder(map) {
      var keys = Object.keys(map).join("|");
      var replace = getReplacer(map);
      keys += "|#[xX][\\da-fA-F]+|#\\d+";
      var re = new RegExp("&(?:" + keys + ");", "g");
      return function(str) {
        return String(str).replace(re, replace);
      };
    }
    var sorter = function(a, b) {
      return a < b ? 1 : -1;
    };
    exports.decodeHTML = function() {
      var legacy = Object.keys(legacy_json_1.default).sort(sorter);
      var keys = Object.keys(entities_json_1.default).sort(sorter);
      for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
          keys[i] += ";?";
          j++;
        } else {
          keys[i] += ";";
        }
      }
      var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var replace = getReplacer(entities_json_1.default);
      function replacer(str) {
        if (str.substr(-1) !== ";")
          str += ";";
        return replace(str);
      }
      return function(str) {
        return String(str).replace(re, replacer);
      };
    }();
    function getReplacer(map) {
      return function replace(str) {
        if (str.charAt(1) === "#") {
          var secondChar = str.charAt(2);
          if (secondChar === "X" || secondChar === "x") {
            return decode_codepoint_1.default(parseInt(str.substr(3), 16));
          }
          return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)];
      };
    }
  });

  // node_modules/dom-serializer/node_modules/entities/lib/encode.js
  var require_encode2 = __commonJS((exports) => {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.escape = exports.encodeHTML = exports.encodeXML = void 0;
    var xml_json_1 = __importDefault(require_xml2());
    var inverseXML = getInverseObj(xml_json_1.default);
    var xmlReplacer = getInverseReplacer(inverseXML);
    exports.encodeXML = getInverse(inverseXML, xmlReplacer);
    var entities_json_1 = __importDefault(require_entities3());
    var inverseHTML = getInverseObj(entities_json_1.default);
    var htmlReplacer = getInverseReplacer(inverseHTML);
    exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
    function getInverseObj(obj) {
      return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
      }, {});
    }
    function getInverseReplacer(inverse) {
      var single = [];
      var multiple = [];
      for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
          single.push("\\" + k);
        } else {
          multiple.push(k);
        }
      }
      single.sort();
      for (var start = 0; start < single.length - 1; start++) {
        var end = start;
        while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
          end += 1;
        }
        var count = 1 + end - start;
        if (count < 3)
          continue;
        single.splice(start, count, single[start] + "-" + single[end]);
      }
      multiple.unshift("[" + single.join("") + "]");
      return new RegExp(multiple.join("|"), "g");
    }
    var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    function singleCharReplacer(c) {
      return "&#x" + c.codePointAt(0).toString(16).toUpperCase() + ";";
    }
    function getInverse(inverse, re) {
      return function(data) {
        return data.replace(re, function(name) {
          return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
      };
    }
    var reXmlChars = getInverseReplacer(inverseXML);
    function escape(data) {
      return data.replace(reXmlChars, singleCharReplacer).replace(reNonASCII, singleCharReplacer);
    }
    exports.escape = escape;
  });

  // node_modules/dom-serializer/node_modules/entities/lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escape = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
    var decode_1 = require_decode4();
    var encode_1 = require_encode2();
    function decode(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports.decode = decode;
    function decodeStrict(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports.decodeStrict = decodeStrict;
    function encode(data, level) {
      return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports.encode = encode;
    var encode_2 = require_encode2();
    Object.defineProperty(exports, "encodeXML", {enumerable: true, get: function() {
      return encode_2.encodeXML;
    }});
    Object.defineProperty(exports, "encodeHTML", {enumerable: true, get: function() {
      return encode_2.encodeHTML;
    }});
    Object.defineProperty(exports, "escape", {enumerable: true, get: function() {
      return encode_2.escape;
    }});
    Object.defineProperty(exports, "encodeHTML4", {enumerable: true, get: function() {
      return encode_2.encodeHTML;
    }});
    Object.defineProperty(exports, "encodeHTML5", {enumerable: true, get: function() {
      return encode_2.encodeHTML;
    }});
    var decode_2 = require_decode4();
    Object.defineProperty(exports, "decodeXML", {enumerable: true, get: function() {
      return decode_2.decodeXML;
    }});
    Object.defineProperty(exports, "decodeHTML", {enumerable: true, get: function() {
      return decode_2.decodeHTML;
    }});
    Object.defineProperty(exports, "decodeHTMLStrict", {enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    }});
    Object.defineProperty(exports, "decodeHTML4", {enumerable: true, get: function() {
      return decode_2.decodeHTML;
    }});
    Object.defineProperty(exports, "decodeHTML5", {enumerable: true, get: function() {
      return decode_2.decodeHTML;
    }});
    Object.defineProperty(exports, "decodeHTML4Strict", {enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    }});
    Object.defineProperty(exports, "decodeHTML5Strict", {enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    }});
    Object.defineProperty(exports, "decodeXMLStrict", {enumerable: true, get: function() {
      return decode_2.decodeXML;
    }});
  });

  // node_modules/dom-serializer/foreignNames.json
  var require_foreignNames = __commonJS((exports, module) => {
    module.exports = {
      elementNames: {
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        fedropshadow: "feDropShadow",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
        textpath: "textPath"
      },
      attributeNames: {
        definitionurl: "definitionURL",
        attributename: "attributeName",
        attributetype: "attributeType",
        basefrequency: "baseFrequency",
        baseprofile: "baseProfile",
        calcmode: "calcMode",
        clippathunits: "clipPathUnits",
        diffuseconstant: "diffuseConstant",
        edgemode: "edgeMode",
        filterunits: "filterUnits",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        limitingconeangle: "limitingConeAngle",
        markerheight: "markerHeight",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        numoctaves: "numOctaves",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        refx: "refX",
        refy: "refY",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stitchtiles: "stitchTiles",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textlength: "textLength",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        xchannelselector: "xChannelSelector",
        ychannelselector: "yChannelSelector",
        zoomandpan: "zoomAndPan"
      }
    };
  });

  // node_modules/dom-serializer/index.js
  var require_dom_serializer = __commonJS((exports, module) => {
    var ElementType = require_lib();
    var entities = require_lib2();
    var foreignNames = require_foreignNames();
    foreignNames.elementNames.__proto__ = null;
    foreignNames.attributeNames.__proto__ = null;
    var unencodedElements = {
      __proto__: null,
      style: true,
      script: true,
      xmp: true,
      iframe: true,
      noembed: true,
      noframes: true,
      plaintext: true,
      noscript: true
    };
    function formatAttrs(attributes, opts) {
      if (!attributes)
        return;
      var output = "";
      var value;
      for (var key in attributes) {
        value = attributes[key];
        if (output) {
          output += " ";
        }
        if (opts.xmlMode === "foreign") {
          key = foreignNames.attributeNames[key] || key;
        }
        output += key;
        if (value !== null && value !== "" || opts.xmlMode) {
          output += '="' + (opts.decodeEntities ? entities.encodeXML(value) : value.replace(/\"/g, "&quot;")) + '"';
        }
      }
      return output;
    }
    var singleTag = {
      __proto__: null,
      area: true,
      base: true,
      basefont: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      frame: true,
      hr: true,
      img: true,
      input: true,
      isindex: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var render = module.exports = function(dom, opts) {
      if (!Array.isArray(dom) && !dom.cheerio)
        dom = [dom];
      opts = opts || {};
      var output = "";
      for (var i = 0; i < dom.length; i++) {
        var elem = dom[i];
        if (elem.type === "root")
          output += render(elem.children, opts);
        else if (ElementType.isTag(elem))
          output += renderTag(elem, opts);
        else if (elem.type === ElementType.Directive)
          output += renderDirective(elem);
        else if (elem.type === ElementType.Comment)
          output += renderComment(elem);
        else if (elem.type === ElementType.CDATA)
          output += renderCdata(elem);
        else
          output += renderText(elem, opts);
      }
      return output;
    };
    var foreignModeIntegrationPoints = [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ];
    function renderTag(elem, opts) {
      if (opts.xmlMode === "foreign") {
        elem.name = foreignNames.elementNames[elem.name] || elem.name;
        if (elem.parent && foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0)
          opts = Object.assign({}, opts, {xmlMode: false});
      }
      if (!opts.xmlMode && ["svg", "math"].indexOf(elem.name) >= 0) {
        opts = Object.assign({}, opts, {xmlMode: "foreign"});
      }
      var tag = "<" + elem.name;
      var attribs = formatAttrs(elem.attribs, opts);
      if (attribs) {
        tag += " " + attribs;
      }
      if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children) {
          tag += render(elem.children, opts);
        }
        if (!singleTag[elem.name] || opts.xmlMode) {
          tag += "</" + elem.name + ">";
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<" + elem.data + ">";
    }
    function renderText(elem, opts) {
      var data = elem.data || "";
      if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
        data = entities.encodeXML(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[" + elem.children[0].data + "]]>";
    }
    function renderComment(elem) {
      return "<!--" + elem.data + "-->";
    }
  });

  // node_modules/domutils/lib/stringify.js
  var require_stringify = __commonJS((exports, module) => {
    var ElementType = require_domelementtype();
    var getOuterHTML = require_dom_serializer();
    var isTag = ElementType.isTag;
    module.exports = {
      getInnerHTML,
      getOuterHTML,
      getText
    };
    function getInnerHTML(elem, opts) {
      return elem.children ? elem.children.map(function(elem2) {
        return getOuterHTML(elem2, opts);
      }).join("") : "";
    }
    function getText(elem) {
      if (Array.isArray(elem))
        return elem.map(getText).join("");
      if (isTag(elem))
        return elem.name === "br" ? "\n" : getText(elem.children);
      if (elem.type === ElementType.CDATA)
        return getText(elem.children);
      if (elem.type === ElementType.Text)
        return elem.data;
      return "";
    }
  });

  // node_modules/domutils/lib/traversal.js
  var require_traversal = __commonJS((exports) => {
    var getChildren = exports.getChildren = function(elem) {
      return elem.children;
    };
    var getParent = exports.getParent = function(elem) {
      return elem.parent;
    };
    exports.getSiblings = function(elem) {
      var parent = getParent(elem);
      return parent ? getChildren(parent) : [elem];
    };
    exports.getAttributeValue = function(elem, name) {
      return elem.attribs && elem.attribs[name];
    };
    exports.hasAttrib = function(elem, name) {
      return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
    };
    exports.getName = function(elem) {
      return elem.name;
    };
  });

  // node_modules/domutils/lib/manipulation.js
  var require_manipulation = __commonJS((exports) => {
    exports.removeElement = function(elem) {
      if (elem.prev)
        elem.prev.next = elem.next;
      if (elem.next)
        elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
      }
    };
    exports.replaceElement = function(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
      }
    };
    exports.appendChild = function(elem, child) {
      child.parent = elem;
      if (elem.children.push(child) !== 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
        child.next = null;
      }
    };
    exports.append = function(elem, next) {
      var parent = elem.parent, currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    };
    exports.prepend = function(elem, prev) {
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.lastIndexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    };
  });

  // node_modules/domutils/lib/querying.js
  var require_querying = __commonJS((exports, module) => {
    var isTag = require_domelementtype().isTag;
    module.exports = {
      filter,
      find,
      findOneChild,
      findOne,
      existsOne,
      findAll
    };
    function filter(test, element2, recurse, limit) {
      if (!Array.isArray(element2))
        element2 = [element2];
      if (typeof limit !== "number" || !isFinite(limit)) {
        limit = Infinity;
      }
      return find(test, element2, recurse !== false, limit);
    }
    function find(test, elems, recurse, limit) {
      var result = [], childs;
      for (var i = 0, j = elems.length; i < j; i++) {
        if (test(elems[i])) {
          result.push(elems[i]);
          if (--limit <= 0)
            break;
        }
        childs = elems[i].children;
        if (recurse && childs && childs.length > 0) {
          childs = find(test, childs, recurse, limit);
          result = result.concat(childs);
          limit -= childs.length;
          if (limit <= 0)
            break;
        }
      }
      return result;
    }
    function findOneChild(test, elems) {
      for (var i = 0, l = elems.length; i < l; i++) {
        if (test(elems[i]))
          return elems[i];
      }
      return null;
    }
    function findOne(test, elems) {
      var elem = null;
      for (var i = 0, l = elems.length; i < l && !elem; i++) {
        if (!isTag(elems[i])) {
          continue;
        } else if (test(elems[i])) {
          elem = elems[i];
        } else if (elems[i].children.length > 0) {
          elem = findOne(test, elems[i].children);
        }
      }
      return elem;
    }
    function existsOne(test, elems) {
      for (var i = 0, l = elems.length; i < l; i++) {
        if (isTag(elems[i]) && (test(elems[i]) || elems[i].children.length > 0 && existsOne(test, elems[i].children))) {
          return true;
        }
      }
      return false;
    }
    function findAll(test, rootElems) {
      var result = [];
      var stack = rootElems.slice();
      while (stack.length) {
        var elem = stack.shift();
        if (!isTag(elem))
          continue;
        if (elem.children && elem.children.length > 0) {
          stack.unshift.apply(stack, elem.children);
        }
        if (test(elem))
          result.push(elem);
      }
      return result;
    }
  });

  // node_modules/domutils/lib/legacy.js
  var require_legacy3 = __commonJS((exports) => {
    var ElementType = require_domelementtype();
    var isTag = exports.isTag = ElementType.isTag;
    exports.testElement = function(options, element2) {
      for (var key in options) {
        if (!options.hasOwnProperty(key))
          ;
        else if (key === "tag_name") {
          if (!isTag(element2) || !options.tag_name(element2.name)) {
            return false;
          }
        } else if (key === "tag_type") {
          if (!options.tag_type(element2.type))
            return false;
        } else if (key === "tag_contains") {
          if (isTag(element2) || !options.tag_contains(element2.data)) {
            return false;
          }
        } else if (!element2.attribs || !options[key](element2.attribs[key])) {
          return false;
        }
      }
      return true;
    };
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return isTag(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return isTag;
        } else {
          return function(elem) {
            return isTag(elem) && elem.name === name;
          };
        }
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        } else {
          return function(elem) {
            return elem.type === type;
          };
        }
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return !isTag(elem) && data(elem.data);
          };
        } else {
          return function(elem) {
            return !isTag(elem) && elem.data === data;
          };
        }
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return elem.attribs && value(elem.attribs[attrib]);
        };
      } else {
        return function(elem) {
          return elem.attribs && elem.attribs[attrib] === value;
        };
      }
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    exports.getElements = function(options, element2, recurse, limit) {
      var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
      });
      return funcs.length === 0 ? [] : this.filter(funcs.reduce(combineFuncs), element2, recurse, limit);
    };
    exports.getElementById = function(id, element2, recurse) {
      if (!Array.isArray(element2))
        element2 = [element2];
      return this.findOne(getAttribCheck("id", id), element2, recurse !== false);
    };
    exports.getElementsByTagName = function(name, element2, recurse, limit) {
      return this.filter(Checks.tag_name(name), element2, recurse, limit);
    };
    exports.getElementsByTagType = function(type, element2, recurse, limit) {
      return this.filter(Checks.tag_type(type), element2, recurse, limit);
    };
  });

  // node_modules/domutils/lib/helpers.js
  var require_helpers = __commonJS((exports) => {
    exports.removeSubsets = function(nodes) {
      var idx = nodes.length, node, ancestor, replace;
      while (--idx > -1) {
        node = ancestor = nodes[idx];
        nodes[idx] = null;
        replace = true;
        while (ancestor) {
          if (nodes.indexOf(ancestor) > -1) {
            replace = false;
            nodes.splice(idx, 1);
            break;
          }
          ancestor = ancestor.parent;
        }
        if (replace) {
          nodes[idx] = node;
        }
      }
      return nodes;
    };
    var POSITION = {
      DISCONNECTED: 1,
      PRECEDING: 2,
      FOLLOWING: 4,
      CONTAINS: 8,
      CONTAINED_BY: 16
    };
    var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      var current, sharedParent, siblings, aSibling, bSibling, idx;
      if (nodeA === nodeB) {
        return 0;
      }
      current = nodeA;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = nodeB;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      idx = 0;
      while (aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return POSITION.DISCONNECTED;
      }
      sharedParent = aParents[idx - 1];
      siblings = sharedParent.children;
      aSibling = aParents[idx];
      bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
        }
        return POSITION.FOLLOWING;
      } else {
        if (sharedParent === nodeA) {
          return POSITION.PRECEDING | POSITION.CONTAINS;
        }
        return POSITION.PRECEDING;
      }
    };
    exports.uniqueSort = function(nodes) {
      var idx = nodes.length, node, position;
      nodes = nodes.slice();
      while (--idx > -1) {
        node = nodes[idx];
        position = nodes.indexOf(node);
        if (position > -1 && position < idx) {
          nodes.splice(idx, 1);
        }
      }
      nodes.sort(function(a, b) {
        var relative = comparePos(a, b);
        if (relative & POSITION.PRECEDING) {
          return -1;
        } else if (relative & POSITION.FOLLOWING) {
          return 1;
        }
        return 0;
      });
      return nodes;
    };
  });

  // node_modules/domutils/index.js
  var require_domutils = __commonJS((exports, module) => {
    var DomUtils = module.exports;
    [
      require_stringify(),
      require_traversal(),
      require_manipulation(),
      require_querying(),
      require_legacy3(),
      require_helpers()
    ].forEach(function(ext) {
      Object.keys(ext).forEach(function(key) {
        DomUtils[key] = ext[key].bind(DomUtils);
      });
    });
  });

  // node_modules/htmlparser2/lib/FeedHandler.js
  var require_FeedHandler = __commonJS((exports, module) => {
    var DomHandler = require_domhandler();
    var DomUtils = require_domutils();
    function FeedHandler(callback, options) {
      this.init(callback, options);
    }
    require_inherits_browser()(FeedHandler, DomHandler);
    FeedHandler.prototype.init = DomHandler;
    function getElements(what, where) {
      return DomUtils.getElementsByTagName(what, where, true);
    }
    function getOneElement(what, where) {
      return DomUtils.getElementsByTagName(what, where, true, 1)[0];
    }
    function fetch(what, where, recurse) {
      return DomUtils.getText(DomUtils.getElementsByTagName(what, where, recurse, 1)).trim();
    }
    function addConditionally(obj, prop, what, where, recurse) {
      var tmp = fetch(what, where, recurse);
      if (tmp)
        obj[prop] = tmp;
    }
    var isValidFeed = function(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    };
    FeedHandler.prototype.onend = function() {
      var feed = {}, feedRoot = getOneElement(isValidFeed, this.dom), tmp, childs;
      if (feedRoot) {
        if (feedRoot.name === "feed") {
          childs = feedRoot.children;
          feed.type = "atom";
          addConditionally(feed, "id", "id", childs);
          addConditionally(feed, "title", "title", childs);
          if ((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href))
            feed.link = tmp;
          addConditionally(feed, "description", "subtitle", childs);
          if (tmp = fetch("updated", childs))
            feed.updated = new Date(tmp);
          addConditionally(feed, "author", "email", childs, true);
          feed.items = getElements("entry", childs).map(function(item) {
            var entry = {}, tmp2;
            item = item.children;
            addConditionally(entry, "id", "id", item);
            addConditionally(entry, "title", "title", item);
            if ((tmp2 = getOneElement("link", item)) && (tmp2 = tmp2.attribs) && (tmp2 = tmp2.href))
              entry.link = tmp2;
            if (tmp2 = fetch("summary", item) || fetch("content", item))
              entry.description = tmp2;
            if (tmp2 = fetch("updated", item))
              entry.pubDate = new Date(tmp2);
            return entry;
          });
        } else {
          childs = getOneElement("channel", feedRoot.children).children;
          feed.type = feedRoot.name.substr(0, 3);
          feed.id = "";
          addConditionally(feed, "title", "title", childs);
          addConditionally(feed, "link", "link", childs);
          addConditionally(feed, "description", "description", childs);
          if (tmp = fetch("lastBuildDate", childs))
            feed.updated = new Date(tmp);
          addConditionally(feed, "author", "managingEditor", childs, true);
          feed.items = getElements("item", feedRoot.children).map(function(item) {
            var entry = {}, tmp2;
            item = item.children;
            addConditionally(entry, "id", "guid", item);
            addConditionally(entry, "title", "title", item);
            addConditionally(entry, "link", "link", item);
            addConditionally(entry, "description", "description", item);
            if (tmp2 = fetch("pubDate", item))
              entry.pubDate = new Date(tmp2);
            return entry;
          });
        }
      }
      this.dom = feed;
      DomHandler.prototype._handleCallback.call(this, feedRoot ? null : Error("couldn't find root of feed"));
    };
    module.exports = FeedHandler;
  });

  // empty:/Volumes/DUMBLEDORE1/Users/fficnar/Projects/Shared Projects/mablung-virtual-pug/node_modules/readable-stream/readable.js
  var require_readable = __commonJS(() => {
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS((exports) => {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS((exports) => {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  });

  // node_modules/isarray/index.js
  var require_isarray = __commonJS((exports, module) => {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS((exports) => {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var isArray = require_isarray();
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    Buffer2.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== void 0 ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
    exports.kMaxLength = kMaxLength();
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function() {
          return 42;
        }};
        return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
      } catch (e) {
        return false;
      }
    }
    function kMaxLength() {
      return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError("Invalid typed array length");
      }
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        that = new Uint8Array(length);
        that.__proto__ = Buffer2.prototype;
      } else {
        if (that === null) {
          that = new Buffer2(length);
        }
        that.length = length;
      }
      return that;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
        return new Buffer2(arg, encodingOrOffset, length);
      }
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new Error("If encoding is specified then the first argument must be a string");
        }
        return allocUnsafe(this, arg);
      }
      return from(this, arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    Buffer2._augment = function(arr) {
      arr.__proto__ = Buffer2.prototype;
      return arr;
    };
    function from(that, value, encodingOrOffset, length) {
      if (typeof value === "number") {
        throw new TypeError('"value" argument must not be a number');
      }
      if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
      }
      if (typeof value === "string") {
        return fromString(that, value, encodingOrOffset);
      }
      return fromObject(that, value);
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      Buffer2.prototype.__proto__ = Uint8Array.prototype;
      Buffer2.__proto__ = Uint8Array;
      if (typeof Symbol !== "undefined" && Symbol.species && Buffer2[Symbol.species] === Buffer2) {
        Object.defineProperty(Buffer2, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be a number');
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
    }
    function alloc(that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
      }
      return createBuffer(that, size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };
    function allocUnsafe(that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that;
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    function fromString(that, string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }
      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);
      var actual = that.write(string, encoding);
      if (actual !== length) {
        that = that.slice(0, actual);
      }
      return that;
    }
    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that;
    }
    function fromArrayBuffer(that, array, byteOffset, length) {
      array.byteLength;
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError("'length' is out of bounds");
      }
      if (byteOffset === void 0 && length === void 0) {
        array = new Uint8Array(array);
      } else if (length === void 0) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        that = array;
        that.__proto__ = Buffer2.prototype;
      } else {
        that = fromArrayLike(that, array);
      }
      return that;
    }
    function fromObject(that, obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);
        if (that.length === 0) {
          return that;
        }
        obj.copy(that, 0, 0, len);
        return that;
      }
      if (obj) {
        if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
          if (typeof obj.length !== "number" || isnan(obj.length)) {
            return createBuffer(that, 0);
          }
          return fromArrayLike(that, obj);
        }
        if (obj.type === "Buffer" && isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    function checked(length) {
      if (length >= kMaxLength()) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };
    Buffer2.compare = function compare(a, b) {
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        string = "" + string;
      }
      var len = string.length;
      if (len === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
          case void 0:
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase)
              return utf8ToBytes(string).length;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (strLen % 2 !== 0)
        throw new TypeError("Invalid hex string");
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      var out = "";
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0)
        value = 65535 + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
      }
    }
    Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    function objectWriteUInt32(buf, value, offset, littleEndian) {
      if (value < 0)
        value = 4294967295 + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
      }
    }
    Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = stringtrim(str).replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function stringtrim(str) {
      if (str.trim)
        return str.trim();
      return str.replace(/^\s+|\s+$/g, "");
    }
    function toHex(n) {
      if (n < 16)
        return "0" + n.toString(16);
      return n.toString(16);
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isnan(val) {
      return val !== val;
    }
  });

  // node_modules/string_decoder/node_modules/safe-buffer/index.js
  var require_safe_buffer = __commonJS((exports, module) => {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var buffer = require_buffer();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  });

  // node_modules/string_decoder/lib/string_decoder.js
  var require_string_decoder = __commonJS((exports) => {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self.lastNeed = 0;
        return "�";
      }
      if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self.lastNeed = 1;
          return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self.lastNeed = 2;
            return "�";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "�";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  });

  // node_modules/htmlparser2/lib/WritableStream.js
  var require_WritableStream = __commonJS((exports, module) => {
    module.exports = Stream;
    var Parser = require_Parser();
    var WritableStream = require_readable().Writable;
    var StringDecoder = require_string_decoder().StringDecoder;
    var Buffer2 = require_buffer().Buffer;
    function Stream(cbs, options) {
      var parser = this._parser = new Parser(cbs, options);
      var decoder = this._decoder = new StringDecoder();
      WritableStream.call(this, {decodeStrings: false});
      this.once("finish", function() {
        parser.end(decoder.end());
      });
    }
    require_inherits_browser()(Stream, WritableStream);
    Stream.prototype._write = function(chunk, encoding, cb) {
      if (chunk instanceof Buffer2)
        chunk = this._decoder.write(chunk);
      this._parser.write(chunk);
      cb();
    };
  });

  // node_modules/htmlparser2/lib/Stream.js
  var require_Stream = __commonJS((exports, module) => {
    module.exports = Stream;
    var Parser = require_WritableStream();
    function Stream(options) {
      Parser.call(this, new Cbs(this), options);
    }
    require_inherits_browser()(Stream, Parser);
    Stream.prototype.readable = true;
    function Cbs(scope) {
      this.scope = scope;
    }
    var EVENTS = require_lib3().EVENTS;
    Object.keys(EVENTS).forEach(function(name) {
      if (EVENTS[name] === 0) {
        Cbs.prototype["on" + name] = function() {
          this.scope.emit(name);
        };
      } else if (EVENTS[name] === 1) {
        Cbs.prototype["on" + name] = function(a) {
          this.scope.emit(name, a);
        };
      } else if (EVENTS[name] === 2) {
        Cbs.prototype["on" + name] = function(a, b) {
          this.scope.emit(name, a, b);
        };
      } else {
        throw Error("wrong number of arguments!");
      }
    });
  });

  // node_modules/htmlparser2/lib/ProxyHandler.js
  var require_ProxyHandler = __commonJS((exports, module) => {
    module.exports = ProxyHandler;
    function ProxyHandler(cbs) {
      this._cbs = cbs || {};
    }
    var EVENTS = require_lib3().EVENTS;
    Object.keys(EVENTS).forEach(function(name) {
      if (EVENTS[name] === 0) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function() {
          if (this._cbs[name])
            this._cbs[name]();
        };
      } else if (EVENTS[name] === 1) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a) {
          if (this._cbs[name])
            this._cbs[name](a);
        };
      } else if (EVENTS[name] === 2) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a, b) {
          if (this._cbs[name])
            this._cbs[name](a, b);
        };
      } else {
        throw Error("wrong number of arguments");
      }
    });
  });

  // node_modules/htmlparser2/lib/CollectingHandler.js
  var require_CollectingHandler = __commonJS((exports, module) => {
    module.exports = CollectingHandler;
    function CollectingHandler(cbs) {
      this._cbs = cbs || {};
      this.events = [];
    }
    var EVENTS = require_lib3().EVENTS;
    Object.keys(EVENTS).forEach(function(name) {
      if (EVENTS[name] === 0) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function() {
          this.events.push([name]);
          if (this._cbs[name])
            this._cbs[name]();
        };
      } else if (EVENTS[name] === 1) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a) {
          this.events.push([name, a]);
          if (this._cbs[name])
            this._cbs[name](a);
        };
      } else if (EVENTS[name] === 2) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a, b) {
          this.events.push([name, a, b]);
          if (this._cbs[name])
            this._cbs[name](a, b);
        };
      } else {
        throw Error("wrong number of arguments");
      }
    });
    CollectingHandler.prototype.onreset = function() {
      this.events = [];
      if (this._cbs.onreset)
        this._cbs.onreset();
    };
    CollectingHandler.prototype.restart = function() {
      if (this._cbs.onreset)
        this._cbs.onreset();
      for (var i = 0, len = this.events.length; i < len; i++) {
        if (this._cbs[this.events[i][0]]) {
          var num = this.events[i].length;
          if (num === 1) {
            this._cbs[this.events[i][0]]();
          } else if (num === 2) {
            this._cbs[this.events[i][0]](this.events[i][1]);
          } else {
            this._cbs[this.events[i][0]](this.events[i][1], this.events[i][2]);
          }
        }
      }
    };
  });

  // node_modules/htmlparser2/lib/index.js
  var require_lib3 = __commonJS((exports, module) => {
    var Parser = require_Parser();
    var DomHandler = require_domhandler();
    function defineProp(name, value) {
      delete module.exports[name];
      module.exports[name] = value;
      return value;
    }
    module.exports = {
      Parser,
      Tokenizer: require_Tokenizer(),
      ElementType: require_domelementtype(),
      DomHandler,
      get FeedHandler() {
        return defineProp("FeedHandler", require_FeedHandler());
      },
      get Stream() {
        return defineProp("Stream", require_Stream());
      },
      get WritableStream() {
        return defineProp("WritableStream", require_WritableStream());
      },
      get ProxyHandler() {
        return defineProp("ProxyHandler", require_ProxyHandler());
      },
      get DomUtils() {
        return defineProp("DomUtils", require_domutils());
      },
      get CollectingHandler() {
        return defineProp("CollectingHandler", require_CollectingHandler());
      },
      DefaultHandler: DomHandler,
      get RssHandler() {
        return defineProp("RssHandler", this.FeedHandler);
      },
      parseDOM: function(data, options) {
        var handler = new DomHandler(options);
        new Parser(handler, options).end(data);
        return handler.dom;
      },
      parseFeed: function(feed, options) {
        var handler = new module.exports.FeedHandler(options);
        new Parser(handler, options).end(feed);
        return handler.dom;
      },
      createDomStream: function(cb, options, elementCb) {
        var handler = new DomHandler(cb, options, elementCb);
        return new Parser(handler, options);
      },
      EVENTS: {
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
      }
    };
  });

  // node_modules/html-to-vdom/lib/parse-html.js
  var require_parse_html = __commonJS((exports, module) => {
    var htmlparser = require_lib3();
    var parseHTML = function parseHTML2(html) {
      var handler = new htmlparser.DomHandler();
      var parser = new htmlparser.Parser(handler, {
        lowerCaseAttributeNames: false
      });
      parser.parseComplete(html);
      return handler.dom;
    };
    module.exports = parseHTML;
  });

  // node_modules/html-to-vdom/lib/html-to-vdom.js
  var require_html_to_vdom = __commonJS((exports, module) => {
    var createConverter = require_htmlparser_to_vdom();
    var parseHTML = require_parse_html();
    module.exports = function initializeHtmlToVdom(VTree, VText) {
      var htmlparserToVdom = createConverter(VTree, VText);
      return function convertHTML(options, html) {
        var noOptions = typeof html === "undefined" && typeof options === "string";
        var hasOptions = !noOptions;
        var htmlToConvert = noOptions ? options : html;
        var getVNodeKey = hasOptions ? options.getVNodeKey : void 0;
        var tags = parseHTML(htmlToConvert);
        var convertedHTML;
        if (tags.length > 1) {
          convertedHTML = tags.map(function(tag) {
            return htmlparserToVdom.convert(tag, getVNodeKey);
          });
        } else {
          convertedHTML = htmlparserToVdom.convert(tags[0], getVNodeKey);
        }
        return convertedHTML;
      };
    };
  });

  // node_modules/html-to-vdom/index.js
  var require_html_to_vdom2 = __commonJS((exports, module) => {
    var convertHTML = require_html_to_vdom();
    module.exports = function initializeConverter(dependencies) {
      if (!dependencies.VNode || !dependencies.VText) {
        throw new Error("html-to-vdom needs to be initialized with VNode and VText");
      }
      return convertHTML(dependencies.VNode, dependencies.VText);
    };
  });

  // node_modules/virtual-dom/vnode/vnode.js
  var require_vnode = __commonJS((exports, module) => {
    var version = require_version();
    var isVNode = require_is_vnode();
    var isWidget = require_is_widget();
    var isThunk = require_is_thunk();
    var isVHook = require_is_vhook();
    module.exports = VirtualNode;
    var noProperties = {};
    var noChildren = [];
    function VirtualNode(tagName, properties, children, key, namespace) {
      this.tagName = tagName;
      this.properties = properties || noProperties;
      this.children = children || noChildren;
      this.key = key != null ? String(key) : void 0;
      this.namespace = typeof namespace === "string" ? namespace : null;
      var count = children && children.length || 0;
      var descendants = 0;
      var hasWidgets = false;
      var hasThunks = false;
      var descendantHooks = false;
      var hooks;
      for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
          var property = properties[propName];
          if (isVHook(property) && property.unhook) {
            if (!hooks) {
              hooks = {};
            }
            hooks[propName] = property;
          }
        }
      }
      for (var i = 0; i < count; i++) {
        var child = children[i];
        if (isVNode(child)) {
          descendants += child.count || 0;
          if (!hasWidgets && child.hasWidgets) {
            hasWidgets = true;
          }
          if (!hasThunks && child.hasThunks) {
            hasThunks = true;
          }
          if (!descendantHooks && (child.hooks || child.descendantHooks)) {
            descendantHooks = true;
          }
        } else if (!hasWidgets && isWidget(child)) {
          if (typeof child.destroy === "function") {
            hasWidgets = true;
          }
        } else if (!hasThunks && isThunk(child)) {
          hasThunks = true;
        }
      }
      this.count = count + descendants;
      this.hasWidgets = hasWidgets;
      this.hasThunks = hasThunks;
      this.hooks = hooks;
      this.descendantHooks = descendantHooks;
    }
    VirtualNode.prototype.version = version;
    VirtualNode.prototype.type = "VirtualNode";
  });

  // node_modules/virtual-dom/vnode/vtext.js
  var require_vtext = __commonJS((exports, module) => {
    var version = require_version();
    module.exports = VirtualText;
    function VirtualText(text) {
      this.text = String(text);
    }
    VirtualText.prototype.version = version;
    VirtualText.prototype.type = "VirtualText";
  });

  // node_modules/browser-split/index.js
  var require_browser_split = __commonJS((exports, module) => {
    /*!
     * Cross-Browser Split 1.1.1
     * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
     * Available under the MIT License
     * ECMAScript compliant, uniform cross-browser split method
     */
    module.exports = function split(undef) {
      var nativeSplit = String.prototype.split, compliantExecNpcg = /()??/.exec("")[1] === undef, self;
      self = function(str, separator, limit) {
        if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
          return nativeSplit.call(str, separator, limit);
        }
        var output = [], flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + (separator.sticky ? "y" : ""), lastLastIndex = 0, separator = new RegExp(separator.source, flags + "g"), separator2, match, lastIndex, lastLength;
        str += "";
        if (!compliantExecNpcg) {
          separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
        }
        limit = limit === undef ? -1 >>> 0 : limit >>> 0;
        while (match = separator.exec(str)) {
          lastIndex = match.index + match[0].length;
          if (lastIndex > lastLastIndex) {
            output.push(str.slice(lastLastIndex, match.index));
            if (!compliantExecNpcg && match.length > 1) {
              match[0].replace(separator2, function() {
                for (var i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === undef) {
                    match[i] = undef;
                  }
                }
              });
            }
            if (match.length > 1 && match.index < str.length) {
              Array.prototype.push.apply(output, match.slice(1));
            }
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= limit) {
              break;
            }
          }
          if (separator.lastIndex === match.index) {
            separator.lastIndex++;
          }
        }
        if (lastLastIndex === str.length) {
          if (lastLength || !separator.test("")) {
            output.push("");
          }
        } else {
          output.push(str.slice(lastLastIndex));
        }
        return output.length > limit ? output.slice(0, limit) : output;
      };
      return self;
    }();
  });

  // node_modules/virtual-dom/virtual-hyperscript/parse-tag.js
  var require_parse_tag = __commonJS((exports, module) => {
    "use strict";
    var split = require_browser_split();
    var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
    var notClassId = /^\.|#/;
    module.exports = parseTag;
    function parseTag(tag, props) {
      if (!tag) {
        return "DIV";
      }
      var noId = !props.hasOwnProperty("id");
      var tagParts = split(tag, classIdSplit);
      var tagName = null;
      if (notClassId.test(tagParts[1])) {
        tagName = "DIV";
      }
      var classes, part, type, i;
      for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];
        if (!part) {
          continue;
        }
        type = part.charAt(0);
        if (!tagName) {
          tagName = part;
        } else if (type === ".") {
          classes = classes || [];
          classes.push(part.substring(1, part.length));
        } else if (type === "#" && noId) {
          props.id = part.substring(1, part.length);
        }
      }
      if (classes) {
        if (props.className) {
          classes.push(props.className);
        }
        props.className = classes.join(" ");
      }
      return props.namespace ? tagName : tagName.toUpperCase();
    }
  });

  // node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js
  var require_soft_set_hook = __commonJS((exports, module) => {
    "use strict";
    module.exports = SoftSetHook;
    function SoftSetHook(value) {
      if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
      }
      this.value = value;
    }
    SoftSetHook.prototype.hook = function(node, propertyName) {
      if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
      }
    };
  });

  // node_modules/individual/index.js
  var require_individual = __commonJS((exports, module) => {
    "use strict";
    var root = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    module.exports = Individual;
    function Individual(key, value) {
      if (key in root) {
        return root[key];
      }
      root[key] = value;
      return value;
    }
  });

  // node_modules/individual/one-version.js
  var require_one_version = __commonJS((exports, module) => {
    "use strict";
    var Individual = require_individual();
    module.exports = OneVersion;
    function OneVersion(moduleName, version, defaultValue) {
      var key = "__INDIVIDUAL_ONE_VERSION_" + moduleName;
      var enforceKey = key + "_ENFORCE_SINGLETON";
      var versionValue = Individual(enforceKey, version);
      if (versionValue !== version) {
        throw new Error("Can only have one copy of " + moduleName + ".\nYou already have version " + versionValue + " installed.\nThis means you cannot install version " + version);
      }
      return Individual(key, defaultValue);
    }
  });

  // node_modules/ev-store/index.js
  var require_ev_store = __commonJS((exports, module) => {
    "use strict";
    var OneVersionConstraint = require_one_version();
    var MY_VERSION = "7";
    OneVersionConstraint("ev-store", MY_VERSION);
    var hashKey = "__EV_STORE_KEY@" + MY_VERSION;
    module.exports = EvStore;
    function EvStore(elem) {
      var hash = elem[hashKey];
      if (!hash) {
        hash = elem[hashKey] = {};
      }
      return hash;
    }
  });

  // node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js
  var require_ev_hook = __commonJS((exports, module) => {
    "use strict";
    var EvStore = require_ev_store();
    module.exports = EvHook;
    function EvHook(value) {
      if (!(this instanceof EvHook)) {
        return new EvHook(value);
      }
      this.value = value;
    }
    EvHook.prototype.hook = function(node, propertyName) {
      var es = EvStore(node);
      var propName = propertyName.substr(3);
      es[propName] = this.value;
    };
    EvHook.prototype.unhook = function(node, propertyName) {
      var es = EvStore(node);
      var propName = propertyName.substr(3);
      es[propName] = void 0;
    };
  });

  // node_modules/virtual-dom/virtual-hyperscript/index.js
  var require_virtual_hyperscript = __commonJS((exports, module) => {
    "use strict";
    var isArray = require_x_is_array();
    var VNode = require_vnode();
    var VText = require_vtext();
    var isVNode = require_is_vnode();
    var isVText = require_is_vtext();
    var isWidget = require_is_widget();
    var isHook = require_is_vhook();
    var isVThunk = require_is_thunk();
    var parseTag = require_parse_tag();
    var softSetHook = require_soft_set_hook();
    var evHook = require_ev_hook();
    module.exports = h;
    function h(tagName, properties, children) {
      var childNodes = [];
      var tag, props, key, namespace;
      if (!children && isChildren(properties)) {
        children = properties;
        props = {};
      }
      props = props || properties || {};
      tag = parseTag(tagName, props);
      if (props.hasOwnProperty("key")) {
        key = props.key;
        props.key = void 0;
      }
      if (props.hasOwnProperty("namespace")) {
        namespace = props.namespace;
        props.namespace = void 0;
      }
      if (tag === "INPUT" && !namespace && props.hasOwnProperty("value") && props.value !== void 0 && !isHook(props.value)) {
        props.value = softSetHook(props.value);
      }
      transformProperties(props);
      if (children !== void 0 && children !== null) {
        addChild(children, childNodes, tag, props);
      }
      return new VNode(tag, props, childNodes, key, namespace);
    }
    function addChild(c, childNodes, tag, props) {
      if (typeof c === "string") {
        childNodes.push(new VText(c));
      } else if (typeof c === "number") {
        childNodes.push(new VText(String(c)));
      } else if (isChild(c)) {
        childNodes.push(c);
      } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
          addChild(c[i], childNodes, tag, props);
        }
      } else if (c === null || c === void 0) {
        return;
      } else {
        throw UnexpectedVirtualElement({
          foreignObject: c,
          parentVnode: {
            tagName: tag,
            properties: props
          }
        });
      }
    }
    function transformProperties(props) {
      for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
          var value = props[propName];
          if (isHook(value)) {
            continue;
          }
          if (propName.substr(0, 3) === "ev-") {
            props[propName] = evHook(value);
          }
        }
      }
    }
    function isChild(x) {
      return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
    }
    function isChildren(x) {
      return typeof x === "string" || isArray(x) || isChild(x);
    }
    function UnexpectedVirtualElement(data) {
      var err = new Error();
      err.type = "virtual-hyperscript.unexpected.virtual-element";
      err.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + errorString(data.foreignObject) + ".\nThe parent vnode is:\n" + errorString(data.parentVnode);
      "\nSuggested fix: change your `h(..., [ ... ])` callsite.";
      err.foreignObject = data.foreignObject;
      err.parentVnode = data.parentVnode;
      return err;
    }
    function errorString(obj) {
      try {
        return JSON.stringify(obj, null, "    ");
      } catch (e) {
        return String(obj);
      }
    }
  });

  // node_modules/virtual-dom/h.js
  var require_h = __commonJS((exports, module) => {
    var h = require_virtual_hyperscript();
    module.exports = h;
  });

  // distributable-commonjs/library/utility.cjs
  var require_utility = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _htmlToVdom = _interopRequireDefault(require_html_to_vdom2());
    var _h = _interopRequireDefault(require_h());
    var _vnode = _interopRequireDefault(require_vnode());
    var _vtext = _interopRequireDefault(require_vtext());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    const ConvertToVirtualNode = (0, _htmlToVdom.default)({
      VNode: _vnode.default,
      VText: _vtext.default
    });
    class Utility2 {
      static convertToNode(...parameter) {
        return ConvertToVirtualNode(...parameter);
      }
      static addAndAttribute(object, attributeNode) {
        Object.entries(object).forEach(([name, value]) => this.addAttribute(name, value, attributeNode));
      }
      static addAttribute(name, value, attributeNode) {
        if (typeof value === "boolean" && value === false) {
        } else {
          name = this.getAttributeName(name);
          value = this.getAttributeValue(name, value, attributeNode[name]);
          if (value !== void 0) {
            attributeNode[name] = value;
          }
        }
      }
      static getAttributeName(name) {
        return name;
      }
      static getAttributeValue(name, value, currentValue) {
        if (typeof value === "boolean") {
          value = value ? name : false;
        } else if (typeof value === "string") {
          value = currentValue ? `${currentValue} ${value}` : value;
        } else if (Array.isArray(value)) {
          value = currentValue ? `${currentValue} ${value.join(" ")}` : value.join(" ");
        } else {
          switch (name.toUpperCase()) {
            case "CLASS":
              value = Object.keys(value).filter((key) => value[key]).join(" ");
              break;
            case "STYLE":
              value = Object.keys(value).map((key) => `${key}:${value[key]};`).join("");
              break;
          }
        }
        return value === "" ? void 0 : value;
      }
      static forEach(value, fn) {
        if (Array.isArray(value)) {
          value.forEach(fn);
          return value.length;
        } else {
          let entry = Object.entries(value);
          entry.forEach(([name, value2]) => fn(value2, name));
          return entry.length;
        }
      }
      static createNode(name, property, childNode) {
        name = this.getNodeName(name);
        property = this.getNodeProperty(property);
        childNode = this.getChildNode(childNode);
        return (0, _h.default)(name, {
          attributes: property
        }, childNode);
      }
      static getNodeName(name) {
        return name;
      }
      static getNodeProperty(property) {
        let map = {};
        let entry = Object.entries(property);
        entry.sort(([leftName], [rightName]) => leftName.localeCompare(rightName)).forEach(([name, value]) => {
          if (name.toUpperCase() in map) {
            delete property[name];
            property[map[name.toUpperCase()] || name] = value;
          }
        });
        return property;
      }
      static getChildNode(node) {
        return node;
      }
    }
    var _default = Utility2;
    exports.default = _default;
  });

  // distributable-commonjs/test/library/www/script/pre-index.js
  const create_element = __toModule(require_create_element2());
  const diff = __toModule(require_diff2());
  const patch = __toModule(require_patch2());

  // distributable-commonjs/test/library/www/script/element.js
  const utility = __toModule(require_utility());
  function __getNode(__local = {}, __utility = {}) {
    const {list} = __local;
    function __getNode2(__utility2 = {}) {
      const __node = [];
      __node.push(__utility2.createNode("ul", (() => {
        const __attributeNode = {};
        __utility2.addAttribute("class", "element", __attributeNode);
        return __attributeNode;
      })(), (() => {
        const __node2 = [];
        __utility2.forEach(list, (item, index) => {
          __node2.push(__utility2.createNode("li", (() => {
            const __attributeNode = {};
            __utility2.addAttribute("class", "element", __attributeNode);
            __utility2.addAttribute("id", index, __attributeNode);
            __utility2.addAttribute("data-item", item, __attributeNode);
            return __attributeNode;
          })(), (() => {
            const __node3 = [];
            {
              let value = item;
              if (typeof value === "string") {
                __node3.push(...[__utility2.convertToNode(value)].flat());
              } else {
                __node3.push(value);
              }
            }
            return __node3;
          })()));
        });
        return __node2;
      })()));
      return __node;
    }
    return __getNode2(__utility);
  }
  function element_default(__local = {}, __utility = utility.default) {
    return __getNode(__local, __utility);
  }

  // distributable-commonjs/test/library/www/script/pre-index.js
  let virtualContent = element_default({list: ["a", "b", "c"]})[0];
  let realContent = create_element.default(virtualContent);
  document.querySelector("div.body").appendChild(realContent);
  let newVirtualContent = element_default({list: ["a", "ab", "bb", "cb", "c"]})[0];
  patch.default(document.querySelector("ul.element"), diff.default(virtualContent, newVirtualContent));
})();
