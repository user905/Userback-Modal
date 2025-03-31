import { ReactNode } from 'react';
import { MyUserbackProvider } from './Userback';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Get the Userback token from environment variables
  const userbackToken = 'P-jE4Ymo4d5ydV96c3qGPVFBlBC';

  if (!userbackToken) {
    console.warn("Missing Userback token");
    return <div>
{children}
    </div>
  }
  
  const userbackOptions = {
    autohide: true,
    name: 'Demo User',
    email: 'demo@example.com',
    // You can add other options as needed
  };

  return (
    <MyUserbackProvider token={userbackToken} options={userbackOptions}>
      {children}
    </MyUserbackProvider>
  );
}