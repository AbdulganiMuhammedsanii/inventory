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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/../../node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"));\n        const docs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc1)=>{\n            inventoryList.push({\n                name: doc1.id,\n                ...doc1.data()\n            });\n        });\n        setInventory(inventoryList);\n        console.log(inventoryList);\n    };\n    const addItem = async (item)=>{\n        const docRef = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore), \"inventory\", item);\n        const docSnap = await getDoc(docRef);\n        if (docSnap.exists()) {\n            const { quantity: quantity1 } = docSnap.data();\n            await setDoc(docRef, {\n                quantity: quantity1 + 1\n            });\n        } else {\n            await setDoc(docRef, {\n                quantity: quantity\n            });\n        }\n        await updateInventory();\n    };\n    const removeItem = async (item)=>{\n        const docRef = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore), \"inventory\", item);\n        const docSnap = await getDoc(docRef);\n        if (docSnap.exists()) {\n            const { quantity: quantity1 } = docSnap.data();\n            if (quantity1 === 1) {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(docRef);\n            } else {\n                await setDoc(docRef, {\n                    quantity: quantity1 - 1\n                });\n            }\n        }\n        await updateInventory();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                open: open,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    left: \"50%\",\n                    sx: {\n                        transform: \"translate(-50%, -50%)\"\n                    },\n                    width: 400,\n                    bgcolor: \"blue\",\n                    border: \"2px solid #000\",\n                    boxShadow: 24,\n                    p: 4,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: 3,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            variant: \"h5\",\n                            children: \"Add Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            width: \"100%\",\n                            direction: \"row\",\n                            spacing: 2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    variant: \"outlined\",\n                                    fullWidth: true,\n                                    value: itemName,\n                                    onChange: (e)=>{\n                                        setItemName(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    variant: \"outlined\",\n                                    onClick: ()=>{\n                                        addItem(itemName);\n                                        setItemName(\"\");\n                                        handleClose();\n                                    },\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 71,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                variant: \"contains\",\n                onClick: ()=>{\n                    handleOpen();\n                },\n                children: \"Add New Item\"\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                border: \"1px solid #333\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    width: \"800px\",\n                    height: \"100px\",\n                    bgcolor: \"#ADDAE6\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"h2\",\n                        color: \"#333\",\n                        children: \"Inventory Items\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                    lineNumber: 104,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                width: \"800px\",\n                height: \"300px\",\n                spacing: 2,\n                overflow: \"auto\",\n                children: inventory.map((param)=>{\n                    let { name, quantity: quantity1 } = param;\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        width: \"100%\",\n                        minHeight: \"150px\",\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        bgColor: \"#f0f0f0\",\n                        padding: 5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"h2\",\n                                color: \"#333\",\n                                testAlign: \"center\",\n                                children: name.charAt(0).toUpperCase() + name.slice(1)\n                            }, void 0, false, {\n                                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"h2\",\n                                color: \"#333\",\n                                testAlign: \"center\",\n                                children: name.charAt(0).toUpperCase() + name.slice(1)\n                            }, void 0, false, {\n                                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, name, true, {\n                        fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n                lineNumber: 119,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abdimuha/Downloads/inventory_tracker/app/page.js\",\n        lineNumber: 69,\n        columnNumber: 11\n    }, this);\n}\n_s(Home, \"ZFkVGfZadB1ckxhdEVDTu3A2yMw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0NoRCxLQUFLaUQsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS2xELEtBQUttRCxLQUFLLENBQUM7Ozs7Ozs7dUJBYnJDbkQ7Ozs7O2dCQWdCWjs7Ozs7Ozs7Ozs7O0FBSU47R0FuSXdCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBNb2RhbCwgU3RhY2ssIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkZWxldGVEb2MsIGdldERvY3MsIHF1ZXJ5IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ludmVudG9yeSwgc2V0SW52ZW50b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB1cGRhdGVJbnZlbnRvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc25hcHNob3QgPSBxdWVyeShjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ2ludmVudG9yeScpKTtcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgZ2V0RG9jcyhzbmFwc2hvdCk7XG4gICAgY29uc3QgaW52ZW50b3J5TGlzdCA9IFtdXG4gICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgIGludmVudG9yeUxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6IGRvYy5pZCxcbiAgICAgICAgLi4uZG9jLmRhdGEoKVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0SW52ZW50b3J5KGludmVudG9yeUxpc3QpO1xuICAgIGNvbnNvbGUubG9nKGludmVudG9yeUxpc3QpXG4gIH1cblxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUpLCAnaW52ZW50b3J5JywgaXRlbSlcbiAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZilcblxuICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICBjb25zdCB7IHF1YW50aXR5IH0gPSBkb2NTbmFwLmRhdGEoKTtcbiAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHsgcXVhbnRpdHk6IHF1YW50aXR5ICsgMSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhd2FpdCBzZXREb2MoZG9jUmVmLCB7IHF1YW50aXR5OiBxdWFudGl0eSB9KVxuICAgIH1cblxuICAgIGF3YWl0IHVwZGF0ZUludmVudG9yeSgpO1xuICB9XG5cblxuICBjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUpLCAnaW52ZW50b3J5JywgaXRlbSlcbiAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZilcblxuICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICBjb25zdCB7IHF1YW50aXR5IH0gPSBkb2NTbmFwLmRhdGEoKTtcbiAgICAgIGlmIChxdWFudGl0eSA9PT0gMSkge1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZG9jUmVmKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCBzZXREb2MoZG9jUmVmLCB7IHF1YW50aXR5OiBxdWFudGl0eSAtIDEgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdXBkYXRlSW52ZW50b3J5KCk7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlSW52ZW50b3J5KCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSlcblxuICByZXR1cm4gKDxCb3ggd2lkdGg9XCIxMDB2d1wiXG4gICAgaGVpZ2h0PVwiMTAwdmhcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9ezJ9PlxuICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9XCI1MCVcIiBsZWZ0PVwiNTAlXCIgc3g9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLCB9fSB3aWR0aD17NDAwfSBiZ2NvbG9yPVwiYmx1ZVwiIGJvcmRlcj1cIjJweCBzb2xpZCAjMDAwXCIgYm94U2hhZG93PXsyNH0gcD17NH0gZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXszfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+QWRkIEl0ZW08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxTdGFjayB3aWR0aD1cIjEwMCVcIiBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW1OYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEl0ZW1OYW1lKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFkZEl0ZW0oaXRlbU5hbWUpXG4gICAgICAgICAgICAgIHNldEl0ZW1OYW1lKCcnKVxuICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Nb2RhbD5cbiAgICA8QnV0dG9uXG4gICAgICB2YXJpYW50PVwiY29udGFpbnNcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBoYW5kbGVPcGVuKClcbiAgICAgIH19XG4gICAgPlxuICAgICAgQWRkIE5ldyBJdGVtXG4gICAgPC9CdXR0b24+XG4gICAgPEJveCBib3JkZXI9JzFweCBzb2xpZCAjMzMzJz5cbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9XCI4MDBweFwiXG4gICAgICAgIGhlaWdodD1cIjEwMHB4XCJcbiAgICAgICAgYmdjb2xvcj1cIiNBRERBRTZcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD1cImgyXCJcbiAgICAgICAgICBjb2xvcj1cIiMzMzNcIj5cbiAgICAgICAgICBJbnZlbnRvcnkgSXRlbXNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICAgPFN0YWNrIHdpZHRoPSc4MDBweCcgaGVpZ2h0PVwiMzAwcHhcIiBzcGFjaW5nPXsyfSBvdmVyZmxvdz0nYXV0byc+XG4gICAgICB7aW52ZW50b3J5Lm1hcCgoeyBuYW1lLCBxdWFudGl0eSB9KSA9PiB7XG4gICAgICAgIDxCb3gga2V5PXtuYW1lfVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgbWluSGVpZ2h0PVwiMTUwcHhcIlxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgYmdDb2xvcj1cIiNmMGYwZjBcIlxuICAgICAgICAgIHBhZGRpbmc9ezV9XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjb2xvcj0nIzMzMycgdGVzdEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7bmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNvbG9yPScjMzMzJyB0ZXN0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHtuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgfSl9XG4gICAgPC9TdGFjaz5cbiAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiQm94IiwiVHlwb2dyYXBoeSIsIk1vZGFsIiwiU3RhY2siLCJUZXh0RmllbGQiLCJCdXR0b24iLCJjb2xsZWN0aW9uIiwiZGVsZXRlRG9jIiwiZ2V0RG9jcyIsInF1ZXJ5IiwiZ2V0IiwiSG9tZSIsImludmVudG9yeSIsInNldEludmVudG9yeSIsIm9wZW4iLCJzZXRPcGVuIiwiaXRlbU5hbWUiLCJzZXRJdGVtTmFtZSIsInVwZGF0ZUludmVudG9yeSIsInNuYXBzaG90IiwiZG9jcyIsImludmVudG9yeUxpc3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsIm5hbWUiLCJpZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWRkSXRlbSIsIml0ZW0iLCJkb2NSZWYiLCJkb2NTbmFwIiwiZ2V0RG9jIiwiZXhpc3RzIiwicXVhbnRpdHkiLCJzZXREb2MiLCJyZW1vdmVJdGVtIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsIm9uQ2xvc2UiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJzeCIsInRyYW5zZm9ybSIsImJnY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJwIiwidmFyaWFudCIsImRpcmVjdGlvbiIsInNwYWNpbmciLCJmdWxsV2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJjb2xvciIsIm92ZXJmbG93IiwibWFwIiwibWluSGVpZ2h0IiwiYmdDb2xvciIsInBhZGRpbmciLCJ0ZXN0QWxpZ24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});