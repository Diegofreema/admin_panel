import Image from 'next/image';
import { Container, Title } from '@mantine/core';
import { fetchEvent } from '@/lib/actions/user';
import AddEvent from '@/components/AddEventForm';
import EventCard from '@/components/EventCard';
import dayjs from 'dayjs';

export default async function Event() {
  const events = await fetchEvent();

  const displayEvents =
    events?.length > 0 ? (
      events?.map((item, i) => (
        <EventCard
          key={i}
          venue={item?.venue}
          name={item?.name}
          date={dayjs(item?.date).format('MMMM D, YYYY')}
          time={dayjs(item?.date).format('hh:mm A')}
          imgUrl={item?.imgUrl}
          id={item?._id}
        />
      ))
    ) : (
      <Title ta={'center'} order={2}>
        No Events Yet
      </Title>
    );
  return (
    <Container className="mt-[100px] md:mt-[200px] pb-24" mt={20} h={'100%'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-8">
        <div>
          <div className="space-y-16">
            <Title ta={'center'}>Add An Event</Title>
            <AddEvent />
          </div>
        </div>

        <div className="space-y-16">
          <Title ta={'center'}>Events</Title>

          <div className="grid max-h-[500px] place-items-center overflow-y-auto grid-cols-1  gap-4">
            {displayEvents}
          </div>
        </div>
      </div>
    </Container>
  );
}
