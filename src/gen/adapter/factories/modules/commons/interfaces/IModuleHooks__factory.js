/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IModuleHooks__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_signature",
                type: "bytes4",
            },
            {
                internalType: "address",
                name: "_implementation",
                type: "address",
            },
        ],
        name: "addHook",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_signature",
                type: "bytes4",
            },
        ],
        name: "readHook",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_signature",
                type: "bytes4",
            },
        ],
        name: "removeHook",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IModuleHooks__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IModuleHooks__factory = IModuleHooks__factory;
IModuleHooks__factory.abi = _abi;