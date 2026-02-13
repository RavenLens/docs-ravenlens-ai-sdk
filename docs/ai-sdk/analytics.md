# Analytics & Data Retrieval

The RavenLens SDK provides methods to programmatically retrieve the data collected by your application, including traces and aggregated statistics.

## Retrieving Traces

You can download traces for a specific period.

```typescript
import { RavenLens } from '@ravenlens/ai-sdk';

const raven = new RavenLens({
    apiKey: process.env.RAVENLENS_API_KEY,
    appId: process.env.RAVENLENS_APP_ID
});

// Download traces from the last 13 days
const traces = await raven.traces.download({
    period: {
        from: "now",
        to: new Date(Date.now() - (86_000_000 * 13)) 
    }
});

console.log(`Downloaded ${traces.length} traces.`);
```

## Retrieving Statistics

You can also download aggregated statistics.

```typescript
const stats = await raven.stats.download({
    period: {
        from: "now",
        to: new Date(Date.now() - (86_000_000 * 13))
    }
});

console.log(stats);
```

### Period Object
Both methods accept a `period` object:
- `from`: Start date (Date object or "now").
- `to`: End date (Date object or "now").

If `period` is omitted, it may default to a preset range or all available data depending on the API configuration.
