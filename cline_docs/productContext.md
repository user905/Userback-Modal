# Product Context for Userback-Modal Demo

## Purpose
This demonstration app serves as a minimal reproducible example to isolate and document a specific interaction issue between two popular web interface components:

1. The shadCN Dialog component (a modal dialog implementation)
2. The Userback widget (a user feedback collection tool)

## Problem Statement
When the shadCN Dialog is open, the Userback launch button becomes unclickable, despite various attempted solutions including z-index adjustments and focus trapping techniques. This creates a problematic user experience where users cannot submit feedback while viewing modal content.

## Use Case
This demonstration app will be used to:
1. Clearly demonstrate the issue to developers
2. Serve as a testing ground for potential solutions
3. Potentially share with the maintainers of either library to seek assistance

## Target Users
- Developers working with both shadCN UI and Userback
- Library maintainers who may help resolve the compatibility issue
- Technical support teams investigating similar integration problems

## Success Criteria
The application will be considered successful if it:
1. Clearly demonstrates the userback launch button functioning when the dialog is closed
2. Clearly demonstrates the userback launch button becoming unclickable when the dialog is open
3. Does so with minimal extraneous code or complexity