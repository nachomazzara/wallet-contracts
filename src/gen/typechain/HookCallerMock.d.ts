/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface HookCallerMockInterface extends ethers.utils.Interface {
  functions: {
    "callERC1155BatchReceived(address)": FunctionFragment;
    "callERC1155Received(address)": FunctionFragment;
    "callERC1271isValidSignatureData(address,bytes,bytes)": FunctionFragment;
    "callERC1271isValidSignatureHash(address,bytes32,bytes)": FunctionFragment;
    "callERC223Received(address)": FunctionFragment;
    "callERC721Received(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callERC1155BatchReceived",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC1155Received",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC1271isValidSignatureData",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC1271isValidSignatureHash",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC223Received",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC721Received",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "callERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC1271isValidSignatureData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC1271isValidSignatureHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC223Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC721Received",
    data: BytesLike
  ): Result;

  events: {};
}

export class HookCallerMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: HookCallerMockInterface;

  functions: {
    callERC1155BatchReceived(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "callERC1155BatchReceived(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callERC1155Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "callERC1155Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callERC1271isValidSignatureData(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "callERC1271isValidSignatureData(address,bytes,bytes)"(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    callERC1271isValidSignatureHash(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "callERC1271isValidSignatureHash(address,bytes32,bytes)"(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    callERC223Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "callERC223Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callERC721Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "callERC721Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  callERC1155BatchReceived(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "callERC1155BatchReceived(address)"(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callERC1155Received(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "callERC1155Received(address)"(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callERC1271isValidSignatureData(
    _addr: string,
    _data: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "callERC1271isValidSignatureData(address,bytes,bytes)"(
    _addr: string,
    _data: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callERC1271isValidSignatureHash(
    _addr: string,
    _hash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "callERC1271isValidSignatureHash(address,bytes32,bytes)"(
    _addr: string,
    _hash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callERC223Received(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "callERC223Received(address)"(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callERC721Received(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "callERC721Received(address)"(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    callERC1155BatchReceived(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "callERC1155BatchReceived(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC1155Received(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "callERC1155Received(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC1271isValidSignatureData(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "callERC1271isValidSignatureData(address,bytes,bytes)"(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC1271isValidSignatureHash(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "callERC1271isValidSignatureHash(address,bytes32,bytes)"(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC223Received(_addr: string, overrides?: CallOverrides): Promise<void>;

    "callERC223Received(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC721Received(_addr: string, overrides?: CallOverrides): Promise<void>;

    "callERC721Received(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    callERC1155BatchReceived(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "callERC1155BatchReceived(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    callERC1155Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "callERC1155Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    callERC1271isValidSignatureData(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "callERC1271isValidSignatureData(address,bytes,bytes)"(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callERC1271isValidSignatureHash(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "callERC1271isValidSignatureHash(address,bytes32,bytes)"(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callERC223Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "callERC223Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    callERC721Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "callERC721Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callERC1155BatchReceived(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "callERC1155BatchReceived(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    callERC1155Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "callERC1155Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    callERC1271isValidSignatureData(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callERC1271isValidSignatureData(address,bytes,bytes)"(
      _addr: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callERC1271isValidSignatureHash(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callERC1271isValidSignatureHash(address,bytes32,bytes)"(
      _addr: string,
      _hash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callERC223Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "callERC223Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    callERC721Received(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "callERC721Received(address)"(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}