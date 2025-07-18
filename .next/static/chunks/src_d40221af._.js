(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateNextDueDate": (()=>calculateNextDueDate),
    "calculateUpdatedAmount": (()=>calculateUpdatedAmount),
    "cn": (()=>cn),
    "formatCurrency": (()=>formatCurrency),
    "formatDate": (()=>formatDate),
    "isOverdue": (()=>isOverdue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function calculateNextDueDate(currentDate, periodValue, periodType) {
    const nextDate = new Date(currentDate);
    if (periodType === 'días') {
        nextDate.setDate(nextDate.getDate() + periodValue);
    } else if (periodType === 'meses') {
        nextDate.setMonth(nextDate.getMonth() + periodValue);
    }
    return nextDate;
}
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Fecha inválida';
    }
}
function isOverdue(nextDueDate) {
    const today = new Date();
    const dueDate = new Date(nextDueDate);
    // Set both dates to start of day for accurate comparison
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate.getTime() <= today.getTime();
}
function calculateUpdatedAmount(currentAmount, percentage) {
    return currentAmount + currentAmount * percentage / 100;
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/RentalForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RentalForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RentalForm({ onClose, onSave }) {
    _s();
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [monto, setMonto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [detalles, setDetalles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [periodValue, setPeriodValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [periodType, setPeriodType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('días');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Validate fields
        if (!nombre.trim()) {
            setError('El nombre es obligatorio');
            return;
        }
        if (!monto || isNaN(Number(monto)) || Number(monto) <= 0) {
            setError('El monto debe ser un número válido mayor a 0');
            return;
        }
        if (!periodValue || isNaN(Number(periodValue)) || Number(periodValue) <= 0) {
            setError('La periodicidad debe ser un número válido mayor a 0');
            return;
        }
        setError(null);
        const now = new Date();
        const nextDueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNextDueDate"])(now, Number(periodValue), periodType);
        const newRental = {
            nombre: nombre.trim(),
            monto: Number(monto),
            detalles: detalles.trim(),
            periodValue: Number(periodValue),
            periodType,
            nextDueDate: nextDueDate.toISOString()
        };
        onSave(newRental);
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4",
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-black",
                            children: "Nuevo Alquiler"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalForm.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700 text-2xl font-bold",
                            "aria-label": "Cerrar",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalForm.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalForm.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/RentalForm.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Nombre *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: nombre,
                                    onChange: (e)=>setNombre(e.target.value),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black",
                                    placeholder: "Ej: Departamento Centro",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalForm.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Monto Inicial *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: monto,
                                    onChange: (e)=>setMonto(e.target.value),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black",
                                    placeholder: "Ej: 50000",
                                    min: "0",
                                    step: "0.01",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalForm.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Detalles"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: detalles,
                                    onChange: (e)=>setDetalles(e.target.value),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black",
                                    placeholder: "Información adicional...",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalForm.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Periodicidad de Actualización *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: periodValue,
                                            onChange: (e)=>setPeriodValue(e.target.value),
                                            className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black",
                                            placeholder: "Ej: 3",
                                            min: "1",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalForm.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: periodType,
                                            onChange: (e)=>setPeriodType(e.target.value),
                                            className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "días",
                                                    children: "días"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalForm.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "meses",
                                                    children: "meses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RentalForm.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RentalForm.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: [
                                        "Ejemplo: cada ",
                                        periodValue || 'X',
                                        " ",
                                        periodType
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalForm.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors",
                                    children: "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalForm.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalForm.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalForm.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RentalForm.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RentalForm.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(RentalForm, "322HGKWHqZZN+9sf/GCo2c5KJaE=");
_c = RentalForm;
var _c;
__turbopack_context__.k.register(_c, "RentalForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/notifications.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkNotificationPermission": (()=>checkNotificationPermission),
    "checkOverdueRentals": (()=>checkOverdueRentals),
    "getDaysUntilDue": (()=>getDaysUntilDue),
    "requestNotificationPermission": (()=>requestNotificationPermission),
    "scheduleNotification": (()=>scheduleNotification),
    "showNotification": (()=>showNotification)
});
async function requestNotificationPermission() {
    try {
        if (!('Notification' in window)) {
            alert('Este navegador no soporta notificaciones. Para recibir recordatorios de vencimientos, usa Safari en iOS.');
            return false;
        }
        if (Notification.permission === 'granted') {
            return true;
        }
        if (Notification.permission === 'denied') {
            alert('Las notificaciones están bloqueadas. Ve a Configuración > Safari > Notificaciones para habilitarlas.');
            return false;
        }
        // Show explanation before requesting permission
        const userWantsNotifications = confirm('¿Quieres recibir notificaciones cuando venzan tus alquileres?\n\n' + 'Esto es importante para recordarte actualizar los montos a tiempo.');
        if (!userWantsNotifications) {
            return false;
        }
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            // Show a test notification to confirm it works
            new Notification('¡Notificaciones activadas!', {
                body: 'Ahora recibirás recordatorios cuando venzan tus alquileres.',
                icon: '/icon-192.png',
                tag: 'welcome-notification'
            });
            return true;
        } else {
            alert('Sin notificaciones no podrás recibir recordatorios de vencimientos. Puedes activarlas más tarde en la configuración del navegador.');
            return false;
        }
    } catch (error) {
        console.error('Error requesting notification permission:', error);
        alert('Error al solicitar permisos de notificación. Intenta recargar la página.');
        return false;
    }
}
function checkNotificationPermission() {
    if (!('Notification' in window)) {
        return 'not-supported';
    }
    return Notification.permission;
}
function scheduleNotification(rental) {
    try {
        const dueDate = new Date(rental.nextDueDate);
        const now = new Date();
        const timeUntilDue = dueDate.getTime() - now.getTime();
        // If the rental is due today or overdue, show notification immediately
        if (timeUntilDue <= 0) {
            showNotification(rental);
            return;
        }
        // Schedule notification for the due date
        setTimeout(()=>{
            showNotification(rental);
        }, timeUntilDue);
    } catch (error) {
        console.error('Error scheduling notification:', error);
    }
}
function showNotification(rental) {
    try {
        if (Notification.permission === 'granted') {
            new Notification(`Hoy vence el alquiler de ${rental.nombre}. Actualizalo.`, {
                body: `Monto: $${rental.monto} - ${rental.detalles}`,
                icon: '/icon-192.png',
                tag: `rental-${rental.id}`,
                requireInteraction: true
            });
        }
    } catch (error) {
        console.error('Error showing notification:', error);
    }
}
function checkOverdueRentals(rentals) {
    if (Notification.permission !== 'granted') {
        return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    rentals.forEach((rental)=>{
        const dueDate = new Date(rental.nextDueDate);
        dueDate.setHours(0, 0, 0, 0);
        // Check if rental is due today
        if (dueDate.getTime() === today.getTime()) {
            showNotification(rental);
        }
    });
}
function getDaysUntilDue(rental) {
    const today = new Date();
    const dueDate = new Date(rental.nextDueDate);
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/RentalUpdateModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RentalUpdateModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RentalUpdateModal({ rental, onClose, onUpdate }) {
    _s();
    const [percentage, setPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('input');
    const [newAmount, setNewAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleCalculate = ()=>{
        if (!percentage || isNaN(Number(percentage))) {
            setError('Ingresa un porcentaje válido');
            return;
        }
        const percentageNum = Number(percentage);
        if (percentageNum < 0) {
            setError('El porcentaje no puede ser negativo');
            return;
        }
        setError(null);
        const calculatedAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateUpdatedAmount"])(rental.monto, percentageNum);
        setNewAmount(calculatedAmount);
        setStep('confirm');
    };
    const handleConfirm = (useNewAmount)=>{
        const finalAmount = useNewAmount ? newAmount : rental.monto;
        const nextDueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNextDueDate"])(new Date(), rental.periodValue, rental.periodType);
        const updatedRental = {
            ...rental,
            monto: finalAmount,
            nextDueDate: nextDueDate.toISOString()
        };
        onUpdate(updatedRental);
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4",
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-black",
                            children: "Actualizar Alquiler"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700 text-2xl font-bold",
                            "aria-label": "Cerrar",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 p-3 bg-gray-50 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-black",
                            children: rental.nombre
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: [
                                "Monto actual: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(rental.monto)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                step === 'input' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Porcentaje de actualización"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: percentage,
                                            onChange: (e)=>setPercentage(e.target.value),
                                            className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black",
                                            placeholder: "Ej: 15",
                                            step: "0.01",
                                            min: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500",
                                            children: "%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: "Ejemplo: 15% para inflación del período"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCalculate,
                                    className: "px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors",
                                    children: "Calcular"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                step === 'confirm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-blue-50 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Monto actual:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-black",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(rental.monto)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-green-50 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                "Nuevo monto (+",
                                                percentage,
                                                "%):"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-green-700",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(newAmount)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-gray-700 font-medium",
                                children: "¿Usar este nuevo monto como base para la próxima actualización?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleConfirm(true),
                                    className: "w-full px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium",
                                    children: [
                                        "Sí, usar nuevo monto (",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(newAmount),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleConfirm(false),
                                    className: "w-full px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",
                                    children: [
                                        "No, mantener monto actual (",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(rental.monto),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setStep('input'),
                                    className: "w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                                    children: "Volver a calcular"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RentalUpdateModal.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RentalUpdateModal.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RentalUpdateModal.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RentalUpdateModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(RentalUpdateModal, "uw7vkXm+OW/TrSg5vNpy8WE4QZo=");
_c = RentalUpdateModal;
var _c;
__turbopack_context__.k.register(_c, "RentalUpdateModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/DeleteConfirmationModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DeleteConfirmationModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function DeleteConfirmationModal({ rental, onClose, onConfirm }) {
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4",
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-black mb-4",
                    children: "¿Eliminar Alquiler?"
                }, void 0, false, {
                    fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 mb-2",
                            children: "¿Estás seguro que querés eliminar este alquiler?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-gray-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-black",
                                    children: rental.nombre
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "Monto: $",
                                        rental.monto.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            children: "No"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onConfirm();
                                onClose();
                            },
                            className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors",
                            children: "Sí, eliminar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DeleteConfirmationModal.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = DeleteConfirmationModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirmationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/RentalList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RentalList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalUpdateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RentalUpdateModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeleteConfirmationModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function RentalList({ rentals, onUpdateRental, onDeleteRental }) {
    _s();
    const [selectedRental, setSelectedRental] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rentalToDelete, setRentalToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleRentalClick = (rental)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverdue"])(rental.nextDueDate)) {
            setSelectedRental(rental);
        }
    };
    const handleDeleteClick = (e, rental)=>{
        e.stopPropagation(); // Prevenir que se abra el modal de actualización
        setRentalToDelete(rental);
    };
    if (rentals.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-lg mb-2",
                    children: "No hay alquileres registrados"
                }, void 0, false, {
                    fileName: "[project]/src/components/RentalList.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm",
                    children: 'Presiona el botón "+" para agregar tu primer alquiler'
                }, void 0, false, {
                    fileName: "[project]/src/components/RentalList.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RentalList.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: rentals.map((rental)=>{
                    const overdueStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverdue"])(rental.nextDueDate);
                    const daysUntilDue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysUntilDue"])(rental);
                    let statusColor = 'border-gray-200 bg-white';
                    let statusBadge = null;
                    let statusMessage = null;
                    if (overdueStatus) {
                        statusColor = 'border-red-500 bg-red-50 cursor-pointer hover:bg-red-100 shadow-md';
                        statusBadge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium",
                            children: "VENCIDO"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalList.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this);
                        statusMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 pt-2 border-t border-red-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-700 text-sm font-medium",
                                children: "Toca para actualizar el monto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RentalList.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalList.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this);
                    } else if (daysUntilDue <= 7 && daysUntilDue > 0) {
                        statusColor = 'border-yellow-400 bg-yellow-50';
                        statusBadge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium",
                            children: "PRÓXIMO A VENCER"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalList.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this);
                    } else if (daysUntilDue === 0) {
                        statusColor = 'border-orange-500 bg-orange-50';
                        statusBadge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium",
                            children: "VENCE HOY"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RentalList.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleRentalClick(rental),
                        className: `p-4 rounded-lg border-2 transition-all duration-200 ${statusColor} relative`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>handleDeleteClick(e, rental),
                                className: "absolute bottom-2 right-2 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors",
                                "aria-label": "Eliminar alquiler",
                                children: "🗑️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RentalList.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-black",
                                        children: rental.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RentalList.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    statusBadge
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RentalList.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Monto:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RentalList.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(rental.monto)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RentalList.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Próximo vencimiento:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RentalList.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(rental.nextDueDate),
                                            daysUntilDue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 ml-2",
                                                children: [
                                                    "(",
                                                    daysUntilDue,
                                                    " ",
                                                    daysUntilDue === 1 ? 'día' : 'días',
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RentalList.tsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RentalList.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Periodicidad:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RentalList.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            " cada ",
                                            rental.periodValue,
                                            " ",
                                            rental.periodType
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RentalList.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    rental.detalles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Detalles:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RentalList.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            rental.detalles
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RentalList.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RentalList.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            statusMessage
                        ]
                    }, rental.id, true, {
                        fileName: "[project]/src/components/RentalList.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/RentalList.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            selectedRental && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalUpdateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rental: selectedRental,
                onClose: ()=>setSelectedRental(null),
                onUpdate: (updatedRental)=>{
                    onUpdateRental(updatedRental);
                    setSelectedRental(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/RentalList.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            rentalToDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rental: rentalToDelete,
                onClose: ()=>setRentalToDelete(null),
                onConfirm: ()=>{
                    onDeleteRental(rentalToDelete.id);
                    setRentalToDelete(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/RentalList.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(RentalList, "8T6srCo2O8kiGTIbTWdbzwLzOGM=");
_c = RentalList;
var _c;
__turbopack_context__.k.register(_c, "RentalList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/NotificationStatus.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotificationStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notifications.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function NotificationStatus() {
    _s();
    const [permission, setPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [isRequesting, setIsRequesting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationStatus.useEffect": ()=>{
            setPermission((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNotificationPermission"])());
        }
    }["NotificationStatus.useEffect"], []);
    const handleRequestPermission = async ()=>{
        setIsRequesting(true);
        const granted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestNotificationPermission"])();
        setPermission((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNotificationPermission"])());
        setIsRequesting(false);
    };
    if (permission === 'not-supported') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-yellow-800 text-sm",
                children: "⚠️ Este navegador no soporta notificaciones. Usa Safari en iOS para recibir recordatorios."
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationStatus.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NotificationStatus.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    if (permission === 'denied') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-800 text-sm mb-2",
                    children: "🚫 Las notificaciones están bloqueadas"
                }, void 0, false, {
                    fileName: "[project]/src/components/NotificationStatus.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 text-xs",
                    children: "Ve a Configuración → Safari → Notificaciones para habilitarlas"
                }, void 0, false, {
                    fileName: "[project]/src/components/NotificationStatus.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NotificationStatus.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    if (permission === 'granted') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 p-3 bg-green-50 border border-green-200 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-800 text-sm",
                children: "✅ Notificaciones activadas - Recibirás recordatorios de vencimientos"
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationStatus.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NotificationStatus.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    // permission === 'default'
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-blue-800 text-sm mb-3",
                children: "🔔 Activa las notificaciones para recibir recordatorios cuando venzan tus alquileres"
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationStatus.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleRequestPermission,
                disabled: isRequesting,
                className: "w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50",
                children: isRequesting ? 'Solicitando permisos...' : 'Activar Notificaciones'
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationStatus.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NotificationStatus.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(NotificationStatus, "A+H9XCpAwD9wz6iO8HUIzN7/6Ns=");
_c = NotificationStatus;
var _c;
__turbopack_context__.k.register(_c, "NotificationStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/storage-improved.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addRental": (()=>addRental),
    "deleteRental": (()=>deleteRental),
    "getRentals": (()=>getRentals),
    "updateRental": (()=>updateRental)
});
const STORAGE_KEY = 'alquileres_data';
// Función robusta para verificar localStorage
function isLocalStorageAvailable() {
    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}
function getRentals() {
    try {
        if (!isLocalStorageAvailable()) {
            console.warn('localStorage no disponible en este dispositivo');
            return [];
        }
        const data = localStorage.getItem(STORAGE_KEY);
        const rentals = data ? JSON.parse(data) : [];
        // Validar que sea un array
        if (!Array.isArray(rentals)) {
            console.warn('Datos corruptos, reiniciando...');
            localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
            return [];
        }
        return rentals;
    } catch (error) {
        console.error('Error leyendo alquileres:', error);
        return [];
    }
}
function addRental(rental) {
    try {
        if (!isLocalStorageAvailable()) {
            throw new Error('Almacenamiento no disponible en este dispositivo');
        }
        const rentals = getRentals();
        const newRental = {
            ...rental,
            id: Date.now(),
            createdAt: new Date().toISOString()
        };
        rentals.push(newRental);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(rentals));
        console.log('Alquiler guardado exitosamente:', newRental);
        return newRental;
    } catch (error) {
        console.error('Error guardando alquiler:', error);
        throw error;
    }
}
function updateRental(updatedRental) {
    try {
        if (!isLocalStorageAvailable()) {
            throw new Error('Almacenamiento no disponible');
        }
        const rentals = getRentals();
        const index = rentals.findIndex((r)=>r.id === updatedRental.id);
        if (index !== -1) {
            rentals[index] = updatedRental;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(rentals));
        }
    } catch (error) {
        console.error('Error actualizando alquiler:', error);
        throw error;
    }
}
function deleteRental(id) {
    try {
        if (!isLocalStorageAvailable()) {
            throw new Error('Almacenamiento no disponible');
        }
        const rentals = getRentals();
        const filteredRentals = rentals.filter((r)=>r.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRentals));
    } catch (error) {
        console.error('Error eliminando alquiler:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/notification-system-enhanced.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "enhancedNotificationSystem": (()=>enhancedNotificationSystem)
});
// Sistema de notificaciones mejorado para iOS
class EnhancedNotificationSystem {
    static instance;
    alarms = new Map();
    static getInstance() {
        if (!EnhancedNotificationSystem.instance) {
            EnhancedNotificationSystem.instance = new EnhancedNotificationSystem();
        }
        return EnhancedNotificationSystem.instance;
    }
    async requestPermission() {
        if (!('Notification' in window)) {
            alert('⚠️ iOS Limitación: Safari no permite notificaciones push cuando la app está cerrada.\n\nPara recordatorios efectivos:\n1. Activa notificaciones en Configuración > Safari > Notificaciones\n2. Mantén la app en segundo plano\n3. Revisa la app regularmente\n4. Los alquileres vencidos aparecerán en rojo');
            return false;
        }
        if (Notification.permission === 'granted') {
            return true;
        }
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }
    scheduleNotification(rental) {
        this.clearAlarm(rental.id);
        const dueDate = new Date(rental.nextDueDate);
        const now = new Date();
        const timeUntilDue = dueDate.getTime() - now.getTime();
        // Guardar notificación persistente
        this.savePersistentNotification(rental);
        if (timeUntilDue <= 0) {
            this.showImmediateNotification(rental);
            return;
        }
        // Programar notificación
        const alarm = setTimeout(()=>{
            this.showImmediateNotification(rental);
        }, timeUntilDue);
        this.alarms.set(rental.id, alarm);
    }
    savePersistentNotification(rental) {
        const notifications = JSON.parse(localStorage.getItem('persistent_notifications') || '[]');
        const exists = notifications.find((n)=>n.id === rental.id);
        if (!exists) {
            notifications.push({
                id: rental.id,
                nombre: rental.nombre,
                monto: rental.monto,
                dueDate: rental.nextDueDate,
                notified: false
            });
            localStorage.setItem('persistent_notifications', JSON.stringify(notifications));
        }
    }
    showImmediateNotification(rental) {
        const message = `Alquiler "${rental.nombre}" por ${formatCurrency(rental.monto)} ha vencido. Actualiza el monto.`;
        // Notificación push si está permitida
        if (Notification.permission === 'granted') {
            new Notification('Alquiler Vencido', {
                body: message,
                icon: '/icon-192.png',
                tag: `rental-${rental.id}`,
                requireInteraction: true
            });
        }
        // Guardar como notificada
        this.markAsNotified(rental.id);
    }
    checkAllRentals(rentals) {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        rentals.forEach((rental)=>{
            const dueDate = new Date(rental.nextDueDate);
            dueDate.setHours(0, 0, 0, 0);
            if (dueDate.getTime() <= now.getTime()) {
                this.showImmediateNotification(rental);
            }
        });
        // Verificar notificaciones persistentes
        this.checkPersistentNotifications();
    }
    checkPersistentNotifications() {
        const notifications = JSON.parse(localStorage.getItem('persistent_notifications') || '[]');
        const now = new Date();
        notifications.forEach((notification)=>{
            const dueDate = new Date(notification.dueDate);
            if (dueDate <= now && !notification.notified) {
                this.showImmediateNotification({
                    id: notification.id,
                    nombre: notification.nombre,
                    monto: notification.monto,
                    detalles: '',
                    periodValue: 0,
                    periodType: 'días',
                    nextDueDate: notification.dueDate,
                    createdAt: new Date().toISOString()
                });
            }
        });
        // Limpiar notificaciones procesadas
        const remaining = notifications.filter((n)=>new Date(n.dueDate) > now);
        localStorage.setItem('persistent_notifications', JSON.stringify(remaining));
    }
    markAsNotified(id) {
        const notifications = JSON.parse(localStorage.getItem('persistent_notifications') || '[]');
        const updated = notifications.map((n)=>n.id === id ? {
                ...n,
                notified: true
            } : n);
        localStorage.setItem('persistent_notifications', JSON.stringify(updated));
    }
    checkOnAppOpen() {
        this.checkPersistentNotifications();
        // Verificar alquileres vencidos al abrir la app
        const rentals = JSON.parse(localStorage.getItem('alquileres_data') || '[]');
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const overdueRentals = rentals.filter((r)=>{
            const dueDate = new Date(r.nextDueDate);
            dueDate.setHours(0, 0, 0, 0);
            return dueDate < now;
        });
        if (overdueRentals.length > 0) {
            const message = `Tienes ${overdueRentals.length} alquiler${overdueRentals.length > 1 ? 'es' : ''} vencido${overdueRentals.length > 1 ? 's' : ''}:\n\n${overdueRentals.map((r)=>`- ${r.nombre}: ${formatCurrency(r.monto)}`).join('\n')}`;
            if (Notification.permission === 'granted') {
                new Notification('Alquileres Vencidos', {
                    body: message,
                    icon: '/icon-192.png',
                    requireInteraction: true
                });
            } else {
                alert(`🚨 Alquileres Vencidos\n\n${message}`);
            }
        }
    }
    clearAlarm(rentalId) {
        const alarm = this.alarms.get(rentalId);
        if (alarm) {
            clearTimeout(alarm);
            this.alarms.delete(rentalId);
        }
        // Limpiar de notificaciones persistentes
        const notifications = JSON.parse(localStorage.getItem('persistent_notifications') || '[]');
        const filtered = notifications.filter((n)=>n.id !== rentalId);
        localStorage.setItem('persistent_notifications', JSON.stringify(filtered));
    }
    clearAllAlarms() {
        this.alarms.forEach((alarm)=>clearTimeout(alarm));
        this.alarms.clear();
        localStorage.removeItem('persistent_notifications');
    }
}
// Función auxiliar para formatear moneda
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
const enhancedNotificationSystem = EnhancedNotificationSystem.getInstance();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/notification-system.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "notificationSystem": (()=>notificationSystem)
});
// Sistema de notificaciones para iOS Safari
class NotificationSystem {
    static instance;
    alarms = new Map();
    lastCheckTime = 0;
    static getInstance() {
        if (!NotificationSystem.instance) {
            NotificationSystem.instance = new NotificationSystem();
        }
        return NotificationSystem.instance;
    }
    async requestPermission() {
        if (!('Notification' in window)) {
            alert('⚠️ Safari en iOS tiene limitaciones con notificaciones push.\n\nPara recordatorios efectivos:\n1. Mantén la app abierta en segundo plano\n2. Revisa la app diariamente\n3. Los alquileres vencidos aparecerán en rojo');
            return false;
        }
        if (Notification.permission === 'granted') {
            return true;
        }
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }
    scheduleNotification(rental) {
        this.clearAlarm(rental.id);
        const dueDate = new Date(rental.nextDueDate);
        const now = new Date();
        const timeUntilDue = dueDate.getTime() - now.getTime();
        // Si ya venció, notificar inmediatamente
        if (timeUntilDue <= 0) {
            this.showNotification(rental);
            return;
        }
        // Programar notificación para el día exacto
        const alarm = setTimeout(()=>{
            this.showNotification(rental);
        }, timeUntilDue);
        this.alarms.set(rental.id, alarm);
    }
    showNotification(rental) {
        const message = `Alquiler "${rental.nombre}" por ${formatCurrency(rental.monto)} ha vencido. Actualiza el monto.`;
        // Intentar notificación push
        if (Notification.permission === 'granted') {
            new Notification('Alquiler Vencido', {
                body: message,
                icon: '/icon-192.png',
                tag: `rental-${rental.id}`,
                requireInteraction: true
            });
        }
        // Siempre mostrar notificación visual en la app
        this.showVisualNotification(rental);
        // También mostrar alerta si la app está abierta
        alert(`🚨 Alquiler Vencido\n\n"${rental.nombre}" por ${formatCurrency(rental.monto)} ha vencido.\n\nPor favor actualiza el monto.`);
    }
    showVisualNotification(rental) {
        // Crear notificación visual persistente
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm';
        notification.innerHTML = `
      <div class="flex items-start">
        <div class="flex-1">
          <h4 class="font-bold text-sm">Alquiler Vencido</h4>
          <p class="text-xs mt-1">"${rental.nombre}" por ${formatCurrency(rental.monto)} ha vencido</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
          ✕
        </button>
      </div>
    `;
        document.body.appendChild(notification);
        // Auto-remover después de 10 segundos
        setTimeout(()=>{
            if (notification.parentElement) {
                notification.remove();
            }
        }, 10000);
    }
    checkAllRentals(rentals) {
        const now = new Date();
        // Evitar verificaciones muy frecuentes
        if (now.getTime() - this.lastCheckTime < 60000) {
            return;
        }
        this.lastCheckTime = now.getTime();
        rentals.forEach((rental)=>{
            const dueDate = new Date(rental.nextDueDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            dueDate.setHours(0, 0, 0, 0);
            if (dueDate.getTime() === today.getTime()) {
                this.showNotification(rental);
            }
        });
    }
    clearAlarm(rentalId) {
        const alarm = this.alarms.get(rentalId);
        if (alarm) {
            clearTimeout(alarm);
            this.alarms.delete(rentalId);
        }
    }
    clearAllAlarms() {
        this.alarms.forEach((alarm)=>clearTimeout(alarm));
        this.alarms.clear();
    }
}
// Función auxiliar para formatear moneda
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
const notificationSystem = NotificationSystem.getInstance();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/NotificationTester.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotificationTester)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notification-system.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function NotificationTester({ rentals }) {
    _s();
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const testNotification = ()=>{
        const testRental = {
            id: 999,
            nombre: 'Prueba de Notificación',
            monto: 50000,
            detalles: 'Esta es una notificación de prueba',
            periodValue: 1,
            periodType: 'días',
            nextDueDate: new Date().toISOString(),
            createdAt: new Date().toISOString()
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationSystem"].showNotification(testRental);
        setTestMessage('✅ Notificación de prueba enviada. Si no ves nada, verifica los permisos en Configuración > Safari > Notificaciones');
    };
    const forceCheckOverdue = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationSystem"].checkAllRentals(rentals);
        setTestMessage('🔍 Verificando alquileres vencidos...');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-blue-800 mb-2",
                children: "🔔 Prueba de Notificaciones"
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationTester.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: testNotification,
                        className: "w-full px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",
                        children: "Probar Notificación Ahora"
                    }, void 0, false, {
                        fileName: "[project]/src/components/NotificationTester.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: forceCheckOverdue,
                        className: "w-full px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700",
                        children: "Verificar Alquileres Vencidos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/NotificationTester.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-700 mt-2",
                        children: testMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/NotificationTester.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NotificationTester.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-xs text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Para iOS:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationTester.tsx",
                            lineNumber: 60,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NotificationTester.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Asegúrate de usar Safari"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NotificationTester.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Ve a Configuración ",
                                    '>',
                                    " Safari ",
                                    '>',
                                    " Notificaciones"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NotificationTester.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Habilita notificaciones para este sitio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NotificationTester.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Mantén la app abierta o en segundo plano"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NotificationTester.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NotificationTester.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NotificationTester.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NotificationTester.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(NotificationTester, "mf9XlNrwVrPX9j0OPego1h1AJv0=");
_c = NotificationTester;
var _c;
__turbopack_context__.k.register(_c, "NotificationTester");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RentalForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RentalList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NotificationStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage-improved.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notification-system-enhanced.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationTester$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NotificationTester.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Page() {
    _s();
    const [rentals, setRentals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load rentals from localStorage on initial render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            try {
                const storedRentals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRentals"])();
                setRentals(storedRentals);
            } catch (error) {
                console.error('Error loading rentals:', error);
            } finally{
                setIsLoading(false);
            }
        }
    }["Page.useEffect"], []);
    // Register service worker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').then({
                    "Page.useEffect": ()=>console.log('Service Worker registered')
                }["Page.useEffect"]).catch({
                    "Page.useEffect": (err)=>console.error('SW registration error: ', err)
                }["Page.useEffect"]);
            }
        }
    }["Page.useEffect"], []);
    // Check for overdue rentals and notify
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (rentals.length > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedNotificationSystem"].checkAllRentals(rentals);
            }
        }
    }["Page.useEffect"], [
        rentals
    ]);
    // Set up periodic check for overdue rentals (every minute)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const interval = setInterval({
                "Page.useEffect.interval": ()=>{
                    if (rentals.length > 0) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedNotificationSystem"].checkAllRentals(rentals);
                    }
                }
            }["Page.useEffect.interval"], 60 * 1000); // Check every minute for testing
            return ({
                "Page.useEffect": ()=>clearInterval(interval)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        rentals
    ]);
    // Verificar notificaciones al abrir la app
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedNotificationSystem"].checkOnAppOpen();
        }
    }["Page.useEffect"], []);
    const addRental = (rental)=>{
        try {
            console.log('Agregando alquiler:', rental);
            const newRental = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRental"])(rental);
            console.log('Alquiler guardado:', newRental);
            // Actualizar estado inmediatamente
            const updatedRentals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRentals"])();
            console.log('Alquileres después de agregar:', updatedRentals);
            setRentals(updatedRentals);
            // Cerrar modal
            setShowForm(false);
            console.log('Alquiler agregado exitosamente');
        } catch (error) {
            console.error('Error adding rental:', error);
            alert('Error al guardar el alquiler: ' + error);
        }
    };
    const updateRental = (updatedRental)=>{
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateRental"])(updatedRental);
            setRentals((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRentals"])());
            // Schedule notification for updated rental
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedNotificationSystem"].scheduleNotification(updatedRental);
        } catch (error) {
            console.error('Error updating rental:', error);
        }
    };
    const deleteRental = (id)=>{
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRental"])(id);
            setRentals((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$improved$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRentals"])());
            // Cancelar notificaciones para este alquiler
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$system$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedNotificationSystem"].clearAlarm(id);
        } catch (error) {
            console.error('Error deleting rental:', error);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-background text-foreground p-4 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Cargando..."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background text-foreground p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: "Alquileres"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm(true),
                        className: "w-12 h-12 bg-black text-white rounded-full text-2xl font-bold hover:bg-gray-800 transition-colors",
                        "aria-label": "Agregar nuevo alquiler",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationTester$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rentals: rentals
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rentals: rentals,
                onUpdateRental: updateRental,
                onDeleteRental: deleteRental
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RentalForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowForm(false),
                onSave: (rental)=>{
                    addRental(rental);
                    setShowForm(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(Page, "mbEeJ/klZhPgc9682NeUmID2hIA=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d40221af._.js.map