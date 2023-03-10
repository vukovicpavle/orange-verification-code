# 🍊 Verification code

This is a simple verification code generator. Supports numeric and alphanumeric verification codes.

## Installation

```bash
npm install @vukovicpavle/orange-verification-code
```

## Usage

```javascript
import {
  generateAlphanumericCode,
  generateNumericCode,
} from "@vukovicpavle/orange-verification-code";

const numericCode = generateNumericCode(6); // 123456
const alphanumericCode = generateAlphanumericCode(6, "upper"); // ABCDEF
```

## API

### `generateNumericCode(length?: number)`

Generates a numeric verification code.

#### Parameters

| Name   | Type   | Description             | Required | Default |
| ------ | ------ | ----------------------- | -------- | ------- |
| length | number | The length of the code. | No       | 4       |

#### Returns

| Type   | Description         |
| ------ | ------------------- |
| string | The generated code. |

### `generateAlphanumericCode(length?: number, letterCase?: string)`

Generates an alphanumeric verification code.

#### Parameters

| Name       | Type   | Description                                        | Required | Default |
| ---------- | ------ | -------------------------------------------------- | -------- | ------- |
| length     | number | The length of the code.                            | No       | 4       |
| letterCase | string | The case of the code. "mixed", "upper" or "lower". | No       | "mixed" |

#### Returns

| Type   | Description         |
| ------ | ------------------- |
| string | The generated code. |
