# Userback-Modal Demo Project Brief

## Project Overview
This project aims to demonstrate a specific issue between the shadCN Dialog component and the Userback widget launch button. The issue occurs when the shadCN Dialog is open, causing the Userback launch button to become unclickable, despite adjustments to z-index and other typical solutions.

## Technical Stack
- React 18+
- TypeScript
- Vite (for fast development setup)
- shadCN UI (specifically the Dialog component)
- Userback widget integration

## Implementation Plan

### Core Components
1. **App Component** - Main container for our demonstration
2. **Dialog Component** - Implementation of the shadCN Dialog
3. **Toggle Button** - To open/close the Dialog
4. **Userback Integration** - Widget embedded in the application

### Implementation Steps
1. **Create Project Structure**
   - Set up a new Vite React TypeScript project
   - Configure necessary dependencies

2. **Install and Configure Dependencies**
   - shadCN UI and its requirements
   - Userback widget script integration

3. **Implement Core Functionality**
   - Create a single page with a dialog toggle button
   - Implement the shadCN Dialog component
   - Add Userback widget to the page
   - Ensure the issue is reproducible (Userback button becomes unclickable when Dialog is open)

## File Structure
```
/src
  /components
    Dialog.tsx         # shadCN Dialog implementation
    UserbackWidget.tsx # Userback integration
  App.tsx              # Main application component with dialog toggle
  main.tsx             # Entry point
```

## Expected Outcome
A minimal application that clearly demonstrates the issue where the Userback launch button becomes unclickable when the shadCN Dialog is open, regardless of z-index adjustments.