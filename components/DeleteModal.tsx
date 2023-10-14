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
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
const DeleteModal = () => {
  const { isOpen, onClose, deleteEvent, id } = useDeleteModal();
  const router = useRouter();
  const { toast } = useToast();
  const handleDelete = async () => {
    await deleteEvent(id);

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
              className="!border-none !outline-none"
              variant={'purple'}
              onClick={onClose}
            >
              No
            </Button>
          </div>
          <DialogDescription>
            This action cannot be undone. Clicking yes will permanently delete
            this event and remove the data from your server.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
