# Verification code

This is a simple verification code generator. Supports numeric and alphanumeric verification codes.

## Installation

```bash
npm install @vukovicpavle/verification-code
```

## Usage

```javascript
import {
  generateAlphanumericCode,
  generateNumericCode,
} from "@vukovicpavle/verification-code";

const numericCode = generateNumericCode(6);
const alphanumericCode = generateAlphanumericCode(6, "upper");
```

## API

### generateNumericCode

Generates a numeric verification code.

#### Parameters

- `length` - The length of the code. Default is `4`.

#### Returns

- `string` - The generated code.

### generateAlphanumericCode

Generates an alphanumeric verification code.

#### Parameters

- `length` - The length of the code. Default is `4`.
- `letterCase` - The case of the code. Can be `mixed`, `upper` or `lower`. Default is `mixed`.

#### Returns

- `string` - The generated code.
