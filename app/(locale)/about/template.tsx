export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      我是 template
      <div>{children}</div>
    </div>
  );
}
