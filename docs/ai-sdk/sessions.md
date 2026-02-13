# Session Management & Recording

RavenLens allows you to track not just the AI interaction, but the user's entire journey on the frontend, correlating UI events with AI traces.

## User Interaction Sessions

You can record user sessions using the `FrontendSessions` utility (based on `rrweb`) and upload them to RavenLens.

### Frontend Recording

Install `@ravenlens/ai-sdk` in your frontend application.

```typescript
import { FrontendSessions } from '@ravenlens/ai-sdk';

// Initialize the session manager
// `sessionRetrivingGatewayURL`: Your backend endpoint that handles the upload
const sessionManager = new FrontendSessions(
    '/api/ravenlens/session-record', 
    'your-session-id',  // Optional: Provide if you already have a session ID
    { userId: 'user-123' } // Optional metadata
);

// Start recording when appropriate
sessionManager.record();

// Stop and send recording on events like page unload
window.addEventListener('beforeunload', async () => {
    await sessionManager.stop();
});
```

### Backend Handling

Your backend needs to expose an endpoint to receive the recording and forward it to RavenLens.

```typescript
import { RavenLens } from '@ravenlens/ai-sdk';
import express from 'express';

const app = express();
app.use(express.json({ limit: '50mb' })); // Increase API limit for large recordings

const raven = new RavenLens({
    apiKey: process.env.RAVENLENS_API_KEY!,
    appId: process.env.RAVENLENS_APP_ID
});

// Endpoint to receive recording from frontend
app.post('/api/ravenlens/session-record', async (req, res) => {
    const { sessionId, events } = req.body;
    
    if (!sessionId || !events) {
        return res.status(400).send('Missing data');
    }

    try {
        // Upload recording to RavenLens
        // - sessionId: Can be an existing ID or generating a New one if needed
        await raven.sessions.upload(sessionId, events);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
```

## Downloading Sessions

You can programmatically retrieve recorded sessions.

```typescript
const recording = await raven.sessions.download(sessionId);
console.log(recording);
```
