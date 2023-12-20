import { AlertDialog } from '@chakra-ui/react'


type DialogContainerProps = {
  isOpen: boolean;
  leastDestructiveRef: any;
  onClose: () => void;
  size: string;
  children: React.ReactNode;
}

export const DialogContainer = ({ isOpen, leastDestructiveRef, onClose, size, children }: DialogContainerProps) => (
  <AlertDialog
    isOpen={isOpen}
    isCentered
    leastDestructiveRef={leastDestructiveRef}
    onClose={onClose}
    size={size}
  >
    {children}
  </AlertDialog>
)