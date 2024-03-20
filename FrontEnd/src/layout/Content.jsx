function Content({ children }) {
  return (
    <section className="container max-w-5xl">
      <div className="flex gap-4 items-center justify-center">
        <h4 className="text-purple-500 text-lg text-pretty ">Content : </h4>
        <p className="text-sm">100 days of React JS, by_darma</p>
      </div>
      {children}
    </section>
  );
}

export default Content;
