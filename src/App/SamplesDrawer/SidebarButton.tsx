import { Button } from '@mui/material';

import { resetDocument } from 'documents/editor/EditorContext';
import getConfiguration from 'getConfiguration/index';

export default function SidebarButton({ href, children }: { href: string; children: React.ReactNode | string }) {
  const handleClick = () => {
    resetDocument(getConfiguration(href));
  };
  return (
    <Button size='small' href={href} onClick={handleClick}>
      {children}
    </Button>
  );
}
