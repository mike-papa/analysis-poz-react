import EntityTypeChart from "./EntityTypeChart";

const EntityTypeComponent: React.FC = () => {
  return (
    <div className="pt-10 text-black dark:text-white">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        Typy Akredytowanych Podmiotów
      </h1>
      <div className=" p-4 flex flex-col custom-md-1200px:flex-row justify-center items-center">
        <div className="flex w-full justify-center items-center h-96 custom-md-1200px:w-1/3 custom-md-1200px:min-w-[350px]">
          <EntityTypeChart />
        </div>

        <div className="max-w-2xl w-full ">
          <div className="text-lg space-y-6">
            <p className="mb-6">
              <span className="font-bold">Szpital</span> to zaawansowana
              placówka medyczna, w której pacjenci otrzymują kompleksową opiekę
              zdrowotną, w tym hospitalizację, zabiegi chirurgiczne,
              zaawansowane diagnozowanie oraz rehabilitację, zwłaszcza w
              przypadku poważnych chorób i stanów zdrowotnych.
            </p>
            <p className="mb-6">
              <span className="font-bold">POZ</span> to placówka podstawowej
              opieki zdrowotnej, oferująca usługi medyczne na poziomie
              pierwszego kontaktu, takie jak wizyty u lekarza rodzinnego i
              pielęgniarki, koncentrując się na opiece ambulatoryjnej.
            </p>
            <p className="mb-6">
              <span className="font-bold">JDP</span> to jednostka diagnostyki
              patomorfologicznej, placówka medyczna specjalizująca się w
              badaniach mikroskopowych tkanek i komórek, umożliwiająca
              diagnozowanie chorób i schorzeń na podstawie mikroskopowych
              obrazów. Patomorfolodzy analizują próbki tkankowe i komórkowe, co
              wspiera lekarzy w ustalaniu diagnoz i planowaniu leczenia
              pacjentów.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityTypeComponent;
