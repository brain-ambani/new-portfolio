import Card from "../components/Card";

function Projects() {
  return (
    <div className="w-3/4 mx-auto mt-12">
      <h2 className="text-center text-3xl font-semibold">Project Showcase</h2>
      <div className="mt-8 grid place-items-center grid-col-1 gap-4  md:grid-cols-2">
        <Card title="title 1" description="This is the description" />
        <Card title="title 1" description="This is the description" />
        <Card title="title 1" description="This is the description" />
        <Card title="title 1" description="This is the description" />
      </div>
    </div>
  );
}

export default Projects;
