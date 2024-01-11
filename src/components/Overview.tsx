// Overview.tsx
const Overview = () => {
  return (
    <div className="flex flex-wrap p-20 min-h-screen custom-gradient dark:custom-gradient-dark text-black dark:text-white">
      <div className="w-full md:w-1/2 p-6 mb-4 ">
        <div className="rounded-lg min-h-[300px] bg-white dark:bg-neutral-700 shadow-md p-6 shadow-black ">
          <h1 className="text-xl font-bold mb-6">
            Co to znaczy, że podmiot posiada akredytację Ministra Zdrowia?
          </h1>
          <p>
            Posiadanie akredytacji ministra zdrowia oznacza, że dany podmiot
            medyczny, na przykład szpital lub przychodnia, przeszedł przez
            proces oceny i został uznany za spełniający określone standardy
            jakościowe.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 mb-4">
        <div className="rounded-lg min-h-[300px] bg-white dark:bg-neutral-700 shadow-lg p-6 shadow-black ">
          <h1 className="text-xl font-bold mb-6">
            Na jak długo przyznawane są akredytacje?
          </h1>
          <p>
            Akredytacja jest przyznawana na cztery lata (wcześniej trzy), po
            których podmiot musi ponownie przejść proces oceny, aby przedłużyć
            akredytację.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 mb-4">
        <div className="rounded-lg min-h-[300px] bg-white dark:bg-neutral-700 shadow-lg p-6 shadow-black ">
          <h1 className="text-xl font-bold mb-6">
            Czy podmioty wykonujące działalność leczniczą muszą uzykać
            akredytację?
          </h1>
          <p>
            Nie, podmioty wykonujące działalność leczniczą nie są zobowiązane do
            posiadania akredytacji. Akredytacja jest procesem dobrowolnym, który
            instytucje medyczne mogą wybrać, aby zademonstrować zgodność z
            ustanowionymi normami dotyczącymi jakości i bezpieczeństwa świadczeń
            zdrowotnych.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 mb-4">
        <div className="rounded-lg  min-h-[300px] bg-white dark:bg-neutral-700 shadow-lg p-6 shadow-black ">
          <h1 className="text-xl font-bold mb-6">
            Czego dotyczą standardy akredytacyjne?
          </h1>
          <p>
            Standardy akredytacyjne różnią się w zależności od typu podmiotu.
            DLa szpitali brane są pod uwagę m. in. ciągłość opieki, kontrola
            zakażeń, diagnostyka obrazowa czy odżywanie. Podczas gdy dla
            obiektów podstawowa opieki zdrowotnej (POZ) brane są pod uwagę m.
            in. dostęp do wizyt domowych, dokumentacja medyczna czy
            infrastruktura. Wsyzstkie standardy można znaleźć na stronie
            internetowej{" "}
            {
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://www.cmj.org.pl/akredytacja/standardy.php"
              >
                Centrum Monitorowania Jakości w Ochronie Zdrowia
              </a>
            }
            .
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 mb-4">
        <div className="rounded-lg  min-h-[300px] bg-white dark:bg-neutral-700 shadow-lg p-6 shadow-black ">
          <h1 className="text-xl font-bold mb-6">
            Dlaczego akredytacja jest ważna dla pacjentów?
          </h1>
          <p>
            Akredytacja jest ważna dla pacjentów, ponieważ zapewnia ich, że
            wybrana placówka zdrowotna spełnia standardy opieki medycznej. Daje
            to pacjentom gwarancję, że instytucja przechodzi regularną ocenę i
            jest zobowiązana do ciągłego doskonalenia swoich procedur.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 mb-4">
        <div className="rounded-lg  min-h-[300px] bg-white dark:bg-neutral-700 shadow-lg p-6 shadow-black ">
          <h1 className="text-xl font-bold mb-6">
            Dlaczego akredytacja jest ważna dla podmiotów wykonujących
            działalność leczniczą?
          </h1>
          <p>
            Dla podmiotów wykonujących działalność leczniczą, akredytacja jest
            istotna, ponieważ stanowi dla nich wyróżnienie i potwierdza
            utrzymywanie przez nich standardów medycznych. Może również wpływać
            na reputację placówki na rynku, przyciągając pacjentów oraz
            partnerów biznesowych.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
