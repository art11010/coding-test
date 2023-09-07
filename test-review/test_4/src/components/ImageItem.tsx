interface ImageItemProps {
  id: string;
  author: string;
  url: string;
  download: string;
}

export default function ImageItem({
  id,
  author,
  url,
  download,
}: ImageItemProps) {
  return (
    <div className="border rounded-md p-4 m-2">
      <img src={download} alt={author} className="w-full h-64 object-cover" />
      <p className="mt-2">Photo by {author}</p>
    </div>
  );
}
