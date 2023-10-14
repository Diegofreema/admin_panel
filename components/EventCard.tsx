'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IconTrash } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
import { ColorRing } from 'react-loader-spinner';
import { useDeleteModal } from './modalControl';

interface EventCardProps {
  name: string;
  date: string;
  venue: string;
  imgUrl: string;
  time: string;
  id: string;
}
const EventCard = ({ date, imgUrl, name, venue, time, id }: EventCardProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { onOpen, getId } = useDeleteModal();
  const handleDelete = async (id: string) => {
    onOpen();
    getId(id);
  };
  if (!isMounted) {
    return null;
  }

  return (
    <Card className=" mb-4 w-full">
      <CardContent className="space-y-2   pt-4">
        <div className="rounded-md relative w-[100%] h-[200px] overflow-hidden">
          <Image
            fill
            priority
            alt="image"
            src={imgUrl}
            className=" object-cover"
          />
        </div>
        <div>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-col sm:!flex-row space-y-4 sm:!space-y-0">
        <div>
          <p className="uppercase    text-sm font-bold">Theme: {name}</p>
          <p className="capitalize  text-sm font-semibold">Venue: {venue}</p>
        </div>
        {!loading ? (
          <IconTrash size={30} color="red" onClick={() => handleDelete(id)} />
        ) : (
          <ColorRing
            visible={true}
            height="30"
            width="30"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default EventCard;
