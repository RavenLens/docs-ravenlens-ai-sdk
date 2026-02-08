---
sidebar_position: 1
---


# Installation and Setup

The `@ravenlens/ai-sdk` is a comprehensive library for integrating RavenLens observability, prompt management, and session tracking into your AI applications.

## Installation

```bash
npm install @ravenlens/ai-sdk
```

## Setup

To start using the RavenLens SDK, you need to initialize the main `RavenLens` class with your API key and App ID.

```typescript
import { RavenLens } from '@ravenlens/ai-sdk';

const raven = new RavenLens({
    apiKey: process.env.RAVENLENS_API_KEY, // Your RavenLens API Key
    appId: process.env.RAVENLENS_APP_ID,   // Your Application ID
    apiVersion: "1.0"                      // API Version
});
```

### Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `apiKey` | `string` | Yes | Your RavenLens project API key. |
| `appId` | `string` | No | Your specific Application ID. |
| `apiVersion` | `"1.0"` | Yes | The version of the API to use. Currently "1.0". |

## Features Overview

- **Prompt Management**: Fetch, version, and manage your prompts dynamically.
- **AI Tracing**: Automatically track requests to AI providers like OpenAI, Anthropic, VertexAI, etc.
- **Agent Monitoring**: Monitor execution of AI Agents (BeeAI, LangChain, etc.).
- **Session Tracking**: Correlate traces and user interactions into cohesive sessions.
- **Analytics**: Retrieve trace data and statistics for analysis.
