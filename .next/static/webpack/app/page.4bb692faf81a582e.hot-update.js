"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/../../node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"));\n        const docs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc1)=>{\n            inventoryList.push({\n                name: doc1.id,\n                ...doc1.data()\n            });\n        });\n        setInventory(inventoryList);\n        console.log(inventoryList);\n    };\n    const addItem = async (item)=>{\n        const docRef = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore), \"inventory\", item);\n        const docSnap = await getDoc(docRef);\n        if (docSnap.exists()) {\n            const { quantity: quantity1 } = docSnap.data();\n            await setDoc(docRef, {\n                quantity: quantity1 + 1\n            });\n        } else {\n            await setDoc(docRef, {\n                quantity: quantity\n            });\n        }\n        await updateInventory();\n    };\n    const removeItem = async (item)=>{\n        const docRef = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore), \"inventory\", item);\n        const docSnap = await getDoc(docRef);\n        if (docSnap.exists()) {\n            const { quantity: quantity1 } = docSnap.data();\n            if (quantity1 === 1) {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(docRef);\n            } else {\n                await setDoc(docRef, {\n                    quantity: quantity1 - 1\n                });\n            }\n        }\n        await updateInventory();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                open: open,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    left: \"50%\",\n                    sx: {\n                        transform: \"translate(-50%, -50%)\"\n                    },\n                    width: 400,\n                    bgcolor: \"blue\",\n                    border: \"2px solid #000\",\n                    boxShadow: 24,\n                    p: 4,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: 3,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            variant: \"h5\",\n                            children: \"Add Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            width: \"100%\",\n                            direction: \"row\",\n                            spacing: 2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    variant: \"outlined\",\n                                    fullWidth: true,\n                                    value: itemName,\n                                    onChange: (e)=>{\n                                        setItemName(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    variant: \"outlined\",\n                                    onClick: ()=>{\n                                        addItem(itemName);\n                                        setItemName(\"\");\n                                        handleClose();\n                                    },\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 71,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                variant: \"contains\",\n                onClick: ()=>{\n                    handleOpen();\n                },\n                children: \"Add New Item\"\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                border: \"1px solid #333\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    width: \"800px\",\n                    height: \"100px\",\n                    bgcolor: \"#ADDAE6\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"h2\",\n                        color: \"#333\",\n                        children: \"Inventory Item\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                    lineNumber: 104,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                width: \"800px\",\n                height: \"300px\",\n                spacing: 2,\n                overflow: \"auto\",\n                children: inventory.map((param)=>{\n                    let { name, quantity: quantity1 } = param;\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        width: \"100%\",\n                        minHeight: \"150px\",\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        bgColor: \"#f0f0f0\",\n                        padding: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            variant: \"h2\",\n                            color: \"#333\",\n                            testAlign: \"center\",\n                            children: name.charAt(0).toUpperCase() + name.slice(1)\n                        }, void 0, false, {\n                            fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    }, name, false, {\n                        fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 110,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n        lineNumber: 69,\n        columnNumber: 11\n    }, this);\n}\n_s(Home, \"ZFkVGfZadB1ckxhdEVDTu3A2yMw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIkAvZmlyZWJhc2VcIjtcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgTW9kYWwsIFN0YWNrLCBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZGVsZXRlRG9jLCBnZXREb2NzLCBxdWVyeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnZlbnRvcnksIHNldEludmVudG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2l0ZW1OYW1lLCBzZXRJdGVtTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdXBkYXRlSW52ZW50b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNuYXBzaG90ID0gcXVlcnkoY29sbGVjdGlvbihmaXJlc3RvcmUsICdpbnZlbnRvcnknKSk7XG4gICAgY29uc3QgZG9jcyA9IGF3YWl0IGdldERvY3Moc25hcHNob3QpO1xuICAgIGNvbnN0IGludmVudG9yeUxpc3QgPSBbXVxuICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICBpbnZlbnRvcnlMaXN0LnB1c2goe1xuICAgICAgICBuYW1lOiBkb2MuaWQsXG4gICAgICAgIC4uLmRvYy5kYXRhKClcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldEludmVudG9yeShpbnZlbnRvcnlMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhpbnZlbnRvcnlMaXN0KVxuICB9XG5cbiAgY29uc3QgYWRkSXRlbSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgY29uc3QgZG9jUmVmID0gZG9jKGNvbGxlY3Rpb24oZmlyZXN0b3JlKSwgJ2ludmVudG9yeScsIGl0ZW0pXG4gICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpXG5cbiAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkge1xuICAgICAgY29uc3QgeyBxdWFudGl0eSB9ID0gZG9jU25hcC5kYXRhKCk7XG4gICAgICBhd2FpdCBzZXREb2MoZG9jUmVmLCB7IHF1YW50aXR5OiBxdWFudGl0eSArIDEgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYXdhaXQgc2V0RG9jKGRvY1JlZiwgeyBxdWFudGl0eTogcXVhbnRpdHkgfSlcbiAgICB9XG5cbiAgICBhd2FpdCB1cGRhdGVJbnZlbnRvcnkoKTtcbiAgfVxuXG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgY29uc3QgZG9jUmVmID0gZG9jKGNvbGxlY3Rpb24oZmlyZXN0b3JlKSwgJ2ludmVudG9yeScsIGl0ZW0pXG4gICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpXG5cbiAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkge1xuICAgICAgY29uc3QgeyBxdWFudGl0eSB9ID0gZG9jU25hcC5kYXRhKCk7XG4gICAgICBpZiAocXVhbnRpdHkgPT09IDEpIHtcbiAgICAgICAgYXdhaXQgZGVsZXRlRG9jKGRvY1JlZik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYXdhaXQgc2V0RG9jKGRvY1JlZiwgeyBxdWFudGl0eTogcXVhbnRpdHkgLSAxIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHVwZGF0ZUludmVudG9yeSgpO1xuXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUludmVudG9yeSgpO1xuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0T3Blbih0cnVlKVxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW4oZmFsc2UpXG5cbiAgcmV0dXJuICg8Qm94IHdpZHRoPVwiMTAwdndcIlxuICAgIGhlaWdodD1cIjEwMHZoXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPXsyfT5cbiAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wPVwiNTAlXCIgbGVmdD1cIjUwJVwiIHN4PXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiwgfX0gd2lkdGg9ezQwMH0gYmdjb2xvcj1cImJsdWVcIiBib3JkZXI9XCIycHggc29saWQgIzAwMFwiIGJveFNoYWRvdz17MjR9IHA9ezR9IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17M30+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkFkZCBJdGVtPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8U3RhY2sgd2lkdGg9XCIxMDAlXCIgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhbHVlPXtpdGVtTmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRJdGVtTmFtZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhZGRJdGVtKGl0ZW1OYW1lKVxuICAgICAgICAgICAgICBzZXRJdGVtTmFtZSgnJylcbiAgICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQm94PlxuICAgIDwvTW9kYWw+XG4gICAgPEJ1dHRvblxuICAgICAgdmFyaWFudD1cImNvbnRhaW5zXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaGFuZGxlT3BlbigpXG4gICAgICB9fVxuICAgID5cbiAgICAgIEFkZCBOZXcgSXRlbVxuICAgIDwvQnV0dG9uPlxuICAgIDxCb3ggYm9yZGVyPScxcHggc29saWQgIzMzMyc+XG4gICAgICA8Qm94IHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGJnY29sb3I9XCIjQUREQUU2XCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgY29sb3I9XCIjMzMzXCI+XG4gICAgICAgICAgSW52ZW50b3J5IEl0ZW1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICAgPFN0YWNrIHdpZHRoPSc4MDBweCcgaGVpZ2h0PVwiMzAwcHhcIiBzcGFjaW5nPXsyfSBvdmVyZmxvdz0nYXV0byc+XG4gICAgICB7aW52ZW50b3J5Lm1hcCgoeyBuYW1lLCBxdWFudGl0eSB9KSA9PiB7XG4gICAgICAgIDxCb3gga2V5PXtuYW1lfVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgbWluSGVpZ2h0PVwiMTUwcHhcIlxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgYmdDb2xvcj1cIiNmMGYwZjBcIlxuICAgICAgICAgIHBhZGRpbmc9ezV9XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjb2xvcj0nIzMzMycgdGVzdEFsaWduPVwiY2VudGVyXCI+e25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB9KX1cbiAgICA8L1N0YWNrPlxuICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlc3RvcmUiLCJCb3giLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJTdGFjayIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsImNvbGxlY3Rpb24iLCJkZWxldGVEb2MiLCJnZXREb2NzIiwicXVlcnkiLCJnZXQiLCJIb21lIiwiaW52ZW50b3J5Iiwic2V0SW52ZW50b3J5Iiwib3BlbiIsInNldE9wZW4iLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwidXBkYXRlSW52ZW50b3J5Iiwic25hcHNob3QiLCJkb2NzIiwiaW52ZW50b3J5TGlzdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwibmFtZSIsImlkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhZGRJdGVtIiwiaXRlbSIsImRvY1JlZiIsImRvY1NuYXAiLCJnZXREb2MiLCJleGlzdHMiLCJxdWFudGl0eSIsInNldERvYyIsInJlbW92ZUl0ZW0iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwib25DbG9zZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInN4IiwidHJhbnNmb3JtIiwiYmdjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsInAiLCJ2YXJpYW50IiwiZGlyZWN0aW9uIiwic3BhY2luZyIsImZ1bGxXaWR0aCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsImNvbG9yIiwib3ZlcmZsb3ciLCJtYXAiLCJtaW5IZWlnaHQiLCJiZ0NvbG9yIiwicGFkZGluZyIsInRlc3RBbGlnbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});