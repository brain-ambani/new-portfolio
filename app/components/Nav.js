function Nav() {
  return (
    <nav className="flex justify-between w-3/4 mx-auto items-center py-6">
      <div>
        <h1 className="text-2xl">Brain</h1>
      </div>
      <div className="text-xl flex gap-4">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;
