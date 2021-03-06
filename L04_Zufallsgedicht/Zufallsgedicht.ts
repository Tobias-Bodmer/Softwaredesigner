namespace Zufallsgedicht {
    let subjects: string[] = ["San", "Ashitaka", "Moro", "Eboshi", "Okoto", "Nago"];
    let verbs: string[] = [" liebt ", " hasst ", " zerstört ", " tötet ", " bekämpft ", " kennt "]; // Was machen die Leerzeichen da? Array-Elemente sollten möglichst clean sein.
    let objects: string[] = ["den Waldgott", "die Natur", "die Eisenhütte", "den Wald", "Asano", "den Kaiser"];

    let newPoem: string[] = [];
    let arrLength: number = subjects.length;
    let i: number = 0;

    while (i < arrLength) {
        let newVerse: string = getVerse();
        newPoem.push(newVerse);
        i++;
    }

    i = 0;

    while (i < newPoem.length) {
        console.log(newPoem[i]);
        i++;
    }

    function getVerse(): string {
        let newVerse: string = "";
        let randomSubjectInd: number = Math.floor(Math.random() * subjects.length); // Statt "Ind" als Suffix besser "i" als Präfix verwenden
        let randomeVerbInd: number = Math.floor(Math.random() * subjects.length); // Statt "Ind" als Suffix besser "i" als Präfix verwenden
        let randomeObjectInd: number = Math.floor(Math.random() * subjects.length); // Statt "Ind" als Suffix besser "i" als Präfix verwenden

        newVerse += subjects.splice(randomSubjectInd, 1);
        newVerse += verbs.splice(randomeVerbInd, 1);
        newVerse += objects.splice(randomeObjectInd, 1);

        return newVerse;
    }
}
