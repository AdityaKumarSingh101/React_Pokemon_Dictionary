export default function Image({ imgURL }: { imgURL: string }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white border-black border-2 rounded-t-lg">
          <img src={imgURL} width={275} height={275} />
        </div>
      </div>
    </>
  );
}
