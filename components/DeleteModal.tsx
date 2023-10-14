'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { useDeleteModal } from './modalControl';
import { usePathname, useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
const DeleteModal = () => {
  const { isOpen, onClose, deleteEvent, id, deleteTeam, teamId } =
    useDeleteModal();
  const router = useRouter();
  const pathname = usePathname();

  const handleDelete = async () => {
    if (pathname === '/event') {
      await deleteEvent(id);
    } else {
      await deleteTeam(teamId);
    }

    onClose();
    router.refresh();
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <div className="  !space-x-4">
            <Button
              size={'lg'}
              className="!border-none !outline-none"
              variant={'destructive'}
              onClick={handleDelete}
            >
              Yes
            </Button>
            <Button
              size={'lg'}
              className="!border-none !outline-none "
              variant={'purple'}
              onClick={onClose}
            >
              No
            </Button>
          </div>
          <DialogDescription>
            This action cannot be undone. Clicking yes will permanently delete
            this from your server.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
