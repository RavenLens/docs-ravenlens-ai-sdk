---
sidebar_position: 2
---

# AI Tracing & Monitoring

RavenLens provides powerful tracking capabilities for both direct AI provider usage and **AI Agents**.

## AI Providers

You can track requests to various AI providers. The SDK wraps the provider's client and automatically sends telemetry data to RavenLens.

### Supported AI providers
- OpenAI
- Google Vertex AI / Gemini
- Anthropic
- Groq
- Ollama
- And more...

### Basic Usage (Without Session)

Each trace acts as an individual tracking unit.

```typescript
import OpenAI from 'openai';
import { OpenAITracker } from '@ravenlens/ai-sdk';

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Initialize Tracker with RavenLens configuration
const tracker = new OpenAITracker(openai, {
    apiKey: process.env.RAVENLENS_API_KEY,
    apiVersion: "1.0",
    appID: process.env.RAVENLENS_APP_ID,
    user: { // User object is optional
        id: "your-user-id",
    }
});

const { response, sessionId, traceId } = await tracker.ask({
    messages: [{ role: "user", content: "What is the capital of France?" }],
    model: "gpt-4",
});

const answer = response.choices[0]?.message?.content;
console.log('Answer: ', answer);
```

### Usage with Sessions

Connecting traces to sessions gives you a full conversational history.

#### Approach 1: Explicit Session Generation

Generate a session ID first and pass it to the tracker.

```typescript
import OpenAI from 'openai';
import { OpenAITracker, RavenLens } from '@ravenlens/ai-sdk';

const raven = new RavenLens({
    apiKey: process.env.RAVENLENS_API_KEY,
    appId: process.env.RAVENLENS_APP_ID
});

async function main() {
    // 1. Generate new Session ID
    const sessionId = await raven.sessions.generateNewSessionId();

    // 2. Initialize Tracker with existing Session ID
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const tracker = new OpenAITracker(openai, {
        apiKey: process.env.RAVENLENS_API_KEY,
        apiVersion: "1.0",
        appID: process.env.RAVENLENS_APP_ID,
        sessionId: sessionId // Connects this trace to the session
    });

    const { response } = await tracker.ask({
        messages: [{ role: "user", content: "Hello!" }],
        model: "gpt-4",
    });
}
```

#### Approach 2: Chaining Sessions

Use the session ID returned from the first call for subsequent calls.

```typescript
// ... inside a loop or consecutive calls
const { response, sessionId } = await tracker.ask({ ... });

// Use retrieved `sessionId` for the next tracker initialization
const nextTracker = new OpenAITracker(openai, {
    ...,
    sessionId: sessionId
});
```

## AI Agents

RavenLens supports tracking for Agent frameworks like BeeAI and LangChain and more.

### BeeAI Framework Example

```typescript
import { ReActAgent } from "beeai-framework/agents/react/agent";
import { OllamaChatModel } from "beeai-framework/adapters/ollama/backend/chat";
import { UnconstrainedMemory } from "beeai-framework/memory/unconstrainedMemory";
import { BeeAiTracker, withRavenLens } from "@ravenlens/ai-sdk"

const tracker = new BeeAiTracker({
    apiKey: process.env.RAVENLENS_API_KEY,
    apiVersion: "1.0",
    appID: process.env.RAVENLENS_APP_ID,
    // sessionId: "...", // Optional: for session grouping
});

// 1. Initialize LLM
const llm = new OllamaChatModel("granite4:micro");

// 2. Wrap LLM with RavenLens
const trackedLLM = withRavenLens(llm, tracker.config);

// 3. Create Agent with tracked LLM
const agent = new ReActAgent({
    llm: trackedLLM,
    tools: [],
    memory: new UnconstrainedMemory(),
});

// 4. Wrap Agent
const trackedAgent = withRavenLens(agent, tracker.config);

// 5. Run and Observe
const { response, sessionId, traceId } = await trackedAgent
    .run({ prompt: "Help me with observability." })
    .observe(tracker.observer());
```

<!-- TODO: Add more agents libraries examples and make it actual to ai-sdk state after usage of specicied tracing lib -->
