---
sidebar_position: 1
---

# JavaScript / TypeScript

This guide will walk you through the installation and basic setup of the `@ravenlens/api` package for your JavaScript or TypeScript projects.

## Installation

Install the package via npm, yarn, or pnpm:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```bash
    npm install @ravenlens/api
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash
    yarn add @ravenlens/api
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm add @ravenlens/api
    ```
  </TabItem>
</Tabs>

## Basic Usage

### JavaScript

```javascript
const { RavenLens } = require('@ravenlens/api');

const client = new RavenLens({
  apiKey: 'YOUR_API_KEY',
});
```

### TypeScript

```typescript
import { RavenLens } from '@ravenlens/api';

const client = new RavenLens({
  apiKey: 'YOUR_API_KEY' as string,
});
```

## Configuration

The `RavenLens` client accepts the following configuration options:

| Option | Type | Description |
| :--- | :--- | :--- |
| `apiKey` | `string` | **Required**. Your RavenLens API key. |
| `baseUrl` | `string` | Optional. Customize the API endpoint. |
| `timeout` | `number` | Optional. Request timeout in milliseconds. |

## API Walkthrough

- **[Prompt API](../prompts/index.md)**: Learn how to manage and download your AI prompts with **RavenLens SSOT**.
- **[Tracking API](../tracking)**: Learn how to track your __AI System properties and user interactions__.
- **[Improvements API](../improvements)**: Learn how to use collected traces to __improve your AI System behaviour and KPI__.

## More

Explore further resources to master RavenLens:

- **[NPM Package](https://www.npmjs.com/package/@ravenlens/api)**: View the package on npm.
- **[GitHub Repository](https://github.com/ravenlens)**: Contribute or report issues on GitHub.
- **[Support & Community](https://ravenlens.ai/community)**: Get help from the RavenLens team.
