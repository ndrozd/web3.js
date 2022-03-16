import { ErrorObject } from 'ajv';
import { AbiParameter } from './private_types';

export { JSONSchemaType } from 'ajv';
export { DataValidateFunction, DataValidationCxt } from 'ajv/dist/types';

export type Web3ValidationErrorObject = ErrorObject;
export type ValidInputTypes = Buffer | bigint | string | number | boolean;

export type EthBaseTypes = 'bool' | 'bytes' | 'string' | 'uint' | 'int' | 'address' | 'tuple';
export type EthBaseTypesWithMeta =
	| `string${string}`
	| `string${string}[${number}]`
	| `bytes${string}`
	| `bytes${string}[${number}]`
	| `address[${number}]`
	| `bool[${number}]`
	| `int${string}`
	| `int${string}[${number}]`
	| `uint${string}`
	| `uint${string}[${number}]`
	| `tuple[]`
	| `tuple[${number}]`;

export type EthExtendedTypes =
	| 'hex'
	| 'number'
	| 'blockNumber'
	| 'blockNumberOrTag'
	| 'filter'
	| 'bloom';

export type FullValidationSchema = ReadonlyArray<AbiParameter>;
export type ShortValidationSchema = ReadonlyArray<
	| string
	| EthBaseTypes
	| EthExtendedTypes
	| EthBaseTypesWithMeta
	| EthBaseTypesWithMeta
	| ShortValidationSchema
>;
export type ValidationSchemaInput = FullValidationSchema | ShortValidationSchema;

export type Web3ValidationOptions = {
	readonly silent: boolean;
};

// Some duplicate types introduced to avoid circular dependency to avoid
// breaking changes in "web3-utils" package.
export enum BlockTags {
	EARLIEST = 'earliest',
	LATEST = 'latest',
	PENDING = 'pending',
}

export type BlockTag = 'earliest' | 'latest' | 'pending';

export type BlockNumberOrTag = string | BlockTag;

export interface Filter {
	readonly fromBlock?: BlockNumberOrTag;
	readonly toBlock?: BlockNumberOrTag;
	readonly address?: string | string[];
	readonly topics?: (string | string[] | null)[];
}

export type JsonSchema = {
	$id?: string;
	type?: string;
	eth?: string;
	items?: JsonSchema | JsonSchema[];
	properties?: Record<string, JsonSchema>;
	maxItems?: number;
	minItems?: number;
	additionalItems?: boolean;
};
