import patronsData from "./df_patrons.json";

interface GroupedPatrons {
  [key: string]: string[];
}

const PatronsComponent: React.FC = () => {
  const groupedPatrons = patronsData.reduce<GroupedPatrons>((acc, patron) => {
    const key = patron.number_of_appearances.toString();
    if (acc[key]) {
      acc[key].push(patron.name);
    } else {
      acc[key] = [patron.name];
    }
    return acc;
  }, {});

  const sortedGroups = Object.entries(groupedPatrons)
    .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
    .map(([appearance, names]) => {
      const sortedNames = names.sort();
      return [appearance, sortedNames];
    });

  return (
    <div className="pt-10 text-black dark:text-white">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        Ranking patronów
      </h1>
      <h2 className="text-lg font-extrabold mb-10 text-center">
        Najwięcej akredytowanych podmiotów znajduje się pod patronatem:
      </h2>
      <div
        className="max-w-4xl mx-auto  p-6 border-4 dark:border-gray-300 border-gray-800 rounded-lg shadow-md bg-gradient-to-b from-light-three via-light-two to-white
      dark:from-dark-three dark:via-dark-two dark:to-gray-700"
      >
        <div className="flex flex-row justify-center items-center text-lg font-semibold border-b-4 border-gray-800 dark:border-gray-300">
          <span className="w-2/6 text-center ">Liczba wystąpień</span>
          <span className="w-4/6 text-center">Patron</span>
        </div>
        {sortedGroups.map(([appearances, names], index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-center items-center py-2 
            ${
              appearances !== "1"
                ? "border-b-4 border-gray-800 dark:border-gray-300 "
                : ""
            }}`}
          >
            <div className="w-full md:w-2/6 text-lg font-semibold text-center">
              {appearances}
            </div>
            <div className="w-full md:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {(names as string[]).map((name: string, nameIndex: number) => (
                <div
                  key={nameIndex}
                  className="text-gray-800 dark:text-gray-200"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatronsComponent;
