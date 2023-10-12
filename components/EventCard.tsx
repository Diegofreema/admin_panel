'use client';
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IconTrash } from '@tabler/icons-react';
import Image from 'next/image';

interface EventCardProps {
  name: string;
  date: string;
  venue: string;
  imgUrl: string;
  time: string;
}
const EventCard = ({ date, imgUrl, name, venue, time }: EventCardProps) => {
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
      <CardFooter className="flex justify-between">
        <div>
          <p className="uppercase text-bold whitespace-nowrap">Theme: {name}</p>
          <p className="capitalize text-semibold whitespace-nowrap">
            Venue: {venue}
          </p>
        </div>
        <IconTrash color="red" />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
