# Prompt Management

RavenLens allows you to manage your prompts externally and fetch them dynamically in your application. This enables you to update prompts without redeploying your code and supports versioning and variable interpolation.

## Fetching Prompts

You can fetch a specific version of a prompt using the `prompts.get` method.

```typescript
import { RavenLens } from '@ravenlens/ai-sdk';

// Initialize with `true` as the second argument to enable live updates/caching strategy if needed
const raven = new RavenLens({
    apiKey: process.env.RAVENLENS_API_KEY,
    appId: process.env.RAVENLENS_APP_ID
}, true); 

const promptId = "ravenlens_prompt:0924a6d2528b0ae8d";
const version = { number: "1.0@release", type: "release" };
const variables = { userName: "Sam Smith", age: 12 };

// Fetch the prompt
const prompt = await raven.prompts.get({ 
    id: promptId, 
    version, 
    variables 
});

console.log(prompt);
```

### Arguments

- `id`: The unique identifier of the prompt in RavenLens.
- `version`: The version specifier.
  - `number`: The version string (e.g., "1.0@release").
  - `type`: The type of release (e.g., "release").
- `variables`: An object containing variables to be interpolated into the prompt template.
