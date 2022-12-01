const App = () => {
  const navigation = [
    { title: "Solidity", path: "/solidity" },
    { title: "Hardhat", path: "/hardhat" },
    { title: "NextJS", path: "/nextjs" },
    { title: "Javascript", path: "/javascript" },
    { title: "Styling", path: "/styling" },
    { title: "GraphQL", path: "/graphql" },
    { title: "Security", path: "/security" },
    { title: "TheGraph", path: "/thegraph" },
    { title: "About", path: "/about" },
  ];

  return (
    <footer className="text-gray-500 py-12 bg-white px-4 mx-auto w-full dark:bg-slate-800">
      <ul className="items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {navigation.map((item, idx) => (
          <li key={idx} className=" hover:text-gray-800 dark:text-gray-200">
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default App;
