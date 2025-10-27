## Environment Setup

Create a `.env.local` file in the project root with your secrets. Files matching `.env*` are already git-ignored via `.gitignore`.

Example:

```
# Server-only
RESEND_API_KEY=your_resend_api_key_here
```

The app reads `RESEND_API_KEY` in `app/actions/send-email.tsx`.
