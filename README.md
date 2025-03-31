# Userback-Modal Demo

This project demonstrates an issue between the shadCN Dialog component and the Userback widget launch button. Specifically, when the shadCN Dialog is open, the Userback launch button becomes unclickable, despite typical solutions like z-index adjustments or focus trapping.

## Issue Description

The demonstrated problem:
- Userback launch button works correctly when the dialog is closed
- When the shadCN Dialog is open, the Userback launch button becomes completely unclickable
- This issue persists regardless of z-index configurations

## Technologies Used

- React 19
- TypeScript
- Vite 6
- shadCN UI (Dialog component)
- @userback/react integration

## Prerequisites

- Node.js (v18+)
- A Userback account and API token

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Userback-Modal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Userback token

Create a `.env.local` file in the root directory with your Userback token:

```
VITE_USERBACK_TOKEN=your_userback_token_here
```

or use the provided demo token in the Layout.tsx file.

### 4. Run the development server

```bash
npm run dev
```

## Testing the Issue

1. Open the application in your browser
2. Verify that the Userback button is visible and clickable
3. Close the Userback widget if you opened it
4. Click the "Open Dialog" button on the page
5. Try to click the Userback button while the dialog is open
6. Notice that the Userback button is completely unclickable

## Project Structure

- `src/App.tsx` - Main application component with dialog demonstration
- `src/Layout.tsx` - Component that wraps the app with Userback provider
- `src/Userback.tsx` - Userback provider implementation
- `src/components/ui/dialog.tsx` - shadCN Dialog component

## Configuration Options

You can modify the Userback configuration in the `src/Layout.tsx` file:

```typescript
const userbackOptions = {
  autohide: true,
  name: 'Demo User',
  email: 'demo@example.com',
  // Add other options as needed
};
```

## Building for Production

```bash
npm run build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
