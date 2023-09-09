import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages } from '../api/image';
import ImageItem from '../components/ImageItem';

interface ImageItemProps {
  id: string;
  author: string;
  url: string;
  download_url: string;
}

export default function List() {
  const { data } = useInfiniteQuery(
    ['images'],
    async ({ pageParam = 1 }) => await getImages(pageParam, 10),
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
      {data?.map(({ id, author, url, download_url }: ImageItemProps) => (
        <ImageItem
          key={id}
          id={id}
          author={author}
          url={url}
          download={download_url}
        />
      ))}
    </div>
  );
}
