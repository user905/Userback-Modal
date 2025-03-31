import { useState } from 'react';
import './App.css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="container">
      <h1>ShadCN Dialog + Userback Demo</h1>
      <p>
        This demo demonstrates an issue where the Userback launch button becomes unclickable
        when the ShadCN Dialog is open.
      </p>
      
      <div className="card">
        <h2>Test Instructions:</h2>
        <ol>
          <li>First, notice the Userback button should be visible in the corner of the screen</li>
          <li>Try clicking the Userback button to verify it works when the dialog is closed</li>
          <li>Close the Userback widget if you opened it</li>
          <li>Click the "Open Dialog" button below</li>
          <li>Now try to click the Userback button - it should be unclickable</li>
        </ol>
      </div>
      
      <div className="dialog-container">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="open-dialog-btn">Open Dialog</button>
          </DialogTrigger>
          <DialogContent className="dialog-content">
            <DialogHeader>
              <DialogTitle>Demo Dialog</DialogTitle>
              <DialogDescription>
                This is a ShadCN Dialog component. While this dialog is open,
                the Userback launch button should be unclickable, despite it having
                a higher z-index in the DOM.
              </DialogDescription>
            </DialogHeader>
            <div className="dialog-body">
              <p>
                Try clicking the Userback button while this dialog is open.
                You'll notice it's unclickable until you close this dialog.
              </p>
              <button onClick={() => setIsDialogOpen(false)}>Close Dialog</button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
