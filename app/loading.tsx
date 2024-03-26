export default function Loading() {
  return (
    <div className="absolute top-[50%] left-[50%]">
      <span className="loading loading-dots loading-xs" />
      <span className="loading loading-dots loading-sm" />
      <span className="loading loading-dots loading-md" />
      <span className="loading loading-dots loading-lg" />
    </div>
  );
}
