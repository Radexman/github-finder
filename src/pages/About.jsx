const About = () => {
  return (
    <div>
      <h1 className='mb-4 text-center text-6xl sm:text-left'>Github Finder</h1>
      <p className='mb-4 text-justify text-2xl font-light sm:text-left'>
        This app allows users to browse through Github members, search them and
        check their details. This project utilizes Github API to get all the
        requiered by user querries.
      </p>
      <div className='flex items-start justify-between'>
        <div>
          <h2 className='text-xl'>Tech Stack</h2>
          <ul className='ml-5 list-disc'>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>DaisyUI</li>
          </ul>
        </div>
        <div className='text-right'>
          <h2 className='text-xl '>Version</h2>
          <p className='text-slate-50'>0.0.3</p>
        </div>
      </div>
    </div>
  );
};

export default About;
