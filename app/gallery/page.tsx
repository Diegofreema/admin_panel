import Image from 'next/image';
import { Container, ScrollArea, Title } from '@mantine/core';
import { fetchGallery, fetchVideos } from '@/lib/actions/user';
import AddImage from '@/components/AddImage';
import AddVideo from '@/components/AddVideo';
export default async function Gallery() {
  const gallery = await fetchGallery();
  const videos = await fetchVideos();
  console.log(videos);

  const displayImages =
    gallery.length > 0 ? (
      gallery.map((item, i) => (
        <Image
          key={i}
          width={200}
          height={100}
          priority
          alt="image"
          src={item?.imgUrl}
          className=" object-cover rounded-md"
        />
      ))
    ) : (
      <Title ta={'center'} order={2}>
        No images to display
      </Title>
    );
  const displayVideos =
    videos.length > 0 ? (
      videos.map((item, i) => (
        <video controls key={i} src={item.videoUrl}></video>
      ))
    ) : (
      <Title>No Videos to display</Title>
    );
  return (
    <Container className="mt-[100px] md:mt-[200px] pb-24" mt={20} h={'100%'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-8">
        <div>
          <div className="space-y-16 mb-5">
            <Title ta={'center'}>Add An Image</Title>
            <AddImage />
          </div>
          <div className="space-y-16">
            <Title ta={'center'}>Add A Video</Title>
            <AddVideo />
          </div>
        </div>

        <div className="space-y-16">
          <Title ta={'center'}>Gallery</Title>
          <div className="grid max-h-[500px]  place-items-center overflow-y-auto grid-cols-1 sm:grid-cols-2 gap-4">
            {displayImages}
          </div>
          <div className="grid max-h-[500px] place-items-center overflow-y-auto grid-cols-1 sm:grid-cols-2 gap-4">
            {displayVideos}
          </div>
        </div>
      </div>
    </Container>
  );
}
